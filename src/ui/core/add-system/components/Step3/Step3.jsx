import React, { useState } from "react";
import { Card, FinancialInfo, Panel, SystemSpecInfo } from "..";
import { Tab } from "common/components";

export const Step3 = ({ systems = [1, 2, 3], calData }) => {
  const [activeSystem, setActiveSystem] = useState(-1);

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
              cardInfo={`${calData[id].specifications.systemSize.pp500Panels} Panels`}
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
