import React, { useEffect, useRef, useState } from "react";
import styles from "./UserSetting.module.css";
import { Menu } from "./Menu/Menu";
import { DataStore } from "common/datastore";

export const UserSetting = (props) => {
  const selfRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleClickOutside = (event) => {
    console.log("outt");
    if (selfRef.current && !selfRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(DataStore.get("USER_INFO")));
    console.log("aaaaaa", DataStore.get("USER_INFO"));
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["user-setting-container"]} ref={selfRef}>
      <div className={styles["user-info"]} onClick={() => setIsOpen(true)}>
        <span className={styles["user-name"]}>
          {user ? `${user.first_name} ${user.last_name}` : ""}
        </span>
        <span className={styles["user-email"]}>{user ? user.email : ""}</span>
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
