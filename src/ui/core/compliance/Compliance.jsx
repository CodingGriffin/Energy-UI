import React from "react";
import styles from "./Compliance.module.css";

export const Compliance = () => {
  const certCards = [
    {
      field: "Certified Electrician",
      id: "24552343242",
    },
    {
      field: "Company Registration",
      id: "24552343242",
    },
    {
      field: "ECB License",
      id: "24552343242",
    },
    {
      field: "Team Size",
      id: "4",
    },
    {
      field: "Traning",
      id: "8ronze",
    },
  ];

  return (
    <div className={styles["compliance-container"]}>
      <div className={styles["certificate-card-list"]}>
        {certCards.map((cert, id) => (
          <div className={styles["certificate-card"]} key={`cert_card_${id}`}>
            <div className={styles["cert"]}>{"Certificate"}</div>
            <div className={styles["field"]}>{cert.field}</div>
            <div className={styles["id"]}>{cert.id}</div>
          </div>
        ))}
      </div>
      <div className={styles["zone-packages"]}>
        <div className={styles["zones-card"]}>
          <span className={styles["title"]}>Zone Package</span>
          <span className={styles["zone-count"]}>7 Zones</span>
          <span className={styles["zone-field"]}>Healthy</span>
        </div>
        <div className={styles["buy-zone-card"]}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6H10V2C10 1.46957 9.78929 0.960859 9.41421 0.585786C9.03914 0.210714 8.53043 0 8 0C7.46957 0 6.96086 0.210714 6.58579 0.585786C6.21071 0.960859 6 1.46957 6 2L6.071 6H2C1.46957 6 0.960859 6.21071 0.585786 6.58579C0.210714 6.96086 0 7.46957 0 8C0 8.53043 0.210714 9.03914 0.585786 9.41421C0.960859 9.78929 1.46957 10 2 10L6.071 9.929L6 14C6 14.5304 6.21071 15.0391 6.58579 15.4142C6.96086 15.7893 7.46957 16 8 16C8.53043 16 9.03914 15.7893 9.41421 15.4142C9.78929 15.0391 10 14.5304 10 14V9.929L14 10C14.5304 10 15.0391 9.78929 15.4142 9.41421C15.7893 9.03914 16 8.53043 16 8C16 7.46957 15.7893 6.96086 15.4142 6.58579C15.0391 6.21071 14.5304 6 14 6Z"
              fill="black"
            />
          </svg>
          <div className={styles["card-title"]}>Purchase Zone Pacakge</div>
          <div className={styles["card-description"]}>
            Add 7 Zones to Your Service Center
          </div>
        </div>
      </div>
    </div>
  );
};