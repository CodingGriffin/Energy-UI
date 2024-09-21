import React from "react";
import styles from "./Card.module.css";

export const Card = ({ name, val, Icon }) => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-left"]}>
        <span className={styles["key"]}>{name}</span>
        <span className={styles["val"]}>{val}</span>
      </div>
      <div className={styles["card-right"]}>{Icon && <Icon />}</div>
    </div>
  );
};
