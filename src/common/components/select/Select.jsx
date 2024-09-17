import React, { useState, useRef, useEffect } from "react";
import styles from "./Select.module.css";

export const Select = ({ options, title, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles["custom-select"]} ref={selectRef}>
      <div className={styles["select-box"]} onClick={toggleDropdown}>
        <div className={styles["select-label"]}>
          <span className={styles["title"]}>{title}</span>
          <span className={styles["value"]}>{value}</span>
        </div>
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.10041 8.27459C9.46653 8.6407 9.46653 9.2343 9.10041 9.60041L1.60041 17.1004C1.2343 17.4665 0.640704 17.4665 0.274588 17.1004C-0.0915289 16.7343 -0.0915289 16.1407 0.274588 15.7746L7.11167 8.9375L0.274588 2.10041C-0.0915289 1.7343 -0.0915289 1.1407 0.274588 0.774587C0.640704 0.408471 1.2343 0.408471 1.60041 0.774587L9.10041 8.27459Z"
            fill="black"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className={styles["options-list"]}>
          {options.map((option, id) => (
            <li
              key={`weijefiojwefijiwefj_option_${id}`}
              className={styles["option-item"]}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
