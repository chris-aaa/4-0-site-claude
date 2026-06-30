type IconProps = { size?: number; className?: string; style?: React.CSSProperties };

export const Chevron = ({ size = 16, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} style={style}>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** The "caret button" — a chevron inside a circle, matching the Figma "Controls/chevron new". */
export const CaretCircle = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} style={style}>
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6.5 8.5L10 12l3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Search = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Plane = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M21 16.5l-8-4.5V5a1.5 1.5 0 0 0-3 0v7l-8 4.5V18l8-2.5V20l-2 1.5V23l3.5-1L15 23v-1.5L13 20v-4.5l8 2.5v-1.5z" />
  </svg>
);

export const Car = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1zm2.2 0h9.6l-1-3H8.2l-1 3zM6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm11 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export const Umbrella = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 2c5 0 9 3.8 9 8.5 0 .8-1 .8-1.5.3-.7-.6-1.6-.6-2.3 0-.7.6-1.7.6-2.4 0-.4-.3-.9-.3-1.3 0V20a2 2 0 0 1-4 0 1 1 0 0 1 2 0 .5.5 0 0 0 1 0v-8.7c-.4-.3-.9-.3-1.3 0-.7.6-1.7.6-2.4 0-.7-.6-1.6-.6-2.3 0-.5.5-1.5.5-1.5-.3C3 5.8 7 2 12 2z" />
  </svg>
);

export const Ship = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M12 3a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v3.1l2.6.9a1 1 0 0 1 .65 1.2l-1.2 4.5A4 4 0 0 1 15 19a3 3 0 0 1-3-1 3 3 0 0 1-3 1 4 4 0 0 1-3.7-3.3l-1.2-4.5a1 1 0 0 1 .65-1.2L8 9.1V6a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1zm-2 4v1.4l2-.7 2 .7V7h-4z" />
  </svg>
);

export const Hiker = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <circle cx="13" cy="4.5" r="2" />
    <path d="M6 21l3-6 2 1.5V21h2v-6l-2-2 .8-3L14 12l3 1v-2l-2.3-.8-1.7-3.2a2 2 0 0 0-3.2-.3L7 10l1.5 1.2L10 9l.6 1.5L8 16l-3 4.2L6 21z" />
  </svg>
);

export const Plus = ({ size = 18, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Calendar = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3.5 9h17M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const MapPin = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const Sliders = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M4 7h10M18 7h2M4 17h2M10 17h10M16 4v6M8 14v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Globe = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

export const Truck = ({ size = 22, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
    <path d="M3 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v2h3l3 4v3a1 1 0 0 1-1 1h-1a2.5 2.5 0 0 1-5 0H10a2.5 2.5 0 0 1-5 0H4a1 1 0 0 1-1-1V6zm11 4v3h5l-2-3h-3zM7.5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

export const Chat = ({ size = 22, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M7 9h10M7 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Shop = ({ size = 22, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M4 9l1-4h14l1 4M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16M9 20v-5h6v5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);

export const User = ({ size = 22, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M5.5 19a6.5 6.5 0 0 1 13 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const ArrowRight = ({ size = 20, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Check = ({ size = 18, className, style }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} style={style}>
    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** The official AAA orbit logo (exported from Figma as /figma/aaa-logo.svg). */
export const AAALogo = ({ height = 36, light = false }: { height?: number; light?: boolean }) => {
  const w = (height / 44) * 73; // preserve the asset's 73:44 aspect ratio
  return (
    <img
      src="/figma/aaa-logo.svg"
      alt="AAA"
      width={w}
      height={height}
      style={light ? { filter: "brightness(0) invert(1)" } : undefined}
    />
  );
};
