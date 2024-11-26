// TechStack.jsx
import React, { useEffect, useRef, memo } from "react";
import $ from "jquery";
import {
  createSVGElement,
  createPathElement,
  setCircleVisibility,
  circlePath,
} from "../sections/utils/marker.js";

const TechStack = memo(() => {
  const markerRef = useRef([]);

  useEffect(() => {
    const markers = $(".marker");
    markers.each(function () {
      const marker = $(this);
      const width = marker.width();
      const height = 2 * marker.height();
      const svg = createSVGElement(width, height, 1, 1);
      marker[0].appendChild(svg);
      const path = createPathElement();
      svg.appendChild(path);
      setCircleVisibility(path, false);
      marker.mouseover(function () {
        setCircleVisibility(path, true);
        const newPath = circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3);
        $(path).attr({ d: newPath });
      });
      marker.mouseout(() =>
        setTimeout(() => setCircleVisibility(path, false), 300)
      );
    });
  }, []);

  return (
    <div id="tech-section" ref={(el) => markerRef.current.push(el)}>
      <h4 className="grid-headtext ">Tech Stack</h4>
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
          <h5 className="tech-section-title">Frontend</h5>
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
          <h5 className="tech-section-title">Backend</h5>
          <ul className="tech-list">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>API</li>
          </ul>
          <br />
          <h5 className="tech-section-title">Tools</h5>
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
          <h5 className="tech-section-title">Databases</h5>
          <ul className="tech-list">
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Supabase</li>
          </ul>
          <br />
          <h5 className="tech-section-title">Workflows</h5>
          <ul className="tech-list">
            <li>Agile</li>
            <li>Scrum</li>
            <li>Paired Programming</li>
          </ul>
          <br />
          <h5 className="tech-section-title">Design</h5>
          <ul className="tech-list">
            <li>Figma</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe After Effects</li>
            <li>Procreate</li>
          </ul>
          <br />
          <h5 className="tech-section-title">UI/UX</h5>
          <ul className="tech-list">
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default TechStack;