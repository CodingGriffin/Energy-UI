import React, { useState } from "react";
import { Table } from "common/components";
import { Utils } from "common/utils";

import styles from "./SystemListCard.module.css";

export const SystemListCard = ({ systems = [{id: 1}] }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const theadData = [
    {
      type: "text",
      content: "Last Update",
      style: {
        minWidth: "115px",
      },
    },
    {
      type: "text",
      content: "Address",
      style: {
        flex: 1,
      },
    },
    {
      type: "text",
      content: "Consumption",
      style: {
        minWidth: "130px",
      },
    },
    {
      type: "text",
      content: "Income",
      style: {
        minWidth: "130px",
      },
    },
    {
      type: "text",
      content: "Status",
      style: {
        minWidth: "130px",
      },
    },
  ];

  const tbodyData = systems
    ? systems.map((system, id) => {
        return [
          {
            id: system.id,
            type: "text",
            content: Utils.getDateFormated(system.updatedAt),
            style: {
              minWidth: "115px",
            },
          },
          {
            id: system.id,
            type: "component",
            content: () => {
              return (
                <div
                  style={{
                    maxWidth: "250px",
                    marginLeft: "15px",
                    justifyContent: "start",
                  }}
                >
                  {system.formatted_address}
                </div>
              );
            },
            style: { flex: 1 },
          },
          {
            id: system.id,
            type: "text",
            content: "1520kW",
            style: {
              minWidth: "130px",
            },
          },
          {
            id: system.id,
            type: "text",
            content: "R1200.26",
            style: {
              minWidth: "130px",
            },
          },
          {
            id: system.id,
            type: "component",
            content: () => {
              return (
                <div
                  style={{
                    minWidth: "110px",
                    borderRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1EE600",
                    height: "40px",
                  }}
                >
                  <span>Live</span>
                </div>
              );
            },
            style: {
              minWidth: "130px",
            },
          },
        ];
      })
    : null;

  return (
    <div
      className={styles["system-list-card-container"]}
      style={expanded ? { borderTop: "1px solid #efefef" } : {}}
    >
      <div className={styles["system-list-card-header"]}>
        <span className={styles["title"]}>Systems</span>
        <div className={styles["header-right"]}>
          {systems.length === 0 && expanded && (
            <span className={styles["system-count"]}>0 Systems</span>
          )}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleExpanded}
            style={{ cursor: "pointer" }}
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      {expanded && (
        <div className={styles["system-list-card-body"]}>
          {systems.length !== 0 && (
            <Table theadData={theadData} tbodyData={tbodyData} />
          )}
          <div className={styles["add-btn-container"]}>
            <span className={styles["add-btn-text"]}>+ Add System</span>
          </div>
        </div>
      )}
    </div>
  );
};
