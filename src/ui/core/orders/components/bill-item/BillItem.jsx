import { Dropdown } from "common/components";
import styles from "./BillItem.module.css";

export const BillItem = (props) => {
  const options = {
    quote: [
      "Draft",
      "Sent",
      "Declined",
      "Accepted",
      "Invoiced",
      "Cancelled",
      "Create Invoice",
      "Create New Quote",
    ],
    invoice: [
      "Draft",
      "Sent",
      "Pending Approval",
      "Awaiting Payment",
      "Paid",
      "Cancelled",
    ],
  };

  return (
    <div className={styles["item-container"]}>
      <div className={styles["title"]}>{props.item.title}</div>
      <Dropdown
        options={options[props.item.type]}
        cur={options[props.item.type][props.item.value]}
      />
    </div>
  );
};
