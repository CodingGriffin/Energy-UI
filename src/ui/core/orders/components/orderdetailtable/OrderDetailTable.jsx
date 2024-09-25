import { Table, TextInput } from "common/components";
import styles from "./OrderDetailTable.module.css";
import { useEffect, useState } from "react";

export const OrderDetailTable = ({ data = null, editable = false }) => {
  const [tbodyData, setTbodyData] = useState(null);
  const [addState, setAddState] = useState("initial");
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  // const [deleteId, setDeleteId] = useState(null);

  const theadData = [
    {
      type: "text",
      content: "Item Code",
      style: {
        width: "70px",
        fontSize: "10px",
        minWidth: "70px",
      },
    },
    {
      type: "text",
      content: "Description",
      style: {
        width: "156px",
        fontSize: "10px",
        minWidth: "156px",
      },
    },
    {
      type: "text",
      content: "Unit Price",
      style: {
        width: "85px",
        minWidth: "85px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "VAT",
      style: {
        width: "85px",
        minWidth: "85px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "Total",
      style: {
        width: "85px",
        minWidth: "85px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "Disc",
      style: {
        width: "85px",
        minWidth: "85px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "Qty",
      style: {
        width: "30px",
        minWidth: "20px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "UOM",
      style: {
        width: "25px",
        minWidth: "25px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      style: {
        width: "18px",
        minWidth: "18px",
        fontSize: "10px",
      },
    },
  ];

  useEffect(() => {
    setTbodyData(
      data &&
        data.map((item, index) => [
          {
            type: "text",
            content: item[0],
            style: {
              width: "70px",
              fontSize: "10px",
              minWidth: "70px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[1],
            style: {
              width: "156px",
              fontSize: "10px",
              minWidth: "156px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[2],
            style: {
              width: "85px",
              fontSize: "10px",
              minWidth: "85px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[3],
            style: {
              width: "85px",
              fontSize: "10px",
              minWidth: "85px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[4],
            style: {
              width: "85px",
              fontSize: "10px",
              minWidth: "85px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[5],
            style: {
              width: "85px",
              fontSize: "10px",
              minWidth: "85px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[6],
            style: {
              width: "30px",
              fontSize: "10px",
              minWidth: "25px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "text",
            content: item[7],
            style: {
              width: "25px",
              fontSize: "10px",
              minWidth: "25px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
          {
            id: index,
            type: "component",
            content: () => {
              return (
                <div style={{ background: "#ecedef", borderRadius: "5px" }}>
                  <img
                    style={{ width: "15px", height: "15px" }}
                    src="/assets/images/icons/cross.svg"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              );
            },
            style: {
              width: "25px",
              fontSize: "10px",
              minWidth: "25px",
              background: "white",
              border: "none",
              height: "25px",
            },
          },
        ])
    );
    console.log("tbodyData:", tbodyData);
  }, []);

  useEffect(() => {
    console.log("res:", result);
  }, [value]);

  const handleDelete = (value) => {
    console.log("delete id:", value, tbodyData);
    setTbodyData(tbodyData.filter((el, id) => id !== value));
  };

  const handleClick = () => {
    switch (addState) {
      case "initial":
        setAddState("input");
        break;
      default:
        break;
    }
  };

  const handleSelect = (index) => {
    console.log("res:", result[index]);
    let newIndex = tbodyData.length;
    setAddState("selected");
    setTbodyData([
      ...tbodyData,
      [
        {
          type: "text",
          content: result[index][0],
          style: {
            width: "70px",
            fontSize: "10px",
            minWidth: "70px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          id: index,
          type: "text",
          content: result[index][1],
          style: {
            width: "156px",
            fontSize: "10px",
            minWidth: "156px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          type: "text",
          content: result[index][2],
          style: {
            width: "85px",
            fontSize: "10px",
            minWidth: "85px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          type: "text",
          content: result[index][3],
          style: {
            width: "85px",
            fontSize: "10px",
            minWidth: "85px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          type: "text",
          content: result[index][4],
          style: {
            width: "85px",
            fontSize: "10px",
            minWidth: "85px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          type: "text",
          content: result[index][5],
          style: {
            width: "85px",
            fontSize: "10px",
            minWidth: "85px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          type: "text",
          content: result[index][6],
          style: {
            width: "30px",
            fontSize: "10px",
            minWidth: "25px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          type: "text",
          content: result[index][7],
          style: {
            width: "25px",
            fontSize: "10px",
            minWidth: "25px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
        {
          id: newIndex,
          type: "component",
          content: () => {
            return (
              <div style={{ background: "#ecedef", borderRadius: "5px" }}>
                <img
                  style={{ width: "15px", height: "15px" }}
                  src="/assets/images/icons/cross.svg"
                  onClick={() => handleDelete(newIndex)}
                />
              </div>
            );
          },
          style: {
            width: "25px",
            fontSize: "10px",
            minWidth: "25px",
            background: "white",
            border: "none",
            height: "25px",
          },
        },
      ],
    ]);
    setAddState("initial");
    setValue("");
    setResult("");
  };

  const handleInput = (v) => {
    setResult(
      data.filter((item) =>
        (item[0] + item[1]).toLowerCase().includes(v.toLowerCase())
      )
    );
  };

  return (
    <div className={styles["content-container"]}>
      <div className={styles.panel}>
        <Table theadData={theadData} tbodyData={tbodyData} />
        {addState === "input" && editable ? (
          <div style={{ display: "flex" }}>
            <TextInput
              value={value}
              onChange={(v) => {
                setValue(v);
                handleInput(v);
              }}
              containerStyle={{
                width: "226px",
                padding: "2px",
              }}
              placeholder="Search Product..."
            />
            <div
              className={styles.change}
              style={{
                width: "85px",
                minWidth: "85px",
              }}
            >
              <span>-</span>
            </div>
            <div
              className={styles.change}
              style={{
                width: "85px",
                minWidth: "85px",
              }}
            >
              <span>-</span>
            </div>
            <div
              className={styles.change}
              style={{
                width: "85px",
                minWidth: "85px",
              }}
            >
              <span>-</span>
            </div>
            <div
              className={styles.change}
              style={{
                width: "85px",
                minWidth: "85px",
              }}
            >
              <span>-</span>
            </div>
            <div
              className={styles.change}
              style={{
                width: "30px",
                minWidth: "30px",
              }}
            >
              <span>-</span>
            </div>
            <div
              className={styles.change}
              style={{
                width: "25px",
                minWidth: "25px",
              }}
            >
              <span>-</span>
            </div>
            <div
              className={styles.change}
              style={{
                width: "25px",
                minWidth: "25px",
              }}
            >
              <img
                style={{ width: "15px", height: "15px" }}
                src="/assets/images/icons/cross.svg"
              />
            </div>
          </div>
        ) : null}
        {editable && addState === "input" && result.length !== 0 ? (
          <div className={styles.search}>
            {result.map((el, index) => (
              <div
                className={styles.list}
                key={`el-${index}`}
                onClick={() => handleSelect(index)}
              >
                {el[0] + el[1]}
              </div>
            ))}
          </div>
        ) : null}
        {editable ? (
          <div
            className={styles["add-btn"]}
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            +
          </div>
        ) : null}
        <div className={styles.num}>
          <div style={{ textAlign: "right" }}>Subtotal</div>
          <div>9999.00</div>
        </div>
        <div className={styles.num}>
          <div style={{ textAlign: "right" }}>Discount</div>
          <div>9999.00</div>
        </div>
        <div className={styles.num}>
          <div style={{ textAlign: "right" }}>VAT</div>
          <div>9999.00</div>
        </div>
        <div className={styles.num}>
          <div style={{ textAlign: "right" }}>Right</div>
          <div>9999.00</div>
        </div>
      </div>
    </div>
  );
};
