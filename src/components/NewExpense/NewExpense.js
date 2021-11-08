import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const { onNewExpenses } = props;

  const saveExpenseDataHandle = (enteredExpenseData) => {
    onNewExpenses({
      ...enteredExpenseData,
      id: Math.random().toString(),
    });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} />
    </div>
  );
};

export default NewExpense;
