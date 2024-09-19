import { Modal, Button } from "common/components";

import styles from "./SignOffModal.module.css";

export const SignOffModal = ({show, setShow, detail}) => {
  return (
    <Modal
      doModal={show}
      title="Site Signoff"
      onClose={setShow}
    >
      <div className={styles["content-container"]}>
        <p>Confirm Site Scope</p>
        <p>After Site Inspection Site is Signed off</p>
        <p>Once Sign Off, invoice will be sent System owner for Payment</p>
        <div className={styles.panel}>
          <p style={{ fontSize: "16px" }}>System</p>
          <div className={styles.panelInfo}>
            <div>Total Panels</div>
            <div
              className={styles.num}
            >{`${detail["System Details"]["Total Panels"]}`}</div>
          </div>
          <div className={styles.panelInfo}>
            <div>Total EMS</div>
            <div
              className={styles.num}
            >{`${detail["System Details"]["Total EMS"]}`}</div>
          </div>
        </div>

        <div className={styles.panel}>
          <p style={{ fontSize: "16px" }}>Kit</p>
          {detail["System Details"]["Kit Cost"].detail.map((el, index) => (
            <div className={styles.panelInfo} key={`${el.title}-${index}`}>
              <div>{el.title}</div>
              <div className={styles.num}>{el.total}</div>
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
  );
};
