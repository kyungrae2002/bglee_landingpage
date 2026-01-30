import React from 'react';

export default function CTASection() {
  const handleLaunchAlarmClick = () => {
    // 스크롤을 페이지 상단으로 부드럽게 이동
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#FE6433]" />

      {/* Main Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-2xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            우리 아이 골든타임,<br />지금 바로 시작하세요
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white opacity-95 mb-12 leading-relaxed max-w-xl mx-auto">
            놀이만큼 말에 도움 되는 것도 없습니다. 하지만 부모님도 쉬워야 매일 할 수 있어요. 오늘부터 집 장난감으로 부담 없이 시작해보세요.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={handleLaunchAlarmClick}
            className="inline-block bg-[#FEFEF2] hover:bg-white text-black font-bold text-lg sm:text-2xl px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 hover:shadow-lg active:scale-95"
          >
            출시 알림받기
          </button>
        </div>
      </div>
    </section>
  );
}
