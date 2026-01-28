import React from 'react';

export default function ContinuityWithTherapySection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            Bglee는 치료를 대신하지 않습니다
          </h2>

          {/* Main Message */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10 mb-12 sm:mb-16">
            <div className="space-y-6">
              <h3 className="text-h3 text-neutral-900">
                대신에, 이것을 합니다
              </h3>

              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-3xl">1</div>
                <div>
                  <h4 className="text-h4 text-neutral-900 mb-2">
                    센터 치료를 보완하는 가정용 도구
                  </h4>
                  <p className="text-body text-neutral-700">
                    전문가의 치료는 언어 발달의 기초를 다루고, Bglee는 그 기초 위에서 일상 속 반복을 만듭니다.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-3xl">2</div>
                <div>
                  <h4 className="text-h4 text-neutral-900 mb-2">
                    치료와 치료 사이의 공백 채우기
                  </h4>
                  <p className="text-body text-neutral-700">
                    주 1~2회 치료 사이의 나머지 요일들. 그곳에 짧고 반복적인 놀이로 언어 자극을 이어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Message */}
          <div className="bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10 text-center space-y-4">
            <h3 className="text-h3 text-neutral-900">
              <span className="text-primary-600">치료는 전문가가,</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              놀이는 일상에서
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>자연스럽게
            </h3>
            <p className="text-lg text-neutral-700">
              이 둘이 함께할 때, 아이의 언어는 더욱 자연스럽게 자랍니다.
            </p>
          </div>

          {/* Recommendation */}
          <div className="mt-12 sm:mt-16 bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10">
            <p className="text-center text-base sm:text-lg text-neutral-800">
              현재 언어재활을 받고 있는 아이들을 위해 특별히 설계되었습니다.
              <br className="hidden sm:block" />
              치료사와 부모의 협력이 가장 효과적입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
