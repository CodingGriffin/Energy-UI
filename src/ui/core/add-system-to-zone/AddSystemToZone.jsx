import React, { useState } from "react";
import { Map } from "@vis.gl/react-google-maps";
import { Panel, Step1, Step2 } from "./components";
import { Polygon } from "common/components/map/polygon/Polygon";
import styles from "./AddSystemToZone.module.css";
import { latLngToCell, cellToBoundary } from "h3-js";
import { Button } from "common/components";

export const AddSystemToZone = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [systems, setSystems] = useState([]);
  const [showModal, setShowModal] = useState(true);

  const modalData = {
    totalSystems: "5",
    panelsPerSystem: "3",
    emsPerSystem: "1",
    costPerSystem: "R 30000.00",
    totalCostForAllSystems: "R 150000.00",
  };

  const handleClick = (e) => {
    if (currentStep !== 1) return;
    const pos = e.detail.latLng;
    const h3Index = latLngToCell(pos.lat, pos.lng, 13);
    const hexagon = cellToBoundary(h3Index).map(([lat, lng]) => ({ lat, lng }));
    setSystems([
      ...systems,
      { paths: hexagon, status: "reserved", id: h3Index, center: pos },
    ]);
  };

  const removeSystem = (hex_id) => {
    setSystems(
      systems.filter((hex) => {
        return hex.id !== hex_id;
      })
    );
  };

  const validNext = () => {
    return true;
  };

  const handles = {
    handleNext: () => setCurrentStep(currentStep + 1),
    handlePrev: () => setCurrentStep(currentStep - 1),
  };

  return (
    <div className={styles["add-system-container"]}>
      <Map
        clickableIcons={false}
        style={{
          userSelect: "none",
          outline: "none",
        }}
        mapId={"b9e443513213961d"}
        disableDefaultUI={true}
        defaultZoom={20}
        defaultCenter={{ lat: -28.2125, lng: 24.069 }}
        onClick={handleClick}
      >
        {systems.map((hex, index) => (
          <Polygon
            key={index}
            data={hex}
            paths={hex.paths}
            claimedColor={"#000"}
            claimedOpacity={0.3}
            reservedColor={"#000"}
            reservedOpacity={0.3}
          />
        ))}
      </Map>
      <div className={styles["panel"]}>
        <Panel title={"Add Systems"} actions={handles} validNext={validNext}>
          {currentStep === 1 && (
            <Step1 removeSystem={removeSystem} systems={systems} />
          )}
          {currentStep > 2 && <Step2 />}
        </Panel>
      </div>
      {showModal && (
        <div className={styles["modal-container"]}>
          <div className={styles["modal-box"]}>
            <div className={styles["modal-header"]}></div>
            <div className={styles["modal-body"]}>
              <div className={styles["modal-content"]}>
                <table className={styles["modal-table"]}>
                  <tbody>
                    <tr>
                      <td>Total Systems</td>
                      <td>{modalData.totalSystems}</td>
                    </tr>
                    <tr>
                      <td>Panels per System</td>
                      <td>{modalData.panelsPerSystem}</td>
                    </tr>
                    <tr>
                      <td>EMS per System</td>
                      <td>{modalData.emsPerSystem}</td>
                    </tr>
                    <tr>
                      <td>Cost per System</td>
                      <td>{modalData.costPerSystem}</td>
                    </tr>
                    <tr>
                      <td>Total Cost for all Systems</td>
                      <td>{modalData.totalCostForAllSystems}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles["modal-footer"]}>
              <Button
                text={"Back"}
                style={{ flex: 1, height: "38px" }}
                type="secondaryoutline"
              />
              <Button
                text={"Place Order"}
                style={{ flex: 1, height: "38px" }}
                type="secondary"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
