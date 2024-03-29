import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const { value, maxValue, label } = props;

  const barFillHeight = () => {
    return `${Math.round((value * 100) / maxValue)}%`;
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight() }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
