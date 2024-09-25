import styles from "./Pagination.module.css";

export const Pagination = (props) => {
  return (
    <div
      className={styles.container}
      style={props.style ? { ...props.style } : {}}
    >
      <div className={styles.content}>
        <div className={styles.icon} onClick={() => props.prev()}>
          <img src="/assets/images/icons/prev.svg" />
        </div>
        <div className={styles.current}>
          <p>Page</p>
          <div className={styles.num}>{props.cur ? props.cur : 0}</div>
          <p>
            of <span>{props.total ? props.total : 0}</span>
          </p>
        </div>
        <div className={styles.icon} onClick={() => props.next()}>
          <img src="/assets/images/icons/next.svg" />
        </div>
      </div>
    </div>
  );
};
