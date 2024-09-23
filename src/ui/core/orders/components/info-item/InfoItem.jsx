import styles from "./InfoItem.module.css";
import { Select } from "common/components";

export const InfoItem = (props) => {

  const handleEdit = (title) => {
    // console.log("edit:", title)
    props.handleEdit({type:title})
  }
  const content = (item) => {
    switch (item.type) {
      case "display":
        return item.display;
      case "input":
        return item.fields.map((el, id) => (
          <div className={styles.inputCaption} key={`${el.title}-${id}`}>
            <p>{el.label}</p>
            <p>{el.display}</p>
          </div>
        ));
      case "select":
        return (
          <Select
            options={item.content.map((el) => el.title)}
            onChange={()=>null}
            // value={calType}
            value={item.content[0].title}
            title={item.title}
            // style={{ width: "100%" }}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles["item-container"]}>
      <div className={styles["caption"]}>
        {props.item.type !== "select" ? (
          <div className={styles.title}>{props.item.title}</div>
        ) : null}

        {props.item.type === "input" ? (
          <div className={styles.icon} onClick={() => handleEdit(props.item.title)}>
            <img src="/assets/images/icons/edit-square.svg" />
          </div>
        ) : null}
      </div>
      <div className={styles["content"]}>{content(props.item)}</div>
    </div>
  );
};
