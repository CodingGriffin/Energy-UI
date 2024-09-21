import React, { useEffect, useRef, useState } from "react";
import styles from "./UserSetting.module.css";

export const UserSetting = () => {
  const selfRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (selfRef.current && !selectRef.current.contains(event.target)) {
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
    <div className={styles["user-setting-container"]} ref={selfRef} onClick={() => setIsOpen(true)}>
      <div className={styles["user-info"]}>
        <span className={styles["user-name"]}>John Jones</span>
        <span className={styles["user-email"]}>john@hatronika.co.za</span>
        <div className={styles["company"]}>
          <span className={styles["view-type"]}>System Owner</span>
          <span className={styles["company-name"]}>Eskom</span>
        </div>
      </div>
      <img src="/assets/images/icons/avatar.svg" />
      {isOpen && <Menu />}
    </div>
  );
};
