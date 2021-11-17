import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import * as S from "./styles";

const NewExpense = (props) => {
  const { onNewExpenses } = props;
  const [addNewExpense, setAddNewExpense] = useState(false);

  const saveExpenseDataHandle = (enteredExpenseData) => {
    onNewExpenses({
      ...enteredExpenseData,
      id: Math.random().toString(),
    });
    addNewExpenseHandle();
  };

  const addNewExpenseHandle = () => {
    setAddNewExpense((oldValue) => !oldValue);
  };

  return (
    <div className="new-expense">
      {addNewExpense ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} onCancel={addNewExpenseHandle}/>
      ) : (
        <S.AddNewExpense onClick={addNewExpenseHandle}>
          Add New Expense
        </S.AddNewExpense>
      )}
    </div>
  );
};

export default NewExpense;
