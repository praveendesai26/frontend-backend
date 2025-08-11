const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#333",
        padding: "10px 20px",
        color: "white",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>Keep Notes</div>
      <div style={{ display: "flex", gap: "15px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="/notes" style={{ color: "white", textDecoration: "none" }}>
          Notes
        </a>
        <a href="/register" style={{ color: "white", textDecoration: "none" }}>
          Account
        </a>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
