import { useEffect, useState } from "react";

import { withCommon } from "common/hocs";

import { Button, Table } from "common/components";

import { DataStore, Logger } from "common";

import { SystemApi } from "api";

import { Filter } from "../components/filter/Filter";
import styles from "./List.module.css";

import { tenderAllData } from "../sample";

const ListComponent = (props) => {
  const [tenderData, setTenderData] = useState([]);

  const [filter, setFilter] = useState(true);
  // const [tenderData, setTenderData] = useState([]);

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
				value = Number(value)
				console.log("data", data, "value", value)
				console.log("value", typeof value);
				console.log("data", typeof data);

        if (op[0] == "less") {
					return data < value;
				}
        else {
					return data > value;
				}
      });
			setTenderData(filteredData)
    }
  };

  const getDateFormated = (dateString) => {
    const date = new Date(dateString);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getUTCDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleFilter = () => {
    console.log("filter", filter);
    setFilter(!filter);
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.title}>Public Tenders</div>
          <table className={styles.table}>
            <thead className={filter ? styles.thead : styles.theadOnFilter}>
              <tr className={styles.tr} style={{ height: "25px" }}>
                <th className={styles.thFirst}>Last Update</th>
                <th
                  className={styles.th}
                  style={{ minWidth: "250px", flex: "1" }}
                >
                  Address
                </th>
                <th className={styles.th}>LCOE*</th>
                <th className={styles.th}>ROI*</th>
                <th className={styles.th}>IRR*</th>
                <th className={styles.th}>Consumption (pm)</th>
                <th className={styles.th}>Income (pm)</th>
                <th className={styles.th}>System Cost</th>
                <th className={styles.th}>
                  <span className={styles.filter}>
                    Size
                    <div style={{ cursor: "pointer" }} onClick={handleFilter}>
                      <img
                        src={
                          filter
                            ? "/assets/images/icons/filter.svg"
                            : "/assets/images/icons/cross.svg"
                        }
                      />
                    </div>
                  </span>
                </th>
              </tr>
              {!filter ? <Filter handleFilter={getDataByFilter} /> : null}
            </thead>
            <tbody className={styles.tbody}>
              {tenderData && tenderData.length
                ? tenderData.map((data, index) => {
                    data.updatedAt = getDateFormated(data.updatedAt);
                    return (
                      <tr key={index} className={styles.tr}>
                        <td
                          className={styles.td}
                          style={{ minWidth: "120px", borderLeft: "0px" }}
                        >
                          <span className="my-auto">{data.updatedAt}</span>
                        </td>
                        <td
                          className={styles.td}
                          style={{
                            minWidth: "250px",
                            flex: "1",
                            paddingLeft: "15px",
                            justifyContent: "start",
                          }}
                        >
                          <span style={{ maxWidth: "250px" }}>
                            {data.formatted_address}
                          </span>
                        </td>
                        <td className={styles.td}>
                          <span>R{data.lcoe}</span>
                        </td>
                        <td className={styles.td}>
                          <span>{data.roi}%</span>
                        </td>
                        <td className={styles.td}>
                          <span>{data.irr}kw</span>
                        </td>
                        <td className={styles.td}>
                          <span>{data.monthly_consumption_kwh}kw</span>
                        </td>
                        <td className={styles.td}>
                          <span>R{data.npv}</span>
                        </td>
                        <td className={styles.td}>
                          <span>R{data.system_cost_incl}</span>
                        </td>
                        <td
                          className={styles.td}
                          style={{ textAlign: "center" }}
                        >
                          <span>
                            {data.total_panels} Panels
                            <br />
                            {data.total_ems}EMS
                          </span>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const List = withCommon(ListComponent, {
  showHeaderBackButton: true,
});
