import React, { useEffect, useState } from "react";
import styles from "./Zone.module.css";
import { ZoneCard } from "./components";
import { cellToBoundary, latLngToCell } from "h3-js";

export const ZoneList = () => {
  const [zones, setZones] = useState([]);

  const getPathFromCenter = (pos) => {
    const h3Index = latLngToCell(pos.lat, pos.lng, 5);
    return cellToBoundary(h3Index).map(([lat, lng]) => ({ lat, lng }));
  };

  useEffect(() => {
    //fetch zones-infact zone has zone-hexid field

    setZones([
      {
        center: { lat: -28.744802253975458, lng: 24.757002591003687 },
        id: 1,
        paths: getPathFromCenter({
          lat: -28.744802253975458,
          lng: 24.757002591003687,
        }),
        info: [
          {
            label: "Systems",
          },
          {
            label: "Healthy",
          },
          {
            label: "Warning",
          },
          {
            label: "Error",
          },
          {
            label: "Monthly Consumption",
          },
          {
            label: "Monthly Revenue",
          },
        ],
        systems: [
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "2 Warnings",
          },
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "3 Warnings",
          },
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "Installation Pending",
          },
        ],
      },
      {
        center: { lat: -28.744802253975458, lng: 24.757002591003687 },
        id: 2,
        paths: getPathFromCenter({
          lat: -28.744802253975458,
          lng: 24.757002591003687,
        }),
        info: [
          {
            label: "Systems",
          },
          {
            label: "Healthy",
          },
          {
            label: "Warning",
          },
          {
            label: "Error",
          },
          {
            label: "Monthly Consumption",
          },
          {
            label: "Monthly Revenue",
          },
        ],
        systems: [
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "2 Warnings",
          },
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "2 Alert",
          },
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "Live",
          },
        ],
      },
      {
        center: { lat: -28.744802253975458, lng: 24.757002591003687 },
        id: 3,
        paths: getPathFromCenter({
          lat: -28.744802253975458,
          lng: 24.757002591003687,
        }),
        info: [
          {
            label: "Systems",
          },
          {
            label: "Healthy",
          },
          {
            label: "Warning",
          },
          {
            label: "Error",
          },
          {
            label: "Monthly Consumption",
          },
          {
            label: "Monthly Revenue",
          },
        ],
        systems: [
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "2 Warnings",
          },
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "2 Alert",
          },
          {
            updatedAt: "2024/04/30",
            formatted_address:
              "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1520kW",
            income: "R 1200.26",
            status: "Live",
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className={styles["page"]}>
      <div className={styles["container"]}>
        {zones &&
          zones.map((zone, id) => <ZoneCard key={`zone_${id}`} zone={zone} />)}
      </div>
    </div>
  );
};
