import React from "react";
import styles from "./Menu.module.css";

export const Menu = (props) => {
  return (
    <div className="menu-container" style={props.style}>
      <div className="view-type-setting">
        <div className="title">Select View Type</div>
        <div className="view-type-content">
          <div className="view-type">
            <span className="user-name">Marco Coetzer</span>
            <span className="type">Consumer</span>
          </div>
          <img
            src="/assets/images/icons/next-black.svg"
            className="next-icon"
          />
        </div>
      </div>
      <div className="menu-item">Company Profile</div>
      <div className="menu-item">My Profile</div>
      <div className="menu-item">Log Out</div>
    </div>
  );
};
