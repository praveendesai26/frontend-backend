import { useState } from "react";
import axios from "axios";
function SignUp() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    id: "",
    lastUpdate: "",
    createdOn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    axios.post("/api/users", user);

    // OR fetch
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    e.preventDefault();
    const {
      userName,
      email,
      password,
      confirmPassword,
      id,
      lastUpdate,
      createdOn,
    } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const user = {
      id,
      userName,
      email,
      password,
      lastUpdate,
      createdOn,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        user
      );
      alert(
        `User Registered: ${response.data.userName}, Email: ${response.data.email}`
      );
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register user.");
    }
    alert(`User Registered: ${userName}, Email: ${email}`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#2c3e50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
export default SignUp;
