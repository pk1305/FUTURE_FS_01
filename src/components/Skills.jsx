function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "GitHub",
  ];

  return (
    <section
      style={{
        padding: "100px 40px",
        backgroundColor: "#0f172a",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "20px",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill) => (
          <div
            key={skill}
            style={{
              padding: "15px",
              backgroundColor: "#1e293b",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
