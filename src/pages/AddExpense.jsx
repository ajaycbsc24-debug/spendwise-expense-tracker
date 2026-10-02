import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddExpense({ onAdd }) {
  const [f, setF] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: new Date().toISOString().slice(0, 10),
    note: ""
  });

  const nav = useNavigate();

  const change = (e) => {
    setF({
      ...f,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    onAdd(f);
    nav("/expenses");
  };

  return (
    <section className="formpage">
      <small>NEW TRANSACTION</small>

      <h1>Add Expense</h1>

      <p className="muted">
        Record a new expense in your tracker.
      </p>

      <form onSubmit={submit}>

        <label>
          Expense Name

          <input
            required
            name="title"
            value={f.title}
            onChange={change}
            placeholder="e.g. Groceries"
          />
        </label>

        <label>
          Amount (₹)

          <input
            required
            type="number"
            min="1"
            name="amount"
            value={f.amount}
            onChange={change}
            placeholder="500"
          />
        </label>

        <label>
          Category

          <select
            name="category"
            value={f.category}
            onChange={change}
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Bills</option>
            <option>Entertainment</option>
            <option>Shopping</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Date

          <input
            required
            type="date"
            name="date"
            value={f.date}
            onChange={change}
          />
        </label>

        <label>
          Note

          <textarea
            name="note"
            value={f.note}
            onChange={change}
            placeholder="Optional note"
          />
        </label>

        <div className="actions">

          <button
            type="button"
            onClick={() => nav("/expenses")}
          >
            Cancel
          </button>

          <button className="primary">
            Save Expense
          </button>

        </div>

      </form>
    </section>
  );
}