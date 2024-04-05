import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimg from "../assets/react.png";
import nodejs from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import talwind from "../assets/tailwind.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactimg,
      title: "React.js",
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: 'shadow-white'
    },
    {
      id: 6,
      src: mongodb,
      title: "MongoDB",
      style: 'shadow-green-500'
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: 'shadow-gray-500'
    },
    {
      id: 8,
      src: talwind,
      title: "Talwind",
      style: 'shadow-sky-400'
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8">
          {experience.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="img" className="w-20 mx-auto"></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
