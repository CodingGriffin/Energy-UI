import React, { useEffect, useRef, useState } from "react";
import styles from "./UserSetting.module.css";
import { Menu } from "./Menu/Menu";
import { DataStore } from "common/datastore";

export const UserSetting = (props) => {
  const selfRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOutside = (event) => {
    console.log("outt");
    if (selfRef.current && !selfRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["user-setting-container"]} ref={selfRef}>
      <div className={styles["user-info"]} onClick={() => setIsOpen(true)}>
        <span className={styles["user-name"]}>John Jones</span>
        <span className={styles["user-email"]}>john@hatronika.co.za</span>
        <div className={styles["company"]}>
          <span className={styles["view-type"]}>
            {props.viewState.viewType}
          </span>
          {props.viewState.company && (
            <span className={styles["company-name"]}>
              |{props.viewState.company}
            </span>
          )}
        </div>
      </div>
      <img src="/assets/images/icons/avatar.svg" />
      {isOpen && (
        <Menu
          onClose={() => setIsOpen(false)}
          setViewState={props.setViewState}
        />
      )}
    </div>
  );
};
