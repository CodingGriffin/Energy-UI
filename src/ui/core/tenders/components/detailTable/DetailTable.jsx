import { useEffect, useState } from "react";
import styles from "./DetailTable.module.css";

export const DetailTable = ({ info }) => {

  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (info) {
      let keys = Object.keys(info["data"]["calculatedData"][0]);
      let values = info["data"]["calculatedData"].map((data) => {
        return keys.map((el) => {
          return data[el];
        });
      });

      setKeys(keys);
      setValues(values);
    }
  }, [info]);
  
  return (
    <div className={styles.yearTable}>
      <div className={styles.tbColCaption}>
        {keys.length
          ? keys.map((el, index) => {
              return (
                <div
                  key={`key-${index}`}
                  className={index == 0 ? styles.tdFirstCol : styles.tdCol}
                >
                  <p>{el}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className={styles.tbBody}>
        {keys.length
          ? values.map((el, index) => {
              return (
                <div key={`values-${index}`} className={styles.tbData}>
                  {el.map((value, i) => {
                    return (
                      <div
                        key={`value-${index}-${i}`}
                        className={
                          i == 0 ? styles.tdFirstCol : styles.tdCol
                        }
                      >
                        <p>{value}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
