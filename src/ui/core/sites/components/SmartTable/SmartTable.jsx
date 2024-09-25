import React, { useEffect, useState } from "react";
import styles from "./SmartTable.module.css";
import { Card } from "..";

export const SmartTable = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(props.data.map(() => true));

  useEffect(() => {
    setIsCollapsed(props.data.map(() => true));
  }, [props.data]);

  const getColor = (status) => {
    console.log("status===>", status);
    if (status.toLowerCase().indexOf("error") >= 0) return "#FF3B30";
    else if (status.toLowerCase().indexOf("live") >= 0) return "#34C759";
    else if (status.toLowerCase().indexOf("warning") >= 0) return "#FF9500";
    return "#3e3e3e";
  };

  return (
    <div className={styles["smart-table-container"]}>
      <div className={styles["smart-table-header"]}>
        {props.header.map((text, id) => (
          <div
            className={styles["header-text"]}
            key={`smart-table-header-${id}`}
          >
            {text.label}
          </div>
        ))}
      </div>
      <div className={styles["smart-table-body"]}>
        {props.data.map((cell, id) => (
          <Card
            key={`smart_table_tr_${id}`}
            isCollapsed={isCollapsed[id]}
            setIsCollapsed={(v) =>
              setIsCollapsed(isCollapsed.map((x, xid) => (xid === id ? v : x)))
            }
          >
            <div className={styles["card-header"]}>
              <div className={styles["card-header-element"]}>
                <span>{cell[props.header[0].key]}</span>
              </div>
              <div
                className={styles["card-header-element"]}
                style={{ marginLeft: "15px", marginRight: "auto" }}
              >
                <span>{cell[props.header[1].key]}</span>
              </div>
              <div className={styles["card-header-element"]}>
                <span>{`${cell["systems"].length} Systems`}</span>
                {!isCollapsed[id] ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12.5L10 7.5L5 12.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            <table className={styles["card-body"]}>
              <tbody>
                {cell.systems.map((s, sid) => (
                  <tr key={`cell_${sid}`}>
                    {props.header.map((hd, hid) => (
                      <td
                        className={styles["card-cell-element"]}
                        key={`${hid}`}
                        style={{
                          flex: hid === 1 ? "3" : hid === 0 ? "unset" : "1",
                          width: hid === 0 ? "135px" : "unset",
                          backgroundColor:
                            hd.key !== "status"
                              ? "transparent"
                              : getColor(s[hd.key]),
                          color: hd.key === "status" ? "#ffffff" : "#000000",
                        }}
                      >
                        {hd.key !== "size" ? (
                          <span
                            style={{
                              marginLeft: hid === 1 ? "15px" : "auto",
                              marginRight: "auto",
                            }}
                          >
                            {s[hd.key]}
                          </span>
                        ) : (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span style={{ textAlign: "cetner" }}>{`${
                              s[hd.key].panel
                            } Panels`}</span>
                            <span style={{ textAlign: "cetner" }}>{`${
                              s[hd.key].ems
                            } EMS`}</span>
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        ))}
      </div>
    </div>
  );
};
