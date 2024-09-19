import styles from "./NestedTableData.module.css";
import { useState } from "react";

export const NestedTableData = ({ title, data }) => {
  
  const [detail, setDetail] = useState(false);
  return (
    <>
      <tr style={{ borderLeft: "2px solid #ecedef" }}>
        <td className={styles.td} style={{ display: "flex" }}>
          <img
            src="/assets/images/icons/down.svg"
            className={detail ? styles.up : styles.down}
            onClick={() => {
              setDetail(!detail);
              console.log("Detail:", detail);
            }}
          />
          <div>{title}</div>
        </td>
        <td className={styles.td} style={{ textAlign: "right" }}>
          {data.total}
        </td>
      </tr>
      {data.detail &&
        data.detail.map((item, index) => {
          return (
            <tr
              key={`${item.title}-${index}`}
              className={!detail ? styles["nested-tr"] : styles.hide}
            >
              <td
                className={styles.td}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>{item.title}</div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>{item.per}</div>
                  <div>{item.count}</div>
                </div>
              </td>
              <td className={styles.td} style={{ textAlign: "right" }}>
                {item.total}
              </td>
            </tr>
          );
        })}
    </>
  );
};
