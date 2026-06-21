import AnimatedHighlight from "../ui/AnimatedHighlight";
import SectionContainer from "../ui/SectionContainer";
import ServiceMap from "../ui/ServiceMap";
import StatCounter from "../ui/StatCounter";

export default function LocalImpact() {
  return (
    <section className="section">
      <SectionContainer>
        <div className="local-impact">
          <div className="flex flex-col items-center md:items-start">
            <p className="section-kicker text-center md:text-left">Lokalni uticaj</p>
            <h2 className="section-title font-heading font-bold tracking-tight leading-tight text-center md:text-left">
              Beograd održavan sa <AnimatedHighlight text="pažnjom" />
            </h2>
            <p className="section-copy text-center md:text-left">
              Fokusirani smo na vlasnike kuća i objekata kojima je potreban
              pouzdan, uredan i dugoročno stabilan standard nege zelenila.
            </p>

            <div className="impact-stat text-center md:text-left">
              <span className="impact-stat__value text-center md:text-left">
                <StatCounter />
              </span>
              <span className="impact-stat__label text-center md:text-left">dvorišta</span>
            </div>
          </div>

          <ServiceMap />
        </div>
      </SectionContainer>
    </section>
  );
}
