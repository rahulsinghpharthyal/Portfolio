import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen sm:min-h-[50vh] bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          As someone who wants to become a full stack web developer, I love
          creating interactive and easy-to-use websites. I know the basics of
          both front-end and back-end technologies, including HTML, CSS,
          JavaScript, React, and Node.js.I'm eager to use my skills and learn
          from more experienced professionals. I am committed to growing
          continuously and enjoy working with others. I'm ready to contribute to
          projects and take advantage of learning opportunities.
        </p>
        <br />
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          As a new full stack web developer, I am driven by a strong curiosity
          to learn all about web development. I have good skills in front-end
          frameworks like React for building interactive user interfaces and
          Node.jsfor creating strong server-side applications. I'm excited to
          use these skills to develop smooth digital solutions.
        </p>
        <br />
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          I have also had the chance to work with some freelance projects,
          including MNNLR Company and Genius Web Solution. These experiences
          have given me real-world exposure and helped me improve my technical
          skills. I'm committed to keeping up with new technologies and always
          take a proactive approach to solving problems. This helps me to adapt
          and thrive in the fast-moving field of web development.
        </p>
        <br />
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
        I enjoy working with others and am eager to bring my passion and skills to exciting projects while also tackling any new challenges that come my way.
        </p>
      </div>
    </div>
  );
};

export default About;
