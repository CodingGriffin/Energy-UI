import styles from "./Table.module.css";

export const Table = ({
  theadData,
  tbodyData,
  OptionalHeader = null,
  theadStyle = null,
  tbodyStyle = null,
  pointer = null,
  onClick = null,
}) => {
  return (
    <table className={styles.table}>
      {theadData ? (
        <thead className={styles.thead} style={theadStyle ? theadStyle : {}}>
          <tr className={styles.tr} style={{ height: "25px" }}>
            {theadData.map((el, index) => {
              const Content = el.content;
              return (
                <th
                  className={styles.th}
                  style={el.style ? el.style : {}}
                  key={`thead-th-${index}`}
                >
                  <div>{el.type === "text" ? Content : <Content />}</div>
                </th>
              );
            })}
          </tr>
          {OptionalHeader ? OptionalHeader : null}
        </thead>
      ) : null}
      <tbody className={styles.tbody} style={tbodyStyle ? tbodyStyle : {}}>
        {tbodyData && tbodyData.length
          ? tbodyData.map((data, index) => {
              return (
                <tr
                  key={`tbody-tr-${index}`}
                  className={pointer ? styles.trPointer : styles.tr}
                >
                  {data.map((el, index) => {
                    const Content = el.content;
                    return (
                      <td
                        className={styles.td}
                        key={`td-${index}`}
                        style={el.style ? el.style : {}}
                        onClick={!el.special ? () => onClick(el.id) : null}
                      >
                        {el.type === "text" ? Content : <Content />}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
};
