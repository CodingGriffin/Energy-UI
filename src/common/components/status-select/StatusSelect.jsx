import { useState, useRef, useEffect } from "react";
import styles from "./StatusSelect.module.css";

export const StatusSelect = (props) => {
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
    <div
      className={styles.container}
      style={props.status[props.cur] ? props.status[props.cur].style : null}
      ref={selectRef}
    >
      <div
        className={styles.title}
        style={{ color: "white", cursor: "pointer" }}
        onClick={() => setDetail(true)}
      >
        <div style={{ textAlign: "center", flex: 1 }}>{props.cur}</div>
        <img src={"/assets/images/icons/down2.svg"} />
      </div>
      <div className={detail ? styles["detail-show"] : styles["detail-hide"]}>
        {Object.keys(props.status).map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={styles["detail-item"]}
            onClick={() => {
              props.handleSelect(props.id, item);
              setDetail(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
