import React from 'react';

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            치료는 이어지는데,<br className="hidden sm:block" /> 집에서는 멈춥니다
          </h2>

          {/* Problem Grid */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
            {/* Problem 1 */}
            <div className="card p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                1
              </div>
              <h3 className="text-h4 text-neutral-900">
                막막한 부모의 고민
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed">
                언어치료는 주 1~2회, 나머지 요일은 집에서 보내지만 어떻게 말놀이를 해야 할지 막막합니다.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="card p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                2
              </div>
              <h3 className="text-h4 text-neutral-900">
                도구와 방법의 불일치
              </h3>
              <p className="text-body text-neutral-700 leading-relaxed">
                교구와 장난감은 많은데 놀이가 언어 자극으로 이어지지 않습니다.
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
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50
           border-l-4 border-primary-100 rounded-lg p-8 sm:p-10">
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
