"use client";

import { motion } from "framer-motion";

type PremiumCardIllustrationProps = {
  isActive: boolean;
  variant: string;
};

const loopEase = "easeInOut" as const;

function loopTransition(duration: number, isActive: boolean) {
  return {
    duration,
    repeat: isActive ? Infinity : 0,
    ease: loopEase,
  };
}

function IllustrationArt({
  isActive,
  variant,
}: {
  isActive: boolean;
  variant: string;
}) {
  switch (variant) {
    case "team":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="prem-team-bg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#e8f2e4" />
              <stop offset="100%" stopColor="#c8ddc0" />
            </linearGradient>
            <linearGradient id="prem-team-coat" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#3f7a36" />
              <stop offset="100%" stopColor="#2d5a27" />
            </linearGradient>
          </defs>
          <rect fill="url(#prem-team-bg)" height="120" rx="18" width="120" />
          <motion.g
            animate={isActive ? { y: [0, -3, 0] } : { y: 0 }}
            transition={loopTransition(2.8, isActive)}
          >
            <circle cx="60" cy="38" fill="#f4f7f2" r="14" stroke="#2d5a27" strokeWidth="2" />
            <path
              d="M44 54c4-2 8-3 16-3s12 1 16 3v28H44V54z"
              fill="url(#prem-team-coat)"
            />
            <path d="M52 62h16v4H52z" fill="#b8e0b0" opacity="0.9" />
            <path
              d="M78 58l14-6v8l-14 6V58z"
              fill="#4f9a42"
              stroke="#2d5a27"
              strokeWidth="1.5"
            />
          </motion.g>
        </svg>
      );
    case "equipment":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="prem-eq-bg" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="#dfead8" />
              <stop offset="100%" stopColor="#eef5ea" />
            </linearGradient>
            <linearGradient id="prem-eq-body" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#2d5a27" />
              <stop offset="100%" stopColor="#4f9a42" />
            </linearGradient>
          </defs>
          <rect fill="url(#prem-eq-bg)" height="120" rx="18" width="120" />
          <rect fill="url(#prem-eq-body)" height="22" rx="5" width="62" x="29" y="58" />
          <rect fill="#3f7a36" height="12" rx="3" width="28" x="46" y="46" />
          <circle cx="38" cy="84" fill="#1a2e18" r="10" />
          <circle cx="38" cy="84" fill="#5f6f5a" r="4" />
          <circle cx="82" cy="84" fill="#1a2e18" r="10" />
          <circle cx="82" cy="84" fill="#5f6f5a" r="4" />
          <motion.g
            animate={isActive ? { rotate: [0, 7, 0, -5, 0] } : { rotate: 0 }}
            style={{ originX: "78px", originY: "52px" }}
            transition={loopTransition(2.4, isActive)}
          >
            <path d="M78 52h24l8 10H78V52z" fill="#6bb85a" />
            <path d="M102 62v6h-8v-6h8z" fill="#2d5a27" />
          </motion.g>
        </svg>
      );
    case "eco":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="prem-eco-bg" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#edf6ea" />
              <stop offset="100%" stopColor="#d3e8cc" />
            </linearGradient>
            <linearGradient id="prem-eco-leaf" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#6bb85a" />
              <stop offset="100%" stopColor="#2d5a27" />
            </linearGradient>
          </defs>
          <rect fill="url(#prem-eco-bg)" height="120" rx="18" width="120" />
          <motion.g
            animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            style={{ originX: "60px", originY: "62px" }}
            transition={loopTransition(2.9, isActive)}
          >
            <path
              d="M60 28c-18 24-28 38-28 52a28 28 0 0 0 56 0c0-14-10-28-28-52z"
              fill="url(#prem-eco-leaf)"
            />
            <path d="M60 40v52" stroke="#b8e0b0" strokeLinecap="round" strokeWidth="2" />
            <path
              d="M48 58c8-4 16-6 24-6M48 72c10-5 18-7 28-7"
              fill="none"
              stroke="#b8e0b0"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
          </motion.g>
          <motion.circle
            animate={
              isActive
                ? { opacity: [0.35, 0.95, 0.35], y: [0, -4, 0] }
                : { opacity: 0.5, y: 0 }
            }
            cx="86"
            cy="34"
            fill="#4f9a42"
            r="4"
            transition={loopTransition(2.5, isActive)}
          />
        </svg>
      );
    case "inquiry":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <rect fill="#e9f0e5" height="120" rx="18" width="120" />
          <motion.g
            animate={isActive ? { y: [0, -3, 0] } : { y: 0 }}
            transition={loopTransition(2.6, isActive)}
          >
            <rect
              fill="#f8fbf6"
              height="58"
              rx="8"
              stroke="#2d5a27"
              strokeWidth="2"
              width="44"
              x="38"
              y="30"
            />
            <path d="M48 44h24M48 54h18M48 64h20" stroke="#4f9a42" strokeLinecap="round" strokeWidth="2.5" />
            <motion.path
              animate={isActive ? { pathLength: [0.25, 1, 0.25] } : { pathLength: 1 }}
              d="M52 74l8 8 16-16"
              fill="none"
              stroke="#2d5a27"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              transition={loopTransition(2.5, isActive)}
            />
          </motion.g>
        </svg>
      );
    case "assessment":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <rect fill="#e4ece0" height="120" rx="18" width="120" />
          <rect fill="#4f9a42" height="16" opacity="0.35" width="120" y="88" />
          <motion.g
            animate={isActive ? { y: [0, -2, 0] } : { y: 0 }}
            transition={loopTransition(2.7, isActive)}
          >
            <path d="M28 88h64" stroke="#2d5a27" strokeDasharray="4 5" strokeWidth="2" />
            <path d="M44 72l36-28" stroke="#5c4630" strokeLinecap="round" strokeWidth="3" />
            <rect fill="#f4f7f2" height="16" rx="2" stroke="#2d5a27" strokeWidth="2" width="22" x="74" y="36" />
            <path d="M78 44h14" stroke="#4f9a42" strokeLinecap="round" strokeWidth="2" />
          </motion.g>
        </svg>
      );
    case "work":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <rect fill="#dfead8" height="120" rx="18" width="120" />
          <rect fill="#3f7a36" height="18" opacity="0.4" width="120" y="86" />
          <motion.g
            animate={isActive ? { x: [0, 4, 0] } : { x: 0 }}
            transition={loopTransition(2.3, isActive)}
          >
            <rect fill="#2d5a27" height="16" rx="4" width="50" x="35" y="58" />
            <circle cx="42" cy="80" fill="#1a2e18" r="7" />
            <circle cx="78" cy="80" fill="#1a2e18" r="7" />
            <motion.path
              animate={isActive ? { rotate: [0, 9, 0] } : { rotate: 0 }}
              d="M85 54l18-8v12l-18 8V54z"
              fill="#6bb85a"
              style={{ originX: "94px", originY: "56px" }}
              transition={loopTransition(1.9, isActive)}
            />
          </motion.g>
        </svg>
      );
    case "result":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="prem-result-grass" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#6bb85a" />
              <stop offset="100%" stopColor="#2d5a27" />
            </linearGradient>
          </defs>
          <rect fill="#e8f3e4" height="120" rx="18" width="120" />
          <path d="M16 92c18-8 36-12 52-12s34 4 52 12" fill="url(#prem-result-grass)" opacity="0.85" />
          <motion.g
            animate={
              isActive ? { scale: [1, 1.07, 1], rotate: [0, 5, 0] } : { scale: 1, rotate: 0 }
            }
            style={{ originX: "60px", originY: "48px" }}
            transition={loopTransition(2.8, isActive)}
          >
            <path
              d="M60 24l7 21h22l-18 13 7 21-18-13-18 13 7-21-18-13h22l7-21z"
              fill="none"
              stroke="#2d5a27"
              strokeLinejoin="round"
              strokeWidth="2.2"
            />
          </motion.g>
        </svg>
      );
    default:
      return null;
  }
}

export default function PremiumCardIllustration({
  variant,
  isActive,
}: PremiumCardIllustrationProps) {
  return (
    <div className="card-animated-illustration">
      <motion.div
        animate={
          isActive
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0.88, scale: 0.98, y: 2 }
        }
        className="card-animated-illustration__frame"
        initial={false}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <IllustrationArt isActive={isActive} variant={variant} />
      </motion.div>
    </div>
  );
}
