import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const { expenses } = props;
  const [expensesFilter, setExpensesFilter] = useState(
    new Date().getFullYear()
  );

  const onExpensesFilterChangeHandler = (filterBy) => {
    setExpensesFilter(filterBy);
  };

  const filteredExpenses = ()=>{
    return expenses.filter((x) => {
      return x.date.getFullYear().toString() === expensesFilter;
    });
  };

  return (
    <>
      <ExpensesFilter
        filterBy={expensesFilter}
        expenses={expenses}
        onExpensesFilterChange={onExpensesFilterChangeHandler}
      />
      <Card className="expenses">
        {filteredExpenses().map((e) => {
          return (
            <ExpenseItem
              title={e.title}
              amount={e.amount}
              date={e.date}
              key={e.id}
            ></ExpenseItem>
          );
        })}
      </Card>
    </>
  );
};

export default Expenses;
