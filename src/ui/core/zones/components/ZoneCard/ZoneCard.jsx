import React from "react";
import styles from "./ZoneCard.module.css";
import { Map } from "@vis.gl/react-google-maps";
import { SystemListCard } from "../SystemsListCard/SystemListCard";
import { Polygon } from "common/components/map/polygon/Polygon";

export const ZoneCard = ({ zone }) => {
  return (
    <div className={styles["zone-card-container"]}>
      <div className={styles["zone-card-header"]}>
        <span className={styles["zone-title"]}>
          Zone01 - Bergbron, Randburg, 1712, South Africa
        </span>
        <span className={styles["zone-id"]}>ID: {zone.id}</span>
      </div>
      <div className={styles["zone-card-body"]}>
        <div className={styles["zone-from-map"]}>
          <Map
            clickableIcons={false}
            style={{
              userSelect: "none",
              outline: "none",
            }}
            mapTypeId="hybrid"
            disableDefaultUI={true}
            defaultZoom={11}
            defaultCenter={zone.center}
          >
            <Polygon
              paths={zone.paths}
              data={{ status: "reserved" }}
              reservedOpacity={0.3}
            />
          </Map>
        </div>
        <table className={styles["zone-info"]}>
          <tbody>
            {Object.entries(zone.info).map(([key, val], id) => {
              return (
                <tr className={styles["tr"]} key={`${key}_${id}`}>
                  <td className={styles["key"]}>{key}</td>
                  <td className={styles["val"]}>{val}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles["zone-card-footer"]}>
        <SystemListCard systems={zone.systems} />
      </div>
    </div>
  );
};
