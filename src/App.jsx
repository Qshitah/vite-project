import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(),
  },
  {
    title: "Home Insurance",
    amount: 189.99,
    date: new Date(),
  },
  {
    title: "Health Insurance",
    amount: 399.5,
    date: new Date(),
  },
  {
    title: "Travel Insurance",
    amount: 79.95,
    date: new Date(),
  },
  {
    title: "Life Insurance",
    amount: 499.99,
    date: new Date(2021, 8, 28),
  },
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => [expense,...prevExpenses]);
  }

  /*return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses,{data: expenses})
  );
  */
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
