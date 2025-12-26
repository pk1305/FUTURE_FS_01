import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#020617",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        zIndex: 1000,
      }}
    >
     <h2 className="gradient-text">Pooja Kumari</h2>



      <div style={{ display: "flex", gap: "20px" }}>
        {["Home", "About", "Projects", "Activities", "Contact"].map(
          (item, i) => (
            <motion.a
              key={i}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item}
            </motion.a>
          )
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
