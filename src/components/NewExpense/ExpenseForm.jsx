import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  /*
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput({
        ...userInput,
        enteredTitle: e.target.value
    })
    
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
    //setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setUserInput({
        ...userInput,
        enteredAmount: e.target.value
    })
    
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
    //setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setUserInput({
        ...userInput,
        enteredDate: e.target.value
    })
    
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
    //setEnteredDate(e.target.value);
  };
  */

  const inputChangeHandler = (id, value) => {
    if (id === "title") {
      setEnteredTitle(value);
    } else if (id === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
