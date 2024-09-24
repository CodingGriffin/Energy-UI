import { useEffect, useState } from "react";

import { TextInput } from "common/components";
import styles from "./Filter.module.css";

export const Filter = (props) => {
  const [formatted_address, setFormatted_address] = useState("");
  const [less_lcoe, setLessLcoe] = useState("");
  const [less_panel, setLessPanel] = useState("");
  const [less_roi, setLessRoi] = useState("");
  const [less_irr, setLessIrr] = useState("");
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

  const isValid = (value) => {
    return !value || !isNaN(value);
  };

  return (
    <>
      <tr className={styles.tr} style={{ background: "white" }}>
        <th className={styles.thFirst}>
          <TextInput
            value={systemId}
            onChange={(value) => {
              setSystemId(value);
              props.handleFilter({ type: "systemId", value });
            }}
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
            onChange={(value) => {
              setFormatted_address(value);
              props.handleFilter({ type: "formatted_address", value });
            }}
            containerStyle={{
              width: "250px",
              height: "46px",
              marginLeft: "5px",
            }}
            placeholder="Address"
          />
          <span style={{ fontSize: "1em" }}>Less Than</span>
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_lcoe}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_lcoe", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<LCOE"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_roi}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_roi", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<ROI"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_irr}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_irr", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<IRR"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_consumption}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_consumption", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_income}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_income", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Income"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_cost}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_cost", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Cost"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={less_panel}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "less_panel", value });
            }}
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
          <span style={{ fontSize: "1em" }}>More Than</span>
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_lcoe}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_lcoe", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<LCOE"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_roi}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_roi", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<ROI"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_irr}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_irr", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<IRR"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_consumption}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_consumption", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_income}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_income", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Income"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_cost}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_cost", value });
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px" }}
            placeholder="<Cost"
          />
        </th>
        <th className={styles.th}>
          <TextInput
            value={more_panel}
            onChange={(value) => {
              if (isValid(value))
                props.handleFilter({ type: "more_panel", value });
              else setMorePanel("0");
            }}
            containerStyle={{ width: "100px", height: "46px", margin: "0px"}}
            placeholder="<Panels"
          />
        </th>
      </tr>
    </>
  );
};
