import React, { useEffect, useState } from "react";
import {
  Card,
  CodeInputCard,
  EmailInputCard,
  FinancialInfo,
  SystemSpecInfo,
} from "..";
import { Tab, TextInput } from "common/components";
import { SystemApi } from "api/SystemApi";

export const Step5 = ({ systems = [1, 2, 3], email, setUser }) => {
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
              {id === activeSystem && (
                <Tab tabs={["System Specs", "Financials"]}>
                  <SystemSpecInfo  data={calData[activeSystem]}/>
                  <FinancialInfo  data={calData[activeSystem]}/>
                </Tab>
              )}
            </Card>
          );
        })}
      <EmailInputCard email={email} setEmail={(v) => setUser({ email: v })} />
      <CodeInputCard />
    </>
  );
};
