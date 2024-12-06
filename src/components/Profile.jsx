import React, { memo } from "react";

const Profile = memo(() => (
  <div className="grid-container ">
    <div className="profile-img-box mx-auto">
      <img
        src="/assets/grid-1.png"
        alt="grid-1"
        className="max-w-full max-h-[226px] object-contain mt-5 mb-2"
        loading="lazy"
      />
    </div>
    <div>
      <h3 className="grid-headtext">Hi, I&apos;m Anna</h3>
      <p className="grid-subtext">
        <span className="about-highlight font-bold text-white">
          Front End Developer
        </span>{" "}
        who loves turning ideas into fun, interactive web experiences. My
        background in Full-Stack Development gives me the flexibility to work on
        both the front and back end of projects, but I have a special passion
        for Front End Development, designing smooth, responsive and engaging
        user interfaces. Usually I&apos;m exploring new tech or solving tricky
        problems and I&apos;m always looking for creative ways to build
        something fun and functional.
      </p>
    </div>
  </div>
));

export default Profile;
