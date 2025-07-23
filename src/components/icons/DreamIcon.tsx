interface IconProps {
  className?: string;
  size?: number;
}

export default function DreamIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 14c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="9" cy="9" r="1" fill="currentColor"/>
      <circle cx="15" cy="9" r="1" fill="currentColor"/>
      <path d="M16 18c-1.5 1-3.5 1-4 0-0.5 1-2.5 1-4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
