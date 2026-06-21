import { processSteps } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import SectionContainer from "../ui/SectionContainer";

export default function Process() {
  return (
    <section className="section" id="process">
      <SectionContainer>
        <p className="section-kicker">Process</p>
        <h2 className="section-title font-heading font-bold tracking-tight leading-tight">
          Četiri koraka do prostora koji je uvek <AnimatedHighlight text="spreman" />
        </h2>
        <p className="section-copy">
          Jednostavan tok rada, jasna očekivanja i izvedba koja poštuje vreme,
          privatnost i izgled vašeg doma.
        </p>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-card__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-heading font-bold tracking-tight leading-tight">
                  <AnimatedHighlight text={step.title} />
                </h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
