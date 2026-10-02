import ExpenseRow from "../components/ExpenseRow";
import React from "react";
import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";

export default function Dashboard({ expenses }) {

  const total = expenses.reduce(
    (a, e) => a + Number(e.amount),
    0
  );

  const avg = expenses.length
    ? Math.round(total / expenses.length)
    : 0;

  const cats = [
    ...new Set(expenses.map(e => e.category))
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        <div>

          <h1>Expense Tracker</h1>

          <p>
            Track spending, filter expenses and understand
            where your money goes.
          </p>
        </div>

        <Link
          to="/add"
          className="btn primary"
        >
          + Add Expense
        </Link>

      </section>

      {/* Statistics Cards */}
      <div className="stats">

        <StatCard
          title="Total Spending"
          value={"₹" + total.toLocaleString("en-IN")}
          icon="₹"
        />

        <StatCard
          title="Transactions"
          value={expenses.length}
          icon="≡"
        />

        <StatCard
          title="Average Expense"
          value={"₹" + avg.toLocaleString("en-IN")}
          icon="↗"
        />

        <StatCard
          title="Categories"
          value={cats.length}
          icon="◉"
        />

      </div>

      {/* Recent Expenses Section */}
      <section className="section">

        <div className="heading">

          <div>
            <h2>Recent Expenses</h2>

            <p>
              Your latest transactions
            </p>
          </div>

          <Link to="/expenses">
            View all →
          </Link>

        </div>

        <div className="list">

          {expenses
            .slice(0, 5)
            .map(e => (
              <ExpenseRow
                key={e.id}
                expense={e}
                onDelete={() => {}}
              />
            ))}

        </div>

      </section>
    </>
  );
}