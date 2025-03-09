import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white flex justify-center items-center px-4"
    >
      <div className="max-w-screen-lg w-full">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 inline-block">
            About
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            As someone who wants to become a full stack web developer, I love
            creating interactive and easy-to-use websites. I know the basics of
            both front-end and back-end technologies, including HTML, CSS,
            JavaScript, React, and Node.js. I'm eager to use my skills and learn
            from more experienced professionals.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            As a new full stack web developer, I am driven by a strong curiosity
            to learn all about web development. I have good skills in front-end
            frameworks like React for building interactive user interfaces and
            Node.js for creating strong server-side applications.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I have also worked on freelance projects, including <b>Man Need New Life Resource (MNNLR) </b>and{" "}
            <b>Genius Web Solution</b>. These experiences have given me real-world
            exposure and helped me improve my technical skills.
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I enjoy working with others and am eager to bring my passion and skills to
            exciting projects while also tackling any new challenges that come my way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
