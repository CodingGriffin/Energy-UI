import React from "react";
import styles from "./Spin.module.css";
import { TextInput } from "..";

export const Spin = ({ handles, value, placeholder, hasError, errMessage }) => {
  return (
    <div
      className={styles["counter-container"]}
      style={{ border: hasError ? "1px solid red" : "transparent" }}
    >
      <svg
        onClick={handles.onMinusClick}
        style={{ cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect width="30" height="30" rx="15" fill="#0C1433" />
        <rect x="6" y="13" width="18" height="4" rx="2" fill="white" />
      </svg>

      <TextInput
        inputStyle={{
          fontFamily: "Roboto",
          fontSize: "16px",
          lineHeight: "24px",
          height: "42px",
          color: "#909090",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          textAlign: "center",
        }}
        containerStyle={{ height: "44px" }}
        type={"text"}
        value={value}
        onChange={(v) => handles.onInputChange(v)}
        label={placeholder}
        isLabelCenter={true}
      />

      <svg
        onClick={handles.onPlusClick}
        style={{ cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <rect width="30" height="30" rx="15" fill="#0C1433" />
        <path
          d="M16.3846 7.38462C16.3846 6.61875 15.7659 6 15 6C14.2341 6 13.6154 6.61875 13.6154 7.38462V13.6154H7.38462C6.61875 13.6154 6 14.2341 6 15C6 15.7659 6.61875 16.3846 7.38462 16.3846H13.6154V22.6154C13.6154 23.3813 14.2341 24 15 24C15.7659 24 16.3846 23.3813 16.3846 22.6154V16.3846H22.6154C23.3813 16.3846 24 15.7659 24 15C24 14.2341 23.3813 13.6154 22.6154 13.6154H16.3846V7.38462Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
