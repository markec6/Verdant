"use client";

import { useState } from "react";
import { serviceZones } from "../../lib/verdantData";

export default function ServiceMap() {
  const [activeZone, setActiveZone] = useState(serviceZones[0].name);

  return (
    <div className="service-map" aria-label="VERDANT service area in Belgrade">
      <div className="service-map__river" />
      {serviceZones.map((zone) => (
        <button
          className={`service-map__zone ${
            activeZone === zone.name ? "is-active" : ""
          }`.trim()}
          data-zone={zone.name}
          key={zone.name}
          onClick={() => setActiveZone(zone.name)}
          style={{ top: zone.top, left: zone.left }}
          type="button"
        >
          {zone.name}
        </button>
      ))}

      <div className="service-map__caption">
        Aktivna zona: <strong>{activeZone}</strong>. Pokrivamo premium
        rezidencijalne delove Beograda uz dogovoreni termin i stalni standard
        održavanja.
      </div>
    </div>
  );
}
