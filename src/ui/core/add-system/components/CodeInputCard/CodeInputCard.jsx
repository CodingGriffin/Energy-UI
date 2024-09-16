import React from "react";
import styles from "./CodeInputCard.module.css";
import { Button, TextInput } from "common/components";

export const CodeInputCard = ({ email = "email@email.com" }) => {
  return (
    <div className={styles["code-card-container"]}>
      <span className={styles["code-card-logo"]}>
        We've sent a 4 Digit Code to <b>{email}</b>
      </span>
      <span>Enter your code below</span>
      <div className={styles["code-box"]}>
        <TextInput inputStyle={{ textAlign: "center" }} />
        <TextInput inputStyle={{ textAlign: "center" }} />
        <TextInput inputStyle={{ textAlign: "center" }} />
        <TextInput inputStyle={{ textAlign: "center" }} />
      </div>
      <div className={styles["code-card-footer"]}>
        <span>Not Received?</span>
        <Button
          type="secondaryoutline"
          text="Resend Code"
          style={{ borderWidth: "1px", margin: "0", padding: "5px 10px " }}
          textStyle={{
            fontSize: "16px",
            fontFmaily: "Robot",
            lineHeight: "17px",
          }}
        />
      </div>
    </div>
  );
};
