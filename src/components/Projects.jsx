function Projects() {
  const projects = [
    {
      title: "Digital Security System (De Morgan’s Law)",
      description:
        "A digital security system designed using De Morgan’s Laws to implement logical conditions for secure access control.",
      tech: "Digital Logic, De Morgan’s Law, JavaScript",
    },
    {
      title: "Smart Expense Tracker (Group Project)",
      description:
        "Tracks daily expenses, categorizes spending, and helps analyze budgeting patterns.",
      tech: "React, JavaScript, CSS",
    },
    {
      title: "Round Robin Simulator",
      description:
        "A simulator demonstrating the Round Robin CPU scheduling algorithm with time slicing.",
      tech: "JavaScript, Data Structures",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game with interactive UI and game logic.",
      tech: "HTML, CSS, JavaScript",
    },
    {
      title: "Snake Game",
      description:
        "A browser-based Snake game with score tracking and increasing difficulty.",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 40px",
        backgroundColor: "#020617",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "10px",
              textAlign: "left",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {project.title}
            </h3>

            <p style={{ color: "#cbd5f5", marginBottom: "15px" }}>
              {project.description}
            </p>

            <p style={{ fontSize: "14px" }}>
              <strong>Tech:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
