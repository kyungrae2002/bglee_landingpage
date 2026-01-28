import React from 'react';

export default function ForParentsSection() {
  const features = [
    {
      emoji:'1',
      title: '오늘 몇 번 놀았는지',
      description: '매일의 활동량이 한눈에 보입니다',
    },
    {
      emoji:'2',
      title: '어떤 장난감을 사용했는지',
      description: '아이가 관심 있는 것들을 파악할 수 있습니다',
    },
    {
      emoji:'3',
      title: '새로 만든 문장 수',
      description: '아이의 언어 표현 범위가 넓어지는 과정이 보입니다',
    },
    {
      emoji:'4',
      title: '발화 시도와 변화',
      description: '말하려는 노력이 어떻게 성장하는지 기록됩니다',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-secondary-200">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-4 text-center">
            부모 앱에서는 이런 걸 볼 수 있어요
          </h2>
          <p className="text-center text-lg text-neutral-600 mb-12 sm:mb-16">
            기록하고, 성장을 확인하고, 함께 기뻐하세요
          </p>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6 sm:p-8 space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl">{feature.emoji}</div>
                <h3 className="text-h4 text-neutral-900">{feature.title}</h3>
                <p className="text-body text-neutral-700">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Core Value */}
          <div className="bg-white border-2 border-secondary-300 rounded-2xl p-8 sm:p-10">
            <h3 className="text-h3 text-neutral-900 mb-4 text-center">
              핵심은 이것입니다
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-2xl">✗</div>
                <p className="text-lg text-neutral-700">
                  "잘 놀았나?"라는 막연한 불안감
                </p>
              </div>
              <div className="border-t-2 border-neutral-200 my-4" />
              <div className="flex gap-4">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <p className="text-lg text-neutral-700 font-medium">
                  "어디까지 왔는지"라는 명확한 진행 현황
                </p>
              </div>
            </div>
          </div>

          {/* Additional Context */}
          <div className="mt-12 sm:mt-16 bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 sm:p-10">
            <p className="text-center text-neutral-700 text-base sm:text-lg">
              부모님은 아이의 성장을 숫자가 아닌 의미로 이해하게 됩니다.
              <br className="hidden sm:block" />
              그것이 가장 강력한 동기부여가 됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
