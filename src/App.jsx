import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [theme, setTheme] = useState("dark"); // dark | light

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;