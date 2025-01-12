import React from "react";
import flipkart from "../assets/portfolio/flipkart.png";
import e_commerce from "../assets/portfolio/e-commerce.png";
import voting_application from "../assets/portfolio/voting_application.png";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: flipkart,
      demo: 'https://rlipkart.netlify.app/',
    },
    {
      id: 2,
      src: e_commerce,
      demo: 'https://rahule-commerce.netlify.app/',
    },
    {
      id: 3,
      src: voting_application,
      demo: 'https://voteforbharat.netlify.app/',
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen sm:min-h-[50vh] bg-gradient-to-b from-black to-gray-800 text-white py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <div className="pb-8 mt-28 sm:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6 text-lg">Check out some of my projects right here.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolio.map((val) => (
            <div key={val.id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img src={val.src} alt="thumbnail" className="rounded-t-md duration-300 hover:scale-105 w-full h-48 object-cover" />
              <div className="flex justify-center">
                <Link
                  to={val.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 py-3 m-2 text-center bg-blue-500 rounded-md text-white hover:bg-blue-600 duration-200 hover:scale-105"
                >
                  Demo
                </Link>
                <button className="w-1/2 py-3 m-2 bg-green-500 rounded-md text-white hover:bg-green-600 duration-200 hover:scale-105">Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
