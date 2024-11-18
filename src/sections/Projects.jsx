import { myProjects } from "../constants";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import "../styles.css";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <h2 className="head-text">Projects</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
        {myProjects.map((project, index) => (
          <button
            key={project.title}
            onClick={() => setSelectedProjectIndex(index)}
            className={`project-button ${
              index === selectedProjectIndex ? "active" : ""
            }`}
          >
            {project.button}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 h-full">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt={currentProject.alt}
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <h3 className="text-white text-xl sm:text-2xl font-semibold animatedText">
              {currentProject.title}
            </h3>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 mb-4">
              {currentProject.tags.map((tag, index) => (
                <span key={tag.name} className="tooltip" data-text={tag.name}>
                  <div className="tech-logo">
                    <img src={tag.path} alt={tag.name} />
                  </div>
                </span>
              ))}
            </div>{" "}
            <div className="flex flex-row items-center gap-2">
              {currentProject.title !== "Filosoho Space - Personal Website" ? (
                <a
                  className="flex items-center gap-1 cursor-pointer text-white-600"
                  href={currentProject.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>GitHub</p>
                  <img
                    src="/assets/github.png"
                    className="w-10 h-10"
                    alt="github"
                  />
                </a>
              ) : null}

              {currentProject.title !== "Totoro-Pomodoro Timer" ? (
                <a
                  className="flex items-center gap-1 cursor-pointer text-white-600"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Live View</p>
                  <img
                    src="/assets/arrow-up.png"
                    className="w-6 h-6"
                    alt="arrow pointing up for live view"
                  />
                </a>
              ) : null}
            </div>
          </div>

          <div className="flex justify-between direction-row items-center mt-auto text-white">
            <button
              className="flex flex-row items-center space-x-2"
              onClick={() => handleNavigation("previous")}
            >
              {" "}
              <img
                src="/assets/left-arrow.png"
                alt="arrow pointing left to the previous project"
                className="w-8 h-4 sm:w-10 sm:h-6 mr-2"
              />{" "}
              Prev
            </button>
            <button
              className="flex flex-row items-center space-x-2"
              onClick={() => handleNavigation("next")}
            >
              {" "}
              Next
              <img
                src="/assets/right-arrow.png"
                alt="arrow pointing right to next project"
                className="w-8 h-4 sm:w-10 sm:h-6 ml-2"
              />{" "}
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[50, 30, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={0.4} position={[0, 0, 0]} rotation={[0, 0, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
