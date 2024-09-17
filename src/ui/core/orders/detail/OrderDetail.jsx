import { withCommon } from "common/hocs";
import { Button } from "common/components";
import styles from "./OrderDetail.module.css";
import { useEffect, useState } from "react";

const userInfo = {
  id: "1",
  email: "email@service.com",
  password: "123",
  first_name: "Matthews",
  last_name: "Jhon",
  phone_number: "072 258 8523",
  formatted_address:"255 5th Street, Bergbron Randburg, 1712, South Africa"
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
                <div className={styles.info}>{`${userInfo.last_name} ${userInfo.first_name}`}</div>
              </div>
              <div className={styles.item}>
                <div className={styles.icon}>
                  <img src="/assets/images/icons/user.svg" />
                </div>
                <div className={styles.info}>{`${userInfo.last_name} ${userInfo.first_name}`}</div>
              </div>
            </div>
          </div>
          <div className={styles.rightSide}></div>
        </div>
      </div>
    </div>
  ) : null;
};

export const Detail = withCommon(OrderDetailComponent);
