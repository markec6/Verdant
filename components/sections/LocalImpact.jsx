import AnimatedHighlight from "../ui/AnimatedHighlight";
import SectionContainer from "../ui/SectionContainer";
import ServiceMap from "../ui/ServiceMap";
import StatCounter from "../ui/StatCounter";

export default function LocalImpact() {
  return (
    <section className="section">
      <SectionContainer>
        <div className="local-impact">
          <div>
            <p className="section-kicker">Lokalni uticaj</p>
            <h2 className="section-title font-heading font-bold tracking-tight leading-tight">
              Beograd održavan sa <AnimatedHighlight text="pažnjom" />
            </h2>
            <p className="section-copy">
              Fokusirani smo na vlasnike kuća i objekata kojima je potreban
              pouzdan, uredan i dugoročno stabilan standard nege zelenila.
            </p>

            <div className="impact-stat">
              <span className="impact-stat__value">
                <StatCounter />
              </span>
              <span className="impact-stat__label">dvorišta</span>
            </div>
          </div>

          <ServiceMap />
        </div>
      </SectionContainer>
    </section>
  );
}
