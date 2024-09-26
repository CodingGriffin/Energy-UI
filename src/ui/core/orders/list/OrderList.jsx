import { withCommon } from "common/hocs";
import styles from "./OrderList.module.css";
import { StatusSelect, Table, TextInput, Pagination } from "common/components";
import { useEffect, useState } from "react";
import { Select } from "common/components/select/Select";
import { useNavigate } from "react-router-dom";
import { SystemApi } from "api";

const ListComponent = ({ info, handleSidebar }) => {
  const [searchOption, setSearchOption] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [tbodyData, setTbodyData] = useState(null);
  const [curPage, setCurPage] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [filterParams, setFilterParams] = useState({});
  const [hide, setHide] = useState(true);
  const [statusChange, setStatusChange] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    SystemApi.getOrders(filterParams)
      .then((res) => {
        console.log(res);
        setTbodyData(
          res.data
            ? res.data.map((data, index) => {
                return [
                  {
                    id: data.id,
                    type: "text",
                    content: getDateFormated(data.updatedAt),
                    style: {
                      minWidth: "150px",
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
                  {
                    id: data.id,
                    type: "text",
                    content: `R${data.system_cost_incl}`,
                    style: {
                      minWidth: "150px",
                    },
                  },
                  {
                    id: data.id,
                    type: "text",
                    content: `${data.total_panels}Panels`,
                    style: {
                      minWidth: "150px",
                    },
                  },
                  {
                    id: data.id,
                    type: "component",
                    style: {
                      minWidth: "150px",
                      fontSize: "0.8em",
                    },
                    special: true,
                    content: () => {
                      return (
                        <StatusSelect
                          status={status}
                          cur={data.status}
                          handleSelect={handleStatusChange}
                          id={data.id}
                        />
                      );
                    },
                  },
                ];
              })
            : null
        );

        setCurPage(res.meta.currentPage);
        setPerPage(res.meta.pageSize);
        setTotalPage(res.meta.totalPages);
      })
      .catch((err) => console.log("error!", err));
    handleSidebar(1);
  }, [filterParams, statusChange]);

  useEffect(() => {
    setFilterParams({ ...filterParams, page: curPage });
  }, [curPage, perPage]);

  useEffect(() => {
    hide
      ? setFilterParams({ ...filterParams, showclosed: true })
      : setFilterParams({ ...filterParams, showclosed: false });
  }, [hide]);

  const handlePrev = () => {
    curPage !== 1 ? setCurPage(curPage - 1) : null;
  };

  const handleNext = () => {
    curPage !== totalPage ? setCurPage(curPage + 1) : null;
  };

  const getDataByFilter = ({ type, value }) => {
    setFilterParams({ ...filterParams, [type]: value });
  };

  const handleSelect = (v) => {
    console.log("v", v);
    setSearchOption(v);
    v !== "All"
      ? setFilterParams({ ...filterParams, status: v })
      : setFilterParams({ ...filterParams, status: "" });
  };

  const handleStatusChange = (item_id, status) => {
    console.log("status changed:", item_id, status);
    SystemApi.setOrderStatus(item_id, { status }).then((data) =>
      data && data.length !== 0
        ? setStatusChange(!statusChange)
        : setStatusChange(statusChange)).catch((err) => console.log(err));
  };

  const handleClick = (id) => {
    console.log("trID", id);
    handleSidebar(0);
    navigate(`/portal/orders/${id}`);
  };

  const getDateFormated = (dateString) => {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  };

  const status = {
    "Installation Pending": {
      style: {
        backgroundColor: "#00c7be",
        maxWidth: "500",
      },
      value: 1,
    },
    Live: {
      style: {
        backgroundColor: "#34c759",
        maxWidth: "500",
      },
      value: 2,
    },
    Cancelled: {
      style: {
        backgroundColor: "#ff3b30",
        maxWidth: "500",
      },
      value: 3,
    },
    "Quote Sent": {
      style: {
        backgroundColor: "#ff9500",
        maxWidth: "500",
      },
      value: 4,
    },
    "Follow Up": {
      style: {
        backgroundColor: "#1ee600",
        maxWidth: "500",
      },
      value: 4,
    },
    "Invoice Sent": {
      style: {
        backgroundColor: "#0d99ff",
        maxWidth: "500",
      },
      value: 4,
    },
    New: {
      style: {
        backgroundColor: "#ff9500",
        maxWidth: "500",
      },
      value: 4,
    },
  };

  const theadData = [
    {
      type: "text",
      content: "Created",
      style: {
        minWidth: "150px",
      },
    },
    {
      type: "text",
      content: "Address",
      style: { minWidth: "250px", flex: "1" },
    },
    {
      type: "text",
      content: "Cost",
      style: {
        minWidth: "150px",
      },
    },
    {
      type: "text",
      content: "Size",
      style: {
        minWidth: "150px",
      },
    },
    {
      type: "text",
      content: "Status",
      style: {
        minWidth: "150px",
      },
    },
  ];

  const searchOptions = Object.keys(status);
  searchOptions.push("All");

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.title}>
            <div>Systems</div>
            <div className={styles.search}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                onClick={() => setHide(!hide)}
              >
                <span>{!hide ? "Show Closed" : "Hide Closed"}</span>
              </div>
              <TextInput
                value={searchValue}
                onChange={(value) => {
                  setSearchValue(value);
                  setFilterParams({ ...filterParams, search: value });
                }}
                containerStyle={{
                  flex: 1,
                }}
                placeholder="Search"
              />
              <div style={{ width: "10px" }} />
              <Select
                options={searchOptions}
                value={searchOption}
                onChange={handleSelect}
                title={"Status"}
                style={{ width: "230px" }}
              />
            </div>
          </div>
          <Table
            theadData={theadData}
            tbodyData={tbodyData}
            pointer={true}
            onClick={handleClick}
          />
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

// export const List = withCommon(ListComponent);
export const List = ListComponent;
