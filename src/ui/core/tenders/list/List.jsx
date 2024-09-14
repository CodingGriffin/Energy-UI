import { useEffect, useState } from "react";

import { withCommon } from "common/hocs";

import { Table } from "common/components";
import { SystemApi } from "api";

import { Filter } from "../components/filter/Filter";
import styles from "./List.module.css";

import { tenderAllData } from "../sample";

const ListComponent = (props) => {
  const [tenderData, setTenderData] = useState([]);
  const [filter, setFilter] = useState(false);

  // useEffect(() => {
  // 	SystemApi.getSystemInfo().then(
  // 		(data) => {
  // 			console.log(data)

  // 			setTenderData(data.data);
  // 		}
  // 	).catch(() => console.log("error!"));

  // 	console.log(tenderData);
  // }, [])

  useEffect(() => {
    setTenderData(tenderAllData);
  }, []);
  const getDataByFilter = ({ type, value }) => {
    console.log(type, ":", value);
    if (type == "systemId") {
      console.log("systemID");
    }

    if (type == "formatted_address") {
      let filteredData = tenderAllData.filter((el) => {
        console.log(typeof el[type]);
        let data = el[type];
        return data.includes(value);
      });
      setTenderData(filteredData);
    } else {
      let op = type.split("_");
      let filteredData = tenderAllData.filter((el) => {
        console.log(typeof el[op[1]]);
        let data = Number(el[op[1]]);
        value = Number(value);
        console.log("data", data, "value", value);
        console.log("value", typeof value);
        console.log("data", typeof data);

        if (op[0] == "less") {
          return data < value;
        } else {
          return data > value;
        }
      });
      setTenderData(filteredData);
    }
  };

  const getDateFormated = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  };

  const showFilter = () => {
    console.log("filter", filter);
    setFilter(!filter);
  };

  const theadData = [
    {
      type: "text",
      content: "Last Update",
      style: {
        minWidth: "120px",
      },
    },
    {
      type: "text",
      content: "address",
      style: { minWidth: "250px", flex: "1" },
    },
    { type: "text", content: "LCOE*" },
    { type: "text", content: "ROI" },
    { type: "text", content: "IRR" },
    { type: "text", content: "Consumption (pm)" },
    { type: "text", content: "Income (pm)" },
    { type: "text", content: "System Cost" },
    {
      type: "component",
      content: () => {
        return (
          <span className={styles.filter}>
            Size
            <div style={{ cursor: "pointer" }} onClick={showFilter}>
              <img
                src={
                  !filter
                    ? "/assets/images/icons/filter.svg"
                    : "/assets/images/icons/cross.svg"
                }
              />
            </div>
          </span>
        );
      },
    },
  ];

  const tbodyData = tenderData.map((data, index) => {
    return [
      {
        type: "text",
        content: getDateFormated(data.updatedAt),
        style: {
          minWidth: "120px",
        },
      },
      {
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
              {data.formatted_address}
            </div>
          );
        },
        style: { minWidth: "250px", flex: "1" },
      },
      { type: "text", content: `R${data.lcoe}` },
      { type: "text", content: `${data.roi}%` },
      { type: "text", content: `${data.irr}kw` },
      { type: "text", content: `${data.monthly_consumption_kwh}kw` },
      { type: "text", content: `R${data.npv}` },
      { type: "text", content: `R${data.system_cost_excl}` },
      {
        type: "component",
        content: () => {
          return (
            <div style={{ textAlign: "center" }}>
              {data.total_panels}Panels
              <br />
              {data.total_ems}EMS
            </div>
          );
        },
      },
    ];
  });

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.title}>Public Tenders</div>
          <Table
            theadData={theadData}
            tbodyData={tbodyData}
            OptionalHeader={
              filter ? <Filter handleFilter={getDataByFilter} /> : null
            }
            theadStyle={filter ? { border: "1px solid #f1f2f4" } : {}}
          />
        </div>
      </div>
    </div>
  );
};

export const List = withCommon(ListComponent, {
  showHeaderBackButton: true,
});
