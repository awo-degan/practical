
import React, { useState } from "react";

function Attendance() {
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f1f5f9",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "35px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >
        <h1 style={{ color: "#1e293b" }}>
          Attendance System
        </h1>

        <h2 style={{ color: "green" }}>
          Present: {present}
        </h2>

        <h2 style={{ color: "red" }}>
          Absent: {absent}
        </h2>

        <button
          onClick={() => setPresent((current) => current + 1)}
          style={{
            background: "#16a34a",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            margin: "10px"
          }}
        >
          Add Present
        </button>

        <button
          onClick={() => setAbsent((current) => current + 1)}
          style={{
            background: "#dc2626",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            margin: "10px"
          }}
        >
          Add Absent
        </button>

        <h3 style={{
          color: "#2563eb",
          marginTop: "25px",
          borderTop: "1px solid #ddd",
          paddingTop: "15px"
        }}>
          Total Students: {present + absent}
        </h3>
      </div>
    </div>
  );
}

export default Attendance;
