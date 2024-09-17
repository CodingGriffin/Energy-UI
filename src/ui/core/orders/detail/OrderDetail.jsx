import { withCommon } from "common/hocs";
import { Button } from "common/components";
import styles from "./OrderDetail.module.css";
import { useEffect, useState } from "react";
import { TextInput } from "common/components";

const detail = {
  "Customer Details": {
    id: "1",
    email: "email@service.com",
    password: "123",
    first_name: "Matthews",
    last_name: "Jhon",
    phone_number: "072 258 8523",
    longitude: "-31.0321247",
    latitude: "17.8941536",
    formatted_address: "255 5th Street, Bergbron Randburg, 1712, South Africa",
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
    "Cost per Panel": "R 27000.00",
    "Cost per EMS": "R 9000.00",
  },
};

const OrderDetailComponent = (props) => {
  const [identifier, setIdentifier] = useState(null);

  useEffect(() => {
    const match = props.location.pathname.match(/(\d+)$/);
    const param = match ? match[1] : null;
    setIdentifier(param);
  });

  console.log("detail:", props);
  return identifier ? (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleContent}>
            <div className={styles.goback} style={{ cursor: "pointer" }}>
              <img src="/assets/images/icons/goback.svg" />
            </div>
            <div className={styles.address}>
              <p>{identifier}</p>
            </div>
          </div>
          <Button
            type="secondary"
            text="Invest"
            style={{ margin: "10px", width: "190px", height: "100%" }}
          />
        </div>
        <div className={styles.contentInner}>
          <div className={styles.leftSide}>
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <div className={styles.infoTitle}>Customer Details</div>
                <div className={styles.detail}>
                  <img src="/assets/images/icons/down.svg" />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src="/assets/images/icons/user.svg" />
                </div>
                <div
                  className={styles.info}
                >{`${detail["Customer Details"].last_name} ${detail["Customer Details"].first_name}`}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src="/assets/images/icons/phone.svg" />
                </div>
                <div
                  className={styles.info}
                >{`${detail["Customer Details"].phone_number}`}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src="/assets/images/icons/phone.svg" />
                </div>
                <div
                  className={styles.info}
                >{`${detail["Customer Details"].phone_number}`}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src="/assets/images/icons/position.svg" />
                </div>
                <div
                  className={styles.info}
                >{`${detail["Customer Details"].latitude}; ${detail["Customer Details"].longitude}`}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src="/assets/images/icons/map.svg" />
                </div>
                <div
                  className={styles.info}
                >{`${detail["Customer Details"].formatted_address}`}</div>
              </div>
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <div className={styles.infoTitle}>Responsible</div>
                <div className={styles.detail}>
                  <img src="/assets/images/icons/down.svg" />
                </div>
              </div>
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
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.infoHeader}>
                <div className={styles.infoTitle}>System Details</div>
                <div className={styles.detail}>
                  <img src="/assets/images/icons/down.svg" />
                </div>
              </div>
              <div className={styles.item}>
                <table className={styles.table}>
                  <tbody>
                    {Object.keys(detail["System Details"]).map(
                      (item, index) => {
                        return (
                          <tr key={`${item}-${index}`}>
                            <td className={styles.td}>{item}</td>
                            <td
                              className={styles.td}
                              style={{ textAlign: "right" }}
                            >
                              {detail["System Details"][item]}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
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
                <div className={styles.rightItem}>
                  <div className={styles.selectContainer}>
                    <div className={styles.select}>
                      <p>Sales Person</p>
                      <p>{`${detail["Responsible"]["Sales Person"]}`}</p>
                    </div>
                    <p>12 Aug 23 09:55</p>
                  </div>
                </div>
                <div className={styles.rightItem}>
                  <div className={styles.selectContainer}>
                    <div className={styles.select}>
                      <p>Sales Person</p>
                      <p>{`${detail["Responsible"]["Sales Person"]}`}</p>
                    </div>
                    <p>12 Aug 23 09:55</p>
                  </div>
                </div>
                <div className={styles.rightItem}>
                  <div className={styles.selectContainer}>
                    <div className={styles.select}>
                      <p>Sales Person</p>
                      <p>{`${detail["Responsible"]["Sales Person"]}`}</p>
                    </div>
                    <p>12 Aug 23 09:55</p>
                  </div>
                </div>
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
  ) : null;
};

export const Detail = withCommon(OrderDetailComponent);
