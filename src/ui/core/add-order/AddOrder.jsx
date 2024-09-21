import React, { useState, useEffect } from "react";
import styles from "./AddOrder.module.css";
import { withCommon } from "common/hocs";
import { Button, Select, TextInput } from "common/components";
import { SystemSpecInfo, FinancialInfo } from "./components";

export const AddOrderComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [calType, setCalType] = useState("Monthly Consumption");
  const [currentTab, setCurrentTab] = useState(0);

  const options = [
    "Monthly Consumption",
    "System Invester Size",
    "Total Panels",
  ];

  return (
    <div className={styles["add-order-page-container"]}>
      <div className={styles["add-order-container"]}>
        {currentStep === 0 && (
          <>
            <div className={styles["caption"]}>Size your system</div>
            <div className={styles["desc"]}>
              Select location on map to add system
            </div>
            <Select
              options={options}
              onChange={setCalType}
              value={calType}
              title={"Calculation Type"}
              style={{ width: "100%" }}
            />
            <TextInput label={calType} containerStyle={{ width: "100%" }} />
            <TextInput
              label="Current Monthly Cost"
              containerStyle={{ width: "100%" }}
            />
            <TextInput label="Total Rooms" containerStyle={{ width: "100%" }} />
            <TextInput
              label="Total Distributed Boards"
              containerStyle={{ width: "100%" }}
            />
            <Button
              type="secondary"
              text="Calculate"
              style={{ width: "100%", margin: 0, height: "38px" }}
            />
            <div className={styles["tab-header"]}>
              <div
                className={
                  styles[currentTab === 0 ? "tab-inactive" : "tab-active"]
                }
                onClick={() => setCurrentTab(0)}
              >
                System Specs
              </div>
              <div
                className={
                  styles[currentTab === 1 ? "tab-inactive" : "tab-active"]
                }
                onClick={() => setCurrentTab(1)}
              >
                Financials
              </div>
            </div>
            <div className={styles["tab-body"]}>
              {currentTab === 0 ? <SystemSpecInfo /> : <FinancialInfo />}
            </div>
            <Button
              type="secondary"
              text="Next"
              style={{ width: "100%", margin: 0, height: "38px" }}
              onClick={() => setCurrentStep(currentStep + 1)}
            />
          </>
        )}
        {currentStep === 1 && (
          <>
            <div className={styles["caption"]}>Your Details</div>
            <div className={styles["desc"]}>
              Please provide your details below
            </div>
            <TextInput
              label={"Client First Name"}
              containerStyle={{ width: "100%" }}
            />
            <TextInput
              label="Client Last Name"
              containerStyle={{ width: "100%" }}
            />
            <TextInput label="Email" containerStyle={{ width: "100%" }} />
            <TextInput label="Phone" containerStyle={{ width: "100%" }} />
            <div className={styles["actions"]}>
              <Button
                type="secondaryoutline"
                text="Back"
                style={{ flex: 1, margin: 0, height: "38px" }}
                onClick={() => setCurrentStep(currentStep - 1)}
              />
              <Button
                type="secondary"
                text="Place Order"
                style={{ flex: 1, margin: 0, height: "38px" }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const AddOrderPage = withCommon(AddOrderComponent, {
  isHeaderSeeThrough: false,
});
