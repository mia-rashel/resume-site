import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#F5E9E4] min-h-screen font-sans text-gray-900">
      <Header/>
      <Hero/>
      <About/>
      
      <Certifications/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
