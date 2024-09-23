import { useEffect, useState } from "react";
import styles from "./BillInfo.module.css";
import { Dropdown } from "common/components";

export const BillInfo = (props) => {
  const [detailed, setDetailed] = useState(true);

  const options = ["Create Quote", "Create Invoice"];

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <div className={styles.infoTitle}>Billing Documents</div>
        <div className={styles.icons}>
          <Dropdown options={options} cur={options[0]} />
          {props.edit ? (
            <img src="/assets/images/icons/edit-square.svg" />
          ) : null}
          <img
            className={detailed ? styles.down : styles.up}
            src="/assets/images/icons/down.svg"
            onClick={() => setDetailed(!detailed)}
          />
        </div>
      </div>
      <div className={detailed ? null : styles.hide}>{props.children}</div>
    </div>
  );
};
