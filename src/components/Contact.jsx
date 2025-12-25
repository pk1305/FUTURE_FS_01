function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 40px",
        backgroundColor: "#0f172a",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>Contact Me</h2>

      <p style={{ marginBottom: "30px", color: "#cbd5f5" }}>
        Feel free to reach out for collaborations or opportunities.
      </p>

      <form
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
          }}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          required
          style={{
            padding: "12px",
            borderRadius: "6px",
            border: "none",
          }}
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
            fontSize: "16px",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
