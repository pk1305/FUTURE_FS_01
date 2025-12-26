import { motion } from "framer-motion";

function ExtraCurricular() {
  const activities = [
    "Hackathons & Coding Competitions",
    "Ethical Hacking & Cybersecurity Workshops",
    "Team Projects & Collaboration",
    "Continuous Self-Learning",
  ];

  return (
    <section
      id="activities"
      style={{ padding: "100px 40px", backgroundColor: "#020617" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ color: "white", textAlign: "center" }}
      >
        Extra-Curricular Activities
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          maxWidth: "900px",
          margin: "40px auto",
        }}
      >
        {activities.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundColor: "#0f172a",
              padding: "25px",
              borderRadius: "10px",
              color: "#e5e7eb",
            }}
          >
            ✔ {item}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default ExtraCurricular;
