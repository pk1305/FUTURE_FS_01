import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimateSection from "./components/AnimateSection";

function App() {
  return (
    <div style={{ backgroundColor: "#020617", color: "white" }}>
      <Navbar />

      <AnimateSection>
        <Hero />
      </AnimateSection>

      <AnimateSection>
        <About />
      </AnimateSection>

      <AnimateSection>
        <Skills />
      </AnimateSection>

      <AnimateSection>
        <Projects />
      </AnimateSection>

      <AnimateSection>
        <Contact />
      </AnimateSection>

      <Footer />
    </div>
  );
}

export default App;
