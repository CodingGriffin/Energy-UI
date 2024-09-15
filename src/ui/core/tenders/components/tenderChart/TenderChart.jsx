import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

import styles from './TenderChart.module.css';

export const TenderChart = ({ info }) => {
  // Data for the chart

  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    if (info) {
      setChartData(info["data"]["chartData"]);
    }
  });
  // Options to customize the chart
  const options = {
    title: "Investment",
    hAxis: { title: "Year" },
    vAxis: { title: "Price" },
    series: {
      0: { color: "green" }, // Color for Line 1
      1: { color: "black" }, // Color for Line 2
    },
    lineWidth: 2, // Width of the lines
    // pointSize: 5, // Size of the data points
  };

  return chartData ? (
    <div className={styles.chart}>
      <Chart
        chartType="LineChart"
        data={chartData}
        options={options}
        width="100%"
        height="100%"
        legendToggle
      />
    </div>
  ) : null;
};
