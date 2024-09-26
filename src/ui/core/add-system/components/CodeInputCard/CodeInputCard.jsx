import React, { useEffect, useState } from "react";
import styles from "./CodeInputCard.module.css";
import { Button, CodeInput } from "common/components";
import { AuthApi } from "api";

export const CodeInputCard = ({
  email,
  guid,
  setOtp,
  otp,
  onEndEditing,
  showToast,
  remount,
}) => {
  const resendOtp = async () => {
    setOtp("");
    remount();
    await AuthApi.resendOtp({ email, guid });
    showToast("Resend OTP successfully!");
  };

  useEffect(() => {
    console.log("otp====>", otp);
  }, [otp]);

  return (
    <div className={styles["code-card-container"]}>
      <span className={styles["code-card-logo"]}>
        We've sent a 4 Digit Code to <b>{email}</b>
      </span>
      <span className={styles["code-card-logo"]}>Enter your code below</span>
      <div className={styles["code-input-container"]}>
        <CodeInput
          setValue={setOtp}
          value={otp}
          inputStyles={{ width: "78px", height: "48px" }}
          onEndEditing={onEndEditing}
        />
      </div>
      <div className={styles["code-card-footer"]}>
        <span className={styles["not-received"]}>Not Received?</span>
        <Button
          type="secondaryoutline"
          text="Resend Code"
          style={{
            borderWidth: "1px",
            margin: "0",
            padding: "5px 10px ",
            height: "27px",
          }}
          textStyle={{
            fontSize: "16px",
            fontFmaily: "Roboto",
            lineHeight: "17px",
          }}
          onClick={resendOtp}
        />
      </div>
    </div>
  );
};
