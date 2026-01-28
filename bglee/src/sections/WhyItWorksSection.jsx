import React from 'react';

export default function WhyItWorksSection() {
  const reasons = [
    {
      emoji: '',
      title: '아이는 직접 움직입니다',
      description: '앱 속 가상 세계가 아닌, 실제 물리적 공간에서 움직이며 학습합니다',
    },
    {
      emoji: '',
      title: '실제 장난감을 만집니다',
      description: '손으로 직접 만지고 느끼며 감각을 자극하는 경험',
    },
    {
      emoji: '',
      title: '말은 놀이 중간에 나옵니다',
      description: '의도적인 학습이 아닌, 자연스러운 상황 속의 언어 발달',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-h2 text-neutral-900 mb-12 sm:mb-16 text-center">
            화면에서 끝나지 않기 때문입니다
          </h2>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 mb-12 sm:mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl sm:text-6xl mb-4">{reason.emoji}</div>
                <h3 className="text-h4 text-neutral-900">{reason.title}</h3>
                <p className="text-body text-neutral-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Message */}
          <div className="bg-white border-2 border-primary-200 rounded-2xl p-8 sm:p-10 text-center space-y-4">
            <h3 className="text-h3 text-neutral-900">
              Bglee는 앱 학습이 아니라,<br />
              <span className="text-primary-600">현실 놀이를 중심에 둡니다</span>
            </h3>
            <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
              화면 너머의 아이, 그리고 그 아이가 살아가는 현실 세계.
              그곳이 가장 좋은 학습의 장입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
