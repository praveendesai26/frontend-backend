import { useState } from "react";
import SignUp from "./SignUp";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}, Password: ${password}`);
  };

  const handleOpenRegister = () => {
    setShowRegister(true);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
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
          <h2 style={{ textAlign: "center" }}>Sign In</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "10px",
              fontSize: "16px",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              fontSize: "16px",
            }}
          />

          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={handleOpenRegister}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#888",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
      {showRegister && (
        <div
          style={{
            position: "fixed",
            top: "50px",
            left: 0,
            width: "100%",
            height: "50%",
            // backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "30px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "400px",
              position: "relative",
              boxShadow: "0 0 20px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Register</h2>
            <SignUp />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
              }}
            >
              <button
                onClick={handleCloseRegister}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ccc",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default SignIn;
