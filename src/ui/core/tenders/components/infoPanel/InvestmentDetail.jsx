import styles from "./InfoPanel.module.css";

const InvestmentDetail = (props) => {
  const formatValue = (value) => {
    return Math.round(value * 10) / 10;
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.td}>ROI</td>
            <td className={styles.td} style={{ textAlign: "center" }}>
              R{formatValue(props.data.ROI)}
            </td>
          </tr>
          <tr>
            <td className={styles.td}>IRR</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{formatValue(props.data.IRR)}
            </td>
          </tr>
          <tr>
            <td className={styles.td}>NPV</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              {/* R{formatValue(props.data.npv)} */}
              R105000
            </td>
          </tr>
          <tr>
            <td className={styles.td}>Payback Period</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              {formatValue(props.data.paybackPeriod)} Years
            </td>
          </tr>
          <tr>
            <td className={styles.td}>Cost Escalation pa</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              {/* {formatValue(props.data.percentage_escalation)}% */}
              2.5%
            </td>
          </tr>
          <tr>
            <td className={styles.td}>Avg usage pm</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              900 kWh
            </td>
          </tr>
          <tr>
            <td className={styles.td}>Avg Income pm</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              {formatValue(props.data.averageIncomePM)}
            </td>
          </tr>
          <tr>
            <td className={styles.td}>Initial Investment</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              {formatValue(props.data.initialInvest)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentDetail;
