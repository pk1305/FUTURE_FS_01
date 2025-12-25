function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#020617",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        zIndex: 1000,
      }}
    >
      <h2>Pooja Kumari</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
          Projects
        </a>
        <a href="#contact" style={{ color: "white", textDecoration: "none" }}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
