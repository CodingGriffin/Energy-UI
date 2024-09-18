import { useState } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ title, doModal, children, onClose }) => {

  return doModal ? (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.head}>
          <div>{title}</div>
          <img
            src="/assets/images/icons/cross.svg"
            style={{ cursor: "pointer" }}
            onClick={onClose}
          />
        </div>
        <div className={styles["modal-content"]}>{children}</div>
      </div>
    </div>
  ) : null;
};
