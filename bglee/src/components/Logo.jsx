import React from 'react';

export default function Logo({ className = 'h-12 sm:h-16' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/Group 44.svg"
        alt="Bglee Logo"
        className="h-full w-auto"
      />
    </div>
  );
}
