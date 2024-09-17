import React from "react";
import styles from "./Step7.module.css";

export const Step7 = () => {
  return (
    <div className={styles["container"]}>
      <span className={styles["welcome"]}>
        Welcome to the Hatronika Network!
      </span>
      <span className={styles["description"]}>
        Your order has been placed, you will receive an email with details.
      </span>
      <img
        src="/assets/images/backgrounds/congratulation.png"
        className={styles["con-image"]}
      />
    </div>
  );
};
