function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #020617, #020617)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "80px",
        color: "white",
      }}
    >
      {/* PROFILE IMAGE */}
      <div
        style={{
          width: "170px",
          height: "170px",
          borderRadius: "50%",
          border: "4px solid #6366f1",
          padding: "6px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/pooja.jpg"
          alt="Pooja Kumari"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      <h1 style={{ color: "white" }}>
  Hi, I'm <span className="gradient-text">Pooja Kumari</span> 👋
</h1>


      <p style={{ fontSize: "18px", color: "#cbd5f5", marginTop: "10px" }}>
        Full Stack Web Developer
      </p>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: "15px", marginTop: "30px" }}>
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

        <a href="/Pooja_Kumari_Resume.pdf" download>
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#020617",
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
