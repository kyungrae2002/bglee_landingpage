// Google Analytics 4 Configuration
// This file handles GA4 initialization and event tracking

/**
 * Initialize Google Analytics 4
 * Should be called once when the app loads
 */
export function initializeGA4() {
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;

  if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
    console.warn(
      'GA4 Measurement ID not configured. Set VITE_GA4_MEASUREMENT_ID in .env.local'
    );
    return;
  }

  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  // Store gtag globally for use in other modules
  window.gtag = gtag;

  console.log('GA4 initialized with ID:', measurementId);
}

/**
 * Track a custom event in GA4
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Event data/parameters
 */
export function trackEvent(eventName, eventData = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventData);
  }
}

/**
 * Track page view (already tracked automatically, but can be used for specific needs)
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export function trackPageView(pagePath, pageTitle) {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * Track beta signup event
 * @param {string} email - Email that signed up
 */
export function trackBetaSignup(email) {
  trackEvent('beta_signup', {
    email_domain: email.split('@')[1],
  });
}

/**
 * Track form submission
 * @param {string} formName - Name of the form
 */
export function trackFormSubmission(formName) {
  trackEvent('form_submission', {
    form_name: formName,
  });
}

/**
 * Track scroll depth
 * @param {number} scrollDepth - Percentage of page scrolled
 */
export function trackScrollDepth(scrollDepth) {
  trackEvent('scroll_depth', {
    depth: Math.round(scrollDepth),
  });
}

/**
 * Track button click
 * @param {string} buttonName - Name/identifier of the button
 * @param {string} section - Section where button is located
 */
export function trackButtonClick(buttonName, section = '') {
  trackEvent('button_click', {
    button_name: buttonName,
    section: section,
  });
}

// Export GA4 event constants
export const GA_EVENTS = {
  BETA_SIGNUP: 'beta_signup',
  FORM_SUBMISSION: 'form_submission',
  BUTTON_CLICK: 'button_click',
  SCROLL_DEPTH: 'scroll_depth',
  PAGE_VIEW: 'page_view',
};
