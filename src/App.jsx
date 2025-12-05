// import React from "react";
// import "./index.css";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;


import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Education/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

