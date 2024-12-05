import React, { Suspense } from "react";
import ErrorBoundary from "./components/ErrorBoundary";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const About = React.lazy(() => import("./sections/About"));
const Projects = React.lazy(() => import("./sections/Projects"));
const MyApproach = React.lazy(() => import("./sections/MyApproach"));
const Contact = React.lazy(() => import("./sections/Contact"));
const Footer = React.lazy(() => import("./sections/Footer"));

const LoaderTxt = () => (
  <div className="flex items-center justify-center min-h-screen">
    <p>Loading...</p>
  </div>
);

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <ErrorBoundary>
        <Navbar />
        <Suspense fallback={<LoaderTxt />}>
          <Hero />
          <About />
          <Projects />
          <MyApproach />
          <Contact />
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </main>
  );
};

export default App;
