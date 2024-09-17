import React, { useState, useEffect } from "react";
import styles from "./Tab.module.css";

export const Tab = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    console.log("act", activeTab);
  }, [activeTab]);

  return (
    <div className={styles["tab-container"]}>
      <div className={styles["tab-header"]}>
        {tabs.map((tab, id) => (
          <div
            className={styles[`tab-label${id === activeTab ? "-active" : ""}`]}
            onClick={() => setActiveTab(id)}
            key={`tab_${tab}`}
          >
            <span
              className={
                styles[`label-text${id === activeTab ? "-active" : ""}`]
              }
            >
              {tab}
            </span>
          </div>
        ))}
      </div>
      {activeTab !== undefined && (
        <div className={styles["tab-body"]}>{children[activeTab]}</div>
      )}
    </div>
  );
};
