import React, { Suspense } from "react";
import "./styles.css";

// Lazy load components
const Navbar = React.lazy(() => import("./sections/Navbar"));
const Hero = React.lazy(() => import("./sections/Hero"));
const About = React.lazy(() => import("./sections/About"));
const Projects = React.lazy(() => import("./sections/Projects"));
const Contact = React.lazy(() => import("./sections/Contact"));
const Footer = React.lazy(() => import("./sections/Footer"));
const MyApproach = React.lazy(() => import("./sections/MyApproach"));

// Loader component (optional, for fallback)
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <p>Loading...</p>
  </div>
);

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <Projects />
        <MyApproach />
        <Contact />
      </Suspense>
      <Footer />
    </main>
  );
};

export default App;
