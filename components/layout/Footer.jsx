import { footerLinks } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

export default function Footer() {
  const links = [
    ...footerLinks.socials,
    ...footerLinks.contact,
    ...footerLinks.legal,
  ];

  return (
    <footer className="site-footer" id="contact">
      <SectionContainer>
        <div className="site-footer__cta">
          <h2 className="site-footer__title font-heading font-bold tracking-tight leading-tight">
            Zakaži <AnimatedHighlight text="besplatnu" tone="light" /> procenu
          </h2>
          <Button href="mailto:contact@verdant.rs" variant="secondary">
            Kontaktirajte nas
          </Button>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__tagline">
            VERDANT, Belgrade. Preciznost u svakom pokretu.
          </p>
          <nav aria-label="Footer links" className="site-footer__links">
            {links.map((link) => (
              <a
                className="site-footer__link"
                href={link.href}
                key={`${link.label}-${link.href}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </SectionContainer>
    </footer>
  );
}
