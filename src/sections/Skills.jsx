import { skillsAndContributions } from "../constants";

const Skills = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Skills And Contributions</h3>

      <div className="skills-container">
        {skillsAndContributions.map(({ id, name, desc, img, tag }) => (
          <div key={id} className="skills-desc">
            <div>
              <div className="skills-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-white-500 md:text-base text-sm">{tag}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-3 h-3"
                    />
                  ))}
                </div>
              </div>

              <p className="text-white font-light mt-3">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
