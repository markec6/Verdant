"use client";

import { useEffect, useState } from "react";
import { heroInfoPoints } from "../../lib/verdantData";
import AnimatedHighlight from "../ui/AnimatedHighlight";
import Button from "../ui/Button";
import SectionContainer from "../ui/SectionContainer";

const HERO_IMAGE_BASE =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop";
const HERO_IMAGE_SRC = `${HERO_IMAGE_BASE}&w=800&q=75`;
const HERO_IMAGE_SRCSET = [
  `${HERO_IMAGE_BASE}&w=480&q=75 480w`,
  `${HERO_IMAGE_BASE}&w=800&q=75 800w`,
  `${HERO_IMAGE_BASE}&w=1200&q=75 1200w`,
].join(", ");

export default function Hero({ isOpeningModal, isScrolledPastIntro, onOpenEstimate }) {
  const [isMounted, setIsMounted] = useState(false);
  const [activePoint, setActivePoint] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!activePoint) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!event.target.closest(".hero__marker")) {
        setActivePoint(null);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [activePoint]);

  const togglePoint = (pointId) => {
    setActivePoint((current) => (current === pointId ? null : pointId));
  };

  return (
    <section
      className={`hero ${isScrolledPastIntro ? "hero--scrolled" : ""}`.trim()}
      id="top"
    >
      <SectionContainer>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="section-kicker">Premium lawn care, Belgrade</p>
            <h1 className="hero__title font-heading font-bold tracking-tight leading-tight">
              Preciznost u svakom <AnimatedHighlight text="pokretu" />
            </h1>
            <p className="hero__subtitle">
              Profesionalno održavanje dvorišta u Beogradu.
            </p>
            <div className="hero__methodology">
              <p className="hero__methodology-label">Methodology</p>
            </div>
            <div className="hero__actions">
              <Button isLoading={isOpeningModal} onClick={onOpenEstimate}>
                Zakaži procenu
              </Button>
              <Button href="#process" variant="secondary">
                Naš proces
              </Button>
            </div>
          </div>

          <div className="hero__image" aria-label="Premium maintained lawn">
            <div aria-hidden="true" className="hero__image-surface">
              <img
                alt=""
                className="hero__image-photo"
                decoding="async"
                height={900}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                src={HERO_IMAGE_SRC}
                srcSet={HERO_IMAGE_SRCSET}
                width={1200}
              />
            </div>
            <div className="hero__image-card">
              <div>
                <p className="hero__metric">1,200+</p>
                <p className="hero__metric-label">
                  dvorišta održavana kroz precizan, diskretan i pouzdan proces.
                </p>
              </div>
            </div>

            {heroInfoPoints.map((point) => (
              <button
                aria-expanded={activePoint === point.id}
                aria-label={point.label}
                className={`hero__marker ${
                  activePoint === point.id ? "is-active" : ""
                }`.trim()}
                key={point.id}
                onClick={(event) => {
                  event.stopPropagation();
                  if (isMounted) {
                    togglePoint(point.id);
                  }
                }}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setActivePoint(null);
                  }
                }}
                style={{ top: point.top, left: point.left }}
                type="button"
              >
                <span className="hero__marker-pulse" />
                <span
                  className={`hero__tooltip hero__tooltip--${point.placement} ${
                    activePoint === point.id ? "is-visible" : ""
                  }`.trim()}
                >
                  {point.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
