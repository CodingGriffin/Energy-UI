import React from "react";
import styles from "./Input.module.css";

export const Input = ({ onChange, unit, placeholder, value }) => {
  return (
    <div className={styles["input-container"]}>
      <input
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={styles["input-text"]}
      />
      <span className={styles["unit-text"]}>{unit}</span>
    </div>
  );
};
