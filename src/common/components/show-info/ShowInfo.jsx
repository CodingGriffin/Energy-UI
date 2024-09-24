import { useEffect, useState } from "react";
import styles from "./ShowInfo.module.css";

export const ShowInfo = (props) => {
  const [detailed, setDetailed] = useState(true);

  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoHeader}>
        <div className={styles.infoTitle}>{props.title}</div>
        <div className={styles.icons}>
          {props.edit ? <img src="/assets/images/icons/edit-square.svg" onClick={()=>props.handleEdit({type:props.title})} /> : null}
          <img
            className={detailed ? styles.down : styles.up}
            src="/assets/images/icons/down.svg"
            onClick={() => setDetailed(!detailed)}
          />
        </div>
      </div>
      <div className={detailed? null: styles.hide}>{props.children}</div>
    </div>
  );
};
