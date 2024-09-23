import React, { useEffect, useState } from "react";
import styles from "./FinancialInfo.module.css";
import { InfoBlock } from "..";

export const FinancialInfo = ({ data }) => {
  const [vals, setVals] = useState([]);
  useEffect(() => {
    if (!data) return;
    const { unitCost, hardwareCost, investmentBreakdown } = data.financials;
    setVals([
      {
        title: "Unit Cost",
        trs: [
          {
            key: {
              fst: "Current Cost per Unit",
            },
            val: unitCost.currentCostPerUnit,
          },
          {
            key: {
              fst: "Projected New Cost per Unit",
            },
            val: unitCost.projectedNewCostPerUnit,
          },
        ],
      },
      {
        title: "Hardware Cost",
        trs: [
          {
            key: {
              fst: "Total PP500 Cost",
              snd: data.specifications.systemSize.pp500Panels,
            },
            val: hardwareCost.totalPP500Cost,
          },
          {
            key: {
              fst: "Total EMS Cost",
              snd: data.specifications.systemSize.ems,
            },
            val: hardwareCost.totalEMSCost,
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
            val: hardwareCost.totalHardwareCost,
          },
          {
            key: {
              fst: "Kit Cost",
              snd: "1",
            },
            val: hardwareCost.kitCost,
          },
          {
            key: {
              fst: "Delivery Cost",
            },
            val: hardwareCost.deliveryCost,
          },
          {
            key: {
              fst: "Labour",
            },
            val: hardwareCost.labour,
          },
          {
            key: {
              fst: "Total Cost Excl",
            },
            val: hardwareCost.totalCostExclVat,
          },
          {
            key: {
              fst: "VAT",
            },
            val: hardwareCost.vat,
          },
          {
            key: {
              fst: "Total Cost Incl.",
            },
            val: hardwareCost.totalCostInclVAT,
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
            val: investmentBreakdown.panelLifeExpectancy.years,
          },

          {
            key: {
              fst: "Panel Life Expectancy (Months)",
            },
            val: investmentBreakdown.panelLifeExpectancy.months,
          },

          {
            key: {
              fst: "LCOE",
            },
            val: investmentBreakdown.lcoe,
          },

          {
            key: {
              fst: "Maintenance",
              snd: "2%",
            },
            val: investmentBreakdown.maintenance,
          },
          {
            key: {
              fst: "Insurance",
              snd: "2%",
            },
            val: investmentBreakdown.insurance,
          },
          {
            key: { fst: "Breakage", snd: "2%" },
            val: investmentBreakdown.breakage,
          },
          {
            key: { fst: "Warranty Fund", snd: "0.5%" },
            val: investmentBreakdown.warrantyFund,
          },
          { key: { fst: "DBR" }, val: investmentBreakdown.dbr },
          {
            key: { fst: "Service Center", snd: "2%" },
            val: investmentBreakdown.serviceCenter,
          },
          {
            key: { fst: "Roof Owner", snd: "0.16%" },
            val: investmentBreakdown.roofOwner,
          },
          {
            key: { fst: "System Owner", snd: "2%" },
            val: investmentBreakdown.systemOwner,
          },
          {
            key: { fst: "New Cost per Unit" },
            val: investmentBreakdown.newCostPerUnit,
          },
        ],
      },
    ]);
  }, [data]);

  return (
    <div className={styles["financial-container"]}>
      {vals &&
        vals.map((dt, id) => (
          <InfoBlock {...dt} key={`weifjfnknbiojowef_${id}`} />
        ))}
    </div>
  );
};
