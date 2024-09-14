import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { withCommon } from "common/hocs";

import { Button } from "common/components";

import { SystemApi } from "api";
import styles from "./Detail.module.css";
import InfoPanel from "../components/infoPanel/InfoPanel";
import { TenderChart } from "../components/tenderChart/TenderChart";
import { DetailTable } from "../components/detailTable/DetailTable";
import { yearData } from "../sample";

// import { tenderAllData } from "../sample";
// import { yearData } from "../sample";

const DetailComponent = (props) => {
  const [data, setData] = useState(null);
  const [investData, setInvestData] = useState(null);
  const [costPerUnit, setCostPerUnit] = useState(14);
  const urlParams = useParams();
  const { identifier } = urlParams;

  const formatValue = (value) => {
    return Math.round(value * 10) / 10;
  };

  useEffect(() => {
    SystemApi.getDetailedSystemInfo(identifier).then((res) => {
      setData(res.data);
    });
    console.log("data", data);
  }, [identifier]);

  useEffect(() => {
    SystemApi.getCalculatedInfo(identifier, formatValue(costPerUnit)).then((res) => {
      console.log("res", res);
      setInvestData(res.data);
    });
    console.log("investData:", investData, costPerUnit);
  }, [costPerUnit]);

  const onBackClick = () => {};

  return data ? (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
            <div
              className={styles.goback}
              onClick={onBackClick}
              style={{ cursor: "pointer" }}
            >
              <img src="/assets/images/icons/goback.svg" />
            </div>
            <div className={styles.address}>
              <p>{data.address_id}</p>
            </div>
          </div>
          <Button
            type="secondary"
            text="Invest"
            style={{ padding: "10px", width: "190px", height: "100%" }}
          />
        </div>
        <div
          className={styles.content}
          style={{
            background: "#F1F2F4",
            flexDirection: "row",
            padding: "10px",
          }}
        >
          <div className={styles.leftSide}>
            <TenderChart />
            <DetailTable info={yearData} />
          </div>
          <InfoPanel info={data} value={costPerUnit} setValue={setCostPerUnit} calc={investData} />
        </div>
      </div>
    </div>
  ) : null;
};

export const Detail = withCommon(DetailComponent);
