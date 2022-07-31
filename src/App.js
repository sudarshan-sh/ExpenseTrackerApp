import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 1, title: "Toilet paper", amount: 80, date: new Date(2022, 6, 13) },
  { id: 2, title: "Car insurance", amount: 282, date: new Date(2022, 4, 22) },
  {
    id: 3,
    title: "Laptop service",
    amount: 110,
    date: new Date(2021, 5, 19),
  },
  {
    id: 4,
    title: "Medical Insurance",
    amount: 130,
    date: new Date(2019, 3, 6),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // updating our state, when its based on older state---
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
