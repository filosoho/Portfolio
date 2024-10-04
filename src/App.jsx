import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import MyApproach from "./sections/MyApproach";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <MyApproach />
      <Contact />
      <Footer />
      <Skills />
    </main>
  );
};

export default App;
