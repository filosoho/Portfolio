import React, { useState, Suspense } from "react";
import Button from "../components/Button";
import Profile from "../components/Profile";
import JoyOfCoding from "../components/JoyOfCoding";
import Collaboration from "../components/Collaboration";
import TechStack from "../components/TechStack";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("filosoho@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <h2 className="head-text mb-10">About Me</h2>
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1  xl:row-span-3">
          <Suspense fallback={<div>Loading Profile...</div>}>
            <Profile />
          </Suspense>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <Suspense fallback={<div>Loading Joy Of Coding..</div>}>
            <JoyOfCoding />
          </Suspense>
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-1 xl:row-span-3">
          <Collaboration />
        </div>
        <div className="xl:col-span-2 md:col-span-2 xl:row-span-2">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/grid-2.png"
              alt="grid-2"
              className="max-w-full  max-h-full object-contain"
              loading="lazy"
            />
            <Suspense fallback={<div>Loading Tech Stack...</div>}>
              <TechStack />
            </Suspense>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-1">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/doughnut.png"
              alt="My Blender Doughnut"
              className="max-w-full max-h-[150px] object-contain sm:object-top mt-5 mb-2"
              loading="lazy"
            />
            <div>
              <h4 className="grid-headtext">Fun Fact</h4>
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
              loading="lazy"
            />
            <div className="space-y-2">
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.png" : "/assets/copy.png"}
                  alt="copy"
                  className="w-10 h-10"
                  loading="lazy"
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
