import { withCommon } from "common/hocs";
import styles from "./OrderList.module.css";
import { Table, TextInput } from "common/components";
import { useState } from "react";
import { Select } from "common/components/select/Select";
import { useNavigate } from "react-router-dom";

const ListComponent = ({ info }) => {
  const [searchOption, setSearchOption] = useState("Status");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleClick = (id) => {
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

  const status = [
    {
      title: "Installation Pending",
      style: {
        backgroundColor: "#00c7be",
        maxWidth: "500",
      },
      value: 1,
    },
    {
      title: "Live",
      style: {
        backgroundColor: "#34c759",
        maxWidth: "500",
      },
      value: 2,
    },
    {
      title: "1 Alert",
      style: {
        backgroundColor: "#ff3b30",
        maxWidth: "500",
      },
      value: 2,
    },
    {
      title: "1 Warning",
      style: {
        backgroundColor: "#ff9500",
        maxWidth: "500",
      },
      value: 2,
    },
  ];

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

  const tbodyData = info
    ? info.map((data, index) => {
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
            content: () => {
              console.log("status:", data.status, status[data.status]);
              return (
                <div
                  className={styles.container}
                  style={status[data.status].style}
                >
                  <div style={{ color: "white" }}>
                    <div style={{ width: "100px", textAlign: "center" }}>
                      {status[data.status].title}
                    </div>
                  </div>
                  <div>
                    <img src={"/assets/images/icons/down2.svg"} />
                  </div>
                </div>
              );
            },
          },
        ];
      })
    : null;
  const searchOptions = ["Created", "Address", "Cost", "Size", "Status"];

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.title}>
            <div>Systems</div>
            <div className={styles.search}>
              <TextInput
                value={searchValue}
                onChange={(value) => {
                  setSearchValue(value);
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
                onChange={setSearchOption}
                title={"Status"}
              />
            </div>
          </div>
          <Table
            theadData={theadData}
            tbodyData={tbodyData}
            pointer={true}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

// export const List = withCommon(ListComponent);
export const List = ListComponent;
