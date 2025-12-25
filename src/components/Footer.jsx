import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        padding: "30px",
        backgroundColor: "#020617",
        textAlign: "center",
        color: "#cbd5f5",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "12px" }}>
        <a href="https://linkedin.com/in/pooja-kumari-394097363" target="_blank">
          <FaLinkedin size={26} />
        </a>
        <a href="https://github.com/pk1305" target="_blank">
          <FaGithub size={26} />
        </a>
      </div>

      <p>© 2025 Pooja Kumari</p>
    </footer>
  );
}

export default Footer;
