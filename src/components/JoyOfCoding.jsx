import React, { memo } from "react";

const JoyOfCoding = memo(() => (
  <div className="grid-container ">
    <img
      src="/assets/grid-3.png"
      alt="grid-3"
      className="w-full max-h-[226px] object-contain mt-5 mb-2"
      loading="lazy"
    />
    <div>
      <h3 className="grid-headtext">The Joy of Coding</h3>
      <p className="grid-subtext">
        I see coding as an adventure, mixing creativity with the joy of
        discovering something new. Each project is a chance to solve puzzles and
        express ideas in a way that&apos;s visually engaging. Creating smooth
        user experiences is important to me. I focus on perfecting animations
        and ensuring designs are responsive and work well on all platforms. And
        the best part? There&apos;s always something new to learn! When I&apos;m
        not coding, I&apos;m out there discovering the latest frameworks or
        diving into new challenges just for the thrill of it.
      </p>
    </div>
  </div>
));

export default JoyOfCoding;
