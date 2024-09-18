import React, { useState } from "react";
import styles from "./Switch.module.css";

export const Switch = ({ isOn = true, onClick }) => {
  const handleToggle = () => {
    if (typeof onClick === "function") onClick(!isOn); // Toggle between true and false
  };

  return (
    <div
      className={styles[isOn ? "switch-on" : "switch-off"]}
      onClick={handleToggle}
    >
      {isOn && <span className={styles["yes"]}>YES</span>}
      {!isOn && <span className={styles["no"]}>NO</span>}
      <div className={styles[isOn ? "knob-on" : "knob-off"]} />
    </div>
  );
};

export default Switch;
