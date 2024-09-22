import InfoItem from "./InfoItem";
import { SliderInputCard, Table } from "common/components";

const InfoPanel = (props) => {
  const formatTableData = (data) => {
    const formatedData = data.map((element, value) => {
      return [
        {
          type: "text",
          content: element.column1,
          style: {
            flex: "1",
            textAlign: "center",
          },
        },
        {
          type: "text",
          content: element.column2,
          style: {
            flex: "1",
            textAlign: "center",
          },
        },
      ];
    });
    return formatedData;
  };

  return (
    <>
      {props.info
        ? props.info.map((tile, index) => {
            if (tile.type == "input") {
              return (
                <InfoItem
                  key={`input-${index}`}
                  title={tile.title}
                  showDetailedButton={tile.table ? true : false}
                >
                  <SliderInputCard
                    max={tile.display.max}
                    min={tile.display.min}
                    // max={100}
                    // min={10}
                    step={tile.display.step}
                    value={tile.display.current}
                    label="Cost"
                    onChange={(val) => props.setValue(val)}
                  />
                </InfoItem>
              );
            } else {
              return (
                <InfoItem
                  key={`display-${index}`}
                  title={tile.title}
                  showDetailedButton={tile.tableData ? true : false}
                  hiddenChild={
                    tile.tableData ? (
                      <Table tbodyData={formatTableData(tile.tableData)} />
                    ) : null
                  }
                >
                  {tile.display ? <div>{tile.display}</div> : null}
                </InfoItem>
              );
            }
          })
        : null}
    </>
  );
};

export default InfoPanel;
