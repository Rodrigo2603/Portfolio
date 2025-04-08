import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from './components/Projects';
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      
      <Home />

      <section id="about" className="min-h-screen py-30 px-4 md:px-8 lg:px-16">
      <About />
      </section>

      <section id="projects" className="min-h-screen py-30 px-4 md:px-8 lg:px-16">
      <Projects />
      </section>

      <section id="contact" className="min-h-screen py-40 px-4 md:px-8 lg:px-16">
      <Contact />
      </section>
    </div>
  );
}

export default App;