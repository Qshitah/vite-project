import React from "react";

import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList({data}){
    if(data.length === 0){
        return <h2 className="expense-list__fallback">Found no expenses.</h2>
    }

    return <ul className="expenses-list">
        {data.map((expense) => (
        <ExpenseItem
          key={expense.title}
          data = {expense}
        />
      ))}
    </ul>
};

export default ExpensesList;