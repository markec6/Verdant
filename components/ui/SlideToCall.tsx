"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { Phone } from "lucide-react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

const PHONE_HREF = "tel:+381600000000";
const COMPLETE_RATIO = 0.88;

const snapSpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 34,
  mass: 0.82,
};

const successSpring = {
  type: "spring" as const,
  stiffness: 360,
  damping: 28,
  mass: 0.9,
};

const exitTransition = {
  duration: 0.42,
  ease: [0.4, 0, 0.2, 1] as const,
};

type SlideStatus = "idle" | "success" | "exiting";

export default function SlideToCall() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const isCompletingRef = useRef(false);
  const maxDragRef = useRef(0);

  const [status, setStatus] = useState<SlideStatus>("idle");
  const [maxDrag, setMaxDrag] = useState(1);

  const x = useMotionValue(0);
  const fillScaleX = useTransform(x, [0, maxDrag], [0, 1]);
  const labelOpacity = useTransform(x, [0, maxDrag * 0.55, maxDrag], [1, 0.45, 0.12]);

  const measureDragRange = useCallback(() => {
    const zone = constraintsRef.current;
    const handle = handleRef.current;

    if (!zone || !handle) {
      return;
    }

    const nextMax = Math.max(0, zone.offsetWidth - handle.offsetWidth);
    maxDragRef.current = nextMax;
    setMaxDrag(nextMax || 1);
  }, []);

  useLayoutEffect(() => {
    measureDragRange();

    const zone = constraintsRef.current;
    if (!zone) {
      return undefined;
    }

    const observer = new ResizeObserver(measureDragRange);
    observer.observe(zone);
    window.addEventListener("resize", measureDragRange);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureDragRange);
    };
  }, [measureDragRange]);

  const resetHandle = useCallback(() => {
    animate(x, 0, snapSpring);
  }, [x]);

  const completeCall = useCallback(async () => {
    if (isCompletingRef.current) {
      return;
    }

    isCompletingRef.current = true;
    setStatus("success");

    await animate(x, maxDragRef.current, successSpring);
    await new Promise((resolve) => {
      window.setTimeout(resolve, 360);
    });

    setStatus("exiting");
    await new Promise((resolve) => {
      window.setTimeout(resolve, exitTransition.duration * 1000);
    });

    window.location.href = PHONE_HREF;
  }, [x]);

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (status !== "idle" || isCompletingRef.current) {
        return;
      }

      const currentX = x.get();
      const projectedX = currentX + info.velocity.x * 0.12;
      const threshold = maxDragRef.current * COMPLETE_RATIO;

      if (projectedX >= threshold) {
        void completeCall();
        return;
      }

      resetHandle();
    },
    [completeCall, resetHandle, status, x],
  );

  const isInteractive = status === "idle";

  return (
    <motion.div
      animate={
        status === "exiting"
          ? { opacity: 0, scale: 0.94, y: 6, filter: "blur(4px)" }
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      aria-label="Povucite za poziv"
      className="slide-to-call"
      initial={false}
      role="group"
      transition={exitTransition}
    >
      <div className="slide-to-call__track">
        <motion.div
          aria-hidden="true"
          className="slide-to-call__fill"
          style={{ scaleX: fillScaleX }}
        />
        <motion.span
          aria-hidden="true"
          className="slide-to-call__label"
          style={{ opacity: labelOpacity }}
        >
          Povucite za poziv
        </motion.span>
        <div ref={constraintsRef} className="slide-to-call__drag-zone">
          <motion.button
            ref={handleRef}
            aria-label="Povucite za poziv"
            className={`slide-to-call__handle${
              status === "success" ? " slide-to-call__handle--success" : ""
            }`.trim()}
            drag={isInteractive ? "x" : false}
            dragConstraints={constraintsRef}
            dragElastic={0.06}
            dragMomentum={false}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
            onDragEnd={handleDragEnd}
            style={{ x }}
            tabIndex={0}
            type="button"
            whileDrag={{ scale: 1.04 }}
          >
            <Phone aria-hidden="true" size={18} strokeWidth={2.4} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
