import React, { useState, useEffect, useRef } from "react";
import styles from './DropDown.module.css';

export const Dropdown = ({ options, cur = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setSelectedOption(cur);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} style={{ position: "relative", fontSize:"10px"}}>
      <button className={styles['button']} onClick={toggleDropdown} style={{}}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <ul
          style={{
            borderRadius:"5px",
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "absolute",
            zIndex: 1000,
            backgroundColor:'#ecedef',
            right:0,
            left:-10
          }}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={styles.li}
              onClick={() => handleOptionClick(option)}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
