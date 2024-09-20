import React, { useEffect, useState, useMemo } from "react";
import { Card, FinancialInfo, Panel, SystemSpecInfo } from "..";
import { Button, Select, Spin, Tab, TextInput } from "common/components";
import { useSpin } from "common/hooks";
import styles from "./Step2.module.css";
import { SystemApi } from "api/SystemApi";
import { Validations } from "common/validations";

export const Step2 = (props) => {
  const [calType, setCalType] = useState("Monthly Consumption");
  const [monthlyConsumption, setMonthlyConsumption] = useState(0);
  const [currentMonthlyCost, setCurrentMonthlyCost] = useState(0);
  const [activeSystem, setActiveSystem] = useState(0);
  const [investerSize, setInvesterSize] = useState(0);
  const [isValidNext, setIsValidNext] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const totalRooms = useSpin("3");
  const totalBoards = useSpin("1");
  const totalPanels = useSpin("0");

  // const handleNextStep = async () => {
  //   //this function save the calculated data
  //   const results = await Promise.all(
  //     systems.map((system, id) =>
  //       SystemApi.calculate({
  //         currentMonthlyCost: system.currentMonthlyCost,
  //         monthlyConsumption: system.monthlyConsumption,
  //         totalDistributionBoards: system.totalBoards,
  //         totalRooms: system.totalRooms,
  //         investerSize: system.investerSize,
  //         totalPanels: system.totalPanels,
  //       }).then((res) => ({ calData: res.data, ...props.system }))
  //     )
  //   );

  //   setCalData(results);
  //   // props.setSystems(systems)
  //   props.setCurrentStep(props.currentStep + 1);
  // };

  const panelActions = useMemo(() => {
    return {
      handleNext: async () => {
        if (activeSystem === props.systems.length - 1 || props.isSame) {
          //setCalData
          // handleNextStep();
          // console.log("oks");
          props.setCurrentStep(props.currentStep + 1);
        } else setActiveSystem(activeSystem + 1);
      },
      handlePrev: () => {
        if (activeSystem === 0) {
          props.setCurrentStep(props.currentStep - 1);
        } else setActiveSystem(activeSystem - 1);
      },
    };
  }, [
    activeSystem,
    setActiveSystem,
    props.systems,
    props.setCurrentStep,
    props.currentStep,
  ]);

  const [inputErrors, setInputErrors] = useState({
    monthlyConsumption: false,
    currentMonthlyCost: false,
    totalBoards: false,
    totalRooms: false,
  });

  const options = [
    "Monthly Consumption",
    "System Invester Size",
    "Total Panels",
  ];

  const validate = async () => {
    console.log("tot", totalBoards.value, typeof totalBoards.value);
    setInputErrors({
      monthlyConsumption: !Validations.isNonNegativeNumber(monthlyConsumption),
      currentMonthlyCost: !Validations.isNonNegativeNumber(currentMonthlyCost),
      totalRooms: !Validations.isNonNegativeNumber(totalRooms.value),
      totalBoards: !Validations.isNonNegativeNumber(totalBoards.value),
    });
    return (
      Validations.isNonNegativeNumber(monthlyConsumption) &&
      Validations.isNonNegativeNumber(currentMonthlyCost) &&
      Validations.isNonNegativeNumber(totalRooms.value) &&
      Validations.isNonNegativeNumber(totalBoards.value)
    );
  };

  useEffect(() => {
    setIsValidNext(false);
    props.setSystems(
      props.systems.map((system, id) => {
        if (id !== activeSystem && !props.isSame) return system;
        else
          return {
            ...system,
            monthlyConsumption,
            currentMonthlyCost,
            investerSize,
            totalBoards: totalBoards.value,
            totalRooms: totalRooms.value,
            totalPanels: totalPanels.value,
          };
      })
    );
  }, [
    investerSize,
    currentMonthlyCost,
    monthlyConsumption,
    totalBoards.value,
    totalRooms.value,
    totalPanels.value,
  ]);

  useEffect(() => {
    totalBoards.handles.onInputChange &&
      totalBoards.handles.onInputChange(
        props.systems[activeSystem].totalBoards
      );
    totalRooms.handles.onInputChange &&
      totalRooms.handles.onInputChange(props.systems[activeSystem].totalRooms);
    setMonthlyConsumption(props.systems[activeSystem].monthlyConsumption);
    setCurrentMonthlyCost(props.systems[activeSystem].currentMonthlyCost);
  }, [activeSystem]);

  const handleCalculate = async () => {
    const isValid = await validate();
    if (!isValid) return;
    else {
      console.log("err===>", inputErrors);
      setIsValidNext(true);
      setIsCalculating(true);
      SystemApi.calculate({
        currentMonthlyCost,
        monthlyConsumption,
        totalDistributionBoards: totalBoards.value,
        totalRooms: totalRooms.value,
        investerSize,
        totalPanels: totalPanels.value,
      }).then((res) => {
        console.log("cal==>", res.data);
        props.setSystems(
          props.systems.map((system, id) => {
            if (!props.isSame && id !== activeSystem) return system;
            return { ...system, calData: res.data };
          })
        );
        setIsCalculating(false);
      });
    }
  };

  return (
    <Panel
      title="System Scoping"
      actions={panelActions}
      validNext={isValidNext}
    >
      {props.systems.length !== 1 && !props.isSame && (
        <span className={styles["system-number"]}>{`System ${
          activeSystem + 1
        } of ${props.systems.length} `}</span>
      )}
      {props.systems.map((system, id) => {
        if (props.isSame && id !== 0) return null;
        return (
          <Card
            key={`system_${id}`}
            title={
              props.systems.length === 1 || props.isSame
                ? null
                : `System ${id + 1}`
            }
            expandable={true}
            onActivate={() => setActiveSystem(id)}
            isActive={id === activeSystem}
            isFrozen={true}
          >
            {id === activeSystem && (
              <>
                <Select
                  options={options}
                  value={calType}
                  onChange={setCalType}
                  title="Calculation Type"
                />
                {calType === "System Invester Size" ? (
                  <TextInput
                    label="Invester Size"
                    containerStyle={{
                      margin: "5px 0",
                    }}
                    rightIcon={
                      <span style={{ color: "black", marginRight: "10px" }}>
                        KW
                      </span>
                    }
                    onChange={(v) => setInvesterSize(v)}
                    value={investerSize}
                  />
                ) : calType === "Total Panels" ? (
                  <Spin {...totalPanels} placeholder="Total Panels" />
                ) : null}
                <TextInput
                  label="Monthly Consumption"
                  value={monthlyConsumption}
                  containerStyle={{
                    margin: "5px 0",
                  }}
                  onChange={(v) => setMonthlyConsumption(v)}
                  rightIcon={
                    <span style={{ color: "black", marginRight: "10px" }}>
                      KWh
                    </span>
                  }
                  hasError={inputErrors.monthlyConsumption}
                  errorMessage="you can input only numbers"
                />
                <TextInput
                  label="Current Monthly Cost"
                  value={currentMonthlyCost}
                  onChange={(v) => setCurrentMonthlyCost(v)}
                  rightIcon={
                    <span style={{ color: "black", marginRight: "10px" }}>
                      R
                    </span>
                  }
                  hasError={inputErrors.currentMonthlyCost}
                  errorMessage="you can input only numbers"
                />
                <Spin
                  {...totalRooms}
                  placeholder="Total Rooms"
                  hasError={inputErrors.totalRooms}
                />
                <Spin
                  {...totalBoards}
                  placeholder="Total Distributed Boards"
                  hasError={inputErrors.totalBoards}
                />
                <Button
                  type="secondary"
                  text="Calculate"
                  style={{ margin: "10px 0" }}
                  onClick={handleCalculate}
                  loading={isCalculating}
                />
                {props.systems[activeSystem].calData && (
                  <Tab tabs={["System Specs", "Financials"]}>
                    <SystemSpecInfo
                      data={props.systems[activeSystem].calData}
                    />
                    <FinancialInfo data={props.systems[activeSystem].calData} />
                  </Tab>
                )}
              </>
            )}
          </Card>
        );
      })}
    </Panel>
  );
};
