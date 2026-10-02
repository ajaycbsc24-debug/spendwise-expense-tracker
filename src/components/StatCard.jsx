import React from "react";

export default function StatCard({ title, value, icon }) {
  return (
    <div className="stat">

      <div className="icon">
        {icon}
      </div>

      <div>
        <small>{title}</small>
        <h2>{value}</h2>
      </div>

    </div>
  );
}