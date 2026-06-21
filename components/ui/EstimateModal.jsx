"use client";

import { useEffect, useState } from "react";
import AnimatedHighlight from "./AnimatedHighlight";
import Button from "./Button";

export default function EstimateModal({ isOpen, onClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  if (!isOpen || !isMounted) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      aria-labelledby="estimate-modal-title"
      aria-modal="true"
      className="modal"
      role="dialog"
    >
      <button
        aria-label="Close estimate form"
        className="modal__backdrop"
        onClick={onClose}
        type="button"
      />
      <div className="modal__panel">
        <button
          aria-label="Close estimate form"
          className="modal__close"
          onClick={onClose}
          type="button"
        >
          x
        </button>

        <p className="section-kicker">Besplatna procena</p>
        <h2
          className="modal__title font-heading font-bold tracking-tight leading-tight"
          id="estimate-modal-title"
        >
          Zakažite <AnimatedHighlight text="preciznu" /> procenu vašeg dvorišta
        </h2>

        {isSubmitted ? (
          <div className="modal__success">
            Hvala. VERDANT tim će vas kontaktirati sa sledećim korakom.
          </div>
        ) : (
          <form className="modal__form" onSubmit={handleSubmit}>
            <label>
              Ime
              <input name="name" placeholder="Vaše ime" required type="text" />
            </label>
            <label>
              Adresa
              <input
                name="address"
                placeholder="Ulica i deo grada"
                required
                type="text"
              />
            </label>
            <label>
              Tip usluge
              <select defaultValue="" name="serviceType" required>
                <option disabled value="">
                  Izaberite uslugu
                </option>
                <option>Redovno održavanje</option>
                <option>Sezonsko sređivanje</option>
                <option>Premium kompletna nega</option>
              </select>
            </label>
            <Button className="modal__submit" type="submit">
              Pošalji upit
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
