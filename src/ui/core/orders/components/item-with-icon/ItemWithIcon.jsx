import styles from "./ItemWithIcon.module.css";

export const ItemWithIcon = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon}>
        <img src={props.icon} />
      </div>
      <div className={styles.info}>{props.data}</div>
    </div>
  );
};
