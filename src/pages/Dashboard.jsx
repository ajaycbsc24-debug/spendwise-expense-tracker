import React from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import ExpenseRow from "../components/ExpenseRow";

export default function Dashboard({ expenses }) {
  const total = expenses.reduce(
    (a, e) => a + Number(e.amount),
    0
  );

  const avg = expenses.length
    ? Math.round(total / expenses.length)
    : 0;

  const cats = [...new Set(
    expenses.map(e => e.category)
  )];

  // Monthly expense summary
  const currentMonth = new Date().toISOString().slice(0, 7);

  const monthlyTotal = expenses
    .filter(e => e.date.startsWith(currentMonth))
    .reduce(
      (sum, e) => sum + Number(e.amount),
      0
    );

  const monthName = new Date().toLocaleString(
    "en-IN",
    {
      month: "long",
      year: "numeric"
    }
  );

  return (
    <>
      <section className="hero">
        <div>
          <h1>Expense Tracker</h1>

          <p>
            Track spending, filter expenses and
            understand where your money goes.
          </p>
        </div>

        <Link
          to="/add"
          className="btn primary"
        >
          + Add Expense
        </Link>
      </section>

      <section className="stats">

        <StatCard
          title="Total Spending"
          value={`₹${total.toLocaleString("en-IN")}`}
          icon="💰"
        />

        <StatCard
          title="Transactions"
          value={expenses.length}
          icon="🧾"
        />

        <StatCard
          title="Average Expense"
          value={`₹${avg.toLocaleString("en-IN")}`}
          icon="📊"
        />

        <StatCard
          title="Categories"
          value={cats.length}
          icon="🏷️"
        />

      </section>

      {/* Monthly Expense Summary */}
      <section className="monthly-summary">

        <small>MONTHLY EXPENSE SUMMARY</small>

        <h2>{monthName}</h2>

        <p>
          Total spending this month
        </p>

        <h1>
          ₹{monthlyTotal.toLocaleString("en-IN")}
        </h1>

      </section>

      <section className="heading">
        <div>
          <small>RECENT TRANSACTIONS</small>

          <h2>Recent Expenses</h2>
        </div>

        <Link
          to="/expenses"
          className="btn"
        >
          View All
        </Link>
      </section>

      <div className="list">
        {expenses.slice(0, 5).map(e => (
          <ExpenseRow
            key={e.id}
            expense={e}
          />
        ))}
      </div>
    </>
  );
}