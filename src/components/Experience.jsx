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
      style: 'shadow-green-600'
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
      title: "Tailwind",
      style: 'shadow-sky-400'
    },
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center px-4 py-10"
    >
      <div className="max-w-screen-lg w-full">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 inline-block">Experience</p>
          <p className="py-6 text-lg">These are the technologies I've worked with:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {experience.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-base font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
