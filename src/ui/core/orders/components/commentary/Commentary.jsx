import { useState } from "react";
import styles from "./Commentary.module.css";

import { TextInput } from "common/components";
export const Commentary = (props) => {

  const [comment, setComment] = useState("");

  return (
    <div className={styles.rightSide}>
      <div className={styles.rightSideTitle}>
        <div className={styles.selectContainer}>
          <div className={styles.select}>
            <div>Follow Up (Quote)</div>
          </div>
          <img src="/assets/images/icons/down.svg" />
        </div>
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.items}>
          {props.comments
            ? props.comments.map((item, i) => (
                <div key={`right-${i}`} className={styles.rightItem}>
                  <div className={styles.selectContainer}>
                    <div
                      className={styles.select}
                      onClick={() => setQuoteModal(!quoteModal)}
                    >
                      <p>{item.name}</p>
                      <p>{item.content}</p>
                    </div>
                    <p>{item.date}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className={styles.inputContainer}>
          <TextInput
            label={"Enter Commentary"}
            containerStyle={{
              flex: "1",
            }}
            errorMessage={"Please enter your first name"}
          />
          <div className={styles.sendIcon}>
            <img src="/assets/images/icons/send.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
