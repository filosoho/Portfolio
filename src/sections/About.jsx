import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("filosoho@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false); // Reset the state after 3 seconds  )
    }, 2000);
  };

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
                I&apos;m a Software Engineer who loves turning ideas into
                delightful, interactive web experiences. My background in
                full-stack development gives me the flexibility to work on both
                the front and back end of projects, but I have a special passion
                for Front-End Development, crafting smooth, responsive and
                engaging user interfaces. Usually I&apos;m exploring new tech or
                solving tricky problems and I&apos;m always looking for creative
                ways to build something fun and functional.
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
                For me, coding is all about creativity and exploration. Each
                project is a chance to solve puzzles and express ideas in a way
                that&apos;s visually engaging. I love crafting seamless user
                experiences, whether that means perfecting an animation or
                ensuring a design works flawlessly on all devices. And the best
                part? There&apos;s always something new to learn! When I&apos;m
                not coding, I&apos;m out there discovering the latest frameworks
                or diving into new challenges just for the thrill of it.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1  xl:row-span-3">
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
              <Button name="Contact Me" isBeam containerClass="w-full mt-5" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/grid-2.png"
              alt="grid-2"
              className="max-w-full  max-h-[326px] object-contain"
            />
            <div className="space-y-2 self-start">
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I&apos;m all about JavaScript and TypeScript, focusing on
                creating dynamic web applications with React and Next.js. I love
                experimenting with modern CSS solutions like Tailwind CSS to
                enhance both developer experience and user performance.
                There&apos;s always something new to explore, and I&apos;m
                excited to keep pushing the boundaries of what&apos;s possible!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container flex justify-center items-center">
            <img
              src="/assets/grid-4.png"
              alt="grid-4"
              className="w-full max-h-[226px] object-contain sm:object-top mt-5 mb-2"
            />

            <div className="space-y-2 mt-10">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.png" : "/assets/copy.png"}
                  alt="copy"
                  className="w-10 h-10"
                />
                <p className=" font-medium text-sm text-gray_gradient text-white">
                  filosoho@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
