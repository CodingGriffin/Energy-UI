import { useEffect, useState } from "react";
import styles from "./CustomDetailModal.module.css";
import { Modal, Button, TextInput } from "common/components";
export const CustomDetailModal = ({ item, show, setShow }) => {
  const [fields, setFields] = useState([]);

  const onCancel = () => {
    console.log("Cancel", item.title);
    setShow(0);
  };

  const onSave = () => {
    console.log({ title: item.title, fields });
    setShow(0);
  };

  const handleSearch = ({ type, value }) => {
    console.log("Search:", { type, value });
  };

  const handleValueChange = ({ id, value }) => {
    console.log({ title: fields[id].title, display: value });
    setFields(
      fields.map((field, index) =>
        id === index ? { title: fields[id].title, display: value } : field
      )
    );
  };

  useEffect(() => {
    setFields(item.fields);
  }, [item]);

  return (
    <Modal doModal={show} title={item.title} onClose={setShow}>
      <div className={styles["custom-item-container"]}>
        {item.title.includes("Address") ? (
          <TextInput
            // value={field.display}
            onChange={(v) => {
              handleSearch({ type: item.title, value: v });
            }}
            placeholder="Search Address..."
            containerStyle={{
              flex: 1,
              padding: "5px",
              margin: "5px",
            }}
          />
        ) : null}
        {item.title.includes("Address") ? (
          <div className={styles["inner-container"]}>
            <div>{item.title}</div>
            <div className={styles["check-container"]}>
              <div>Same as System Address?</div>
              <img src="/assets/images/icons/down.svg" />
            </div>
          </div>
        ) : null}
        {item.fields.map((field, index) => {
          return (
            <TextInput
              key={`custom-${field.title}-${index}`}
              label={field.title}
              value={field.display}
              onChange={(v) => {
                handleValueChange({ id: index, value: v });
              }}
              containerStyle={{
                flex: 1,
                padding: "5px",
                margin: "5px",
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          gap: "5px",
          height: "40px",
          width: "450px",
          padding: "5px",
        }}
      >
        <Button
          type="secondaryoutline"
          text="Cancel"
          style={{ flex: 1 }}
          textStyle={{ fontSize: "12px" }}
          onClick={onCancel}
        />
        <Button
          type="secondary"
          text="save"
          style={{ flex: 1 }}
          textStyle={{ fontSize: "12px" }}
          onClick={onSave}
        />
      </div>
    </Modal>
  );
};
