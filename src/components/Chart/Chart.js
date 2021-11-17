import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { dataPoints } = props;

  const maxValue = () => {
    const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
    return Math.max(...dataPointValues);
  };

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue()}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
