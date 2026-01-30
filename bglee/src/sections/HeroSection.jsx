import React from 'react';
import Logo from '../components/Logo';
import BetaSignupForm from '../components/BetaSignupForm';
import { trackScrollDepth } from '../services/analytics';

export default function HeroSection() {
  React.useEffect(() => {
    trackScrollDepth(0);
  }, []);

  return (
    <section className="min-h-screen flex items-center py-12 sm:py-16">
      <div className="section-container w-full">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <Logo className="h-16 sm:h-20" />
        </div>


        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">  
          <div className="space-y-6 sm:space-y-8 animate-slide-up w-full flex flex-col items-center">
            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-h1 text-neutral-900 leading-tight">
                우리 아이 골든 타임, <br />이젠 부모님도 쉽게 채울 수 있어요
              </h1>
              {/* p 태그에 mx-auto 추가하여 텍스트 박스가 중앙에 위치하도록 함 */}
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-lg mx-auto">
                6세 전까지가 중요한 건 알지만, 센터만으론 부족하고<br /> 매일 새 놀이를 준비하긴 힘드셨죠? <br /> 집 장난감으로 부모님이 더 편하게 함께하는 방법
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6 w-full flex justify-center">
              <div className="w-full max-w-md">
                 <BetaSignupForm showCounter={true} variant="hero" />
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-neutral-200 justify-center w-full">
              <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  ✓ <span className="font-semibold text-neutral-700">쉬운 시작</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">새 교구 살 필요 없이, 집에 있는 장난감으로</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  ✓ <span className="font-semibold text-neutral-700">고민 해결</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">매일 놀이 준비 고민 없이, 앱이 알아서 제안</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  ✓ <span className="font-semibold text-neutral-700">성장 확인</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">치료사 선생님과 함께 우리 아이 성장 확인</p>
              </div>
               <div>
                <p className="text-xs sm:text-sm text-neutral-600">
                  ✓ <span className="font-semibold text-neutral-700">일석 이조</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">부모님은 편하게, 아이는 즐겁게</p>
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
