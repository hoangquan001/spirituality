interface IconProps {
  className?: string;
  size?: number;
}

export default function NameAnalysisIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 6v12M16 6v12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <circle cx="8" cy="9" r="1" fill="currentColor"/>
      <circle cx="16" cy="15" r="1" fill="currentColor"/>
    </svg>
  );
}
