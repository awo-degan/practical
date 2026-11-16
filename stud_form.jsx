
import { useState } from "react";

function Stud_Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Student Registered Successfully! ${name}`);

    console.log({
      name,
      email,
      phone,
      age,
      gender
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginTop: "8px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "15px",
    boxSizing: "border-box",
    outline: "none"
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    color: "#333",
    marginTop: "20px"
  };

  const errorStyle = {
    color: "#9b5362",
    fontSize: "13px",
    marginTop: "8px"
  };

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f5f1f3",
      padding: "30px",
      fontFamily: "Arial, sans-serif"
    }}>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "900px",
          margin: "auto",
          padding: "25px",
          background: "white",
          borderRadius: "12px",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "20px"
        }}
      >

        {/* Full Name */}

        <div style={{ gridColumn: "span 2" }}>

          <label style={labelStyle}>
            Full Name *
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />

          <p style={errorStyle}>
            Please enter your full name.
          </p>

        </div>

        {/* Email */}

        <div>

          <label style={labelStyle}>
            Email *
          </label>

          <input
            type="email"
            placeholder="student@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <p style={errorStyle}>
            Please enter a valid email address.
          </p>

        </div>

        {/* Phone Number */}

        <div>

          <label style={labelStyle}>
            Phone Number *
          </label>

          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{7,15}"
            title="Phone must contain 7-15 digits"
            required
            style={inputStyle}
          />

          <p style={errorStyle}>
            Phone must contain 7-15 digits.
          </p>

        </div>

        {/* Age */}

        <div>

          <label style={labelStyle}>
            Age *
          </label>

          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="16"
            max="100"
            required
            style={inputStyle}
          />

          <p style={errorStyle}>
            You must be at least 16 years old.
          </p>

        </div>

        {/* Gender */}

        <div>

          <label style={labelStyle}>
            Gender *
          </label>

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            style={inputStyle}
          >

            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>

          </select>

          <p style={errorStyle}>
            Please select your gender.
          </p>

        </div>

        {/* Submit Button */}

        <div style={{ gridColumn: "span 2" }}>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#6c4b78",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Register Student
          </button>

        </div>

      </form>

    </div>
  );
}

export default Stud_Form;
