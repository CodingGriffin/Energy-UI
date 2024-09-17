import React from "react";
import { Button } from "common/components";

import styles from "./Panel.module.css";

export const Panel = ({ title, children, actions, validNext }) => {
  return (
    <div className={styles["panel-container"]}>
      <div className={styles["panel-header"]}>
        <span className={styles["panel-title"]}>{title}</span>
      </div>
      <div className={styles["panel-body"]}>{children}</div>
      <div className={styles["panel-footer"]}>
        <Button
          type="secondaryoutline"
          text="Back"
          style={{ flex: 1, padding: "8px" }}
          textStyle={{ fontSize: "15px", lineHeight: "18px" }}
          onClick={actions?.handlePrev}
        />
        <Button
          type="secondary"
          text="Next"
          style={{ flex: 1, padding: "10px" }}
          textStyle={{ fontSize: "15px", lineHeight: "18px" }}
          onClick={actions?.handleNext}
          disabled={!validNext}
        />
      </div>
    </div>
  );
};
