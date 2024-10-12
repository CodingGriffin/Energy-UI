import React, { useEffect, useMemo, useState } from "react";
import { Map, useMap } from "@vis.gl/react-google-maps";
import { latLngToCell, cellToBoundary } from "h3-js";
import { SystemApi } from "api";
import { LocationSearchBar } from "common/components/map/location-search-bar/LocationSearchBar";
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
  const [selectedPlace, setSelectedPlace] = useState();
  const map = useMap();

  const commonChildrenProps = useMemo(() => {
    return {
      currentStep,
      setCurrentStep,
      systems,
      setSystems,
      isSame,
      setIsSame,
      selectedPlace,
      setSelectedPlace,
      user,
      setUser,
    };
  }, [
    currentStep,
    setCurrentStep,
    selectedPlace,
    systems,
    setSystems,
    isSame,
    setIsSame,
    user,
    setUser,
    setSelectedPlace,
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

  const onSearchLocationChange = (place) => {
    if (place.geometry?.viewport) {
      console.log("map===>", map);
      map.panTo(place.geometry.location);
      map.setZoom(20);

      place.coords = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      console.log("place===>", place);
      setSelectedPlace(place);
    }
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
        mapTypeId="hybrid"
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
      {selectedPlace && currentStep === 1 && <Step1 {...commonChildrenProps} />}
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
      {!selectedPlace && (
        <LocationSearchBar onLocationChange={onSearchLocationChange} />
      )}
    </div>
  );
};

export const AddSystemPage = withCommon(AddSystemComponent, {
  isHeaderSeeThrough: true,
});
