import React, { useMemo, useState } from "react";
import ExpenseRow from "../components/ExpenseRow";

export default function Expenses({ expenses, onDelete }) {

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const cats = [
    "All",
    ...new Set(expenses.map(e => e.category))
  ];

  const filtered = useMemo(
    () =>
      expenses.filter(
        e =>
          (e.title + " " + e.note)
            .toLowerCase()
            .includes(q.toLowerCase()) &&
          (cat === "All" || e.category === cat)
      ),
    [expenses, q, cat]
  );

  return (
    <section>

      {/* Page Heading */}
      <div className="heading">

        <div>
          <small>TRANSACTION HISTORY</small>

          <h1>All Expenses</h1>

          <p>
            Search and filter your spending.
          </p>
        </div>

      </div>

      {/* Search and Filter */}
      <div className="filters">

        <input
          placeholder="Search expenses..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />

        <select
          value={cat}
          onChange={e => setCat(e.target.value)}
        >
          {cats.map(c => (
            <option key={c}>
              {c}
            </option>
          ))}
        </select>

      </div>

      {/* Result Count */}
      <p className="muted">
        {filtered.length} transaction(s) found
      </p>

      {/* Expense List */}
      <div className="list">

        {filtered.map(e => (
          <ExpenseRow
            key={e.id}
            expense={e}
            onDelete={onDelete}
          />
        ))}

      </div>

    </section>
  );
}