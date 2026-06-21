"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type IllustrationTone = "light" | "dark";

type PremiumCardIllustrationProps = {
  isActive: boolean;
  tone?: IllustrationTone;
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

function getIconColors(tone: IllustrationTone) {
  if (tone === "dark") {
    return {
      primary: "#ffffff",
      soft: "rgba(255, 255, 255, 0.82)",
      accent: "#d7f0d0",
      stroke: "#ffffff",
      muted: "rgba(255, 255, 255, 0.55)",
    };
  }

  return {
    primary: "#2d5a27",
    soft: "#f4f7f2",
    accent: "#4f9a42",
    stroke: "#2d5a27",
    muted: "#6bb85a",
  };
}

function useLightMotion() {
  const [lightMotion, setLightMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px), (prefers-reduced-motion: reduce)");
    const update = () => setLightMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return lightMotion;
}

function IllustrationArt({
  colors,
  isActive,
  lightMotion,
  variant,
}: {
  colors: ReturnType<typeof getIconColors>;
  isActive: boolean;
  lightMotion: boolean;
  variant: string;
}) {
  switch (variant) {
    case "team":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <motion.g
            animate={isActive ? { y: [0, -2, 0] } : { y: 0 }}
            transition={loopTransition(2.8, isActive)}
          >
            <circle cx="32" cy="22" fill={colors.soft} r="9" stroke={colors.stroke} strokeWidth="2" />
            <path d="M20 34c2-1 6-2 12-2s10 1 12 2v18H20V34z" fill={colors.primary} />
            <path d="M26 38h12v2H26z" fill={colors.accent} />
            <path d="M42 32l10-4v5l-10 4v-5z" fill={colors.muted} />
          </motion.g>
        </svg>
      );
    case "equipment":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <rect fill={colors.primary} height="10" rx="3" width="34" x="15" y="30" />
          <circle cx="20" cy="44" fill={colors.stroke} opacity="0.85" r="6" />
          <circle cx="44" cy="44" fill={colors.stroke} opacity="0.85" r="6" />
          <motion.g
            animate={
              isActive
                ? lightMotion
                  ? { y: [0, -1.5, 0] }
                  : { rotate: [0, 8, 0, -6, 0] }
                : lightMotion
                  ? { y: 0 }
                  : { rotate: 0 }
            }
            style={{ originX: "42px", originY: "28px" }}
            transition={loopTransition(2.4, isActive)}
          >
            <path d="M42 24h16l5 7H42v-7z" fill={colors.accent} />
          </motion.g>
        </svg>
      );
    case "eco":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <motion.g
            animate={isActive ? { scale: lightMotion ? [1, 1.03, 1] : [1, 1.06, 1] } : { scale: 1 }}
            style={{ originX: "32px", originY: "36px" }}
            transition={loopTransition(2.9, isActive)}
          >
            <path
              d="M32 14c-10 13-16 21-16 29a16 16 0 0 0 32 0c0-8-6-16-16-29z"
              fill={colors.accent}
              stroke={colors.stroke}
              strokeWidth="1.5"
            />
            <path d="M32 22v24" stroke={colors.soft} strokeLinecap="round" strokeWidth="1.5" />
          </motion.g>
        </svg>
      );
    case "inquiry":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <motion.g
            animate={isActive ? { y: [0, -2, 0] } : { y: 0 }}
            transition={loopTransition(2.6, isActive)}
          >
            <rect
              fill={colors.soft}
              height="34"
              rx="5"
              stroke={colors.stroke}
              strokeWidth="2"
              width="26"
              x="19"
              y="14"
            />
            <path
              d="M25 24h14M25 30h10M25 36h12"
              stroke={colors.accent}
              strokeLinecap="round"
              strokeWidth="2"
            />
            {!lightMotion ? (
              <motion.path
                animate={isActive ? { pathLength: [0.3, 1, 0.3] } : { pathLength: 1 }}
                d="M27 42l5 5 10-10"
                fill="none"
                stroke={colors.primary}
                strokeLinecap="round"
                strokeWidth="2"
                transition={loopTransition(2.5, isActive)}
              />
            ) : (
              <path
                d="M27 42l5 5 10-10"
                fill="none"
                stroke={colors.primary}
                strokeLinecap="round"
                strokeWidth="2"
              />
            )}
          </motion.g>
        </svg>
      );
    case "assessment":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <motion.g
            animate={isActive ? { y: [0, -2, 0] } : { y: 0 }}
            transition={loopTransition(2.7, isActive)}
          >
            <path
              d="M14 46h36"
              stroke={colors.muted}
              strokeDasharray="3 4"
              strokeWidth="1.8"
            />
            <path
              d="M22 38l24-18"
              stroke={colors.primary}
              strokeLinecap="round"
              strokeWidth="2.5"
            />
            <rect
              fill={colors.soft}
              height="10"
              rx="1.5"
              stroke={colors.stroke}
              strokeWidth="1.8"
              width="14"
              x="42"
              y="16"
            />
          </motion.g>
        </svg>
      );
    case "work":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <motion.g
            animate={isActive ? { x: [0, 2, 0] } : { x: 0 }}
            transition={loopTransition(2.3, isActive)}
          >
            <rect fill={colors.primary} height="10" rx="2" width="28" x="18" y="32" />
            <circle cx="22" cy="44" fill={colors.stroke} opacity="0.9" r="4.5" />
            <circle cx="42" cy="44" fill={colors.stroke} opacity="0.9" r="4.5" />
            {!lightMotion ? (
              <motion.path
                animate={isActive ? { rotate: [0, 10, 0] } : { rotate: 0 }}
                d="M44 28l12-5v8l-12 5v-8z"
                fill={colors.accent}
                style={{ originX: "50px", originY: "30px" }}
                transition={loopTransition(1.9, isActive)}
              />
            ) : (
              <path d="M44 28l12-5v8l-12 5v-8z" fill={colors.accent} />
            )}
          </motion.g>
        </svg>
      );
    case "result":
      return (
        <svg aria-hidden="true" className="premium-card-art__svg" viewBox="0 0 64 64">
          <path d="M10 48c12-5 24-7 32-7s20 2 32 7" fill={colors.accent} opacity="0.45" />
          <motion.g
            animate={
              isActive
                ? lightMotion
                  ? { scale: [1, 1.04, 1] }
                  : { scale: [1, 1.08, 1], rotate: [0, 4, 0] }
                : { scale: 1, rotate: 0 }
            }
            style={{ originX: "32px", originY: "28px" }}
            transition={loopTransition(2.8, isActive)}
          >
            <path
              d="M32 12l4 12h12l-10 7 4 12-10-7-10 7 4-12-10-7h12l4-12z"
              fill="none"
              stroke={colors.primary}
              strokeLinejoin="round"
              strokeWidth="1.8"
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
  tone = "light",
}: PremiumCardIllustrationProps) {
  const colors = getIconColors(tone);
  const lightMotion = useLightMotion();

  return (
    <motion.div
      animate={
        isActive
          ? { opacity: 1, scale: 1 }
          : { opacity: 0.9, scale: 0.96 }
      }
      className={`card-expand-reveal__icon ${
        tone === "dark" ? "card-expand-reveal__icon--dark" : ""
      }`.trim()}
      initial={false}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <IllustrationArt
        colors={colors}
        isActive={isActive}
        lightMotion={lightMotion}
        variant={variant}
      />
    </motion.div>
  );
}
