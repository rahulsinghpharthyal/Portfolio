import React from "react";
import weather from "../assets/portfolio/Wheather.png";

const Portfolio = () => {
        const portfolio =[
                {
                    id: 1,
                    src: weather
                },
                {
                    id: 2,
                    src: weather
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

        ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio </p>
          <p className="py-6"> Check out some of my work right here </p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">

        {
            portfolio.map(({id, src})=>(
          <div key={id} className="shadow-md shadow-gray-600 rouded-lg">
            <img src={src} alt="thumbnail" className="rounded-md duration-300 hover:scale105"></img>
            <div className="flex flex-center justify-center">
              <button className="w-1/2 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button className="w-1/2 py-3 m-4 duration-200 hover:scale-105">Code</button>
            </div>
          </div>
            ))
        }
        </div>

        
      </div>
    </div>
  );
};

export default Portfolio;
