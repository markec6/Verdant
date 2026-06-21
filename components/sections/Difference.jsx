"use client";

import { useEffect, useState } from "react";
import { differenceCards } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import SectionContainer from "../ui/SectionContainer";

export default function Difference() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (!expandedId) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!event.target.closest(".difference-card")) {
        setExpandedId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [expandedId]);

  const toggleCard = (cardId) => {
    setExpandedId((current) => (current === cardId ? null : cardId));
  };

  return (
    <section className="section difference-section" id="work">
      <SectionContainer>
        <div className="difference-section__header">
          <p className="section-kicker">Razlika</p>
          <h2 className="section-title font-heading font-bold tracking-tight leading-tight">
            Usluga oblikovana za dvorišta koja traže <AnimatedHighlight text="više" />
          </h2>
          <p className="section-copy">
            VERDANT spaja stručnost, tehnologiju i osećaj za prostor u uslugu
            koja izgleda jednako dobro kao što funkcioniše.
          </p>
        </div>

        <div className="difference-grid">
          {differenceCards.map((card) => {
            const isExpanded = expandedId === card.id;

            return (
              <article
                aria-expanded={isExpanded}
                className={`difference-card ${isExpanded ? "is-expanded" : ""}`.trim()}
                key={card.id}
                onClick={(event) => {
                  event.stopPropagation();
                  toggleCard(card.id);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleCard(card.id);
                  }

                  if (event.key === "Escape") {
                    setExpandedId(null);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="difference-card__surface">
                  <span className="difference-card__icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <div className="difference-card__content">
                    <h3 className="font-heading font-bold tracking-tight leading-tight">
                      {card.id === "team" && (
                        <>Stručni <AnimatedHighlight text="kadar" /></>
                      )}
                      {card.id === "equipment" && (
                        <>Premium <AnimatedHighlight text="oprema" /></>
                      )}
                      {card.id === "eco" && (
                        <><AnimatedHighlight text="Ekološki" /> pristup</>
                      )}
                    </h3>
                    <p>{card.body}</p>
                  </div>

                  <div
                    className={`difference-card__details ${
                      isExpanded ? "is-visible" : ""
                    }`.trim()}
                  >
                    <div className="difference-card__details-inner">
                      <ul className="difference-card__list">
                        {card.details.map((item) => (
                          <li key={item}>
                            <span
                              aria-hidden="true"
                              className="difference-card__bullet"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
