import React, { useEffect, useState } from "react";
import {
  Panel,
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
} from "./components";
import { withCommon } from "common/hocs";
import { Map, useMap } from "@vis.gl/react-google-maps";
import styles from "./AddSystem.module.css";
import { latLngToCell, cellToBoundary } from "h3-js";
import { Polygon } from "common/components/map/polygon/Polygon";
import { Validations } from "common/validations";

const AddSystemComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [systems, setSystems] = useState([]);
  const [user, setUser] = useState({ email: "email@email.com" });

  const map = useMap();

  const actions = {
    handleNext: () => {
      setCurrentStep(currentStep + 1);
    },
    handlePrev: () => {
      setCurrentStep(currentStep - 1);
    },
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

  const validSystems = () => {
    if (currentStep !== 2) return true;
    console.log("valid===>", systems);
    for (const s of systems) {
      if (
        !Validations.isNonNegativeNumber(s.totalBoards) ||
        !Validations.isNonNegativeNumber(s.totalRooms) ||
        !Validations.isNonNegativeNumber(s.monthlyConsumption) ||
        !Validations.isNonNegativeNumber(s.currentMonthlyCost)
      )
        return false;
    }
    return true;
  };

  useEffect(() => {
    if (!!map) {
      map.setZoom(20);
    }
  }, [map]);

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
        defaultZoom={6}
        defaultCenter={{ lat: -28.2125, lng: 24.069 }}
        onClick={(e) => handleClick(e)}
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
      <div
        className={styles["panel"]}
        style={currentStep === 7 ? { right: "unset", top: "unset" } : {}}
      >
        <Panel
          title="System Scoping"
          actions={actions}
          isSmall={currentStep === 7}
          validNext={systems.length !== 0 && validSystems()}
        >
          {currentStep === 1 && (
            <Step1 newSystems={systems} removeSystem={removeSystem} />
          )}
          {currentStep === 2 && (
            <Step2 systems={systems} setSystems={setSystems} />
          )}
          {currentStep === 3 && <Step3 systems={systems} />}
          {currentStep === 4 && (
            <Step4 systems={systems} email={user.email} setUser={setUser} />
          )}
          {currentStep === 5 && (
            <Step5 systems={systems} email={user.email} setUser={setUser} />
          )}
          {currentStep === 6 && (
            <Step6 systems={systems} user={user} setUser={setUser} />
          )}
          {currentStep === 7 && <Step7 />}
        </Panel>
      </div>
    </div>
  );
};

export const AddSystemPage = withCommon(AddSystemComponent, {
  isHeaderSeeThrough: true,
});
