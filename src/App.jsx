import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates_Temp";
import Internships from "./sections/Internships";

function App() {
  return (
    <div style={{ backgroundColor: "#020617", color: "white" }}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Internships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
