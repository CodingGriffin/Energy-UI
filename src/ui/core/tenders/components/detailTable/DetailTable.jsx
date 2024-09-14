import styles from "./DetailTable.module.css";

export const DetailTable = ({info}) => {
  console.log("info:", info);
  return (
    <div className={styles.yearTable}>
      <div className={styles.tbColCaption}>
        <div className={styles.tdFirstCol}>
          <p>Year</p>
        </div>
        <div className={styles.tdCol}>
          <p>Panel Efficiency</p>
        </div>
        <div className={styles.tdCol}>
          <p>Escalation pa</p>
        </div>
        <div className={styles.tdCol}>
          <p>Annual Income</p>
        </div>
        <div className={styles.tdCol}>
          <p>Initial Investment</p>
        </div>
        <div className={styles.tdCol}>
          <p>Total Cashflow</p>
        </div>
      </div>
      <div className={styles.tbBody}>
        {info.map((el, index) => {
          return (
            <div key={index} className={styles.tbData}>
              <div className={styles.tdFirstCol}>
                <p>{el.year}</p>
              </div>
              <div className={styles.tdCol}>
                <p>{el.pe}</p>
              </div>
              <div className={styles.tdCol}>
                <p>{el.ep}</p>
              </div>
              <div className={styles.tdCol}>
                <p>{el.ai}</p>
              </div>
              <div className={styles.tdCol}>
                <p>{el.ii}</p>
              </div>
              <div className={styles.tdCol}>
                <p>{el.tc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
