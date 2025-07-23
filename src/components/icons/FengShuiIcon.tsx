interface IconProps {
  className?: string;
  size?: number;
}

export default function FengShuiIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 21h18M5 21V7l8-4 8 4v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9h6M9 13h6M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="11" y="15" width="2" height="6" fill="currentColor"/>
    </svg>
  );
}
