import { useState, useRef, useEffect } from "react";
import styles from "./OptionSelect.module.css";

export const OptionSelect = (props) => {
  const [detail, setDetail] = useState(false);
  const selectRef = useRef(null);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setDetail(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} style={props.status[props.cur].style} ref={selectRef}>
      <div
        className={styles.title}
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => setDetail(true)}
      >
        <div style={{ textAlign: "center", flexGrow: "1" }}>
          {props.status[props.cur].title}
        </div>
        <img src={"/assets/images/icons/down2.svg"} />
      </div>
      <div className={detail ? styles["detail-show"] : styles["detail-hide"]}>
        {props.status.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className={styles["detail-item"]}
            onClick={() => {
              props.handleSelect(props.id, index);
              setDetail(false);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
