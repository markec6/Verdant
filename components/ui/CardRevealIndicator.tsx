type CardRevealIndicatorProps = {
  className?: string;
  isOpen: boolean;
};

export default function CardRevealIndicator({
  isOpen,
  className = "",
}: CardRevealIndicatorProps) {
  return (
    <span
      aria-hidden="true"
      className={`card-reveal-indicator ${isOpen ? "is-open" : ""} ${className}`.trim()}
    >
      <svg className="card-reveal-indicator__svg" fill="none" viewBox="0 0 20 20">
        <path
          d="M5 7.5 10 12.5 15 7.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}
