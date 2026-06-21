"use client";

import { navItems } from "../../lib/verdantData";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

export default function Header({ activeSection = "top", isOpeningModal, onOpenEstimate }) {
  return (
    <header className="site-header">
      <SectionContainer>
        <div className="site-header__inner">
          <a
            className="site-logo font-heading font-bold tracking-tight"
            href="#top"
            aria-label="VERDANT home"
          >
            VERDANT
          </a>

          <nav className="site-nav" aria-label="Primary navigation">
            <div className="site-nav__links">
              {navItems.map((item) => (
                <a
                  aria-current={activeSection === item.sectionId ? "page" : undefined}
                  className={activeSection === item.sectionId ? "is-active" : ""}
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button isLoading={isOpeningModal} onClick={onOpenEstimate}>
              Zakaži procenu
            </Button>
          </nav>
        </div>
      </SectionContainer>
    </header>
  );
}
