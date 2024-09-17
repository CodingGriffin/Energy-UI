import React, { useEffect, useState } from "react";
import { Card, FinancialInfo, Panel, SystemSpecInfo } from "..";
import { Tab } from "common/components";
import { SystemApi } from "api/SystemApi";

export const Step3 = ({ systems = [1, 2, 3] }) => {
  const [activeSystem, setActiveSystem] = useState(-1);
  const [calData, setCalData] = useState(systems.map((s, id) => null));

  useEffect(() => {
    if (activeSystem < 0) return;
    console.log("sys===>", systems);
    SystemApi.calculate({
      totalCost: systems[activeSystem].currentMonthlyCost,
      totalConsumption: systems[activeSystem].monthlyConsumption,
      totalBoards: systems[activeSystem].totalBoards,
      totalRooms: systems[activeSystem].totalRooms,
    }).then((res) => {
      console.log("cal==>", res.data);
      setCalData(
        calData.map((dt, id) => {
          if (id !== activeSystem) return dt;
          return Object.keys(res.data).reduce((acc, key) => {
            const val = res.data[key];
            acc[key] =
              typeof val === "string"
                ? parseFloat(val).toFixed(2)
                : val.toString().indexOf(".") > 0
                ? val.toFixed(2)
                : val;
            return acc;
          }, {});
        })
      );
    });
  }, [systems, activeSystem]);
  return (
    <>
      {systems &&
        systems.map((system, id) => {
          return (
            <Card
              key={`system_${id}`}
              title={`System ${id + 1}`}
              expandable={true}
              autoActivable={true}
              onActivate={() => setActiveSystem(id)}
              isActive={id === activeSystem}
              cardInfo="2 Panels"
            >
              <Tab tabs={["System Specs", "Financials"]}>
                <SystemSpecInfo data={calData[activeSystem]} />
                <FinancialInfo data={calData[activeSystem]} />
              </Tab>
            </Card>
          );
        })}
    </>
  );
};
