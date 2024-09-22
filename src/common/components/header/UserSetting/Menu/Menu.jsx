import React, { useEffect, useRef, useState } from "react";
import styles from "./Menu.module.css";
import { DataStore } from "common/datastore";

const viewTypes = {
  userId: 1,
  availableViewStates: [
    {
      type: "Consumer",
      companies: [],
    },
    {
      type: "Service Center",
      companies: [
        {
          id: 1,
          name: "VANS Electrical",
          logo: null,
        },
        {
          id: 2,
          name: "ElecSolar",
          logo: null,
        },
        {
          id: 3,
          name: "ServCore",
          logo: null,
        },
      ],
    },
    {
      type: "System Owner",
      companies: [
        {
          id: null,
          name: "Personal",
          logo: null,
        },
        {
          id: 1,
          name: "VANS Electrical",
          logo: null,
        },
        {
          id: 4,
          name: "Eskom",
          logo: null,
        },
        {
          id: 5,
          name: "AMAVolts",
          logo: null,
        },
      ],
    },
    {
      type: "Roof Owner",
      companies: [
        {
          id: null,
          name: "Personal",
          logo: null,
        },
        {
          id: 1,
          name: "VANS Electrical",
          logo: null,
        },
        {
          id: 6,
          name: "Property Group",
          logo: null,
        },
        {
          id: 7,
          name: "Building428",
          logo: null,
        },
      ],
    },
    {
      type: "Admin",
      companies: [],
    },
  ],
};

export const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  //temperay viewType when user click on the menu
  const [selectedViewType, setSelectedViewType] = useState(-1);
  const selfRef = useRef(null);
  //current viewType
  const [viewType, setViewType] = useState(null);
  const [companyName, setCompanyName] = useState(null);

  const handleClickOutside = (event) => {
    // console.log("outt");
    if (selfRef.current && !selfRef.current.contains(event.target)) {
      setViewType(-1);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["menu-container"]} style={props.style}>
      <div
        className={styles["view-type-setting"]}
        onClick={() => setIsOpen(true)}
        ref={selfRef}
      >
        <div className={styles["title"]}>Select View Type</div>
        <div className={styles["view-type-content"]}>
          <div className={styles["view-type"]}>
            <span className={styles["user-name"]}>Marco Coetzer</span>
            <span className={styles["type"]}>Consumer</span>
          </div>
          <img
            src="/assets/images/icons/next-black.svg"
            className={styles["next-icon"]}
          />
        </div>
        {isOpen && (
          <div className={styles["sub-menu"]}>
            {viewTypes.availableViewStates.map(({ type, companies }, id) => {
              return (
                <div
                  className={
                    styles[
                      selectedViewType !== type
                        ? "sub-menu-item"
                        : "sub-menu-item-active"
                    ]
                  }
                  key={`view_type${id}`}
                  onClick={() => {
                    setSelectedViewType(type);
                    if (type === "Consumer" || type === "Admin") {
                      DataStore.set("view_type", type);
                      DataStore.set("company_name", null);
                      props.setViewState({
                        viewType: type,
                        company: null,
                      });
                      props.onClose();
                    }
                  }}
                >
                  <span className={styles["view-type-text"]}>{type}</span>
                  {selectedViewType === type ? (
                    <div className={styles["companies"]}>
                      {companies.map((company, sid) => {
                        console.log("name===>", company);
                        return (
                          <div
                            className={styles["sub-menu-item"]}
                            key={`company_name_${sid}`}
                            onClick={() => {
                              props.onClose();
                              setViewType(type);
                              setCompanyName(company.name);
                              DataStore.set("view_type", type);
                              DataStore.set("company_name", company.name);
                              props.setViewState({
                                viewType: type,
                                company: company.name,
                              });
                            }}
                          >
                            <span className={styles["view-type-text"]}>
                              {company.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles["menu-item"]}>Company Profile</div>
      <div className={styles["menu-item"]}>My Profile</div>
      <div className={styles["menu-item"]}>Log Out</div>
    </div>
  );
};
