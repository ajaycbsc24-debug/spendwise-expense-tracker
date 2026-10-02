import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const c = ({ isActive }) =>
    "nav " + (isActive ? "active" : "");

  return (
    <header>
      <div className="navwrap">

        <NavLink to="/" className="logo">
          💰 SpendWise
        </NavLink>

        <nav>
          <NavLink to="/" className={c}>
            Dashboard
          </NavLink>

          <NavLink to="/expenses" className={c}>
            Expenses
          </NavLink>

          <NavLink to="/add" className={c}>
            Add Expense
          </NavLink>

          <NavLink to="/about" className={c}>
            About
          </NavLink>
        </nav>

      </div>
    </header>
  );
}