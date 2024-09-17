import React from "react";
import styles from "./Step1.module.css";

export const Step1 = ({ systems = [1, 2, 3], removeSystem }) => {
  return (
    <>
      <span className={styles["desc"]}>
        Select location on map to add system
      </span>
      {systems.map((system, id) => {
        return (
          <div
            key={`new_system_${id}`}
            className={styles["system-card-container"]}
          >
            <div className={styles["system-card-location"]}>
              <div className={styles["system-index"]}>
                <span className={styles["system-index-text"]}>{id}</span>
              </div>
              <span
                className={styles["system-location-text"]}
              >{`lat: ${system.center.lat}\nLong: ${system.center.lng}`}</span>
            </div>
            <div className={styles["system-remove-button"]}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => removeSystem(system.id)}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.58369 0.246381C1.41032 0.0842256 1.18101 -0.00405312 0.944071 0.000143021C0.707133 0.00433916 0.481068 0.100683 0.313501 0.268876C0.145934 0.43707 0.0499501 0.663981 0.0457696 0.901805C0.0415891 1.13963 0.129539 1.3698 0.29109 1.54382L4.8274 6.0971L0.29109 10.6504C0.201233 10.7344 0.129162 10.8358 0.079175 10.9484C0.0291879 11.061 0.00230901 11.1825 0.000142334 11.3058C-0.00202434 11.4291 0.0205653 11.5515 0.0665637 11.6658C0.112562 11.7801 0.181027 11.884 0.267874 11.9711C0.354721 12.0583 0.45817 12.127 0.572051 12.1732C0.685932 12.2194 0.807911 12.242 0.930712 12.2399C1.05351 12.2377 1.17462 12.2107 1.28681 12.1605C1.39899 12.1104 1.49996 12.038 1.58369 11.9478L6.12 7.39454L10.6563 11.9478C10.74 12.038 10.841 12.1104 10.9532 12.1605C11.0654 12.2107 11.1865 12.2377 11.3093 12.2399C11.4321 12.242 11.5541 12.2194 11.6679 12.1732C11.7818 12.127 11.8853 12.0583 11.9721 11.9711C12.059 11.884 12.1274 11.7801 12.1734 11.6658C12.2194 11.5515 12.242 11.4291 12.2399 11.3058C12.2377 11.1825 12.2108 11.061 12.1608 10.9484C12.1108 10.8358 12.0388 10.7344 11.9489 10.6504L7.4126 6.0971L11.9489 1.54382C12.1105 1.3698 12.1984 1.13963 12.1942 0.901805C12.19 0.663981 12.0941 0.43707 11.9265 0.268876C11.7589 0.100683 11.5329 0.00433916 11.2959 0.000143021C11.059 -0.00405312 10.8297 0.0842256 10.6563 0.246381L6.12 4.79966L1.58369 0.246381Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        );
      })}

      <div className={styles["action-description"]}>
        <span className={styles["desc-text"]}>Click on Map to Add System</span>
      </div>
    </>
  );
};
