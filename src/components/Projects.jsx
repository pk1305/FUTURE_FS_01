import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Digital Security System (De Morgan’s Law)",
      description:
        "A digital security system designed using De Morgan’s Laws to implement logical conditions for secure access control.",
      tech: "Digital Logic, De Morgan’s Law, JavaScript",
      github: "https://github.com/pk1305/COA_Project",
    },
    {
      title: "Smart Expense Tracker (Group Project)",
      description:
        "Tracks daily expenses, categorizes spending, and helps analyze budgeting patterns.",
      tech: "React, JavaScript, CSS",
      github: "https://github.com/pk1305/APP_project",
    },
    {
      title: "Round Robin Simulator",
      description:
        "A simulator demonstrating the Round Robin CPU scheduling algorithm with time slicing.",
      tech: "JavaScript, Data Structures",
      github:
        "https://github.com/pk1305/Round-Robin-Scheduler-Simulator",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic Tac Toe game with interactive UI and game logic.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/pk1305/TicTacToe",
    },
    {
      title: "Snake Game",
      description:
        "A browser-based Snake game with score tracking and increasing difficulty.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/pk1305/Snake-Game",
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
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: "white" }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "40px auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "left",
              position: "relative",
            }}
          >
            {/* GitHub Icon */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View on GitHub"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                color: "#ffffff",
                fontSize: "22px",
              }}
            >
              <FaGithub />
            </a>

            <h3
              style={{
                color: "#ffffff",
                fontSize: "22px",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>

            <p style={{ color: "#e5e7eb", marginBottom: "15px" }}>
              {project.description}
            </p>

            <p style={{ color: "#c7d2fe", fontSize: "14px" }}>
              <strong>Tech:</strong> {project.tech}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
