"use client";

import AnimatedHighlight from "./AnimatedHighlight";
import CardExpandReveal from "./CardExpandReveal";
import CardRevealIndicator from "./CardRevealIndicator";

type DifferenceCardData = {
  id: string;
  icon: string;
  body: string;
  detail: string;
};

type DifferenceCardProps = {
  card: DifferenceCardData;
  isOpen: boolean;
  onToggle: () => void;
};

export default function DifferenceCard({
  card,
  isOpen,
  onToggle,
}: DifferenceCardProps) {
  return (
    <article
      aria-expanded={isOpen}
      className={`difference-card ${isOpen ? "is-expanded" : ""}`.trim()}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }

        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="difference-card__surface">
        <span className="difference-card__icon" aria-hidden="true">
          {card.icon}
        </span>

        <div className="difference-card__content text-left">
          <h3 className="text-left font-heading font-bold tracking-tight leading-tight">
            {card.id === "team" && (
              <>
                Stručni <AnimatedHighlight text="kadar" />
              </>
            )}
            {card.id === "equipment" && (
              <>
                Premium <AnimatedHighlight text="oprema" />
              </>
            )}
            {card.id === "eco" && (
              <>
                <AnimatedHighlight text="Ekološki" /> pristup
              </>
            )}
          </h3>
          <p className="text-left">{card.body}</p>
          <CardRevealIndicator className="difference-card__indicator" isOpen={isOpen} />
        </div>

        <div
          className={`difference-card__details ${isOpen ? "is-visible" : ""}`.trim()}
        >
          <div className="difference-card__details-inner">
            <CardExpandReveal
              detail={card.detail}
              isActive={isOpen}
              variant={card.id}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
