"use client";

import PremiumCardIllustration from "./PremiumCardIllustration";

type CardExpandRevealProps = {
  detail: string;
  isActive: boolean;
  tone?: "light" | "dark";
  variant: string;
};

export default function CardExpandReveal({
  detail,
  isActive,
  tone = "light",
  variant,
}: CardExpandRevealProps) {
  return (
    <div className="card-expand-reveal">
      <PremiumCardIllustration isActive={isActive} tone={tone} variant={variant} />
      <p className="card-expand-reveal__text text-left">{detail}</p>
    </div>
  );
}
