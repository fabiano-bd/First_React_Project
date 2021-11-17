import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const { expenses } = props;

  const filterExpenseByMonth = (month) => {
    return expenses.filter((expense) => {
      return expense.date.getMonth() === month;
    });
  };

  const chartDataPoints = () => {
    const sum = (total, expense) => total + expense.amount;
    return [
      { label: "Jan", value: filterExpenseByMonth(0).reduce(sum, 0) },
      { label: "Fev", value: filterExpenseByMonth(1).reduce(sum, 0) },
      { label: "Mar", value: filterExpenseByMonth(2).reduce(sum, 0) },
      { label: "Abr", value: filterExpenseByMonth(3).reduce(sum, 0) },
      { label: "Mai", value: filterExpenseByMonth(4).reduce(sum, 0) },
      { label: "Jun", value: filterExpenseByMonth(5).reduce(sum, 0) },
      { label: "Jul", value: filterExpenseByMonth(6).reduce(sum, 0) },
      { label: "Ago", value: filterExpenseByMonth(7).reduce(sum, 0) },
      { label: "Set", value: filterExpenseByMonth(8).reduce(sum, 0) },
      { label: "Out", value: filterExpenseByMonth(9).reduce(sum, 0) },
      { label: "Nov", value: filterExpenseByMonth(10).reduce(sum, 0) },
      { label: "Dez", value: filterExpenseByMonth(11).reduce(sum, 0) },
    ];
  };

  return <Chart dataPoints={chartDataPoints()}/>;
};

export default ExpenseChart;
