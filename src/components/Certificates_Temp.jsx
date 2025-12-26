function Certificates() {
  const certificates = [
    {
      title: "Oracle Java Foundations",
      org: "Oracle (Coursera)",
      img: "/certificates/oracle_java_foundations.jpeg",
    },
    {
      title: "Java Basic Certification",
      org: "HackerRank",
      img: "/certificates/hackerrank_java_basic.jpeg",
    },
    {
      title: "Java Intermediate",
      org: "SoloLearn",
      img: "/certificates/sololearn_java_intermediate.jpeg",
    },
    {
      title: "Introduction to Java",
      org: "SoloLearn",
      img: "/certificates/sololearn_java_intro.jpeg",
    },
    {
      title: "Programming in Java",
      org: "NPTEL (IIT Kharagpur)",
      img: "/certificates/nptel_programming_in_java.jpeg",
    },
    {
      title: "OOPS Fundamentals",
      org: "NPTEL (IIT Roorkee)",
      img: "/certificates/nptel_oops_fundamentals.jpeg",
    },
    {
      title: "Python Developer Internship",
      org: "Unstop / Geeks Kepler",
      img: "/certificates/python_internship_unstop.jpeg",
    },
    {
      title: "IdeaSpark 2.0 – Final Round",
      org: "Founders Club",
      img: "/certificates/ideaspark_final_round.jpeg",
    },
    {
      title: "InnovateX’25 Hackathon",
      org: "SRM ACM SIGAI",
      img: "/certificates/innovatex25.jpeg",
    },
    {
      title: "Ethical Hacking & Cybersecurity",
      org: "Anyware Door / Cherry+",
      img: "/certificates/ethical_hacking_cybersecurity_workshop.jpeg",
    },
    {
      title: "HP Power Lab 2.0",
      org: "HPCL",
      img: "/certificates/hp_power_lab_participation.jpeg",
    },
  ];

  return (
    <section
      id="certificates"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "40px",
        }}
      >
        Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#020617",
              borderRadius: "12px",
              padding: "15px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={cert.img}
              alt={cert.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => window.open(cert.img, "_blank")}
            />

            <h3 style={{ marginTop: "15px", fontSize: "18px" }}>
              {cert.title}
            </h3>
            <p style={{ color: "#cbd5f5", fontSize: "14px" }}>
              {cert.org}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
