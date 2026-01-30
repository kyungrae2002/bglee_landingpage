import React from 'react';

export default function ProblemSection() {
  return (
    <section className="section-padding bg-[#f7f7f7]">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            이런 고민,<br className="hidden sm:block" /> 부모님이라면 누구나 합니다
          </h2>

          {/* Problem Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {/* Problem 1 */}
            <div className="card p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                "주 2회 센터, 나머지는?"
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed">
                골든타임은 6세 전까지인데 <br />일주일에 고작 2시간으로 충분할까요?
              </p>
            </div>

            {/* Problem 2 */}
            <div className="card p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                "교구는 쌓이는데..."
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed">
                책도 사고, 교구도 샀지만<br />구체적으로 뭘 어떻게 해야 할지 막막해요.
              </p>
            </div>
            {/* Problem 3 */}
            <div className="card p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                "바빠서 매일은 무리예요"
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed">
                매번 새로운 놀이를 준비하고<br />아이 반응 보며 즉흥적으로 가르치기엔 너무 힘들어요.
              </p>
            </div>
          </div>

          {/* Problem Consequence */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10 mb-12 sm:mb-16">
            <p className="text-lg sm:text-xl text-neutral-900 font-semibold text-center">
              그래서 치료실에서 만든 흐름이
              <br className="hidden sm:block" />
              <span className="text-primary-600"> 집에서 끊깁니다</span>
            </p>
          </div>

          {/* Expert Quote */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-neutral-900 italic font-medium">
                "부모가 안 하는 게 아니라, 구체적인 방법이 없어서 못 이어가는 경우가 대부분입니다."
              </p>
              <p className="text-sm sm:text-base text-neutral-600 font-semibold">
                — 언어재활사 인터뷰
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
