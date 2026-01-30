import React, { useState, useEffect } from 'react';
import { saveBetaSignup, getBetaSignupCount, isEmailExists } from '../services/database';
import { trackBetaSignup, trackFormSubmission } from '../services/analytics';

export default function BetaSignupForm({ showCounter = true, variant = 'default' }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [signupCount, setSignupCount] = useState(0);
  const [loadingCount, setLoadingCount] = useState(true);

  // Fetch signup count on mount
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const count = await getBetaSignupCount();
        setSignupCount(count);
      } catch (err) {
        console.error('Failed to fetch signup count:', err);
      } finally {
        setLoadingCount(false);
      }
    };

    fetchCount();
  }, [submitted]);

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!email.trim()) {
      setError('이메일을 입력해주세요.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('올바른 이메일 주소를 입력해주세요.');
      return;
    }

    setLoading(true);

    try {
      // Check if email already exists
      const exists = await isEmailExists(email);
      if (exists) {
        setError('이미 신청하신 이메일입니다.');
        setLoading(false);
        return;
      }

      // Save to database
      const success = await saveBetaSignup(email);

      if (success) {
        // Track in GA4
        trackFormSubmission('beta_signup_form');
        trackBetaSignup(email);

        // Update UI
        setSubmitted(true);
        setEmail('');

        // Refresh count
        const newCount = await getBetaSignupCount();
        setSignupCount(newCount);

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  // Different variants for different sections
  const isHeroVariant = variant === 'hero';
  const containerClasses = isHeroVariant ? 'max-w-xl mx-auto' : 'max-w-lg mx-auto';
  const buttonClasses = isHeroVariant ? 'w-full sm:w-auto' : 'w-full';

  return (
    <div className={containerClasses}>
      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="input-field flex-1"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={loading}
            className={`btn-primary ${buttonClasses} whitespace-nowrap`}
          >
            {loading ? '처리 중...' : '베타 테스트 참여'}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-red-600 animate-fade-in">{error}</p>
        )}

        {/* Success Message */}
        {submitted && (
          <div className="p-4 bg-secondary-50 border-2 border-secondary-300 rounded-lg animate-fade-in">
            <p className="text-sm text-secondary-700 font-medium">
              ✓ 베타 테스트 신청이 완료되었습니다!
            </p>
            <p className="text-xs text-secondary-600 mt-1">
              확인 이메일을 곧 보내드릴 예정입니다.
            </p>
          </div>
        )}
      </form>

      {/* Signup Counter */}
      {showCounter && (
        <div className="mt-6 text-center">
          <div className="inline-block">
            <p className="text-sm text-neutral-600">
              현재{' '}
              <span className="font-bold text-primary-600">
                {loadingCount ? '로딩 중...' : `${(signupCount + 50).toLocaleString()}명`}
              </span>
              의 부모님이 참여 중입니다
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
