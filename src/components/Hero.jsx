function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        paddingTop: "80px",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
        Hi, I'm Pooja Kumari 👋
      </h1>

      <p style={{ fontSize: "18px", color: "#cbd5f5" }}>
        Full Stack Web Developer
      </p>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "15px", marginTop: "25px" }}>
        {/* View Projects Button */}
        <a href="#projects">
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#6366f1",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            View Projects
          </button>
        </a>

        {/* Download Resume Button */}
        <a href="/Pooja_Kumari_Resume.pdf" download>
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#1e293b",
              color: "white",
              border: "1px solid #6366f1",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Download Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
