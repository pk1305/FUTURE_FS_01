import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      level: "Secondary Education (Class X)",
      institute: "APS Danapur, Patna",
      board: "CBSE",
      year: "2021",
      score: "92.4%",
      photo: "/education/me_10.jpeg",
      logo: "/education/school_10_logo.png",
      transcript: "/education/transcript/class_10_transcript.pdf",
      description:
        "Developed strong fundamentals in Mathematics, Science, and Computer Basics.",
    },
    {
      level: "Higher Secondary Education (Class XII)",
      institute: "APS Danapur, Patna",
      board: "CBSE",
      year: "2023",
      score: "78.6%",
      photo: "/education/me_12.jpeg",
      logo: "/education/school_12_logo.png",
      transcript: "/education/transcript/class_12_transcript.pdf",
      description:
        "Specialized in Science stream with Mathematics and Informatics Practices.",
    },
    {
      level: "B.Tech – Computer Science & Engineering",
      institute: "SRM Institute of Science and Technology, KTR, Chennai",
      board: "Currently Pursuing",
      year: "2023 – Present",
      score: "CGPA: 9.6",
      photo: "/education/me_college.jpeg",
      logo: "/education/college_logo.png",
      transcript: "/education/transcript/college_transcript.pdf",
      description:
        "Hands-on experience in Web Development, DSA, and academic projects.",
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
          color: "white",
          marginBottom: "70px",
          fontSize: "38px",
        }}
      >
        Education
      </motion.h2>

      {/* Timeline */}
      <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
        {/* Vertical Line */}
        <div
          style={{
            position: "absolute",
            left: "42px",
            top: 0,
            bottom: 0,
            width: "3px",
            backgroundColor: "#334155",
          }}
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              display: "flex",
              gap: "30px",
              marginBottom: "70px",
              paddingLeft: "90px",
              position: "relative",
            }}
          >
            {/* Timeline Dot */}
            <div
              style={{
                position: "absolute",
                left: "34px",
                top: "50px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#6366f1",
              }}
            />

            {/* Images */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
                minWidth: "140px",
              }}
            >
              {/* Your Photo */}
              <img
                src={edu.photo}
                alt="My Photo"
                style={{
                  width: "130px",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  backgroundColor: "#ffffff",
                  padding: "6px",
                  border: "3px solid #6366f1",
                  boxShadow: "0 12px 30px rgba(99,102,241,0.6)",
                }}
              />

              {/* Institute Logo */}
              <img
                src={edu.logo}
                alt="Institute Logo"
                style={{
                  width: "64px",
                  height: "64px",
                  objectFit: "contain",
                  backgroundColor: "#ffffff",
                  padding: "6px",
                  borderRadius: "12px",
                  border: "2px solid #38bdf8",
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                backgroundColor: "#0f172a",
                padding: "26px",
                borderRadius: "16px",
                flex: 1,
                boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
              }}
            >
              <h3 style={{ color: "#ffffff" }}>{edu.level}</h3>

              <p style={{ color: "#c7d2fe", fontWeight: "600" }}>
                {edu.institute}
              </p>

              <p style={{ color: "#e5e7eb", fontSize: "14px" }}>
                {edu.board} | {edu.year}
              </p>

              <span
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "6px 16px",
                  backgroundColor: "#1e293b",
                  color: "#a5b4fc",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {edu.score}
              </span>

              <p style={{ color: "#e5e7eb", marginTop: "14px" }}>
                {edu.description}
              </p>

              {/* Transcript Button */}
              <a
                href={edu.transcript}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "18px",
                  padding: "8px 16px",
                  backgroundColor: "#1e293b",
                  color: "#e0e7ff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                👁️ View Transcript
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
