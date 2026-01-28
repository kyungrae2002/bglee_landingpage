import React from 'react';

export default function Logo({ className = 'h-8 sm:h-10' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/src/assets/Group 44.svg"
        alt="Bglee Logo"
        className="h-full w-auto"
      />
    </div>
  );
}
