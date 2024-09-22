import React, { useMemo, useState } from "react";
import { Card, FinancialInfo, Panel, SystemSpecInfo } from "..";
import { Tab } from "common/components";

export const Step3 = (props) => {
  const [activeSystem, setActiveSystem] = useState(-1);

  const panelActions = useMemo(() => {
    return {
      handleNext: () => props.setCurrentStep(props.currentStep + 1),
      handlePrev: () => props.setCurrentStep(props.currentStep - 1),
    };
  }, [props.setCurrentStep, props.currentStep]);

  console.log("sys==>", props.systems);
  return (
    <Panel title="System Scoping" actions={panelActions}>
      {props.systems.map((system, id) => {
        if (props.isSame && id !== 0) return;
        return (
          <Card
            key={`system_${id}`}
            title={`System ${props.isSame ? "" : id + 1}`}
            expandable={true}
            autoActivable={true}
            onActivate={() => setActiveSystem(id)}
            isActive={id === activeSystem}
            cardInfo={`${system.calData.specifications.systemSize.pp500Panels} Panels`}
          >
            {activeSystem !== -1 && (
              <Tab tabs={["System Specs", "Financials"]}>
                <SystemSpecInfo data={props.systems[activeSystem].calData} />
                <FinancialInfo data={props.systems[activeSystem].calData} />
              </Tab>
            )}
          </Card>
        );
      })}
    </Panel>
  );
};
