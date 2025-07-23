interface IconProps {
  className?: string;
  size?: number;
}

export default function DesignIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M7 7h10M7 12h10M7 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
