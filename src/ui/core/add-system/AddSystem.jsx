import React, { useEffect, useMemo, useState } from "react";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { latLngToCell, cellToBoundary } from "h3-js";
import { SystemApi } from "api";
import { Polygon } from "common/components/map/polygon/Polygon";
import { withCommon } from "common/hocs";
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
import styles from "./AddSystem.module.css";

const AddSystemComponent = (props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [systems, setSystems] = useState([]);
  const [user, setUser] = useState({});
  const [isSame, setIsSame] = useState(true);

  const commonChildrenProps = useMemo(() => {
    return {
      currentStep,
      setCurrentStep,
      systems,
      setSystems,
      isSame,
      setIsSame,
      user,
      setUser,
    };
  }, [
    currentStep,
    setCurrentStep,
    systems,
    setSystems,
    isSame,
    setIsSame,
    user,
    setUser,
  ]);

  //.....
  const handleSubmit = async () => {
    try {
      const res = await SystemApi.addSystem({ systems: systems, user: user });
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnMapClick = (e) => {
    if (currentStep !== 1) return;
    const pos = e.detail.latLng;
    const h3Index = latLngToCell(pos.lat, pos.lng, 13);
    const hexagon = cellToBoundary(h3Index).map(([lat, lng]) => ({ lat, lng }));
    setSystems([
      ...systems,
      {
        paths: hexagon,
        status: "reserved",
        id: h3Index,
        center: pos,
        totalRooms: "3",
        totalBoards: "1",
      },
    ]);
  };

  useEffect(() => {
    console.log("cur--->", currentStep);
  }, [currentStep]);

  return (
    <div className={styles["add-system-container"]}>
      <Map
        clickableIcons={false}
        style={{
          userSelect: "none",
          outline: "none",
        }}
        disableDefaultUI={true}
        defaultZoom={18}
        defaultCenter={{ lat: -28.744802253975458, lng: 24.757002591003687 }}
        onClick={handleOnMapClick}
      >
        {systems.map((hex, index) => (
          <Polygon
            key={index}
            data={hex}
            paths={hex.paths}
            status={"claimed"}
            isSelected={"true"}
          />
        ))}
      </Map>
      {currentStep === 1 && <Step1 {...commonChildrenProps} />}
      {currentStep === 2 && <Step2 {...commonChildrenProps} />}
      {currentStep === 3 && <Step3 {...commonChildrenProps} />}
      {currentStep === 4 && <Step4 {...commonChildrenProps} />}
      {currentStep === 5 && (
        <Step5 {...commonChildrenProps} showToast={props.showToast} />
      )}
      {currentStep === 6 && (
        <Step6 {...commonChildrenProps} handleSubmit={handleSubmit} />
      )}
      {currentStep === 7 && <Step7 />}
    </div>
  );
};

export const AddSystemPage = withCommon(AddSystemComponent, {
  isHeaderSeeThrough: true,
});
