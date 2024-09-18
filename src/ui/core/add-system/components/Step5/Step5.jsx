import React, { useState } from "react";
import {
  Card,
  CodeInputCard,
  EmailInputCard,
  FinancialInfo,
  SystemSpecInfo,
} from "..";
import { Tab } from "common/components";

export const Step5 = ({ systems = [1, 2, 3], email, setUser, calData }) => {
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
              {id === activeSystem && (
                <Tab tabs={["System Specs", "Financials"]}>
                  <SystemSpecInfo data={calData[activeSystem]} />
                  <FinancialInfo data={calData[activeSystem]} />
                </Tab>
              )}
            </Card>
          );
        })}
      <EmailInputCard email={email} setEmail={(v) => setUser({ email: v })} />
      <CodeInputCard email={email} />
    </>
  );
};
