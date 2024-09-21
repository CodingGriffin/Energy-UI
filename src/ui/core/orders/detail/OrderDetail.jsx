import { withCommon } from "common/hocs";
import { Button, Modal } from "common/components";
import styles from "./OrderDetail.module.css";
import { useEffect, useState } from "react";
import { TextInput, ShowInfo } from "common/components";
import { useNavigate } from "react-router-dom";
import { NestedTableData } from "../components/nestedtabledata/NestedTableData";
import { SignOffModal } from "../components/signoffmodal/SignOffModal";
import { SystemModal } from "../components/systemmodal/SystemModal";
import { QuoteModal } from "../components/quotemodal/QuoteModal";
import { OrderDetailModal } from "../components/orderdetailmodal/OrderDetailModal";
import { orderDetailData } from "ui/core/portal/sample";
import { quote } from "ui/core/portal/sample";

const detail = {
  "Customer Details": {
    id: "1",
    name: "Jhon Matthews",
    phone: "072 258 8523",
    email: "email@service.com",
    position: "-31.0321247; 17.8941536",
    address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
    car: "255 5th Street, Bergbron Randburg, 1712, South Africa",
  },

  Responsible: {
    "Sales Person": "Pierre Richards",
    "Service Center": "Vans Electrical",
    "Service Team": "Team 02",
    "System Owner": "Amavolts",
  },

  "System Details": {
    "Total Panels": 3,
    "Total EMS": 1,
    "Kit Cost": {
      total: "R 270 000.00",
      detail: [
        {
          title: "AC Cable",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
        {
          title: "Earth Cable",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
        {
          title: "Earth Spike",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
        {
          title: "Rails Clamp etc.",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
      ],
    },
    "Installation Cost": {
      total: "R 270 000.00",
      detail: [
        {
          title: "AC Cable",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
        {
          title: "AC Cable",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
        {
          title: "AC Cable",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
        {
          title: "AC Cable",
          per: "R 300.00",
          count: "19",
          total: "R5 700.00",
        },
      ],
    },
    "Delivery Cost": "R 27000.00",
    "Labor Cost": "R 9000.00",
  },
};

const OrderDetailComponent = (props) => {
  const [identifier, setIdentifier] = useState(null);

  const [siteModal, setSiteModal] = useState(0);
  const [systemModal, setSystemModal] = useState(0);
  const [quoteId, setQuoteId] = useState(null);
  const [quoteModal, setQuoteModal] = useState(0);
  const [orderDetailModal, setOrderDetailModal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setIdentifier(props.id);
  });

  const goBack = () => {
    navigate("/portal/orders");
  };

  return identifier ? (
    <>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.titleContent}>
              <div
                className={styles.goback}
                style={{ cursor: "pointer" }}
                onClick={goBack}
              >
                <img src="/assets/images/icons/goback.svg" />
              </div>
              <div className={styles.address}>
                <p>{identifier}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "5px", height: "100%" }}>
              <Button
                type="secondaryoutline"
                text="Site Sign Off"
                style={{ width: "190px" }}
                textStyle={{ fontSize: "12px" }}
                onClick={() => setSiteModal(1)}
              />
              <Button
                type="secondary"
                text="View System"
                style={{ width: "190px" }}
                textStyle={{ fontSize: "12px" }}
                onClick={() => setSystemModal(1)}
              />
            </div>
          </div>
          <div className={styles.contentInner}>
            <div className={styles.leftSide}>
              <ShowInfo edit={true} title={"Customer Details"}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/user.svg" />
                  </div>
                  <div
                    className={styles.info}
                  >{`${detail["Customer Details"].name}`}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/phone.svg" />
                  </div>
                  <div
                    className={styles.info}
                  >{`${detail["Customer Details"].phone}`}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/position.svg" />
                  </div>
                  <div
                    className={styles.info}
                  >{`${detail["Customer Details"].position}`}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/map.svg" />
                  </div>
                  <div
                    className={styles.info}
                  >{`${detail["Customer Details"].address}`}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/car.svg" />
                  </div>
                  <div
                    className={styles.info}
                  >{`${detail["Customer Details"].address}`}</div>
                </div>
              </ShowInfo>
              <ShowInfo title={"Responsible"}>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/user2.svg" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.selectContainer}>
                      <div className={styles.select}>
                        <p>Sales Person</p>
                        <p>{`${detail["Responsible"]["Sales Person"]}`}</p>
                      </div>
                      <img src="/assets/images/icons/down.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/center.svg" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.selectContainer}>
                      <div className={styles.select}>
                        <p>Service Center</p>
                        <p>{`${detail["Responsible"]["Service Center"]}`}</p>
                      </div>
                      <img src="/assets/images/icons/down.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/team.svg" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.selectContainer}>
                      <div className={styles.select}>
                        <p>Service Team</p>
                        <p>{`${detail["Responsible"]["Service Team"]}`}</p>
                      </div>
                      <img src="/assets/images/icons/down.svg" />
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.icon}>
                    <img src="/assets/images/icons/owner.svg" />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.selectContainer}>
                      <div className={styles.select}>
                        <p>System Owner</p>
                        <p>{`${detail["Responsible"]["System Owner"]}`}</p>
                      </div>
                      <img src="/assets/images/icons/down.svg" />
                    </div>
                  </div>
                </div>
              </ShowInfo>
              <ShowInfo edit={true} title={"System Details"}>
                <div className={styles.item}>
                  <table className={styles.table}>
                    <tbody>
                      {Object.keys(detail["System Details"]).map(
                        (item, index) => {
                          if (
                            typeof detail["System Details"][item] !== "object"
                          ) {
                            return (
                              <tr
                                key={`${item}-${index}`}
                                className={styles.tr}
                              >
                                <td className={styles.td}>{item}</td>
                                <td
                                  className={styles.td}
                                  style={{ textAlign: "right" }}
                                >
                                  {detail["System Details"][item]}
                                </td>
                              </tr>
                            );
                          } else {
                            return (
                              <NestedTableData
                                key={`${item}-${index}`}
                                title={item}
                                data={detail["System Details"][item]}
                              />
                            );
                          }
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </ShowInfo>
            </div>
            <div className={styles.rightSide}>
              <div className={styles.rightSideTitle}>
                <div className={styles.selectContainer}>
                  <div className={styles.select}>
                    <div>Follow Up (Quote)</div>
                  </div>
                  <img src="/assets/images/icons/down.svg" />
                </div>
              </div>
              <div className={styles.rightSideContainer}>
                <div className={styles.items}>
                  {[1, 2, 3].map((item, i) => (
                    <div key={`right-${i}`} className={styles.rightItem}>
                      <div className={styles.selectContainer}>
                        <div
                          className={styles.select}
                          onClick={() => setQuoteModal(!quoteModal)}
                        >
                          <p>Sales Person</p>
                          <p>{`${detail["Responsible"]["Sales Person"]}`}</p>
                        </div>
                        <p>12 Aug 23 09:55</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.inputContainer}>
                  <TextInput
                    label={"Enter Commentary"}
                    containerStyle={{
                      flex: "1",
                    }}
                    errorMessage={"Please enter your first name"}
                  />
                  <div className={styles.sendIcon}>
                    <img src="/assets/images/icons/send.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignOffModal
        show={siteModal}
        setShow={() => setSiteModal(!siteModal)}
        detail={detail}
      />
      <SystemModal
        show={systemModal}
        setShow={() => setSystemModal(!systemModal)}
        detail={detail}
      />
      <QuoteModal
        show={quoteModal}
        data={quote}
        setShow={() => setQuoteModal(!quoteModal)}
      />
      <OrderDetailModal
        show={orderDetailModal}
        data={orderDetailData}
        setShow={() => setOrderDetailModal(!orderDetailModal)}
      />
    </>
  ) : null;
};

export const Detail = OrderDetailComponent;
