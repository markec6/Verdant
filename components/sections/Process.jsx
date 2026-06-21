import { processSteps } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import SectionContainer from "../ui/SectionContainer";

export default function Process() {
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
            <article
              className="process-card flex w-full flex-row items-start justify-start gap-5 text-left"
              key={step.title}
            >
              <span className="process-card__num shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="process-card__content min-w-0 flex-1 text-left">
                <h3 className="text-left font-heading font-bold tracking-tight leading-tight">
                  <AnimatedHighlight text={step.title} />
                </h3>
                <p className="text-left">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
