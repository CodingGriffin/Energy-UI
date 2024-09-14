import styles from "./InfoPanel.module.css";

const SystemCostDetail = (props) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tr>
          <td className={styles.td}>HardWare Cost</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R279 000.00
          </td>
        </tr>
        <tr>
          <td className={styles.td}>Kit Cost</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R10500.00
          </td>
        </tr>
        <tr>
          <td className={styles.td}>Delivery Cost</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R3826.50
          </td>
        </tr>
        <tr>
          <td className={styles.td}>Labour</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R179175.50
          </td>
        </tr>
        <tr>
          <td className={styles.td}>Total Cost Exl</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R179175.50
          </td>
        </tr>
        <tr>
          <td className={styles.td}>VAT</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R179175.50
          </td>
        </tr>
        <tr>
          <td className={styles.td}>Total Cost Incl</td>
          <td
            className={styles.td}
            style={{ textAlign: "center", padding: "0px" }}
          >
            R179175.50
          </td>
        </tr>
      </table>
    </div>
  );
};

export default SystemCostDetail;
