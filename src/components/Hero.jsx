function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0f172a",
        paddingTop: "80px",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>Hi, I'm Pooja Kumari 👋</h1>
      <p style={{ fontSize: "20px", marginTop: "10px" }}>
        Full Stack Web Developer
      </p>

      <a href="#projects">
        <button
          style={{
            marginTop: "25px",
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
    </section>
  );
}

export default Hero;
