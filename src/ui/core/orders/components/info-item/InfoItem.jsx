import styles from "./InfoItem.module.css";

export const InfoItem = (props) => {
  return (
    <div className={styles["item-container"]}>
      <div className={styles["caption"]}>
        <div className={styles.title}>{props.item.title}</div>
        {props.item.type === "input" ? (
          <div className={styles.icon}>
            <img src="/assets/images/icons/edit-square.svg" />
          </div>
        ) : null}
      </div>
      <div className={styles["content"]}>
        {props.item.type !== "input"
          ? props.item.display
          : props.item.fields.map((el, id) => (
              <div>
                <p>{el.title}</p>
                <p>{el.display}</p>
              </div>
            ))}
      </div>
    </div>
  );
};
