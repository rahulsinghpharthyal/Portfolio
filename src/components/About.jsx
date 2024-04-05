import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
      <p className="text-xl mt-20">
        As an aspiring full stack web developer, I am driven by a passion for
        crafting dynamic and intuitive digital experiences. Equipped with
        foundational knowledge in both front-end and back-end technologies,
        including proficiency in languages like HTML, CSS, JavaScript, React,
        and Node.js, I am eager to apply my skills and learn from experienced
        professionals. With a strong commitment to continuous growth and a
        collaborative mindset, I am poised to contribute effectively to projects
        while embracing opportunities for learning and development.
      </p>
      <br />
      <p className="text-xl">
        As a fresh full stack web developer, I am fueled by a relentless
        curiosity to explore the intricacies of web development. Proficient in
        front-end frameworks like React for building dynamic user interfaces and
        Node.js for crafting robust server-side applications, I am eager to
        leverage these skills to create seamless digital solutions. With a
        dedication to staying updated on emerging technologies and a proactive
        approach to problem-solving, I am poised to adapt and thrive in the
        fast-paced world of web development. Collaborative by nature, I am
        excited to contribute my enthusiasm and expertise to innovative projects
        while embracing new challenges that come my way.
      </p>
      </div>
    </div>
  );
};

export default About;
