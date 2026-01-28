import React from 'react';
import BetaSignupForm from '../components/BetaSignupForm';

export default function CTASection() {
  const targetAudience = [
    {
      emoji: '🤔',
      text: '가정에서 언어 놀이가 막막한 분',
    },
    {
      emoji: '🎯',
      text: '치료 효과를 집에서도 이어가고 싶은 분',
    },
    {
      emoji: '⏱️',
      text: '짧고 명확한 놀이 루틴이 필요한 가정',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-primary-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA Heading */}
          <h2 className="text-h2 text-neutral-900 mb-4 text-center">
            지금, Bglee 베타 테스트에 참여하세요
          </h2>
          <p className="text-center text-lg text-neutral-600 mb-12 sm:mb-16">
            아이의 언어 발달을 함께 지켜볼 준비가 되셨나요?
          </p>

          {/* Target Audience Checklist */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border-2 border-neutral-200 mb-12 sm:mb-16 space-y-4">
            <h3 className="text-h4 text-neutral-900 mb-6">
              다음에 해당하신다면 Bglee가 도움이 될 거예요
            </h3>
            <ul className="space-y-4">
              {targetAudience.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-4 items-start p-4 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex-shrink-0 text-2xl">{item.emoji}</div>
                  <div className="flex-1">
                    <p className="text-base sm:text-lg text-neutral-800 font-medium">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-primary-500 text-xl">✓</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Signup Form */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-medium">
              <BetaSignupForm showCounter={true} variant="cta" />
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6 text-center">
            <div>
              <p className="text-sm text-neutral-600 mb-2">
                💬 <span className="font-medium">궁금한 점이 있으신가요?</span>
              </p>
              <p className="text-sm text-neutral-500">
                문의: hello@bglee.kr
              </p>
            </div>

            <div className="pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-600">
                🔒 <span className="font-medium">개인정보 보호</span>
              </p>
              <p className="text-xs text-neutral-500 mt-2">
                입력하신 이메일은 베타 테스트 안내 목적으로만 사용되며,<br className="sm:hidden" /> 동의 없이 제3자와 공유되지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
