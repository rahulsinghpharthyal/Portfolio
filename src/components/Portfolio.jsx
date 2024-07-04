import React from "react";
import weather from "../assets/portfolio/Wheather.png";
import flipkart from "../assets/portfolio/flipkart.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: weather
    },
    {
      id: 2,
      src: flipkart
    },
    {
      id: 3,
      src: weather
    },
    {
      id: 4,
      src: weather
    },
    {
      id: 5,
      src: weather
    },
    {
      id: 6,
      src: weather
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full min-h-screen sm:min-h-[50vh] bg-gradient-to-b from-black to-gray-800 text-white py-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6 text-lg">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img src={src} alt="thumbnail" className="rounded-t-md duration-300 hover:scale-105 w-full h-48 object-cover" />
              <div className="flex justify-center">
                <button className="w-1/2 py-3 m-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 duration-200 hover:scale-105">Demo</button>
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
