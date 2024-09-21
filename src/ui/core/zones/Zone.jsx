import React, { useEffect, useState } from "react";
import styles from "./Zone.module.css";
import { ZoneCard } from "./components";

export const ZoneList = () => {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    //fetch zones
    setZones([1, 2, 3]);
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
