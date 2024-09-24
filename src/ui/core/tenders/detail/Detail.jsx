import { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { withCommon } from "common/hocs";

import { Button } from "common/components";

import { SystemApi } from "api";
import styles from "./Detail.module.css";
import InfoPanel from "../components/infoPanel/InfoPanel";
import { TenderChart } from "../components/tenderChart/TenderChart";
import { DetailTable } from "../components/detailTable/DetailTable";
import { useAuth } from "../../../../context/AuthContext";

const DetailComponent = (props) => {
  const urlParams = useParams();
  const { identifier } = urlParams;
  const [tileData, setTileData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [costPerUnit, setCostPerUnit] = useState(null);
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();

  const formatValue = (value) => {
    return Math.round(value * 10) / 10;
  };

  useEffect(() => {
    SystemApi.getDetailedSystemInfo(identifier, formatValue(costPerUnit)).then(
      (res) => {
        setTileData(res.data.tiles);
        setChartData(res.data.chartData);
        setTableData(res.data.tableData);
      }
    );
  }, [costPerUnit, identifier]);

  const onBackClick = () => {
    navigate("/tenders");
  };

  const handleInvest = () => {
    isAuthenticated? navigate("/payment"):navigate("/login");
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleContent}>
            <div
              className={styles.goback}
              onClick={onBackClick}
              style={{ cursor: "pointer" }}
            >
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
            onClick={() => handleInvest()}
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
            <TenderChart info={chartData} identifier={identifier} />
            <DetailTable info={tableData} />
          </div>
          <div className={styles.rightSide}>
            <InfoPanel
              info={tileData}
              value={costPerUnit}
              setValue={setCostPerUnit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Detail = withCommon(DetailComponent);
