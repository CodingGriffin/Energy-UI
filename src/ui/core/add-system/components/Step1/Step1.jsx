import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Card, Panel } from "..";

import styles from "./Step1.module.css";
import { useMap } from "@vis.gl/react-google-maps";

export const Step1 = (props) => {
  const map = useMap();
  const removeSystem = useCallback(
    (hex_id) => {
      props.setSystems(
        props.systems.filter((system) => {
          return system.id !== hex_id;
        })
      );
    },
    [props.setSystems, props.systems]
  );

  const panelActions = useMemo(
    () => ({
      handleNext: () => props.setCurrentStep(props.currentStep + 1),
      handlePrev: () => {
        props.setSelectedPlace(null);
        props.setSystems([]);
        map.setZoom(18);
      },
    }),
    [props.setCurrentStep, props.currentStep]
  );

  return (
    <Panel
      title="System Scoping"
      actions={panelActions}
      validNext={props.systems.length > 0}
      switchText={
        props.systems.length > 1 ? "Are all added Systems the Same?" : null
      }
      switchController={{
        value: props.isSame,
        toggle: () => props.setIsSame(!props.isSame),
      }}
    >
      <Card title="Site Address">
        <div className={styles["address-card-container"]}>
          <div className={styles["address-box"]}>
            <div className={styles["location-icon"]}>
              <svg
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2674 23.2434C15.2554 20.6108 20.5714 15.2325 20.5714 10.2968C20.5714 7.56595 19.4878 4.94691 17.5588 3.01587C15.6299 1.08484 13.0137 0 10.2857 0C7.55777 0 4.94156 1.08484 3.01262 3.01587C1.08367 4.94691 4.06495e-08 7.56595 0 10.2968C0 15.2325 5.31429 20.6108 8.304 23.2434C8.84934 23.7307 9.55474 24 10.2857 24C11.0167 24 11.7221 23.7307 12.2674 23.2434ZM6.85714 10.2968C6.85714 9.38654 7.21837 8.51353 7.86135 7.86985C8.50433 7.22618 9.3764 6.86456 10.2857 6.86456C11.195 6.86456 12.0671 7.22618 12.7101 7.86985C13.3531 8.51353 13.7143 9.38654 13.7143 10.2968C13.7143 11.2071 13.3531 12.0802 12.7101 12.7238C12.0671 13.3675 11.195 13.7291 10.2857 13.7291C9.3764 13.7291 8.50433 13.3675 7.86135 12.7238C7.21837 12.0802 6.85714 11.2071 6.85714 10.2968Z"
                  fill="#0C1433"
                />
              </svg>
            </div>
            <span className={styles["address-text"]}>
              {props.selectedPlace && props.selectedPlace.description}
            </span>
          </div>

          <div className={styles["close-button"]}>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.11159 0.328508C1.88043 0.112301 1.57468 -0.00540415 1.25876 0.000190694C0.942844 0.00578554 0.641423 0.134244 0.418001 0.358502C0.194579 0.58276 0.0666002 0.885308 0.0610262 1.20241C0.0554522 1.51951 0.172718 1.8264 0.38812 2.05843L6.43653 8.12947L0.38812 14.2005C0.268311 14.3126 0.172216 14.4477 0.105567 14.5978C0.0389171 14.748 0.00307868 14.9101 0.000189779 15.0744C-0.00269912 15.2388 0.0274204 15.402 0.0887516 15.5544C0.150083 15.7068 0.241369 15.8453 0.357165 15.9615C0.472961 16.0777 0.610894 16.1694 0.762735 16.2309C0.914576 16.2925 1.07722 16.3227 1.24095 16.3198C1.40468 16.3169 1.56616 16.2809 1.71574 16.214C1.86533 16.1471 1.99995 16.0507 2.11159 15.9304L8.16 9.85939L14.2084 15.9304C14.32 16.0507 14.4547 16.1471 14.6043 16.214C14.7538 16.2809 14.9153 16.3169 15.0791 16.3198C15.2428 16.3227 15.4054 16.2925 15.5573 16.2309C15.7091 16.1694 15.847 16.0777 15.9628 15.9615C16.0786 15.8453 16.1699 15.7068 16.2312 15.5544C16.2926 15.402 16.3227 15.2388 16.3198 15.0744C16.3169 14.9101 16.2811 14.748 16.2144 14.5978C16.1478 14.4477 16.0517 14.3126 15.9319 14.2005L9.88347 8.12947L15.9319 2.05843C16.1473 1.8264 16.2645 1.51951 16.259 1.20241C16.2534 0.885308 16.1254 0.58276 15.902 0.358502C15.6786 0.134244 15.3772 0.00578554 15.0612 0.000190694C14.7453 -0.00540415 14.4396 0.112301 14.2084 0.328508L8.16 6.39955L2.11159 0.328508Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </Card>
      <Card title="Click on the map to place systems. Drag systems to confirm exact placement.">
        {props.systems.map((system, id) => (
          <div
            key={`new_system_${id}`}
            className={styles["system-card-container"]}
          >
            <div className={styles["system-card-location"]}>
              <div className={styles["system-index"]}>{id}</div>
              <div>
                <div
                  className={styles["system-location-text"]}
                >{`lat: ${system.center.lat}`}</div>
                <div
                  className={styles["system-location-text"]}
                >{`Long: ${system.center.lng}`}</div>
              </div>
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
        ))}
        <div className={styles["action-description"]}>
          <span className={styles["desc-text"]}>
            Click on Map to Add System
          </span>
        </div>
      </Card>
    </Panel>
  );
};
