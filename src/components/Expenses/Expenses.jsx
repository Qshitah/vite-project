import ExpenseItem from "./ExpenseItem";
import React from "react";
import Card from "../UI/Card";
import './Expenses.css';
function Expenses({data}) {
  return (
    <Card className="expenses">
      {data.map((value) => (
        <ExpenseItem data={value} />
      ))}
    </Card>
  );
}

export default Expenses;
