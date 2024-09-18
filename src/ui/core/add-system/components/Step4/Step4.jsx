import React, { useState } from "react";
import { Card, FinancialInfo, SystemSpecInfo } from "..";
import { Tab, TextInput } from "common/components";
import { Validations } from "common/validations";

export const Step4 = ({ systems = [1, 2, 3], email, setUser, calData }) => {
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
      <Card title="Your Email:" isTitleLg={true}>
        <TextInput
          label="Email Address"
          value={email}
          onChange={(v) => setUser({ email: v })}
          hasError={!Validations.isValidEmail(email)}
          errorMessage="Not Valid Email"
        />
      </Card>
    </>
  );
};
