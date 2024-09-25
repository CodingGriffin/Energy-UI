import React from "react";

import styles from "./Card.module.css";

export const Card = ({ title, desc, Icon, onClicked }) => {
  return (
    <div className={styles["card-container"]} onClick={onClicked}>
      <div className={styles["card-content"]}>
        {title && <p className={["card-question"]}>{title}</p>}
        {desc && <p className={styles["card-desc"]}>{desc}</p>}
      </div>
      {Icon && <Icon />}
    </div>
  );
};
