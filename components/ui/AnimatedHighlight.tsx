"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import useIsMobile from "../../lib/useIsMobile";

type AnimatedHighlightProps = {
  text: string;
  tone?: "default" | "light";
};

const getHighlightMotion = (tone: "default" | "light") => ({
  initial: { opacity: 0.5, scale: 0.9, color: "#A0A0A0" },
  whileInView: {
    opacity: 1,
    scale: 1.1,
    color: tone === "light" ? "#B8E0B0" : "#2D5A27",
  },
  transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  viewport: { once: true, margin: "-100px" },
});

function sanitizeHighlightText(value: string) {
  return value.replace(/[.,!?;:]+/g, "").trim();
}

export default function AnimatedHighlight({
  text,
  tone = "default",
}: AnimatedHighlightProps) {
  const isMobile = useIsMobile();
  const highlightMotion = getHighlightMotion(tone);
  const cleanText = useMemo(() => sanitizeHighlightText(text), [text]);

  if (isMobile) {
    return <span className="text-highlight">{cleanText}</span>;
  }

  return (
    <motion.span className="text-highlight" {...highlightMotion}>
      {cleanText}
    </motion.span>
  );
}
