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
import { OrderDetailTable } from "../components/orderdetailtable/OrderDetailTable";
import {
  orderDetailData,
  quote,
  commentaryData,
  customerDetails,
  responsibleDetails,
  billingDetails,
} from "ui/core/portal/sample";
import { Commentary } from "../components/commentary/Commentary";
import { InfoItem } from "../components/info-item/InfoItem";
import { BillInfo } from "../components/bill-info/BillInfo";
import { BillItem } from "../components/bill-item/BillItem";
import { CustomDetailModal } from "../components/custom-detail-modal/CustomDetailModal";

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
  const [quoteId, setQuoteId] = useState(null);
  const [modals, setModals] = useState({});

  const navigate = useNavigate();

  const goBack = () => {
    props.handleSidebar(1);
    navigate("/portal/orders");
  };

  const doModal = (type) => {
    console.log("doModal", type);
    setModals({ [type.type]: 1 });
    console.log("modals:", modals);
  };

  return props.id ? (
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
                <p>{props.id}</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "5px", height: "100%" }}>
              <Button
                type="secondaryoutline"
                text="Site Sign Off"
                style={{ width: "190px" }}
                textStyle={{ fontSize: "12px" }}
                onClick={() => doModal({type:"Sign Off"})}
              />
              <Button
                type="secondary"
                text="View System"
                style={{ width: "190px" }}
                textStyle={{ fontSize: "12px" }}
                onClick={() => doModal({type:"Systems"})}
              />
            </div>
          </div>
          <div className={styles.contentInner}>
            <div className={styles.leftSide}>
              {/* <ShowInfo edit={true} title={"Customer Details"}>
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
              </ShowInfo> */}
              <ShowInfo title={"Customer Details"}>
                {customerDetails.map((item, index) => (
                  <InfoItem
                    key={`detail-custom-${index}`}
                    item={item}
                    handleEdit={doModal}
                  />
                ))}
              </ShowInfo>
              <ShowInfo title={"Responsible"}>
                {responsibleDetails.map((item, index) => (
                  <InfoItem key={`detail-responsible-${index}`} item={item} />
                ))}
              </ShowInfo>
              <ShowInfo title={"Order Details"} edit={true} handleEdit={doModal}>
                <OrderDetailTable data={orderDetailData} />
              </ShowInfo>
              <BillInfo>
                {billingDetails.map((item, index) => {
                  return <BillItem key={`bill-${index}`} item={item} />;
                })}
              </BillInfo>
            </div>
            <Commentary comments={commentaryData} />
          </div>
        </div>
      </div>
      <SignOffModal
        show={modals["Sign Off"]}
        setShow={() => setModals({})}
        detail={detail}
      />
      <SystemModal
        show={modals["Systems"]}
        // show={1}
        setShow={() => setModals({})}
        detail={detail}
      />
      {/* <QuoteModal
        // show={modals["Quote"]}
        show={1}
        setShow={() => setModals({})}
        data={quote}
      /> */}
      <OrderDetailModal
        show={modals["Order Details"]}
        // show={1}
        setShow={() => setModals({})}
        data={orderDetailData}
      />
      {customerDetails.map((item, index) => (
        item.type === "input" ? <CustomDetailModal key={`${item.title}-${index}`}
          show={modals[item.title]}
          setShow={() => setModals({})}
          item={item}
        />:null
      ))}
    </>
  ) : null;
};

export const Detail = OrderDetailComponent;
