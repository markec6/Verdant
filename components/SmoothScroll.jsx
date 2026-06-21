"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { MOBILE_BREAKPOINT } from "../lib/useIsMobile";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`);
    let lenis = null;
    let frameId = 0;

    const stopLenis = () => {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      lenis?.destroy();
      lenis = null;
    };

    const startLenis = () => {
      if (lenis || !media.matches) {
        return;
      }

      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: false,
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
      });

      const onFrame = (time) => {
        lenis.raf(time);
        frameId = window.requestAnimationFrame(onFrame);
      };

      frameId = window.requestAnimationFrame(onFrame);
    };

    const handleChange = () => {
      if (media.matches) {
        startLenis();
      } else {
        stopLenis();
      }
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
      stopLenis();
    };
  }, []);

  return children;
}
