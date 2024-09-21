import { useEffect, useState } from "react";

import { Map, useMap } from "@vis.gl/react-google-maps";

import { areNeighborCells } from "h3-js";

import { MapApi } from "api";

import styles from "./AddNewZone.module.css";
import { Button, Modal } from "common/components";
import { LocationSearchBar } from "common/components/map/location-search-bar/LocationSearchBar";
import { Polygon } from "common/components/map/polygon/Polygon";

export const AddNewZone = ({
  showLoader = () => {},
  hideLoader = () => {},
}) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [hexagons, setHexagons] = useState([]);
  const [selectedHexagons, setSelectedHexagons] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const map = useMap();

  const onSearchLocationChange = (place) => {
    if (place.geometry?.viewport) {
      console.log("map===>", map);
      map.panTo(place.geometry.location);
      map.setZoom(12);

      place.coords = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      setSelectedPlace(place);
    }
  };

  const onRemoveZone = (hexId) => {
    const hexs = hexagons;

    for (let i = 0; i < hexs.length; i++) {
      if (hexs[i].h3_index === hexId) {
        hexs[i] = {
          ...hexs[i],
          isSelected: false,
        };

        setSelectedHexagons(selectedHexagons.filter((id) => id !== hexId));
        break;
      }
    }

    setHexagons([...hexs]);
  };

  const onHexagonClick = (e, data) => {
    if (!data || data.status === "claimed" || data.satus === "reserved") {
      return;
    }

    if (!data.isSelected && selectedHexagons.length >= 7) {
      return;
    }

    if (!data.isSelected && selectedHexagons.length > 0) {
      const areNeighbors = selectedHexagons.find((h) =>
        areNeighborCells(h, data.h3_index)
      );

      if (!areNeighbors) {
        return;
      }
    }

    const hexs = hexagons;

    for (let i = 0; i < hexs.length; i++) {
      if (hexs[i].id === data.id) {
        const newValue = !hexs[i].isSelected;

        hexs[i] = {
          ...hexs[i],
          isSelected: newValue,
        };

        if (!newValue) {
          setSelectedHexagons(
            selectedHexagons.filter((id) => id !== data.h3_index)
          );
        } else {
          const selectedList = selectedHexagons;
          selectedList.push(data.h3_index);
          setSelectedHexagons(selectedList);
        }

        break;
      }
    }

    setHexagons([...hexs]);
  };

  useEffect(() => {
    if (!selectedPlace?.coords) {
      return;
    }

    showLoader();

    MapApi.getZonesByLocation(
      selectedPlace.coords.lat,
      selectedPlace.coords.lng
    )
      .then((ret) => {
        if (ret.ok) {
          setHexagons(ret.data || []);
          return;
        }

        throw Error("Unable to get hexagon data");
      })
      .catch((e) => console.log(e))
      .finally(() => hideLoader());
  }, [selectedPlace]);

  return (
    <>
      <div className={styles["map-container"]}>
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
        >
          {hexagons.map((hex, index) => (
            <Polygon
              key={index}
              data={hex}
              paths={hex.paths}
              claimedColor={"#000"}
              claimedOpacity={0.3}
              reservedColor={"#000"}
              reservedOpacity={0.3}
              onClick={onHexagonClick}
            />
          ))}
        </Map>
      </div>
      {selectedPlace && (
        <div className={styles["zone-select-panel"]}>
          <div className={styles["panel-header"]}>
            <span className={styles["title"]}>Select Zones</span>
          </div>
          <div className={styles["panel-body"]}>
            <span className={styles["description"]}>
              Select Zone on map to your panel
            </span>
            {!selectedHexagons || selectedHexagons.length === 0 ? (
              <div className={styles["pending-box"]}>Pending Selection</div>
            ) : (
              <>
                {selectedHexagons.map((hex, index) => (
                  <div key={hex} className={styles["zone-selected"]}>
                    <div className={styles["zone-id-box"]}>
                      <div className={styles["zone-index"]}>{index + 1}</div>
                      <span className={styles["zone-id"]}>Zone: {hex}</span>
                    </div>
                    <svg
                      onClick={() => onRemoveZone(hex)}
                      className={styles["zone-close"]}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.58369 3.24638C4.41032 3.08423 4.18101 2.99595 3.94407 3.00014C3.70713 3.00434 3.48107 3.10068 3.3135 3.26888C3.14593 3.43707 3.04995 3.66398 3.04577 3.90181C3.04159 4.13963 3.12954 4.3698 3.29109 4.54382L7.8274 9.0971L3.29109 13.6504C3.20123 13.7344 3.12916 13.8358 3.07917 13.9484C3.02919 14.061 3.00231 14.1825 3.00014 14.3058C2.99798 14.4291 3.02057 14.5515 3.06656 14.6658C3.11256 14.7801 3.18103 14.884 3.26787 14.9711C3.35472 15.0583 3.45817 15.127 3.57205 15.1732C3.68593 15.2194 3.80791 15.242 3.93071 15.2399C4.05351 15.2377 4.17462 15.2107 4.28681 15.1605C4.39899 15.1104 4.49996 15.038 4.58369 14.9478L9.12 10.3945L13.6563 14.9478C13.74 15.038 13.841 15.1104 13.9532 15.1605C14.0654 15.2107 14.1865 15.2377 14.3093 15.2399C14.4321 15.242 14.5541 15.2194 14.6679 15.1732C14.7818 15.127 14.8853 15.0583 14.9721 14.9711C15.059 14.884 15.1274 14.7801 15.1734 14.6658C15.2194 14.5515 15.242 14.4291 15.2399 14.3058C15.2377 14.1825 15.2108 14.061 15.1608 13.9484C15.1108 13.8358 15.0388 13.7344 14.9489 13.6504L10.4126 9.0971L14.9489 4.54382C15.1105 4.3698 15.1984 4.13963 15.1942 3.90181C15.19 3.66398 15.0941 3.43707 14.9265 3.26888C14.7589 3.10068 14.5329 3.00434 14.2959 3.00014C14.059 2.99595 13.8297 3.08423 13.6563 3.24638L9.12 7.79966L4.58369 3.24638Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className={styles["panel-footer"]}>
            <Button
              type="secondary"
              text="Add Zone"
              style={{ flex: 1, padding: "8px" }}
              textStyle={{ fontSize: "15px", lineHeight: "18px" }}
              disabled={!selectedHexagons || selectedHexagons.length === 0}
              onClick={() => setShowConfirmModal(true)}
            />
            <Button
              type="secondaryoutline"
              text="Back"
              style={{ flex: 1, padding: "8px" }}
              textStyle={{ fontSize: "15px", lineHeight: "18px" }}
            />
          </div>
        </div>
      )}

      <Modal
        title="Confirm Zone Selection"
        onClose={() => setShowConfirmModal(false)}
        doModal={showConfirmModal}
      >
        <div className={styles["modal-body"]}>
          <div className={styles["modal-body-content"]}>
            <div className={styles["modal-description"]}>
              Select zones to be claimed for your Service Center, only adjacent
              zones can be selected.
            </div>
            {selectedHexagons.map((hex, index) => (
              <div key={hex} className={styles["zone-selected"]}>
                <div className={styles["zone-id-box"]}>
                  <div className={styles["zone-index"]}>{index + 1}</div>
                  <span className={styles["zone-id"]}>Zone: {hex}</span>
                </div>
                <svg
                  onClick={() => onRemoveZone(hex)}
                  className={styles["zone-close"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.58369 3.24638C4.41032 3.08423 4.18101 2.99595 3.94407 3.00014C3.70713 3.00434 3.48107 3.10068 3.3135 3.26888C3.14593 3.43707 3.04995 3.66398 3.04577 3.90181C3.04159 4.13963 3.12954 4.3698 3.29109 4.54382L7.8274 9.0971L3.29109 13.6504C3.20123 13.7344 3.12916 13.8358 3.07917 13.9484C3.02919 14.061 3.00231 14.1825 3.00014 14.3058C2.99798 14.4291 3.02057 14.5515 3.06656 14.6658C3.11256 14.7801 3.18103 14.884 3.26787 14.9711C3.35472 15.0583 3.45817 15.127 3.57205 15.1732C3.68593 15.2194 3.80791 15.242 3.93071 15.2399C4.05351 15.2377 4.17462 15.2107 4.28681 15.1605C4.39899 15.1104 4.49996 15.038 4.58369 14.9478L9.12 10.3945L13.6563 14.9478C13.74 15.038 13.841 15.1104 13.9532 15.1605C14.0654 15.2107 14.1865 15.2377 14.3093 15.2399C14.4321 15.242 14.5541 15.2194 14.6679 15.1732C14.7818 15.127 14.8853 15.0583 14.9721 14.9711C15.059 14.884 15.1274 14.7801 15.1734 14.6658C15.2194 14.5515 15.242 14.4291 15.2399 14.3058C15.2377 14.1825 15.2108 14.061 15.1608 13.9484C15.1108 13.8358 15.0388 13.7344 14.9489 13.6504L10.4126 9.0971L14.9489 4.54382C15.1105 4.3698 15.1984 4.13963 15.1942 3.90181C15.19 3.66398 15.0941 3.43707 14.9265 3.26888C14.7589 3.10068 14.5329 3.00434 14.2959 3.00014C14.059 2.99595 13.8297 3.08423 13.6563 3.24638L9.12 7.79966L4.58369 3.24638Z"
                    fill="white"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["modal-footer"]}>
          <Button
            type="secondaryoutline"
            text="Back"
            style={{ flex: 1, height: "38px" }}
            onClick={() => setShowConfirmModal(false)}
          />
          <Button
            type="secondary"
            text="Confirm"
            onClick={() => setShowConfirmModal(false)}
            style={{ flex: 1, height: "38px" }}
          />
        </div>
      </Modal>

      {!selectedPlace && (
        <div className={styles["search-bar"]}>
          <LocationSearchBar onLocationChange={onSearchLocationChange} />
        </div>
      )}
    </>
  );
};
