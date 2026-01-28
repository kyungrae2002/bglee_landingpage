import React from 'react';

export default function BrandPhilosophySection() {
  const principles = [
    {
      emoji: '🏃',
      title: '아이가 먼저 움직이도록',
      description: '명령과 지시가 아닌, 아이의 자발성을 존중합니다',
    },
    {
      emoji: '😌',
      title: '부모에게 부담이 되지 않도록',
      description: '몇 분의 시간으로도 의미 있는 상호작용이 가능합니다',
    },
    {
      emoji: '🎨',
      title: '놀이가 훈련처럼 느껴지지 않도록',
      description: '학습이 아닌 진정한 놀이의 기쁨을 경험하게 합니다',
    },
    {
      emoji: '⚖️',
      title: '기록은 남기되, 몰입은 방해하지 않도록',
      description: '성장을 추적하되, 그것이 놀이의 방해가 되지 않도록 합니다',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-accent-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            Bglee가 지키는 기준
          </h2>

          {/* Principles Grid */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-6 mb-12 sm:mb-16">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="card p-6 sm:p-8 space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl">{principle.emoji}</div>
                <h3 className="text-h4 text-neutral-900">{principle.title}</h3>
                <p className="text-body text-neutral-700">{principle.description}</p>
              </div>
            ))}
          </div>

          {/* Core Philosophy */}
          <div className="bg-white border-2 border-primary-300 rounded-2xl p-8 sm:p-10 text-center space-y-6">
            <p className="text-3xl sm:text-4xl font-bold text-neutral-900">
              언어는 가르치는 것이 아니라,
              <br className="sm:hidden" />
              <span className="text-primary-600"> 경험 속에서 자랍니다</span>
            </p>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              이 한 문장이 Bglee의 모든 것을 담고 있습니다.
              아이가 의미 있는 경험을 하는 동안,
              자연스럽게 언어가 붙는 것입니다.
            </p>
          </div>

          {/* Implementation Detail */}
          <div className="mt-12 sm:mt-16 bg-neutral-50 rounded-2xl p-8 sm:p-10">
            <div className="space-y-4">
              <h3 className="text-h4 text-neutral-900 text-center mb-6">
                이 철학은 모든 기능 설계에 녹아있습니다
              </h3>
              <ul className="space-y-3 max-w-2xl mx-auto">
                <li className="flex gap-3 items-start">
                  <span className="text-primary-500 font-bold text-lg mt-0.5">•</span>
                  <span className="text-neutral-700">
                    앱의 지시가 짧고 명확해서, 아이가 빠르게 행동할 수 있도록
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary-500 font-bold text-lg mt-0.5">•</span>
                  <span className="text-neutral-700">
                    성공과 실패가 아닌, 시도 자체가 칭찬받도록
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary-500 font-bold text-lg mt-0.5">•</span>
                  <span className="text-neutral-700">
                    부모의 개입이 최소화되도록, 아이 중심으로 설계
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary-500 font-bold text-lg mt-0.5">•</span>
                  <span className="text-neutral-700">
                    기록은 백그라운드에서 일어나도록, 놀이는 절대 방해받지 않도록
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
