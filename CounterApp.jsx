
import React, { useEffect, useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  function decrease() {
    setCount(count - 1);
  }

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  return (
    <div
      style={{
        backgroundColor: "#f1f5f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          textAlign: "center",
          width: "350px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >

        <h1 style={{ color: "#1e293b" }}>
          Counter App
        </h1>

        <h2
          style={{
            fontSize: "45px",
            color: "#2563eb",
            margin: "25px",
          }}
        >
          Count: {count}
        </h2>

        <button
          onClick={increase}
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          Increase 
        </button>

        <button
          onClick={reset}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>

        <button
          onClick={decrease}
          style={{
            backgroundColor: "#dc2626",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            margin: "5px",
            cursor: "pointer",
          }}
        >
          Decrease 
        </button>

      </div>
    </div>
  );
}

export default Counter;
