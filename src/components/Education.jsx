import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      level: "Secondary Education (Class X)",
      institute: "APS Danapur, Patna",
      board: "CBSE",
      year: "2021",
      score: "92.4%",
      image: "/education/me_10.jpeg",
      logo: "/education/school_10_logo.png",
      description:
        "Developed strong fundamentals in Mathematics, Science, and Computer Basics.",
    },
    {
      level: "Higher Secondary Education (Class XII)",
      institute: "APS Danapur, Patna",
      board: "CBSE",
      year: "2023",
      score: "78.6%",
      image: "/education/me_12.jpeg",
      logo: "/education/school_12_logo.png",
      description:
        "Specialized in Science stream with Mathematics and Informatics Practices.",
    },
    {
      level: "B.Tech – Computer Science & Engineering",
      institute: "SRM Institute of Science and Technology, KTR, Chennai",
      board: "Currently Pursuing",
      year: "2023 – Present",
      score: "CGPA: 9.6",
      image: "/education/me_college.jpeg",
      logo: "/education/college_logo.png",
      description:
        "Currently pursuing B.Tech with hands-on experience in DSA, Web Development, and real-world projects.",
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "100px 40px",
        backgroundColor: "#020617",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          marginBottom: "60px",
          fontSize: "36px",
          color: "#ffffff",
        }}
      >
        Education
      </motion.h2>

      {/* Timeline Wrapper */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "30px",
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "#334155",
          }}
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              display: "flex",
              gap: "30px",
              marginBottom: "50px",
              position: "relative",
              paddingLeft: "60px",
            }}
          >
            {/* Timeline Dot */}
            <div
              style={{
                position: "absolute",
                left: "22px",
                top: "35px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#6366f1",
              }}
            />

            {/* Images: Photo + Logo */}
            <div style={{ display: "flex", gap: "12px" }}>
              {/* Your Photo */}
              <img
                src={edu.image}
                alt="My Photo"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #6366f1",
                }}
              />

              {/* Institute Logo */}
              <img
                src={edu.logo}
                alt="Institute Logo"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "12px",
                  backgroundColor: "white",
                  padding: "6px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Content Card */}
            <div
              style={{
                backgroundColor: "#0f172a",
                padding: "20px",
                borderRadius: "12px",
                flex: 1,
              }}
            >
              <h3 style={{ color: "#ffffff", marginBottom: "5px" }}>
                {edu.level}
              </h3>

              <p style={{ color: "#c7d2fe", fontWeight: "500" }}>
                {edu.institute}
              </p>

              <p style={{ color: "#e5e7eb", fontSize: "14px" }}>
                {edu.board} | {edu.year}
              </p>

              {/* Score Badge */}
              <span
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  marginBottom: "10px",
                  padding: "5px 12px",
                  backgroundColor: "#1e293b",
                  color: "#a5b4fc",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "500",
                }}
              >
                {edu.score}
              </span>

              <p style={{ color: "#e5e7eb", marginTop: "10px" }}>
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
