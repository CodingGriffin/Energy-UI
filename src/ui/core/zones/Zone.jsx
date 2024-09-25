import React, { useEffect, useState } from "react";
import styles from "./Zone.module.css";
import { ZoneCard } from "./components";
import { cellToBoundary, latLngToCell } from "h3-js";
import { SystemApi } from "api";

export const ZoneList = () => {
  const [zones, setZones] = useState([]);

  const getPathFromCenter = (pos) => {
    const h3Index = latLngToCell(pos.lat, pos.lng, 5);
    return cellToBoundary(h3Index).map(([lat, lng]) => ({ lat, lng }));
  };

  useEffect(() => {
    //fetch zones-infact zone has zone-hexid field
    (async () => {
      const res = await SystemApi.getZones();
      console.log("res===>", res);
      setZones(
        res.data.map((z) => ({
          center: { lat: -28.744802253975458, lng: 24.757002591003687 },
          id: z.zone_id,
          paths: getPathFromCenter({
            lat: -28.744802253975458,
            lng: 24.757002591003687,
          }),
          info: {
            Systems: z.Systems,
            Healthy: z.Healthy,
            Warning: z.Warning,
            Error: z.Error,
            "Monthly Consumption": `${z["Monthly Consumption"]} kWh`,
            "Monthly Revenue": `R ${z["Monthly Revenue"]}`,
          },
          systems: z.system_entities,
        }))
      );
    })();
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
