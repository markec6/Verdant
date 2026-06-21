"use client";

import { useEffect, useState } from "react";

export default function StatCounter({ target = 1200 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId;
    const duration = 1200;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return <span>{value.toLocaleString("en-US")}+</span>;
}
