import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates_Temp";
import Contact from "./components/Contact";
import ExtraCurricular from "./components/ExtraCurricular";
import CursorGlow from "./components/CursorGlow";



function App() {
  return (
    <div>
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExtraCurricular />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
