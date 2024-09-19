import React, { useEffect, useState } from "react";
import styles from "./SystemSpecInfo.module.css";
import { InfoBlock } from "..";

export const SystemSpecInfo = ({ data }) => {
  const [vals, setVals] = useState([]);
  useEffect(() => {
    if (!data) return;
    console.log(data);
    const { systemSize, systemCapacity, suggestedLoadBreakdown } =
      data.specifications;
    setVals([
      {
        title: "System Size",
        trs: [
          {
            key: {
              fst: "PP500 Panels",
            },
            val: systemSize.pp500Panels,
          },
          {
            key: {
              fst: "EMS",
            },
            val: systemSize.ems,
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
            val: systemCapacity.peakPowerProvided,
          },
          {
            key: {
              fst: "Total Power Provided per Day",
            },
            val: systemCapacity.totalPowerProvidedPerDay,
          },
          {
            key: {
              fst: "Total Floating Output",
            },
            val: systemCapacity.totalFloatingOutputOfSystem,
          },
          {
            key: {
              fst: "Battery Capacity",
            },
            val: systemCapacity.batteryCapacity,
          },
          {
            key: {
              fst: "Avg.Daily Capacity",
            },
            val: systemCapacity.avgDailyCapacity,
          },
          {
            key: {
              fst: "Avg.Monthly Capacity",
            },
            val: systemCapacity.avgMonthlyCapacity,
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
            val: suggestedLoadBreakdown.kettle,
          },

          {
            icon: "Television",
            key: {
              fst: "Television",
            },
            val: suggestedLoadBreakdown.television,
          },

          {
            icon: "HotPlate",
            key: {
              fst: "Hot Plate",
            },
            val: suggestedLoadBreakdown.hotPlate,
          },

          {
            icon: "Light",
            key: {
              fst: "Lights",
            },
            val: suggestedLoadBreakdown.lights,
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
