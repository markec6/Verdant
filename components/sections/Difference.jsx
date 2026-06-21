"use client";

import { useEffect, useState } from "react";
import { differenceCards } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import DifferenceCard from "../ui/DifferenceCard";
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
          {differenceCards.map((card) => (
            <DifferenceCard
              card={card}
              isOpen={expandedId === card.id}
              key={card.id}
              onToggle={() => toggleCard(card.id)}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
