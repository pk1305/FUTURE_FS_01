import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nbxigsv",        // ✅ your Service ID
        "template_57x7m4j",       // ✅ your Template ID
        form.current,
        "fG3OZnMrhU_YijZp0"       // ✅ your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" style={{ padding: "80px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Contact Me
      </h2>

      <form
        ref={form}
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
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#6366f1",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>

        {status && (
          <p style={{ textAlign: "center", marginTop: "10px" }}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;
