import React from 'react';
import HeroImg from '../assets/heropng.png';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex justify-center items-center px-4">
      <div className="max-w-screen-lg w-full flex flex-col">
        <div className="m-10">
          <img src={HeroImg} alt="my profile" className="rounded-full h-32 w-32 md:h-64 md:w-64 mx-auto"/>
        </div>
        <div className="pb-8 text-left">
          <h2 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 py-4 leading-relaxed mt-10">
            As a passionate and innovative full stack developer, I bring fresh perspectives and a hunger for learning to every project. Proficient in both front-end and back-end technologies, I thrive in collaborative environments, eager to contribute and grow while delivering efficient and impactful solutions.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} offset={-100} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <IoIosArrowForward size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
