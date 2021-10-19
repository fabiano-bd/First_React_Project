import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => {
        return (
          <ExpenseItem
            title={e.title}
            amount={e.amount}
            date={e.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
};

export default Expenses;
