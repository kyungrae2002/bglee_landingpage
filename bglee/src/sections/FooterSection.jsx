import React from 'react';
import Logo1 from '../components/Logo1';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="section-container py-12 sm:py-16">
        {/* Main Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo1 className="h-8 sm:h-10 brightness-0 invert" />
            <p className="text-sm text-neutral-400">
              아이들의 언어 발달을 지원하는 가정용 놀이 시스템
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
              제품
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#features" className="hover:text-neutral-200 transition-colors">
                  기능 소개
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-neutral-200 transition-colors">
                  사용 방법
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-neutral-200 transition-colors">
                  가격 안내
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
              회사
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#about" className="hover:text-neutral-200 transition-colors">
                  소개
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-neutral-200 transition-colors">
                  블로그
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-200 transition-colors">
                  문의
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
              정책
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#privacy" className="hover:text-neutral-200 transition-colors">
                  개인정보 처리방침
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-neutral-200 transition-colors">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="hover:text-neutral-200 transition-colors">
                  면책 사항
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-700 my-12 sm:my-16" />

        {/* Legal Disclaimer */}
        <div className="bg-neutral-800 rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
          <h4 className="font-semibold text-white text-sm mb-4"> 법적 공지</h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            Bglee는 의료기기나 치료 서비스를 대체하지 않으며,
            언어재활을 보완하기 위한 가정용 언어 놀이 시스템입니다.
            언어 발달 지연이나 장애에 대한 진단 및 치료는 반드시
            전문의와 언어재활사의 상담을 통해 진행되어야 합니다.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-neutral-400">📧 Email</p>
              <p className="text-neutral-200 font-medium">exionstudio@gmail.com</p>
            </div>
            <div>
              <p className="text-neutral-400">🌐 Website</p>
              <p className="text-neutral-200 font-medium">www.bglee.vercel.app</p>
            </div>
            <div>
              <p className="text-neutral-400">📱 Follow Us</p>
              <div className="flex gap-4 mt-1">
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-neutral-700 text-center text-sm text-neutral-500">
            <p>
              © {currentYear} Bglee. All rights reserved.<br className="sm:hidden" />
              <span className="hidden sm:inline"> | </span>
              Made with 💚 for children's language development
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
