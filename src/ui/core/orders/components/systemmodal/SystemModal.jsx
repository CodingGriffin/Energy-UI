import { Modal, Button } from "common/components";

import styles from "./SystemModal.module.css";

export const SystemModal = ({ show, setShow, detail }) => {
  return show? (
    <Modal
      doModal={show}
      title="Customer Details"
      onClose={setShow}
    >
      <div className={styles["content-container"]}>
        <div className={styles.panel}>
          <p style={{ fontSize: "16px" }}>Client Details</p>
          {detail["System Details"]["Kit Cost"].detail.map((el, index) => (
            <div key={`system-details-${index}`}className={styles.info} style={{ margin: "10px" }}>
              <div className={styles.selectContainer}>
                <div className={styles.select}>
                  <p>Sales Person</p>
                  <p>{`${detail["Customer Details"]["address"]}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          <p style={{ fontSize: "16px" }}>Client Details</p>
          {detail["System Details"]["Kit Cost"].detail.map((el, index) => (
            <div key={`kit-${index}`}className={styles.info} style={{ margin: "10px" }}>
              <div className={styles.selectContainer}>
                <div className={styles.select}>
                  <p>Sales Person</p>
                  <p>{`${detail["Customer Details"]["address"]}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.panel}>
          <p style={{ fontSize: "16px" }}>Client Details</p>
          {detail["System Details"]["Kit Cost"].detail.map((el, index) => (
            <div key={`detail-client-${index}`} className={styles.info} style={{ margin: "10px" }}>
              <div className={styles.selectContainer}>
                <div className={styles.select}>
                  <p>Sales Person</p>
                  <p>{`${detail["Customer Details"]["address"]}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Button
            type="secondary"
            text="Sign off"
            style={{ flex: 1, padding: "8px" }}
            textStyle={{ fontSize: "15px", lineHeight: "18px" }}
          />
          <Button
            type="secondary"
            text="View Quote"
            style={{ flex: 1, padding: "8px" }}
            textStyle={{ fontSize: "15px", lineHeight: "18px" }}
          />
          <Button
            type="secondaryoutline"
            text="Save"
            style={{ flex: 1, padding: "8px" }}
            textStyle={{ fontSize: "15px", lineHeight: "18px" }}
          />
        </div>
      </div>
    </Modal>
  ):null;
};
