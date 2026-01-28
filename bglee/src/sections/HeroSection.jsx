import React from 'react';
import Logo from '../components/Logo';
import BetaSignupForm from '../components/BetaSignupForm';
import { trackScrollDepth } from '../services/analytics';

export default function HeroSection() {
  React.useEffect(() => {
    trackScrollDepth(0);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-accent-50 flex items-center py-12 sm:py-16">
      <div className="section-container w-full">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <Logo className="h-10 sm:h-12" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-h1 text-neutral-900 leading-tight">
                집에서도 이어지는 언어 놀이,{' '}
                <span className="text-primary-500">Bglee</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg">
                센터 치료 사이의 빈 요일을 채우는 5분짜리 말놀이 시스템
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <BetaSignupForm showCounter={true} variant="hero" />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-neutral-200">
              <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  🎯 <span className="font-semibold text-neutral-700">쉬운 시작</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">별도의 교구 없이 시작 가능</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  ⏱️ <span className="font-semibold text-neutral-700">짧은 시간</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">하루 5~10분으로 충분</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  📊 <span className="font-semibold text-neutral-700">명확한 기록</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">부모앱으로 진행상황 확인</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center items-center animate-fade-in">
            <div className="relative w-80 h-80">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl opacity-50" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👶</div>
                  <div className="text-2xl font-bold text-primary-500 mb-2">
                    Bglee
                  </div>
                  <p className="text-sm text-neutral-600 px-4">
                    놀이로 시작하는 언어 발달
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 sm:mt-20 flex justify-center animate-pulse">
          <div className="flex flex-col items-center gap-2 text-neutral-400 text-sm">
            <span>더 알아보기</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
