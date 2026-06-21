"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

const MIN_POSITION = 8;
const MAX_POSITION = 92;
const DEFAULT_POSITION = 50;
const WORD_SPACE = "\u00A0";

function clampPosition(value: number) {
  return Math.min(MAX_POSITION, Math.max(MIN_POSITION, value));
}

function BeforeGrassIllustration({ prefix }: { prefix: string }) {
  return (
    <svg
      aria-hidden="true"
      className="before-after-compare__svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 480"
    >
      <defs>
        <linearGradient id={`${prefix}-before-sky`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#d8dfd2" />
          <stop offset="100%" stopColor="#eef2e8" />
        </linearGradient>
        <linearGradient id={`${prefix}-before-soil`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6b5a43" />
          <stop offset="100%" stopColor="#4f4030" />
        </linearGradient>
      </defs>

      <rect fill={`url(#${prefix}-before-sky)`} height="480" width="800" />
      <rect fill={`url(#${prefix}-before-soil)`} height="170" width="800" y="310" />

      <g fill="none" strokeLinecap="round">
        {[
          [36, 318, 18, 118, "#4f5f34"],
          [58, 322, 28, 142, "#5a4a32"],
          [82, 316, -12, 156, "#3f4f2c"],
          [108, 320, 22, 128, "#6a5238"],
          [132, 324, -18, 168, "#4a5a30"],
          [158, 318, 14, 134, "#5c4630"],
          [184, 322, -24, 182, "#3d4d28"],
          [210, 316, 16, 148, "#6b5536"],
          [236, 320, -10, 162, "#4f5f34"],
          [262, 324, 26, 138, "#5a4a32"],
          [288, 318, -20, 176, "#3f4f2c"],
          [314, 322, 12, 152, "#6a5238"],
          [340, 316, -16, 190, "#4a5a30"],
          [366, 320, 20, 144, "#5c4630"],
          [392, 324, -22, 172, "#3d4d28"],
          [418, 318, 10, 158, "#6b5536"],
          [444, 322, -14, 184, "#4f5f34"],
          [470, 316, 24, 146, "#5a4a32"],
          [496, 320, -26, 198, "#3f4f2c"],
          [522, 324, 18, 154, "#6a5238"],
          [548, 318, -12, 166, "#4a5a30"],
          [574, 322, 22, 140, "#5c4630"],
          [600, 316, -18, 188, "#3d4d28"],
          [626, 320, 14, 150, "#6b5536"],
          [652, 324, -20, 174, "#4f5f34"],
          [678, 318, 16, 136, "#5a4a32"],
          [704, 322, -24, 192, "#3f4f2c"],
          [730, 316, 12, 160, "#6a5238"],
          [756, 320, -16, 178, "#4a5a30"],
        ].map(([x, y, tilt, height, color], index) => (
          <path
            d={`M${x} ${y} q${tilt} ${-height * 0.45} 0 ${-height}`}
            key={`before-${index}`}
            stroke={color}
            strokeWidth={5 + (index % 3)}
          />
        ))}
      </g>

      <g opacity="0.55">
        {[
          [124, 338, 42],
          [286, 346, 36],
          [448, 340, 48],
          [612, 348, 38],
        ].map(([x, y, r], index) => (
          <ellipse
            cx={x}
            cy={y}
            fill="#4a3f2f"
            key={`clump-${index}`}
            rx={r}
            ry={r * 0.45}
          />
        ))}
      </g>
    </svg>
  );
}

function AfterGrassIllustration({ prefix }: { prefix: string }) {
  return (
    <svg
      aria-hidden="true"
      className="before-after-compare__svg"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 480"
    >
      <defs>
        <linearGradient id={`${prefix}-after-sky`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#e4efe2" />
          <stop offset="100%" stopColor="#f4f8f1" />
        </linearGradient>
        <linearGradient id={`${prefix}-after-soil`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#5f6f4f" />
          <stop offset="100%" stopColor="#46553a" />
        </linearGradient>
        <linearGradient id={`${prefix}-after-stripe`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2d5a27" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#2d5a27" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2d5a27" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      <rect fill={`url(#${prefix}-after-sky)`} height="480" width="800" />
      <rect fill={`url(#${prefix}-after-soil)`} height="170" width="800" y="310" />

      <g fill="none" strokeLinecap="round">
        {Array.from({ length: 54 }, (_, index) => {
          const x = 24 + index * 14;
          const height = 34 + (index % 4) * 3;
          const tilt = index % 2 === 0 ? 4 : -4;
          const color =
            index % 3 === 0 ? "#2d5a27" : index % 3 === 1 ? "#3f7a36" : "#4f9a42";

          return (
            <path
              d={`M${x} 318 q${tilt} ${-height * 0.35} 0 ${-height}`}
              key={`after-${index}`}
              stroke={color}
              strokeWidth={4}
            />
          );
        })}
      </g>

      <rect fill={`url(#${prefix}-after-stripe)`} height="90" width="800" y="228" />
      <rect fill="#2d5a27" height="6" opacity="0.35" width="800" y="312" />
    </svg>
  );
}

export function BeforeAfterComparisonSlider() {
  const svgPrefix = useId().replace(/:/g, "");
  const stageRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(DEFAULT_POSITION);
  const [isDragging, setIsDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    const rect = stage.getBoundingClientRect();
    if (!rect.width) {
      return;
    }

    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(clampPosition(next));
  }, []);

  const handlePointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsDragging(true);
    updateFromClientX(event.clientX);
  };

  useEffect(() => {
    if (!isDragging) {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      updateFromClientX(event.clientX);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, updateFromClientX]);

  return (
    <div className="before-after-compare">
      <span className="before-after-compare__tag before-after-compare__tag--before">
        Pre
      </span>
      <span className="before-after-compare__tag before-after-compare__tag--after">
        Posle
      </span>

      <div className="before-after-compare__stage" ref={stageRef}>
        <div className="before-after-compare__layer before-after-compare__layer--before">
          <BeforeGrassIllustration prefix={svgPrefix} />
        </div>

        <div
          className="before-after-compare__layer before-after-compare__layer--after"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <AfterGrassIllustration prefix={svgPrefix} />
        </div>

        <div
          aria-hidden="true"
          className="before-after-compare__divider"
          style={{ left: `${position}%` }}
        />

        <button
          aria-label="Pomerite klizač za poređenje"
          className="before-after-compare__handle"
          onPointerDown={handlePointerDown}
          style={{ left: `${position}%` }}
          type="button"
        >
          <span aria-hidden="true" className="before-after-compare__handle-grip" />
        </button>

        <input
          aria-label="Klizač za poređenje pre i posle"
          className="before-after-compare__range"
          max={MAX_POSITION}
          min={MIN_POSITION}
          onChange={(event) => setPosition(clampPosition(Number(event.target.value)))}
          type="range"
          value={position}
        />
      </div>
    </div>
  );
}

export default function BeforeAfterIllustration() {
  const fieldId = useId();

  return (
    <section aria-labelledby={`${fieldId}-title`} className="ba-illus-demo-wrap">
      <div className="ba-illus-demo-copy">
        <p className="ba-illus-demo-kicker">Pre i posle</p>
        <h2
          className="ba-illus-demo-title font-heading font-bold tracking-tight leading-tight"
          id={`${fieldId}-title`}
        >
          Ilustracija nege travnjaka
        </h2>
        <p className="ba-illus-demo-text">
          Pomerite klizač da vidite razliku između zapuštene i uređene trave
        </p>
      </div>

      <BeforeAfterComparisonSlider />
    </section>
  );
}

export { WORD_SPACE };
