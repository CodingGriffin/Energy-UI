import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { withCommon } from "common/hocs";
import { Pagination, Table } from "common/components";
import { SystemApi } from "api";

import { Filter } from "../components/filter/Filter";
import styles from "./List.module.css";
// import { tenderAllData } from "../sample";

const ListComponent = (props) => {
  const [tenderData, setTenderData] = useState([]);
  const [filter, setFilter] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [filterParams, setFilterParams] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setFilterParams({ ...filterParams, page: curPage });
  }, [curPage, perPage]);

  useEffect(() => {
    console.log(filterParams)
    SystemApi.getSystemInfo(filterParams)
      .then((res) => {
        setTenderData(
          res.data.map((data, index) => {
            return [
              {
                id: data.id,
                type: "text",
                content: getDateFormated(data.updatedAt),
                style: {
                  minWidth: "120px",
                },
              },
              {
                id: data.id,
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
              { id: data.id, type: "text", content: `R${data.lcoe}` },
              { id: data.id, type: "text", content: `${data.roi}%` },
              { id: data.id, type: "text", content: `${data.irr}kw` },
              {
                id: data.id,
                type: "text",
                content: `${data.monthly_consumption_kwh}kw`,
              },
              { id: data.id, type: "text", content: `R${data.npv}` },
              {
                id: data.id,
                type: "text",
                content: `R${data.system_cost_excl}`,
              },
              {
                id: data.id,
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
          })
        );

        setCurPage(res.meta.currentPage);
        setPerPage(res.meta.pageSize);
        setTotalPage(res.meta.totalPages);
      })
      .catch(() => console.log("error!"));
  }, [filterParams]);

  const handlePrev = () => {
    curPage !== 1 ? setCurPage(curPage - 1) : null;
  };

  const handleNext = () => {
    curPage !== totalPage ? setCurPage(curPage + 1) : null;
  };

  const getDataByFilter = ({ type, value }) => {
    setFilterParams({ ...filterParams, [type]: value });
  };

  const handleClick = (id) => {
    navigate(`/tenders/${id}`);
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

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.title}>Public Tenders</div>
          <div className={styles.tableContainer}>
            <Table
              theadData={theadData}
              tbodyData={tenderData}
              pointer={true}
              OptionalHeader={
                filter ? <Filter handleFilter={getDataByFilter} /> : null
              }
              theadStyle={filter ? { border: "1px solid #f1f2f4" } : {}}
              onClick={handleClick}
            />
          </div>
          <Pagination
            prev={handlePrev}
            next={handleNext}
            cur={curPage}
            total={totalPage}
          />
        </div>
      </div>
    </div>
  );
};

export const List = withCommon(ListComponent, {
  showHeaderBackButton: true,
});
