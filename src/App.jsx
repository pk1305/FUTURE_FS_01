import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";
import CursorGlow from "./components/CursorGlow";

function App() {
  return (
    <div>
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Fixed navigation */}
      <Navbar />

      {/* Main sections */}
      <Hero />
      <About />
      <Education />
      <Projects />
      <ExtraCurricular />
      <Contact />
    </div>
  );
}

export default App;
