import React from "react";
import styles from "./Step7.module.css";
import { Panel } from "..";

export const Step7 = () => {
  return (
    <div className={styles["panel"]}>
      <Panel
        title="Congratulations"
        style={{ height: "549px", position: "relative" }}
        isSmall
      >
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
      </Panel>
    </div>
  );
};
