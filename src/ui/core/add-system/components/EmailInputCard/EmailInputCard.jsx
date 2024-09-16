import React from "react";
import styles from "./EmailInputCard.module.css";
import { Button, TextInput } from "common/components";

export const EmailInputCard = ({ email }) => {
  return (
    <div className={styles["email-input-container"]}>
      <div className={styles["email-input-header"]}>
        <span className={styles["email-label"]}>Your email:</span>
        <Button
          type="secondaryoutline"
          text="change"
          style={{ borderWidth: "1px", margin: "0", padding: "5px 10px " }}
          textStyle={{
            fontSize: "16px",
            fontFmaily: "Robot",
            lineHeight: "17px",
          }}
        />
      </div>
      <TextInput
        containerStyle={{ width: "100%" }}
        label="Email"
        value={email}
        style={{ width: "100%" }}
      />
    </div>
  );
};
