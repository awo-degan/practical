
import { useState } from "react";

function Stud_Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Student Registered Successfully!");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Course:", course);

    setName("");
    setEmail("");
    setCourse("");
  };

  return (

    <div style={{
      fontFamily: "Arial",
      backgroundColor: "#f1f5f9",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <div style={{
        width: "400px",
        padding: "25px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>

        <h1 style={{
          textAlign: "center",
          color: "#1e293b",
          fontSize: "24px"
        }}>
          Student Registration Form
        </h1>

        <form onSubmit={handleSubmit}>

          <label style={{
            display: "block",
            marginTop: "15px",
            fontWeight: "bold"
          }}>
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "7px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box"
            }}
          />

          <label style={{
            display: "block",
            marginTop: "15px",
            fontWeight: "bold"
          }}>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "7px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box"
            }}
          />

          <label style={{
            display: "block",
            marginTop: "15px",
            fontWeight: "bold"
          }}>
            Course
          </label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "7px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              boxSizing: "border-box"
            }}
          >
            <option value="">Select Course</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="HTML & CSS">HTML & CSS</option>
          </select>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Register Student
          </button>

        </form>

      </div>

    </div>
  );
}

export default Stud_Form;
