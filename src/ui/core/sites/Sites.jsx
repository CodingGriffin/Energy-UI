import React, { useEffect, useState } from "react";
import styles from "./Sites.module.css";
import { SmartTable } from "./components";
import { Pagination, Select, TextInput } from "common/components";
import { SystemApi } from "api";

export const Sites = () => {
  const [sites, setSites] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(100);
  const [statusFilter, setStatusFilter] = useState("Status");
  const [keyworkFilter, setKeywordFilter] = useState("");

  const handlePrev = () => {
    if (curPage === 1) return;
    setCurPage(curPage - 1);
  };

  const handleNext = () => {
    if (curPage === totalPage) return;
    setCurPage(curPage + 1);
  };

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

  const fetchSiteList = async () => {
    try {
      const res = await SystemApi.getSiteList({
        filter: { keyworkFilter, statusFilter },
      });
      if (!res.ok || !res.data) {
        throw new Error("Data Fetch Error!(site-list)");
      }
      console.log("ok=>site-list-fetch===>", res.data);
      setSites(res.data);
    } catch (err) {
      console.log("site-list-err===>", err);
    }
  };

  useEffect(() => {
    fetchSiteList();
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
  }, [curPage]);

  return (
    <div className={styles["site-list-page-container"]}>
      <div className={styles["site-list-header"]}>
        <span className={styles["caption"]}>Sites</span>
        <div className={styles["search-box"]}>
          <TextInput label="Search..." />
          <Select
            options={["Status", "Live", "Error", "Pending"]}
            value={statusFilter}
            onChange={setStatusFilter}
            title="Status"
            style={{ minWidth: "160px" }}
          />
        </div>
      </div>
      <SmartTable data={sites} header={header} />
      <Pagination
        prev={handlePrev}
        next={handleNext}
        cur={curPage}
        total={totalPage}
        style={{ marginTop: "auto" }}
      />
    </div>
  );
};
