import React, { Children } from "react";
import { Button, Switch } from "common/components";

import styles from "./Panel.module.css";

export const Panel = ({
  title,
  children,
  actions,
  isSmall,
  validNext,
  switchText,
  switchController,
}) => {
  return (
    <div
      className={styles["panel-container"]}
      style={{ height: isSmall ? "549px" : "756px" }}
    >
      <div className={styles["panel-header"]}>
        <span className={styles["panel-title"]}>{title}</span>
      </div>
      <div className={styles["panel-body"]}>{children}</div>
      <div className={styles["panel-footer"]}>
        {!isSmall ? (
          <>
            {switchText && (
              <div className={styles["switch"]}>
                <span className={styles["switch-text"]}>{switchText}</span>
                <Switch
                  isOn={switchController.value}
                  onClick={switchController.toggle}
                />
              </div>
            )}
            <div className={styles["panel-actions"]}>
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
          </>
        ) : (
          <Button
            type="secondary"
            text="continue"
            style={{ flex: 1, margin: 0 }}
          />
        )}
      </div>
    </div>
  );
};
