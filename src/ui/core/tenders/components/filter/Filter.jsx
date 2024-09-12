import { useState } from "react";

import { TextInput } from "common/components";
import styles from "./Filter.module.css";

export const Filter = () => {
  const [formatted_address, setFormatted_address] = useState("");
  const [address_id, setAddress_id] = useState("");
  const [less_lcoe, setLessLcoe] = useState("");
  const [less_panel, setLessPanel] = useState("");
  const [less_roi, setLessRoi] = useState("");
  const [less_irr, setLessIrr] = useState("");
  const [less_mck, setLessMck] = useState("");
  const [less_cost, setLessCost] = useState("");
  const [less_income, setLessIncome] = useState("");
  const [less_consumption, setLessConsumption] = useState("");
  const [more_consumption, setMoreConsumption] = useState("");
  const [systemId, setSystemId] = useState("");

  const [more_lcoe, setMore_lcoe] = useState("");
  const [more_panel, setMorePanel] = useState("");
  const [more_roi, setMoreRoi] = useState("");
  const [more_irr, setMoreIrr] = useState("");
  const [more_mck, setMoreMck] = useState("");
  const [more_cost, setMoreCost] = useState("");
  const [more_income, setMoreIncome] = useState("");

  return (
    <>
      <tr className={styles.tr} style={{ background: "white" }}>
        <th className={styles.thFirst}>
          <TextInput
            value={systemId}
            setValue={setSystemId}
            onEndEditing={() => {}}
            containerStyle={{ width: "120px", height: "46px", margin: "0px" }}
            placeholder="System ID"
          />
        </th>
        <th
          className={styles.th}
          style={{
            minWidth: "250px",
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <TextInput
            value={formatted_address}
            setValue={setFormatted_address}
            onEndEditing={() => {}}
            containerStyle={{
              width: "250px",
              height: "46px",
              marginLeft: "5px",
            }}
            placeholder="Address"
          />
          <span style={{ fontSize: "10px" }}>Less Than</span>
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_lcoe}
            setValue={setLessLcoe}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<LCOE"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_roi}
            setValue={setLessRoi}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<ROI"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_irr}
            setValue={setLessIrr}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<IRR"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_consumption}
            setValue={setLessConsumption}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_income}
            setValue={setLessIncome}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Income"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_cost}
            setValue={setLessCost}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Cost"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_panel}
            setValue={setLessPanel}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Panels"
          />
        </th>
      </tr>

      <tr className={styles.tr} style={{ background: "white" }}>
        <th className={styles.thFirst}>
          <div style={{ width: "120px", height: "46px", margin: "0px" }} />
        </th>
        <th
          className={styles.th}
          style={{
            minWidth: "250px",
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div style={{ width: "120px", height: "46px", margin: "0px" }} />
          <span style={{ fontSize: "10px" }}>More Than</span>
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_lcoe}
            setValue={setMore_lcoe}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<LCOE"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_roi}
            setValue={setMoreRoi}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<ROI"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_irr}
            setValue={setMoreIrr}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<IRR"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_consumption}
            setValue={setMoreConsumption}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_income}
            setValue={setMoreIncome}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Income"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_cost}
            setValue={setMoreCost}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Cost"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_panel}
            setValue={setMorePanel}
            onEndEditing={() => {}}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Panels"
          />
        </th>
      </tr>
    </>
  );
};
