"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useIsMobile from "../lib/useIsMobile";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import BeforeAfter from "./sections/BeforeAfter";
import Difference from "./sections/Difference";
import Hero from "./sections/Hero";
import LocalImpact from "./sections/LocalImpact";
import Process from "./sections/Process";
import EstimateModal from "./ui/EstimateModal";

const observedSections = ["top", "work", "process", "contact"];

export default function HomePageClient() {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolledPastIntro, setIsScrolledPastIntro] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isOpeningModal, setIsOpeningModal] = useState(false);
  const modalTimerRef = useRef(null);

  const openEstimate = useCallback(() => {
    if (isOpeningModal || isEstimateOpen) {
      return;
    }

    setIsOpeningModal(true);
    modalTimerRef.current = window.setTimeout(() => {
      setIsOpeningModal(false);
      setIsEstimateOpen(true);
    }, 420);
  }, [isEstimateOpen, isOpeningModal]);

  const closeEstimate = useCallback(() => {
    setIsEstimateOpen(false);
  }, []);

  useEffect(() => {
    return () => {
      if (modalTimerRef.current) {
        window.clearTimeout(modalTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsScrolledPastIntro(false);
      return undefined;
    }

    let frameId = 0;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      frameId = window.requestAnimationFrame(() => {
        setIsScrolledPastIntro(window.scrollY > 200);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frameId);
    };
  }, [isMobile]);

  useEffect(() => {
    const elements = observedSections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site-shell">
      <Header
        activeSection={activeSection}
        isOpeningModal={isOpeningModal}
        onOpenEstimate={openEstimate}
      />
      <Hero
        isOpeningModal={isOpeningModal}
        isScrolledPastIntro={isScrolledPastIntro}
        onOpenEstimate={openEstimate}
      />
      <Difference />
      <BeforeAfter />
      <Process />
      <LocalImpact />
      <Footer />
      <EstimateModal isOpen={isEstimateOpen} onClose={closeEstimate} />
    </main>
  );
}
