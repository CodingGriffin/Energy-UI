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
import { SystemApi } from "api";

const AddSystemComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [systems, setSystems] = useState([]);
  const [user, setUser] = useState({ email: "email@email.com" });
  const [isSame, setIsSame] = useState(false);
  const [isValidNext, setIsValidNext] = useState(false);
  const [calData, setCalData] = useState(systems.map(() => null));
  const map = useMap();

  const handleCalculate = async () => {
    const results = await Promise.all(
      systems.map((system) =>
        SystemApi.calculate({
          currentMonthlyCost: system.currentMonthlyCost,
          monthlyConsumption: system.monthlyConsumption,
          totalDistributionBoards: system.totalBoards,
          totalRooms: system.totalRooms,
          investerSize: system.investerSize,
          totalPanels: system.totalPanels,
        }).then((res) => res.data)
      )
    );

    setCalData(results);
  };

  useEffect(() => {
    console.log("cal===>", calData);
  }, [calData]);

  const actions = {
    handleNext: async () => {
      if (currentStep === 2) {
        console.log("calll");
        await handleCalculate();
        setCurrentStep(currentStep + 1);
      } else if (currentStep === 6) {
        const res = await handleSubmit();
        if (res) setCurrentStep(currentStep + 1);
      } else setCurrentStep(currentStep + 1);
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

  const handleSubmit = async () => {
    const systemInfo = systems.map((system, id) => {
      return { ...system, props: calData[id], user: user };
    });
    SystemApi.addSystem(systemInfo);
  };

  const validSystems = () => {
    if (currentStep !== 2) return true;
    console.log("valid===>", systems);
    for (const s of systems) {
      if (
        !Validations.isNonNegativeNumber(s.totalBoards) ||
        !Validations.isNonNegativeNumber(s.totalRooms) ||
        !Validations.isNonNegativeNumber(s.monthlyConsumption) ||
        !Validations.isNonNegativeNumber(s.currentMonthlyCost) ||
        (s.investerSize && !Validations.isNonNegativeNumber(s.investerSize)) ||
        (s.totalPanels && !Validations.isNonNegativeNumber(s.totalPanels))
      )
        return false;
    }
    return true;
  };

  useEffect(() => {
    setIsValidNext(validSystems());
  }, [systems]);

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
          validNext={isValidNext}
          switchText={
            currentStep === 1 && systems && systems.length > 1
              ? "Are all added Systems the Same?"
              : null
          }
          switchController={{ value: isSame, toggle: () => setIsSame(!isSame) }}
        >
          {currentStep === 1 && (
            <Step1 newSystems={systems} removeSystem={removeSystem} />
          )}
          {currentStep === 2 && (
            <Step2 systems={systems} setSystems={setSystems} isSame={isSame} />
          )}
          {currentStep === 3 && <Step3 systems={systems} calData={calData} />}
          {currentStep === 4 && (
            <Step4
              systems={systems}
              email={user.email}
              setUser={setUser}
              calData={calData}
            />
          )}
          {currentStep === 5 && (
            <Step5
              systems={systems}
              email={user.email}
              setUser={setUser}
              calData={calData}
            />
          )}
          {currentStep === 6 && (
            <Step6
              systems={systems}
              user={user}
              setUser={setUser}
              calData={calData}
            />
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
