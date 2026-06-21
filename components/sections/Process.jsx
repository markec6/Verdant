"use client";

import { useEffect, useState } from "react";
import { processSteps } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import ProcessCard from "../ui/ProcessCard";
import SectionContainer from "../ui/SectionContainer";

export default function Process() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    if (!expandedId) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!event.target.closest(".process-card")) {
        setExpandedId(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [expandedId]);

  const toggleCard = (stepId) => {
    setExpandedId((current) => (current === stepId ? null : stepId));
  };

  return (
    <section className="section process-section" id="process">
      <SectionContainer>
        <div className="process-section__header flex flex-col items-center text-center">
          <p className="section-kicker">Process</p>
          <h2 className="section-title font-heading font-bold tracking-tight leading-tight">
            Četiri koraka do prostora koji je uvek{" "}
            <AnimatedHighlight text="spreman" />
          </h2>
          <p className="section-copy">
            Jednostavan tok rada jasna očekivanja i izvedba koja poštuje vreme
            privatnost i izgled vašeg doma
          </p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <ProcessCard
              index={index}
              isOpen={expandedId === step.id}
              key={step.id}
              onToggle={() => toggleCard(step.id)}
              step={step}
            />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
