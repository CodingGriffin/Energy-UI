import React, { useEffect, useState, useMemo } from "react";
import { Card, FinancialInfo, Input, Panel, SystemSpecInfo } from "..";
import { Button, Select, Spin, Tab, TextInput } from "common/components";
import { useSpin } from "common/hooks";
import styles from "./Step2.module.css";
import { SystemApi } from "api/SystemApi";
import { Validations } from "common/validations";

export const Step2 = ({ systems = [1, 2, 3], setSystems }) => {
  const [calType, setCalType] = useState("Monthly Consumption");
  const [monthlyConsumption, setMonthlyConsumption] = useState(0);
  const [currentMonthlyCost, setCurrentMonthlyCost] = useState(0);
  const [activeSystem, setActiveSystem] = useState(0);
  const [calData, setCalData] = useState(systems.map(() => null));
  const totalRooms = useSpin(0);
  const totalBoards = useSpin(0);
  const totalPanels = useSpin(0);
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
    console.log("hhh");
    setSystems(
      systems.map((system, id) => {
        if (id !== activeSystem) return system;
        else
          return {
            ...system,
            monthlyConsumption,
            currentMonthlyCost,
            totalBoards: totalBoards.value,
            totalRooms: totalRooms.value,
          };
      })
    );
  }, [
    currentMonthlyCost,
    monthlyConsumption,
    totalBoards.value,
    totalRooms.value,
  ]);

  useEffect(() => {
    console.log("tot===>", totalBoards);
    totalBoards.handles.onInputChange &&
      totalBoards.handles.onInputChange(systems[activeSystem].totalBoards);
    totalRooms.handles.onInputChange &&
      totalRooms.handles.onInputChange(systems[activeSystem].totalRooms);
    setMonthlyConsumption(systems[activeSystem].monthlyConsumption);
    setCurrentMonthlyCost(systems[activeSystem].currentMonthlyCost);
  }, [activeSystem]);

  const handleCalculate = async () => {
    console.log("ok", Validations.isNonNegativeNumber("3"));
    const isValid = await validate();
    if (!isValid) return;
    else {
      console.log("err===>", inputErrors);
      SystemApi.calculate({
        totalCost: currentMonthlyCost,
        totalConsumption: monthlyConsumption,
        totalBoards: totalBoards.value,
        totalRooms: totalRooms.value,
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
    }
  };

  return (
    <>
      {systems && systems.length !== 1 && (
        <span className={styles["system-number"]}>{`System ${
          activeSystem + 1
        } of ${systems.length} `}</span>
      )}
      {systems &&
        systems.map((system, id) => {
          return (
            <Card
              key={`system_${id}`}
              title={systems.length === 1 ? null : `System ${id + 1}`}
              expandable={true}
              onActivate={() => setActiveSystem(id)}
              isActive={id === activeSystem}
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
                  />
                  {calData[activeSystem] && (
                    <Tab tabs={["System Specs", "Financials"]}>
                      <SystemSpecInfo data={calData[activeSystem]} />
                      <FinancialInfo data={calData[activeSystem]} />
                    </Tab>
                  )}
                </>
              )}
            </Card>
          );
        })}
    </>
  );
};
