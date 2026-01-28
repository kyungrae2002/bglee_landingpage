import React from 'react';

export default function SolutionOverviewSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary-200">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            Bglee는 '<span className="text-secondary-600">놀이의 시작점</span>'을 만들어줍니다
          </h2>

          {/* Solution Points */}
          <div className="space-y-6 sm:space-y-8">
            {/* Point 1 */}
            <div className="flex gap-4 sm:gap-6 animate-slide-up">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary-100 text-secondary-700 font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-h4 text-neutral-900 mb-2">
                  부모가 설명할 필요가 없어요
                </h3>
                <p className="text-body text-neutral-700">
                  Bglee에서는 부모가 먼저 설명하지 않아도 됩니다.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary-100 text-secondary-700 font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-h4 text-neutral-900 mb-2">
                  앱이 먼저 말을 건네요
                </h3>
                <p className="text-body text-neutral-700">
                  "오늘은 전화기를 찾아볼까?" — 자연스러운 시작의 순간
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-secondary-100 text-secondary-700 font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-h4 text-neutral-900 mb-2">
                  행동이 먼저, 말은 그 다음
                </h3>
                <p className="text-body text-neutral-700">
                  아이의 행동이 먼저 나오고, 그 다음에 자연스럽게 말이 붙습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Emphasis Box */}
          <div className="mt-12 sm:mt-16 bg-white border-2 border-secondary-300 rounded-2xl p-8 sm:p-10">
            <p className="text-center text-base sm:text-lg text-neutral-900 font-semibold">
              <span className="text-secondary-600">부모는 안내자,</span><br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              아이는 주인공입니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
