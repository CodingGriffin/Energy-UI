import InfoItem from "../infoItem/InfoItem";
import InvestmentDetail from "./InvestmentDetail";
import NewCostDetail from "./NewCostDetail";
import SystemCostDetail from "./SystemCostDetail";
import styles from "./InfoPanel.module.css";
import { SliderInputCard } from "common/components";

const InfoPanel = (props) => {
  return (
    <div className={styles.rightSide}>
      <InfoItem title={"Cost per Unit"} showDetailedButton={false}>
        <SliderInputCard
          max={5.5}
          min={1.5}
          step={0.1}
          value={props.value}
          onChange={(val) => props.setValue(val)}
        />
      </InfoItem>
      <InfoItem
        title={"New Cost per Unit"}
        hiddenChild={<NewCostDetail data={props.info} />}
      >
        <div>R{props.info.unit_cost_new}</div>
      </InfoItem>
      <div className={styles.between}>
        <div className={styles["flex-1"]}>
          <InfoItem title={"EMS"} showDetailedButton={false}>
            <p>{props.info.total_ems}</p>
          </InfoItem>
        </div>
        <div style={{ width: "10px" }}></div>
        <div className={styles["flex-1"]}>
          <InfoItem title={"Panels"} showDetailedButton={false}>
            <p>{props.info.total_panels}</p>
          </InfoItem>
        </div>
      </div>
      <InfoItem title={"System Cost"} hiddenChild={<SystemCostDetail />}>
        <div>R{props.info.system_cost_incl}</div>
      </InfoItem>
      <div className={styles.between}>
        <div className={styles["flex-1"]}>
          <InfoItem title={"ROI"} showDetailedButton={false}>
            <p>{props.info.roi}%</p>
          </InfoItem>
        </div>
        <div style={{ width: "10px" }}></div>
        <div className={styles["flex-1"]}>
          <InfoItem title={"IRR"} showDetailedButton={false}>
            <p>{props.info.irr}%</p>
          </InfoItem>
        </div>
      </div>
      <InfoItem title={"Consumption per month"} showDetailedButton={false}>
        <p>{props.info.monthly_consumption_kwh}kWh</p>
      </InfoItem>
      <InfoItem title={"Income per month"} showDetailedButton={false}>
        <p>R {props.info.income}+ 2.5%pa</p>
      </InfoItem>
      <InfoItem
        title={"Investment Details"}
        hiddenChild={
          <InvestmentDetail data={props.calc ? props.calc : props.info} />
        }
      />
    </div>
  );
};

export default InfoPanel;
