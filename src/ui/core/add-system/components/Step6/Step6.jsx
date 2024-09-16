import React, { useEffect, useState } from "react";
import { Card, FinancialInfo, SystemSpecInfo } from "..";
import { Tab, TextInput } from "common/components";
import { SystemApi } from "api/SystemApi";
import { Validations } from "common/validations";

export const Step6 = ({ systems = [1, 2, 3], user, setUser }) => {
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
              title={systems.length === 1 ? null : `System ${id + 1}`}
              expandable={true}
              autoActivable={true}
              onActivate={() => setActiveSystem(id)}
              isActive={id === activeSystem}
              cardInfo="2 Panels"
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
      <Card title={"Your Email"} cardInfo={user.email} isTitleLg={true} />
      <Card title={"Provide Your details below"} isTitleLg={true}>
        <TextInput
          label={"First Name"}
          onChange={(v) => setUser({ ...user, firstName: v })}
          value={user.firstName}
          hasError={"required firstName"}
          errorMessage={"required firstname"}
        />
        <TextInput
          label={"Last Name"}
          containerStyle={{ marginTop: "10px" }}
          onChange={(v) => setUser({ ...user, lastName: v })}
          value={user.lastName}
          hasError={user.lastName === ""}
          errorMessage={"required lastname"}
        />
        <TextInput
          label={"Phone"}
          containerStyle={{ marginTop: "10px" }}
          onChange={(v) => setUser({ ...user, phone: v })}
          value={user.phone}
          hasError={!Validations.isValidPhone(user.phone)}
          errorMessage={"invalid phone number"}
        />
      </Card>
    </>
  );
};
