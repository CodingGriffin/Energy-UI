import { Modal, Button, Table } from "common/components";
import styles from "./QuoteModal.module.css";

export const QuoteModal = ({ show, data = null, setShow }) => {
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
        width: "100px",
        fontSize: "10px",
        minWidth: "100px",
      },
    },
    {
      type: "text",
      content: "Qty",
      style: {
        width: "40px",
        minWidth: "40px",
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
      content: "Unit Price",
      style: {
        width: "75px",
        minWidth: "85px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "Disc",
      style: {
        width: "50px",
        minWidth: "85px",
        fontSize: "10px",
      },
    },
    {
      type: "text",
      content: "VAT",
      style: {
        width: "75px",
        minWidth: "75px",
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
  ];

  const tbodyData = data["section3"]
    ? data["section3"].map((item, index) => [
        {
          type: "text",
          content: item[0],
          style: {
            width: "70px",
            fontSize: "10px",
            minWidth: "70px",
          },
        },
        {
          type: "text",
          content: item[1],
          style: {
            width: "100px",
            fontSize: "10px",
            minWidth: "100px",
          },
        },
        {
          type: "text",
          content: item[2],
          style: {
            width: "40px",
            minWidth: "40px",
            fontSize: "10px",
          },
        },

        {
          type: "text",
          content: item[3],
          style: {
            width: "25px",
            minWidth: "25px",
            fontSize: "10px",
          },
        },
        {
          type: "text",
          content: item[4],
          style: {
            width: "75px",
            minWidth: "85px",
            fontSize: "10px",
          },
        },
        {
          type: "text",
          content: item[5],
          style: {
            width: "50px",
            minWidth: "85px",
            fontSize: "10px",
          },
        },
        {
          type: "text",
          content: item[6],
          style: {
            width: "75px",
            minWidth: "75px",
            fontSize: "10px",
          },
        },
        {
          type: "text",
          content: item[7],
          style: {
            width: "85px",
            minWidth: "85px",
            fontSize: "10px",
          },
        },
      ])
    : null;

  return data ? (
    <Modal doModal={show} title="Quote" onClose={setShow}>
      <div className={styles["content-container"]}>
        <div className={styles.panel}>
          <div className={styles.header}>
            <div className={styles.img}>
              <img src="/assets/images/icons/header.svg" />
            </div>
            <div className={styles.headerContent}>
              <div className={styles.headerText}>{data.header.title}</div>
              {data["header"]["content"].map((el, id) => (
                <div key={`header-content-${id}`} className={styles.headerItem}>
                  <p>
                    <strong>{el.title}</strong>
                  </p>
                  <p>{el.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["section-1"]}>
            {data["section1"].map((el, id) => (
              <div key={`selction1-${id}`} style={{ flex: 1 }}>
                <div className={styles["section-1-item-title"]}>
                  <strong>{el.title}</strong>
                </div>
                {el.content.map((el1, id1) => (
                  <p
                    key={`section-1-content-${id1}`}
                    className={styles["section-1-p"]}
                  >
                    {el1}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className={styles["section-2"]}>
            {data["section2"].map((el, id) => (
              <div key={`selction-2-${id}`}>
                <div className={styles["section-2-item-title"]}>
                  <strong>{el.title}</strong>:{el.content}
                </div>
              </div>
            ))}
          </div>
          <div className={styles["section-3"]}>
            <Table theadData={theadData} tbodyData={tbodyData} />
            <div className={styles["section-3-side"]}></div>
          </div>
          <div className={styles["section-4"]}>
            <div className={styles["section-4-left"]}>
              {data["section4"].map((el, id) => (
                <div key={`selction-4-${id}`}>
                  <div>
                    <strong>{el.title}</strong>
                  </div>
                  {el.content.map((el1, id1) => (
                    <div className={styles["section-4-item"]}>
                      <p
                        key={`section-4-content-${id1}`}
                        className={styles["section-4-p"]}
                      >
                        <strong>{el1.title}:</strong>
                      </p>
                      <p>{el1.content}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles["section-5"]}>
              {data["section5"].map((el, id) => (
                <div
                  key={`selction-5-${id}`}
                  className={styles["section-5-item"]}
                >
                  <div>
                    <strong>{el.title}</strong>:{el.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles["section-container"]}>
            <div className={styles["section-6"]}>
              {data["section6"].map((el, id) => (
                <div
                  key={`selction-6-${id}`}
                  className={styles["section-6-item"]}
                >
                  <div style={{ minWidth: "50px" }}>{el.title}</div>
                  <div>{el.content}</div>
                </div>
              ))}
            </div>
            <div className={styles["description"]}>
              <div>
                NB. Please write Customer Account number MIN001 and the Invoice
                Number IN-0000003 as references when making payment To be
                collected. Full payment required to secure order and delivery by
                30 September 2024
              </div>
              <div>
                NB. GOODS REMAIN PROPERTY OF HATRONIKA PTY LTD UNTIL FULLY PAID
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "5px", height: "40px" }}>
        <Button
          type="secondaryoutline"
          text="Site Sign Off"
          style={{ flex: 1 }}
          textStyle={{ fontSize: "12px" }}
          onClick={() => setSiteModal(1)}
        />
        <Button
          type="secondary"
          text="View System"
          style={{ flex: 1 }}
          textStyle={{ fontSize: "12px" }}
          onClick={() => setSystemModal(1)}
        />
      </div>
    </Modal>
  ) : null;
};
