import React from 'react';

export default function ToysNFCSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-4 text-center">
            새로운 교구는 필요하지 않습니다
          </h2>
          <p className="text-center text-lg text-neutral-600 mb-12 sm:mb-16">
            이미 집에 있는 장난감으로 시작하세요
          </p>

          {/* Feature List */}
          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {/* Feature 1 */}
            <div className="flex gap-4 sm:gap-6 card p-6 sm:p-8">
              <div className="flex-shrink-0 text-4xl">1</div>
              <div className="flex-1">
                <h3 className="text-h4 text-neutral-900 mb-2">
                  집에 있는 장난감 그대로 사용
                </h3>
                <p className="text-body text-neutral-700">
                  아이가 이미 좋아하고 자주 가지고 노는 물건들. 그것으로 충분합니다.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 sm:gap-6 card p-6 sm:p-8">
              <div className="flex-shrink-0 text-4xl">2</div>
              <div className="flex-1">
                <h3 className="text-h4 text-neutral-900 mb-2">
                  NFC 스티커 부착
                </h3>
                <p className="text-body text-neutral-700">
                  아이가 이미 좋아하는 물건에 NFC 스티커만 부착하면 시작됩니다.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 sm:gap-6 card p-6 sm:p-8">
              <div className="flex-shrink-0 text-4xl">3</div>
              <div className="flex-1">
                <h3 className="text-h4 text-neutral-900 mb-2">
                  일반 장난감이 곧 언어 놀이 도구가 됩니다
                </h3>
                <p className="text-body text-neutral-700">
                  별도의 학습 도구를 사지 않아도, 아이가 가진 것으로 최고의 언어 자극을 만들 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10">
            <p className="text-center text-2xl sm:text-3xl font-bold text-neutral-900">
              장난감을 바꾸지 않고,<br className="sm:hidden" />
              <span className="text-secondary-600"> 놀이의 흐름만 설계합니다</span>
            </p>
          </div>

          {/* How It Works */}
          <div className="mt-12 sm:mt-16 space-y-6">
            <h3 className="text-h4 text-neutral-900 text-center mb-8">과정은 이렇게 간단합니다</h3>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary-500 mb-2">
                  1
                </div>
                <p className="text-sm font-medium text-neutral-700">
                  집의 장난감 선택
                </p>
              </div>
              <div className="hidden sm:block w-12 h-0.5 bg-neutral-300" />
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-secondary-500 mb-2">
                  2
                </div>
                <p className="text-sm font-medium text-neutral-700">
                  NFC 스티커 부착
                </p>
              </div>
              <div className="hidden sm:block w-12 h-0.5 bg-neutral-300" />
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent-500 mb-2">
                  3
                </div>
                <p className="text-sm font-medium text-neutral-700">
                  앱에서 등록
                </p>
              </div>
              <div className="hidden sm:block w-12 h-0.5 bg-neutral-300" />
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                  ✓
                </div>
                <p className="text-sm font-medium text-neutral-700">
                  놀이 시작!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
