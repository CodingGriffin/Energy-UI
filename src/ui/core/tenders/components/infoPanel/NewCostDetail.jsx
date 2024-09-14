import styles from "./InfoPanel.module.css";

const NewCostDetail = (props) => {

	console.log("detail cost:", props.data)
  const calc = (percentage) => {
    let value = (Number(percentage) * Number(props.data.lcoe)) / 100;
    return Math.round(value * 10) / 10;
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.td}>LCOE</td>
            <td className={styles.td} style={{ textAlign: "center" }}>
              R{props.data.lcoe}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Maintenance</span>
              <span>{props.data.percentage_maintenance}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_maintenance)}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Insurance</span>
              <span>{props.data.percentage_insurance}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_insurance)}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Breakage</span>
              <span>{props.data.percentage_breakage}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_breakage)}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Warranty Fund</span>
              <span>{props.data.percentage_warranty}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_warranty)}
            </td>
          </tr>
          <tr>
            <td className={styles.td}>DBR</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{props.data.dbr}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Service Center</span>
              <span>{props.data.percentage_service_center}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_service_center)}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>Roof Owner</span>
              <span>{props.data.percentage_roof_owner}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_roof_owner)}
            </td>
          </tr>
          <tr>
            <td
              className={styles.td}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>System Owner</span>
              <span>{props.data.percentage_system_owner}%</span>
            </td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{calc(props.data.percentage_system_owner)}
            </td>
          </tr>
          <tr>
            <td className={styles.td}>New Cost per Unit</td>
            <td
              className={styles.td}
              style={{ textAlign: "center", padding: "0px" }}
            >
              R{props.data.unit_cost_new}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewCostDetail;
