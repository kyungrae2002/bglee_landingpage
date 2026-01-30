import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeGA4 } from './services/analytics';

// Import all sections
import HeroSection from './sections/HeroSection';
import ProblemSection from './sections/ProblemSection';
import SolutionOverviewSection from './sections/SolutionOverviewSection';
import ExperienceFlowSection from './sections/ExperienceFlowSection';
import FooterSection from './sections/FooterSection';

// Import admin dashboard
import ExionDashboard from './pages/ExionDashboard';

// Home Page Component
function HomePage() {
  useEffect(() => {
    initializeGA4();

    // Optional: Track scroll depth for analytics
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Track at 25%, 50%, 75%, 100%
      if (scrollPercent > 25 && scrollPercent < 26) {
        window.gtag?.('event', 'scroll_depth', {
          value: 25,
        });
      } else if (scrollPercent > 50 && scrollPercent < 51) {
        window.gtag?.('event', 'scroll_depth', {
          value: 50,
        });
      } else if (scrollPercent > 75 && scrollPercent < 76) {
        window.gtag?.('event', 'scroll_depth', {
          value: 75,
        });
      } else if (scrollPercent >= 100) {
        window.gtag?.('event', 'scroll_depth', {
          value: 100,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f7] overflow-hidden">
      {/* Main Content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <ExperienceFlowSection />
        <SolutionOverviewSection />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
}

// Back to Top Button Component
function BackToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-500 text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 z-40 animate-fade-in"
          aria-label="Back to top"
          title="맨 위로 이동"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </button>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Secret admin dashboard */}
        <Route path="/exion" element={<ExionDashboard />} />

        {/* 404 - Redirect to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

