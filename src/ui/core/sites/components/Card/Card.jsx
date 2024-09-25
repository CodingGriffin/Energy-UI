import React, { useState } from "react";
import styles from "./Card.module.css";

export const Card = (props) => {
  console.log("cc==>", props.isCollapsed);

  return (
    <div className="card-container">
      <div
        className="card-header"
        onClick={() => {
          console.log("click", props.isCollapsed);
          props.setIsCollapsed(!props.isCollapsed);
        }}
      >
        {props.children[0]}
      </div>
      {!props.isCollapsed && (
        <div className="card-content">{props.children[1]}</div>
      )}
    </div>
  );
};
