import React from "react";
import styles from "./Payment.module.css";
import { Button, TextInput } from "common/components";
import { withCommon } from "common/hocs";

const Payment = () => {
  return (
    <div className={styles["payment-page-container"]}>
      <div className={styles["payment-page-content"]}>
        <span className={styles["title"]}>Payment</span>
        <TextInput label="Name on Card" />
        <TextInput label="Card Number" />
        <div style={{ width: "100%", display: "flex", gap: "10px" }}>
          <TextInput label="Name on Card" containerStyle={{ flex: 1 }} />
          <TextInput label="CVV" containerStyle={{ flex: 1 }} />
        </div>
        <Button
          type="primary"
          text="Pay"
          style={{ width: "100%", height: "44px", margin: "0" }}
        />
      </div>
    </div>
  );
};

export const PaymentPage = withCommon(Payment, {});
