import React from 'react';

export default function SolutionOverviewSection() {
  return (
    <section className="section-padding ">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            왜 Bglee여야 할까요?
          </h2>

          {/* Solution Points */}
          <div className="space-y-8 sm:space-y-12">
            {/* Point 1 - Image Left */}
            <div className="flex gap-6 sm:gap-8 items-start animate-slide-up bg-white rounded-xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 sm:w-48 h-32 sm:h-48 rounded-lg flex-shrink-0 overflow-hidden shadow-md">
                <img src="/image1.svg" alt="부모가 설명할 필요가 없어요" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    부모가 설명할 필요가 없어요
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-700 mb-4 leading-relaxed">
                  집에 이미 있는 장난감이면 충분합니다. 아이가 가장 좋아하는 익숙한 장난감이 최고의 교구가 됩니다.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <span className="text-primary-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">버스, 전화기, 인형, 컵... 뭐든 OK</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">NFC 스티커 10개 무료 제공</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-primary-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">추가 비용 부담 제로</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 2 - Image Right */}
            <div className="flex gap-6 sm:gap-8 items-start animate-slide-up flex-row-reverse bg-white rounded-xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: '0.1s' }}>
              <div className="w-32 sm:w-48 h-32 sm:h-48 rounded-lg flex-shrink-0 overflow-hidden shadow-md">
                <img src="/image2.svg" alt="매일 놀이 준비 고민 끝" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    매일 놀이 준비 고민 끝
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-700 mb-4 leading-relaxed">
                  앱이 매일 다른 미션을 자동 제안합니다. 시나리오까지 제공되니 부모님은 그냥 함께 웃으며 놀아주세요.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <span className="text-secondary-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">매일 새로운 미션 자동 업데이트</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-secondary-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">맞춤형 놀이 가이드라인 제공</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-secondary-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">준비 시간 단 1분 미만</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Point 3 - Image Left */}
            <div className="flex gap-6 sm:gap-8 items-start animate-slide-up bg-white rounded-xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow-md transition-shadow" style={{ animationDelay: '0.2s' }}>
              <div className="w-32 sm:w-48 h-32 sm:h-48 rounded-lg flex-shrink-0 overflow-hidden shadow-md">
                <img src="/image3.svg" alt="치료사 선생님과 함께" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                    치료사 선생님과 함께
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-700 mb-4 leading-relaxed">
                  집과 센터가 하나로 연결됩니다. 선생님이 내주는 과제를 집에서 수행하고 피드백을 실시간으로 확인하세요.
                </p>
                <div className="space-y-2">
                  <div className="flex gap-3 items-start">
                    <span className="text-accent-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">치료사 원격 과제 전송 및 모니터링</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-accent-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">상세한 놀이 데이터 리포트</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-accent-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sm text-neutral-700">전문적 상담의 기초 자료 활용</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
