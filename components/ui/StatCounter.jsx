"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DEFAULT_TARGET = 1200;

export default function StatCounter({ target = DEFAULT_TARGET }) {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.45 });
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (latest) =>
    Math.floor(latest).toLocaleString("en-US"),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !isInView) {
      return;
    }

    spring.set(target);
  }, [isInView, isMounted, spring, target]);

  if (!isMounted) {
    return (
      <span className="impact-stat__counter" ref={containerRef}>
        <span className="impact-stat__counter-value">0</span>
        <span className="impact-stat__suffix">+</span>
      </span>
    );
  }

  return (
    <span className="impact-stat__counter" ref={containerRef}>
      <motion.span className="impact-stat__counter-value">{display}</motion.span>
      <span className="impact-stat__suffix">+</span>
    </span>
  );
}
