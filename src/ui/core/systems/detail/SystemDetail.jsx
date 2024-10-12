import { Map } from "@vis.gl/react-google-maps";
import styles from "./SystemDetail.module.css";
import { Button } from "common/components";
import { DetailModal } from "../components/detail-modal/DetailModal";
import { useState, useEffect } from "react";
import { ProgressPanel } from "../components/progress-panel/ProgressPanel";

const panels = [
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
  {
    "Panel Voltage": "42V",
    "Panel Current": "8A",
    "Battery Voltage": "42V",
    "Battery Current": "6A",
    "Load Current": "6A",
    "Relay Status": "ON",
  },
];

const ems = {
  "Firmware Version": "1.0.0",
  "System Status": "LIVE",
  "Generated Capacity": "65%",
  "Generated Voltage": "42v",
  "Generated Current": "6A",
  "Battery SOC": "76%",
  "Stored Voltage": "42v",
  "Stored Current": "6A",
  "Load Consumption": "2.5kw",
  "Load Voltage": "42V",
  "Load Current": "6A,",
};

export const Detail = (props) => {
  const [detailModal, setDetailModal] = useState(0);
  const [identifier, setIdentifier] = useState(null);

  useEffect(() => {
    setIdentifier(props.id);
  });

  return (
    <>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.generalInfo}>
            <ProgressPanel
              rightTop={10}
              rightBottom={10}
              left={15}
              bottom={"0000120863"}
              inner={20}
              meterUnit={1256}
              time={"00:06:12:35:35"}
            />
            <div className={styles.genContent}>
              <div>EMS</div>
              {Object.keys(ems).map((el, index) => (
                <div key={`ems-${index}`} className={styles.item}>
                  <p>{el}</p>
                  <p>{ems[el]}</p>
                </div>
              ))}
            </div>
            <div className={styles.mapContainer}>
              <Button
                type="secondary"
                text="Manage System"
                style={{
                  height: "30px",
                  width: "150px",
                  padding: "8px",
                  position: "absolute",
                  zIndex: "10",
                }}
                textStyle={{ fontSize: "15px", lineHeight: "18px" }}
              />
              <div className={styles.map}>
                <Map
                  clickableIcons={false}
                  style={{
                    userSelect: "none",
                    outline: "none",
                  }}
                  mapTypeId="hybrid"
                  mapId={"b9e443513213961d"}
                  disableDefaultUI={true}
                  defaultZoom={6}
                  defaultCenter={{ lat: -28.2125, lng: 24.069 }}
                />
              </div>
            </div>
          </div>
          <div className={styles.panelList}>
            {panels.map((panel, index) => (
              <div key={`panel-${index}`} className={styles.panel}>
                <div>
                  <div className={styles.panelTitle}>{`Panel ${index}`}</div>
                  <div className={styles.panelContent}>
                    {Object.keys(panel).map((el, id) => (
                      <div key={`panel-item-${id}`}>
                        <p>{el}</p>
                        <p>{panel[el]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DetailModal
        show={detailModal}
        setShow={() => setDetailModal(!detailModal)}
        identifier={identifier}
      />
    </>
  );
};
