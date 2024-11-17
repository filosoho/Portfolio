import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import $ from "jquery";
import {
  createSVGElement,
  createPathElement,
  setCircleVisibility,
  circlePath,
} from "../sections/utils/marker.js";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const markerRef = useRef([]);

  const handleCopy = () => {
    navigator.clipboard.writeText("filosoho@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const markers = $(".marker");
    const widthGain = 1;
    const heightGain = 1;

    markers.each(function () {
      const marker = $(this);
      const width = marker.width();
      const height = 2 * marker.height();

      // Create SVG element
      const svg = createSVGElement(width, height, widthGain, heightGain);
      marker[0].appendChild(svg);

      // Create path element
      const path = createPathElement();
      svg.appendChild(path);

      // Hide path initially
      setCircleVisibility(path, false);

      // Generate a new circle and show path on mouse hover
      marker.mouseover(function () {
        setCircleVisibility(path, true);
        const newPath = circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3);
        $(path).attr({ d: newPath });
      });
      marker.mouseout(function () {
        setTimeout(() => {
          setCircleVisibility(path, false);
        }, 300);
      });
    });
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <p className="head-text mb-10">About Me</p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1  xl:row-span-3">
          <div className="grid-container ">
            <div className="profile-img-box mx-auto">
              <img
                src="/assets/grid-1.png"
                alt="grid-1"
                className="max-w-full max-h-[226px] object-contain mt-5 mb-2"
              />
            </div>
            <div>
              <p className="grid-headtext">Hi, I&apos;m Anna</p>
              <p className="grid-subtext">
                <span className="about-highlight font-bold text-white">
                  Front End Developer
                </span>{" "}
                who loves turning ideas into fun, interactive web experiences.
                My background in Full-Stack Development gives me the flexibility
                to work on both the front and back end of projects, but I have a
                special passion for Front End Development, designing smooth,
                responsive and engaging user interfaces. Usually I&apos;m
                exploring new tech or solving tricky problems and I&apos;m
                always looking for creative ways to build something fun and
                functional.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container ">
            <img
              src="/assets/grid-3.png"
              alt="grid-3"
              className="w-full max-h-[226px] object-contain mt-5 mb-2"
            />
            <div>
              <p className="grid-headtext">The Joy of Coding</p>
              <p className="grid-subtext">
                I see coding as an adventure, mixing creativity with the joy of
                discovering something new. Each project is a chance to solve
                puzzles and express ideas in a way that&apos;s visually
                engaging. Creating smooth user experiences is important to me. I
                focus on perfecting animations and ensuring designs are
                responsive and work well on all platforms. And the best part?
                There&apos;s always something new to learn! When I&apos;m not
                coding, I&apos;m out there discovering the latest frameworks or
                diving into new challenges just for the thrill of it.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl max-w-full max-h-[226px] flex justify-center items-center mt-5 mb-2">
              <Globe
                height={276}
                width={276}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">Effective Remote Collaboration</p>
              <p className="grid-subtext">
                As a London-based developer, I embrace the flexibility of remote
                work across various time zones. I believe that strong
                communication and a collaborative spirit are essential for
                delivering successful projects. I&apos;m well-versed in using
                remote work tools and best practices, ensuring that every team
                member feels connected and engaged, no matter where they are.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 md:col-span-2 xl:row-span-2">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/grid-2.png"
              alt="grid-2"
              className="max-w-full  max-h-full object-contain"
            />
            <div id="tech-section" ref={(el) => markerRef.current.push(el)}>
              <p className="grid-headtext ">Tech Stack</p>
              <p className="grid-subtext">
                <span className="relative inline-block font-bold text-yellow-500 marker">
                  JavaScript
                </span>{" "}
                and{" "}
                <span className="relative inline-block font-bold text-cyan-600 marker">
                  React
                </span>{" "}
                are my go-to tools for building engaging, user-friendly
                websites. I use{" "}
                <span className="relative inline-block  font-bold text-blue-500 marker">
                  CSS
                </span>{" "}
                to perfect the design, ensuring everything looks polished and
                responsive across all devices. Right now, I'm diving into{" "}
                <span className="relative inline-block font-bold px-1 rounded  bg-zinc-950 text-zinc-50 marker">
                  Next.js
                </span>{" "}
                to improve performance,{" "}
                <span className="relative inline-block font-bold text-blue-400 marker">
                  TypeScript
                </span>{" "}
                to write cleaner, more maintainable code and{" "}
                <span className="relative inline-block font-bold text-cyan-300 marker">
                  Tailwind CSS
                </span>{" "}
                for faster, custom styling. I love the energy that comes from
                learning these tools and can’t wait to see how they’ll shape my
                projects and the experiences I create for users.
              </p>

              {/* Tech Stack Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 tech-grid">
                {/* Frontend Section*/}
                <div className="tech-section">
                  <h3 className="tech-section-title">Frontend</h3>
                  <ul className="tech-list">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Next.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Tailwind CSS</li>
                    <li>Sass</li>
                    <li>Three.js</li>
                    <li>GSAP</li>
                    <li>DOM</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>

                {/* Backend Section  & Tools Section */}
                <div className="tech-section">
                  <h3 className="tech-section-title">Backend</h3>
                  <ul className="tech-list">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>API</li>
                  </ul>
                  <br />
                  <h3 className="tech-section-title">Tools</h3>
                  <ul className="tech-list">
                    <li>Git</li>
                    <li>Linux</li>
                    <li>NPM</li>
                    <li>Slack</li>
                    <li>Trello</li>
                    <li>Jest</li>
                    <li>Supertest</li>
                    <li>Vite</li>
                    <li>WAVE</li>
                    <li>Lighthouse</li>
                    <li>Netlify</li>
                    <li>Render</li>
                    <li>Excalidraw</li>
                  </ul>
                </div>

                {/* Databases Section & Workflows & Design Section & UI Section */}
                <div className="tech-section">
                  <h3 className="tech-section-title">Databases</h3>
                  <ul className="tech-list">
                    <li>SQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Supabase</li>
                  </ul>
                  <br />
                  <h3 className="tech-section-title">Workflows</h3>
                  <ul className="tech-list">
                    <li>Agile</li>
                    <li>Scrum</li>
                    <li>Paired Programming</li>
                  </ul>
                  <br />
                  <h3 className="tech-section-title">Design</h3>
                  <ul className="tech-list">
                    <li>Figma</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe After Effects</li>
                    <li>Procreate</li>
                  </ul>
                  <br />
                  <h3 className="tech-section-title">UI/UX</h3>
                  <ul className="tech-list">
                    <li>UI Design</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/doughnut.png"
              alt="My Blender Doughnut"
              className="max-w-full max-h-[150px] object-contain sm:object-top mt-5 mb-2"
            />

            <div>
              <p className="grid-headtext">Fun Fact</p>
              <p className="grid-subtext">
                While learning Blender, I followed{" "}
                <a
                  href="https://youtu.be/TPrnSACiTJ4?si=6HAIk38iDdn0FVoq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline hover:text-blue-700"
                >
                  Andrew Price&apos;s legendary doughnut tutorial
                </a>{" "}
                and created my very first 3D model! It was a fun and challenging
                experience that helped me improve my skills. My doughnut even
                became part of a group project with other creators.
              </p>
              <br />
              <p className="grid-subtext">
                Check out the tutorial that started it all and see my doughnut
                featured in the collection! <br />
                <br />
                <a
                  href="https://andrewprice.art/17731-first-steps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:underline hover:text-orange-500"
                >
                  Group Doughnut
                </a>
                <br />
                <a
                  href="https://andrewprice.art/17731-first-steps/donut/8233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline hover:text-pink-700"
                >
                  My Doughnut
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/grid-4.png"
              alt="grid-4"
              className="w-full max-h-[276px] object-contain sm:object-top mt-5 mb-2"
            />

            <div className="space-y-2">
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.png" : "/assets/copy.png"}
                  alt="copy"
                  className="w-10 h-10"
                />

                <p className=" font-medium text-md text-gray_gradient text-white">
                  filosoho@gmail.com
                </p>
              </div>
            </div>
            <div className="w-full">
              <Button
                name="Contact Me"
                isBeam
                onClick={handleButtonClick}
                containerClass="w-full mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
