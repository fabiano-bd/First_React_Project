import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { filterBy, expenses, onExpensesFilterChange } = props;

  const getAllYearsFromExpenses = () => {
    const years = expenses.map((x) => {
      return x.date.getFullYear();
    });
    return [...new Set(years)];
  };

  const onExpensesFilterChangeHandler = (event)=>{
      onExpensesFilterChange(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {filterBy} onChange={onExpensesFilterChangeHandler}>
          {getAllYearsFromExpenses().map((year) => {
            return <option key={year} value={year}>{year}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
