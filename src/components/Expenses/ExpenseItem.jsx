import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseItem.css";
function ExpenseItem({ data }) {
  const [title, setTitle] = useState(data.title);

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={data.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${data.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
