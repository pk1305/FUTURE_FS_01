import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbxigsv",     // 🔴 replace
        "template_57x7m4j",    // 🔴 replace
        formRef.current,
        "fG3OZnMrhU_YijZp0"      // 🔴 replace
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        backgroundColor: "#020617",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "30px" }}>
        Contact Me
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        style={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  outline: "none",
  fontSize: "15px",
};

export default Contact;
