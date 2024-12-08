import React, { useEffect, useRef, memo } from "react";
import {
  createSVGElement,
  createPathElement,
  setCircleVisibility,
  circlePath,
} from "../sections/utils/marker.js";
import "../styles.css";

const TechStack = memo(() => {
  const markerRef = useRef([]);

  useEffect(() => {
    const markers = document.querySelectorAll(".marker");
    markers.forEach((marker) => {
      const width = marker.offsetWidth;
      const height = 2 * marker.offsetHeight;
      const svg = createSVGElement(width, height, 1, 1);
      marker.appendChild(svg);

      const path = createPathElement();
      svg.appendChild(path);

      setCircleVisibility(path, false);

      if (!marker.dataset.listenerAttached) {
        marker.addEventListener("mouseover", () => {
          setCircleVisibility(path, true);
          const newPath = circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3);
          path.setAttribute("d", newPath);
        });

        marker.addEventListener("mouseout", () => {
          setTimeout(() => setCircleVisibility(path, false), 300);
        });

        marker.dataset.listenerAttached = true;
      }
    });
  }, []);
  return (
    <div id="tech-section" ref={(el) => markerRef.current.push(el)}>
      <h3 className="grid-headtext ">Tech Stack</h3>
      <p className="grid-subtext">
        <span className="relative inline-block font-bold text-yellow-500 marker">
          JavaScript
        </span>{" "}
        and{" "}
        <span className="relative inline-block font-bold text-cyan-600 marker">
          React
        </span>{" "}
        are my go-to tools for building engaging, user-friendly websites. I use{" "}
        <span className="relative inline-block  font-bold text-blue-500 marker">
          CSS
        </span>{" "}
        to perfect the design, ensuring everything looks polished and responsive
        across all devices. Right now, I'm diving into{" "}
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
        for faster, custom styling. I love the energy that comes from learning
        these tools and can’t wait to see how they’ll shape my projects and the
        experiences I create for users.
      </p>
      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 tech-grid">
        {/* Frontend Section*/}
        <div className="tech-section">
          <h4 className="tech-section-title">Frontend</h4>
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
          <h4 className="tech-section-title">Backend</h4>
          <ul className="tech-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>API</li>
          </ul>
          <br />
          <h4 className="tech-section-title">Tools</h4>
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
          <h4 className="tech-section-title">Databases</h4>
          <ul className="tech-list">
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Supabase</li>
          </ul>
          <br />
          <h4 className="tech-section-title">Workflows</h4>
          <ul className="tech-list">
            <li>Agile</li>
            <li>Scrum</li>
            <li>Paired Programming</li>
          </ul>
          <br />
          <h4 className="tech-section-title">Design</h4>
          <ul className="tech-list">
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe After Effects</li>
            <li>Procreate</li>
          </ul>
          <br />
          <h4 className="tech-section-title">UI/UX</h4>
          <ul className="tech-list">
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default TechStack;
