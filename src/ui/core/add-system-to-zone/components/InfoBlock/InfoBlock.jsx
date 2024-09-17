import { Images } from "common/constants";
import React from "react";
import styles from "./InfoBlock.module.css";

export const InfoBlock = ({ title, trs }) => {
  return (
    <table className={styles["info-block-container"]} key={`${title}`}>
      <caption className={styles["caption"]}>{title}</caption>
      <tbody style={{ width: "100%" }}>
        {trs.map((tr, id) => (
          <tr className={styles["tr"]} key={`djiojhoiuhugy_${id}`}>
            <td className={styles["key"]}>
              <div className={styles["key-fst"]}>
                {!!tr.icon && (
                  <img
                    src={Images.Icons[`${tr.icon}`]}
                    className={styles["icon"]}
                  />
                )}
                {<span className={styles["fst"]}>{tr.key.fst}</span>}
              </div>
              {!!tr.key.snd && (
                <span className={styles["snd"]}>{tr.key.snd}</span>
              )}
            </td>
            <td className={styles["val"]}>
              <span>{tr.val}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
