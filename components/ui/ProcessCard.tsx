"use client";

import AnimatedHighlight from "./AnimatedHighlight";
import CardExpandReveal from "./CardExpandReveal";
import CardRevealIndicator from "./CardRevealIndicator";

type ProcessStep = {
  id: string;
  title: string;
  body: string;
  detail: string;
};

type ProcessCardProps = {
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  step: ProcessStep;
};

export default function ProcessCard({
  step,
  index,
  isOpen,
  onToggle,
}: ProcessCardProps) {
  return (
    <article
      aria-expanded={isOpen}
      className={`process-card ${isOpen ? "is-expanded" : ""}`.trim()}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="process-card__main">
        <span className="process-card__num shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="process-card__content min-w-0 flex-1 text-left">
          <h3 className="text-left font-heading font-bold tracking-tight leading-tight">
            <AnimatedHighlight text={step.title} />
          </h3>
          <p className="text-left">{step.body}</p>
          <CardRevealIndicator className="process-card__indicator" isOpen={isOpen} />
        </div>
      </div>

      <div
        className={`process-card__details ${isOpen ? "is-visible" : ""}`.trim()}
      >
        <div className="process-card__details-inner">
          <CardExpandReveal
            detail={step.detail}
            isActive={isOpen}
            tone="dark"
            variant={step.id}
          />
        </div>
      </div>
    </article>
  );
}
