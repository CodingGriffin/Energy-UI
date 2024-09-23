import React, { useEffect, useState } from "react";

import styles from "./Card.module.css";
import { Images } from "common/constants";

export const Card = ({
  title,
  isTitleLg,
  children,
  style,
  onActivate,
  isActive,
  cardInfo,
  expandable = false,
  autoActivable = false,
  isFrozen = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpended = () => {
    if (!expandable || isFrozen) return;
    if (autoActivable) setExpanded(!expanded);
    if (typeof onActivate === "function") onActivate();
  };

  useEffect(() => {
    setExpanded(isActive);
  }, [isActive]);

  return (
    <div className={styles["card-container"]} style={{ ...style }}>
      {title && (
        <div className={styles["card-header"]} onClick={toggleExpended}>
          <span
            className={
              styles[expandable || isTitleLg ? "card-title-ex" : "card-title"]
            }
          >
            {title}
          </span>

          {(cardInfo || expandable) && (
            <div className={styles["card-header-tag"]}>
              {cardInfo && (
                <span className={styles["card-info"]}>{cardInfo}</span>
              )}
              {expandable && (
                <img src={Images.Icons[expanded ? "ArrowUp" : "ArrowDown"]} />
              )}
            </div>
          )}
        </div>
      )}
      {children &&
        (!expandable || isActive) &&
        (!autoActivable || (autoActivable && expanded)) && (
          <div className={styles["card-body"]}>{children}</div>
        )}
    </div>
  );
};
