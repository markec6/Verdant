import { BeforeAfterComparisonSlider, WORD_SPACE } from "../ui/BeforeAfterIllustration";
import SectionContainer from "../ui/SectionContainer";

export default function BeforeAfter() {
  return (
    <section className="section">
      <SectionContainer>
        <div className="comparison">
          <div className="comparison__copy">
            <p className="section-kicker comparison__kicker">Pre i posle</p>
            <h2 className="section-title font-heading font-bold tracking-tight leading-tight">
              Vidljiva{WORD_SPACE}razlika{WORD_SPACE}bez{WORD_SPACE}buke
            </h2>
            <p className="section-copy">
              Interaktivno poređenje pokazuje kako precizno šišanje ivice i
              ritam održavanja menjaju doživljaj celog dvorišta
            </p>
          </div>

          <BeforeAfterComparisonSlider />
        </div>
      </SectionContainer>
    </section>
  );
}
