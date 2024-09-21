import React, { useEffect, useState } from "react";
import styles from "./Panel.module.css";

export const Panel = ({ id }) => {
  const [zoneData, setZoneData] = useState(null);
  useEffect(() => {
    //fetch zone
    setZoneData([
      { val: "9854125", label: "id" },
      { label: "Display Name", val: "Zone01" },
      { label: "Systems", val: "12" },
      { label: "Healthy", val: "9" },
      { label: "Warnings", val: "2" },
      { label: "Errors", val: "1" },
      { label: "Monthly Consumption", val: "3600kWh" },
      { label: "Monthly Revenue", val: "R25000.00" },
    ]);
  }, [id]);

  useEffect(() => {
    console.log(zoneData);
  }, [zoneData]);

  const handleCloseClick = () => {
    //handleCloseClicked
    console.log("closed");
  };

  return (
    <div className={styles["panel-container"]}>
      <div className={styles["panel-header"]}>
        <span className={styles["zone-id"]}>{id}</span>
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleCloseClick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.11159 0.328508C1.88043 0.112301 1.57468 -0.00540415 1.25876 0.000190694C0.942844 0.00578554 0.641423 0.134244 0.418001 0.358502C0.194579 0.58276 0.0666002 0.885308 0.0610262 1.20241C0.0554522 1.51951 0.172718 1.8264 0.38812 2.05843L6.43653 8.12947L0.38812 14.2005C0.268311 14.3126 0.172216 14.4477 0.105567 14.5978C0.0389171 14.748 0.00307868 14.9101 0.000189779 15.0744C-0.00269912 15.2388 0.0274204 15.402 0.0887516 15.5544C0.150083 15.7068 0.241369 15.8453 0.357165 15.9615C0.472961 16.0777 0.610894 16.1694 0.762735 16.2309C0.914576 16.2925 1.07722 16.3227 1.24095 16.3198C1.40468 16.3169 1.56616 16.2809 1.71574 16.214C1.86533 16.1471 1.99995 16.0507 2.11159 15.9304L8.16 9.85939L14.2084 15.9304C14.32 16.0507 14.4547 16.1471 14.6043 16.214C14.7538 16.2809 14.9153 16.3169 15.0791 16.3198C15.2428 16.3227 15.4054 16.2925 15.5573 16.2309C15.7091 16.1694 15.847 16.0777 15.9628 15.9615C16.0786 15.8453 16.1699 15.7068 16.2312 15.5544C16.2926 15.402 16.3227 15.2388 16.3198 15.0744C16.3169 14.9101 16.2811 14.748 16.2144 14.5978C16.1478 14.4477 16.0517 14.3126 15.9319 14.2005L9.88347 8.12947L15.9319 2.05843C16.1473 1.8264 16.2645 1.51951 16.259 1.20241C16.2534 0.885308 16.1254 0.58276 15.902 0.358502C15.6786 0.134244 15.3772 0.00578554 15.0612 0.000190694C14.7453 -0.00540415 14.4396 0.112301 14.2084 0.328508L8.16 6.39955L2.11159 0.328508Z"
            fill="black"
          />
        </svg>
      </div>
      <div className={styles["panel-body"]}>
        <table className={styles["zone-data"]}>
          <tbody>
            {zoneData &&
              zoneData.map((dt, id) => {
                return (
                  <tr key={`zone_data_${id}`} className={styles["tr"]}>
                    <td>{dt.label}</td>
                    <td>{dt.val}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
