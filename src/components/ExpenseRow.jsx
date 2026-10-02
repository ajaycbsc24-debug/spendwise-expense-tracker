import React from "react";

export default function ExpenseRow({ expense, onDelete }) {
  return (
    <div className="expense">

      <div className="cat">
        {expense.category[0]}
      </div>

      <div className="details">
        <strong>{expense.title}</strong>

        <span>
          {expense.note || "No note"} · {expense.date}
        </span>
      </div>

      <b>
        ₹{Number(expense.amount).toLocaleString("en-IN")}
      </b>

      <button onClick={() => onDelete(expense.id)}>
        Delete
      </button>

    </div>
  );
}