import React, { useEffect, useState } from "react";
import styles from "./Sites.module.css";
import { SmartTable } from "./components";
import { Select, TextInput } from "common/components";

export const Sites = () => {
  const [sites, setSites] = useState([]);

  const header = [
    {
      label: "Last Update",
      key: "lastUpdate",
    },
    {
      label: "Address",
      key: "address",
    },
    {
      label: "Consumption pm",
      key: "consumption",
    },
    {
      label: "income pm",
      key: "income",
    },
    {
      label: "Size",
      key: "size",
    },
    {
      label: "Status",
      key: "status",
    },
  ];

  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    setSites([
      {
        lastUpdate: "2024/04/04",
        address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
        // consumption: ''
        systems: [
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "Live",
          },
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "Live",
          },
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "1 Error",
          },
        ],
      },
      {
        lastUpdate: "2024/04/04",
        address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
        // consumption: ''
        systems: [
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "Live",
          },
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "Live",
          },
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "1 Error",
          },
        ],
      },
      {
        lastUpdate: "2024/04/04",
        address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
        // consumption: ''
        systems: [
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "Live",
          },
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "Live",
          },
          {
            lastUpdate: "2024/04/04",
            address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
            consumption: "1225 kW",
            income: "R 1200 0.26",
            size: "6 Panels\n1EMS",
            status: "1 Error",
          },
        ],
      },
    ]);
  }, []);

  return (
    <div className={styles["site-list-page-container"]}>
      <div className={styles["site-list-header"]}>
        <span className={styles["caption"]}>Sites</span>
        <div className={styles["search-box"]}>
          <TextInput label="Search..." />
          <Select
            options={["", "Live", "Error", "Pending"]}
            value={searchState}
            onChange={setSearchState}
            title="Status"
          />
        </div>
      </div>
      <SmartTable data={sites} header={header} />
    </div>
  );
};
