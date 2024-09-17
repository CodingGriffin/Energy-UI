import React from "react";
import styles from "./ZoneCard.module.css";
import { Map } from "@vis.gl/react-google-maps";
import { SystemListCard } from "../SystemsListCard/SystemListCard";

export const ZoneCard = ({ zone }) => {
  const zoneInfo = {
    Systems: 12,
    Healthy: 9,
    Warnings: 2,
    Error: 1,
    "Monthly Consumption": "36000kWH",
    "Monthly Revenue": "R36000.00",
  };

  return (
    <div className={styles["zone-card-container"]}>
      <div className={styles["zone-card-header"]}>
        <span className={styles["zone-title"]}>
          Zone01 - Bergbron, Randburg, 1712, South Africa
        </span>
        <span className={styles["zone-id"]}>ID: 9854723</span>
      </div>
      <div className={styles["zone-card-body"]}>
        <div className={styles["zone-from-map"]}>
          <Map
            clickableIcons={false}
            style={{
              userSelect: "none",
              outline: "none",
            }}
            // mapId={"b9e443513213961d"}
            disableDefaultUI={true}
            defaultZoom={6}
            defaultCenter={{ lat: -28.2125, lng: 24.069 }}
          />
        </div>
        <table className={styles["zone-info"]}>
          <tbody>
            {Object.entries(zoneInfo).map(([key, val], id) => {
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
        <SystemListCard />
      </div>
    </div>
  );
};
