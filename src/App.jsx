import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const initial = [
  {
    id: 1,
    title: "Groceries",
    amount: 1250,
    category: "Food",
    date: "2026-09-02",
    note: "Weekly shopping"
  },
  {
    id: 2,
    title: "Metro Card",
    amount: 500,
    category: "Travel",
    date: "2026-09-05",
    note: "Monthly recharge"
  },
  {
    id: 3,
    title: "Internet Bill",
    amount: 799,
    category: "Bills",
    date: "2026-09-08",
    note: "Home internet"
  },
  {
    id: 4,
    title: "Movie",
    amount: 450,
    category: "Entertainment",
    date: "2026-09-12",
    note: "Weekend movie"
  }
];

export default function App() {

  const [expenses, setExpenses] = useState(() => {

    const x = localStorage.getItem("spendwiseExpenses");

    return x
      ? JSON.parse(x)
      : initial;
  });

  useEffect(() => {

    localStorage.setItem(
      "spendwiseExpenses",
      JSON.stringify(expenses)
    );

  }, [expenses]);

  const add = (e) => {

    setExpenses(x => [
      {
        ...e,
        id: Date.now(),
        amount: Number(e.amount)
      },
      ...x
    ]);

  };

  const remove = (id) => {

    setExpenses(x =>
      x.filter(e => e.id !== id)
    );

  };

  return (
    <>
      <Navbar />

      <main className="container">

        <Routes>

          <Route
            path="/"
            element={
              <Dashboard
                expenses={expenses}
              />
            }
          />

          <Route
            path="/expenses"
            element={
              <Expenses
                expenses={expenses}
                onDelete={remove}
              />
            }
          />

          <Route
            path="/add"
            element={
              <AddExpense
                onAdd={add}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>
    </>
  );
}