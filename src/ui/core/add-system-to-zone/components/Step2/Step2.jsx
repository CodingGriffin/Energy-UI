import { Button, Select, TextInput } from "common/components";
import React, { useState } from "react";
import { SystemSpecInfo } from "..";

export const Step2 = () => {
  const options = ["Total Panels", "Total Size(kW)"];
  const [calType, setCalType] = useState("Total Panels");

  return (
    <>
      <Select
        title="Calculation Type"
        options={options}
        value={calType}
        onChange={setCalType}
        style={{ width: "100%" }}
      />
      <TextInput label={calType} containerStyle={{ width: "100%" }} />
      <SystemSpecInfo />
    </>
  );
};
