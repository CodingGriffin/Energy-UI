import React, { useEffect, useState } from "react";
import styles from "./FinancialInfo.module.css";
import { InfoBlock } from "..";

export const FinancialInfo = ({ data }) => {
  const [vals, setVals] = useState([]);
  useEffect(() => {
    setVals([
      {
        title: "Unit Cost",
        trs: [
          {
            key: {
              fst: "Current Cost per Unit",
            },
            val: `R${data.currentUnitCost}`,
          },
          {
            key: {
              fst: "Projected New Cost per Unit",
            },
            val: 0,
          },
        ],
      },
      {
        title: "Hardware Cost",
        trs: [
          {
            key: {
              fst: "Total PP500 Cost",
              snd: data.panelsRequired,
            },
            val: `R${data.totalCostPanels}`,
          },
          {
            key: {
              fst: "Total EMS Cost",
              snd: data.emsRequired,
            },
            val: `R${data.totalCostEMS}`,
          },
        ],
      },
      {
        title: "Hardware Cost",
        trs: [
          {
            key: {
              fst: "Total Hardware Cost",
              snd: "10",
            },
            val: "R279 000.00",
          },
          {
            key: {
              fst: "Kit Cost",
              snd: "1",
            },
            val: `R${data.costKit}`,
          },
          {
            key: {
              fst: "Delivery Cost",
            },
            val: `R${data.deliveryCost}`,
          },
          {
            key: {
              fst: "Labour",
            },
            val: `R${data.costLabour}`,
          },
          {
            key: {
              fst: "Total Cost Excl",
            },
            val: `R${data.totalCostExcl}`,
          },
          {
            key: {
              fst: "VAT",
            },
            val: `R${data.vatCost}`,
          },
          {
            key: {
              fst: "Total Cost Incl.",
            },
            val: `R${data.totalCostIncl}`,
          },
        ],
      },
      {
        title: "Investment Breakdown",
        trs: [
          {
            key: {
              fst: "Panel Life Expectancy (Years)",
            },
            val: data.systemLifeYears,
          },

          {
            key: {
              fst: "Panel Life Expectancy (Months)",
            },
            val: data.systemLifeMonths,
          },

          {
            key: {
              fst: "LCOE",
            },
            val: `R${data.lcoe}`,
          },

          {
            key: {
              fst: "Maintenance",
              snd: "2%",
            },
            val: `R${data.networkMaintenanceCostPerUnit}`,
          },
          {
            key: {
              fst: "Insurance",
              snd: "2%",
            },
            val: "R0.04",
          },
          {
            key: { fst: "Breakage", snd: "2%" },
            val: "R0.04",
          },
          {
            key: { fst: "Warranty Fund", snd: "0.5%" },
            val: `R${data.warrantyFundCostPerUnit}`,
          },
          { key: { fst: "DBR" }, val: data.dbrCostPerUnit },
          {
            key: { fst: "Service Center", snd: "2%" },
            val: `R${data.serviceCenterCostPerUnit}`,
          },
          {
            key: { fst: "Roof Owner", snd: "0.16%" },
            val: `R${data.roofOwnerCostPerUnit}`,
          },
          {
            key: { fst: "System Owner", snd: "2%" },
            val: `R${data.systemOwnerMarkupCostPerUnit}`,
          },
          { key: { fst: "New Cost per Unit" }, val: `R${data.newCostPerUnit}` },
        ],
      },
    ]);
  }, [data]);

  return (
    <div className={styles["financial-container"]}>
      {vals &&
        vals.map((data, id) => (
          <InfoBlock {...data} key={`weifjfnknbiojowef_${id}`} />
        ))}
    </div>
  );
};
