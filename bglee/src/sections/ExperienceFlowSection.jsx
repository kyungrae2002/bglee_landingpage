import React from 'react';

export default function ExperienceFlowSection() {
  const steps = [
    {
      number: 1,
      emoji: '🔍',
      title: '찾기',
      description: '앱이 특정 장난감을 제시하면 아이가 방 안에서 직접 찾습니다',
      color: 'primary',
    },
    {
      number: 2,
      emoji: '📱',
      title: '태그',
      description: '찾은 장난감을 태블릿에 톡 → 즉각적인 칭찬과 피드백',
      color: 'secondary',
    },
    {
      number: 3,
      emoji: '💬',
      title: '문장',
      description: '"전화를 ____" → 동사를 고르며 문장을 완성',
      color: 'accent',
    },
    {
      number: 4,
      emoji: '🎭',
      title: '상황극',
      description: '"인형한테 전화해볼까?" → 장난감으로 짧은 역할놀이',
      color: 'secondary',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Section Title */}
        <h2 className="text-h2 text-neutral-900 mb-4 text-center">
          Bglee의 언어 놀이는 이렇게 진행됩니다
        </h2>
        <p className="text-center text-lg sm:text-xl text-neutral-600 mb-12 sm:mb-16">
          찾기 → 태그 → 문장 → 상황극
        </p>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card p-6 sm:p-8 h-full flex flex-col text-center space-y-4">
                {/* Step Number Circle */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto ${
                    step.color === 'primary'
                      ? 'bg-primary-500'
                      : step.color === 'secondary'
                      ? 'bg-secondary-500'
                      : 'bg-accent-400'
                  }`}
                >
                  {step.number}
                </div>

                {/* Emoji */}
                <div className="text-4xl">{step.emoji}</div>

                {/* Title */}
                <h3 className="text-h4 text-neutral-900">{step.title}</h3>

                {/* Description */}
                <p className="text-body-sm text-neutral-700 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow Arrows (Desktop only) */}
        <div className="hidden lg:flex justify-center items-center gap-2 mb-12 sm:mb-16 text-neutral-400 text-xl">
          <div className="w-8 h-0.5 bg-neutral-300" />
          <span>→</span>
          <div className="w-8 h-0.5 bg-neutral-300" />
          <span>→</span>
          <div className="w-8 h-0.5 bg-neutral-300" />
          <span>→</span>
          <div className="w-8 h-0.5 bg-neutral-300" />
        </div>

        {/* Emphasis Section */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 sm:p-10 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
            📌 한 세트 2~3분,<br className="sm:hidden" /> 하루 한두 번이면 충분합니다
          </p>
          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
            바쁜 부모님의 일상 속에서도 자연스럽게 함께할 수 있는 언어 자극입니다
          </p>
        </div>
      </div>
    </section>
  );
}
