import React from 'react';
import HeroImg from '../assets/heropng.png';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm a Full Stack Developer
            </h2>
            <p className='text-gray-500 py-4'>
            As a passionate and innovative full stack developer, I bring fresh perspectives and a hunger for learning to every project. Proficient in both front-end and back-end technologies, I thrive in collaborative environments, eager to contribute and grow while delivering efficient and impactful solutions.
            </p>
            <div>
              <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <IoIosArrowForward size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>
        <div>
            <img src={HeroImg} alt='my profile' className='w-full flex justify-center mt-8 md:mt-0 md:block hidden'></img>
        </div>
      </div>
    </div>
  )
}

export default Home