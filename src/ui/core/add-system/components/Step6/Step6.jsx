import React, { useEffect, useState } from "react";
import { Card, FinancialInfo, SystemSpecInfo } from "..";
import { Tab, TextInput } from "common/components";
import { Validations } from "common/validations";

export const Step6 = ({ systems = [1, 2, 3], user, setUser, calData }) => {
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
      <Card title={"Your Email"} cardInfo={user.email} isTitleLg={true} />
      <Card title={"Provide Your details below"} isTitleLg={true}>
        <TextInput
          label={"First Name"}
          onChange={(v) => setUser({ ...user, firstName: v })}
          value={user.firstName}
          hasError={user.firstName === "" || !user.firstName}
          errorMessage={"required firstname"}
        />
        <TextInput
          label={"Last Name"}
          containerStyle={{ marginTop: "10px" }}
          onChange={(v) => setUser({ ...user, lastName: v })}
          value={user.lastName}
          hasError={user.lastName === "" || !user.lastName}
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
