import React, { useEffect, useState } from "react";
import styles from "./SystemSpecInfo.module.css";
import { InfoBlock } from "..";

export const SystemSpecInfo = ({ data }) => {
  const [vals, setVals] = useState([]);
  useEffect(() => {
    if (!data) return;
    setVals([
      {
        title: "System Size",
        trs: [
          {
            key: {
              fst: "PP500 Panels",
            },
            val: data.panelsRequired,
          },
          {
            key: {
              fst: data.emsRequired,
            },
            val: data.emsRequired,
          },
        ],
      },
      {
        title: "System Capacity",
        trs: [
          {
            key: {
              fst: "Peak Power Provid",
            },
            val: data.peakPowerProvidedBySystem,
          },
          {
            key: {
              fst: "Total Power Provided per Day",
            },
            val: data.totalPowerProvidedPerDay,
          },
          {
            key: {
              fst: "Total Floating Output",
            },
            val: data.totalFlaotingOutputOfSystem,
          },
          {
            key: {
              fst: "Battery Capacity",
            },
            val: 0,
          },
          {
            key: {
              fst: "Avg.Daily Capacity",
            },
            val: 0,
          },
          {
            key: {
              fst: "Avg.Monthly Capacity",
            },
            val: 0,
          },
        ],
      },
      {
        title: "Suggested Load Breakdown",
        trs: [
          {
            icon: "Kettle",
            key: {
              fst: "Kettle",
            },
            val: 0,
          },

          {
            icon: "Television",
            key: {
              fst: "Television",
            },
            val: 0,
          },

          {
            icon: "HotPlate",
            key: {
              fst: "Hot Plate",
            },
            val: 0,
          },

          {
            icon: "Light",
            key: {
              fst: "Lights",
            },
            val: 0,
          },
        ],
      },
    ]);
  }, [data]);

  return (
    <div className={styles["system-spec-container"]}>
      {vals &&
        vals.map((dt, id) => <InfoBlock key={`qwsdfdfrduuih_${id}`} {...dt} />)}
    </div>
  );
};
