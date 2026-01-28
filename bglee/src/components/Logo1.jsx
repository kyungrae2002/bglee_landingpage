import react from 'react';

export default function Logo1({ className = 'h-12 sm:h-16' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo2.svg"
        alt="Bglee Logo1"
        className="h-full w-auto"
      />
    </div>
  );
}