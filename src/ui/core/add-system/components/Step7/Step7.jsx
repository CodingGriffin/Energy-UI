import React from "react";
import styles from "./Step7.module.css";
import { Panel } from "..";
import { useNavigate } from "react-router-dom";

export const Step7 = () => {
  const navigate = useNavigate();

  const panelActions = {
    handlePrev: () => {},
    handleNext: () => {
      console.log("oops");
      navigate("/portal/orders");
    },
  };

  return (
    <div className={styles["panel"]}>
      <Panel
        title="Congratulations"
        style={{
          height: "549px",
          position: "relative",
          top: "unset",
          right: "unset",
        }}
        isSmall
        actions={panelActions}
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
