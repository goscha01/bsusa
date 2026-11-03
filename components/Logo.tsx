import React from 'react';

interface EmblemProps {
  size?: number;
  /** 'light' for white backgrounds, 'dark' for navy backgrounds (white outer ring). */
  tone?: 'light' | 'dark';
  /** Hide the small sun rays and road dashes for very small sizes. */
  simple?: boolean;
  className?: string;
  title?: string;
}

/** The BSUSA emblem: a sun rising over an open road, inside a circle. */
export function Emblem({ size = 48, tone = 'light', simple = false, className, title }: EmblemProps) {
  const ring = tone === 'dark' ? '#FFFFFF' : '#1B365D';
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke={ring} strokeWidth="3.5" />
      <circle cx="50" cy="50" r="44" fill="#1B365D" />
      {!simple && (
        <g stroke="#E07A2E" strokeWidth="3.6" strokeLinecap="round">
          <line x1="50" y1="39" x2="50" y2="33" />
          <line x1="61.5" y1="42.1" x2="64.5" y2="36.9" />
          <line x1="38.5" y1="42.1" x2="35.5" y2="36.9" />
          <line x1="69.9" y1="50.5" x2="75.1" y2="47.5" />
          <line x1="30.1" y1="50.5" x2="24.9" y2="47.5" />
        </g>
      )}
      <path d={simple ? 'M30 62 A20 20 0 0 1 70 62 Z' : 'M32 62 A18 18 0 0 1 68 62 Z'} fill="#E07A2E" />
      <path d="M7.67 62 A44 44 0 0 0 92.33 62 Z" fill="#FFFFFF" />
      <path d="M48.6 62 L51.4 62 L64 91.7 A44 44 0 0 1 36 91.7 Z" fill="#1B365D" />
      {!simple && (
        <line x1="50" y1="89" x2="50" y2="67" stroke="#FFFFFF" strokeWidth="1.6" strokeDasharray="4 3" />
      )}
    </svg>
  );
}

interface LockupProps {
  tone?: 'light' | 'dark';
  size?: number;
}

/** Short logo: emblem + "BSUSA" with the full name as subtitle. */
export function LogoLockup({ tone = 'light', size = 50 }: LockupProps) {
  const dark = tone === 'dark';
  return (
    <span className="flex items-center gap-3">
      <Emblem size={size} tone={tone} />
      <span className="flex flex-col gap-1">
        <span className={`text-[26px] font-extrabold leading-[0.9] tracking-[0.01em] ${dark ? 'text-white' : 'text-navy'}`}>
          BSUSA
        </span>
        <span className={`text-[9px] font-bold tracking-[0.2em] ${dark ? 'text-[#B9C6DA]' : 'text-muted'}`}>
          BETTER START USA FOUNDATION
        </span>
      </span>
    </span>
  );
}
