import { useState, useEffect } from "react";

import styles from "./InfoItem.module.css";

const InfoItem = ({
  title,
  showDetailedButton = true,
  children = null,
  hiddenChild = null,
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className={styles.container}>
      <div style={{ fontSize: "1em" }}>{title}</div>
      <div style={{ fontSize: "1.5em" }}>{children ? children : null}</div>
      {showDetailedButton ? (
        <div
          className={styles.detail}
          onClick={() => setShowDetail(!showDetail)}
        >
          <img
            className={!showDetail ? styles.down : styles.up}
            src="/assets/images/icons/down.svg"
          />
        </div>
      ) : null}
      {hiddenChild && showDetail ? hiddenChild : null}
    </div>
  );
};

export default InfoItem;
