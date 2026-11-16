
import { useState } from "react";

function Studen_Form() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Successfully ${fname} ${lname}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#ffffff",
          width: "350px",
          margin: "100px auto",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
          fontFamily: "Arial",
        }}
      >

        <h2 style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "25px"
        }}>
          Student Form
        </h2>

        <label style={{
          fontWeight: "bold",
          color: "#333"
        }}>
          F_Name:
        </label>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <br />

        <label style={{
          fontWeight: "bold",
          color: "#333"
        }}>
          L_Name:
        </label>

        <input
          type="text"
          placeholder="Enter Your Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            boxSizing: "border-box",
          }}
        />

        <button
          type="submit"
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Click
        </button>

      </form>
    </>
  )
}

export default Studen_Form;
