import React, { useState, useEffect } from 'react';
import { getAnalyticsSummary, getRecentSignups, getBetaSignupCount } from '../services/database';

export default function ExionDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [recentSignups, setRecentSignups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    loadDashboardData();
    // Refresh data every 5 seconds
    const interval = setInterval(loadDashboardData, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const count = await getBetaSignupCount();
      const recentData = await getRecentSignups(20);

      setTotalCount(count);
      setRecentSignups(recentData);
      setAnalytics({
        totalSignups: count,
        lastUpdated: new Date().toLocaleString('ko-KR'),
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['이메일', '이름', '신청 시간'],
      ...recentSignups.map(signup => [
        signup.email,
        signup.name || '-',
        new Date(signup.createdAt).toLocaleString('ko-KR')
      ])
    ];

    const csvContent = csv.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `bglee_signups_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Bglee Admin Dashboard</h1>
          <p className="text-neutral-400">비밀 관리자 페이지</p>
        </div>

        {/* Stats */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Signups */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg p-6">
              <p className="text-sm text-primary-200 mb-2">총 베타 신청자</p>
              <p className="text-4xl font-bold text-white mb-2">{totalCount.toLocaleString()}</p>
              <p className="text-xs text-primary-300">마지막 업데이트: {analytics.lastUpdated}</p>
            </div>

            {/* Status */}
            <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-lg p-6">
              <p className="text-sm text-secondary-200 mb-2">상태</p>
              <p className="text-2xl font-bold text-white mb-2">
                {loading ? '로딩 중...' : '정상'}
              </p>
              <p className="text-xs text-secondary-300">실시간 데이터 동기화</p>
            </div>

            {/* Database */}
            <div className="bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg p-6">
              <p className="text-sm text-accent-200 mb-2">저장된 데이터</p>
              <p className="text-2xl font-bold text-white mb-2">Firestore</p>
              <p className="text-xs text-accent-300">Google Cloud</p>
            </div>
          </div>
        )}

        {/* Recent Signups Section */}
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-xl">
          {/* Header */}
          <div className="bg-neutral-900 p-6 border-b border-neutral-700 flex justify-between items-center">
            <h2 className="text-2xl font-bold">최근 신청자 목록</h2>
            <button
              onClick={exportToCSV}
              disabled={loading || recentSignups.length === 0}
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-600 rounded-lg text-sm font-medium transition-colors"
            >
              CSV 다운로드
            </button>
          </div>

          {/* Table */}
          {loading ? (
            <div className="p-8 text-center text-neutral-400">
              데이터 로딩 중...
            </div>
          ) : recentSignups.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">
                      이메일
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">
                      이름
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-300">
                      신청 시간
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentSignups.map((signup, index) => (
                    <tr
                      key={signup.id || index}
                      className="border-t border-neutral-700 hover:bg-neutral-750 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-white font-mono break-all">
                        {signup.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-300">
                        {signup.name || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-400">
                        {new Date(signup.createdAt).toLocaleString('ko-KR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-8 text-center text-neutral-400">
              아직 신청자가 없습니다.
            </div>
          )}

          {/* Footer */}
          <div className="bg-neutral-900 p-4 border-t border-neutral-700 text-sm text-neutral-400">
            총 {recentSignups.length}건의 데이터 표시 (최근 20건)
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-yellow-900/30 border border-yellow-700 rounded-lg text-sm text-yellow-200">
          ⚠️ 이 페이지는 비밀 관리자 페이지입니다. URL 변경 시 접속할 수 없습니다.
        </div>
      </div>
    </div>
  );
}
