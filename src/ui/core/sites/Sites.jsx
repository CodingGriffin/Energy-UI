import React, { useEffect, useState } from "react";
import styles from "./Sites.module.css";
import { SmartTable } from "./components";
import { Pagination, Select, TextInput } from "common/components";
import { SystemApi } from "api";

const renderDate = (dt) => {
  const date = new Date(dt);
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
};
export const Sites = ({ showLoader = () => {}, hideLoader = () => {} }) => {
  const [sites, setSites] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPage, setTotalPage] = useState(100);
  const [statusFilter, setStatusFilter] = useState("Status");
  const [keywordFilter, setKeywordFilter] = useState("");

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
      key: "formatted_address",
    },
    {
      label: "Consumption pm",
      key: "monthly_consumption_kwh",
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
        filter: { keywordFilter, statusFilter },
        params: {
          page: curPage,
          search: keywordFilter,
          status: statusFilter === "Status" ? "" : statusFilter,
        },
      });
      if (!res.ok || !res.data) {
        throw new Error("Data Fetch Error!(site-list)");
      }
      console.log("ok=>site-list-fetch===>", res.data);
      setSites(
        res.data.map((z) => {
          return {
            lastUpdate: z.updatedAt || "04/01/2024",
            formatted_address: z.formatted_address,
            status: `${z.systems.length} Systems`,
            systems: z.systems.map((zs) => ({
              lastUpdate: renderDate(zs.updatedAt),
              formatted_address: zs.formatted_address,
              monthly_consumption_kwh: `${zs.monthly_consumption_kwh} kwh`,
              income: "R 12345.00",
              size: { panel: zs.total_panels, ems: zs.total_ems },
              status: zs.state,
            })),
          };
        })
      );
      console.log("res====", res);
      setTotalPage(res.meta.totalPages);
    } catch (err) {
      console.log("site-list-err===>", err);
    }
  };

  useEffect(() => {
    fetchSiteList();
  }, [curPage, keywordFilter, statusFilter]);

  return (
    <div className={styles["site-list-page-container"]}>
      <div className={styles["site-list-header"]}>
        <span className={styles["caption"]}>Sites</span>
        <div className={styles["search-box"]}>
          <TextInput label="Search..." onChange={setKeywordFilter} />
          <Select
            options={["Status", "Live", "Error", "Warning"]}
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
