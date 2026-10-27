import React from 'react';

interface CospertLogoProps {
  variant?: 'dark' | 'light';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CospertLogo: React.FC<CospertLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-7 h-7 sm:w-8 sm:h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl sm:text-[26px]',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {/* Precision two-tone lightning bolt emblem matching reference */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Left/Dark facet */}
          <path
            d="M17 2L6 17H15L13 30L26 14H18L21 2H17Z"
            fill="url(#cospert-bolt-grad)"
          />
          {/* Subtle dark accent edge on the left */}
          <path
            d="M17 2L6 17H15L13 25L10 17H14L16 5L17 2Z"
            fill="#1E293B"
            opacity="0.85"
          />
          <defs>
            <linearGradient
              id="cospert-bolt-grad"
              x1="6"
              y1="2"
              x2="26"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <span
        className={`font-extrabold tracking-tight ${textSizes[size]} ${
          isLight ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        Cospert
      </span>
    </div>
  );
};
