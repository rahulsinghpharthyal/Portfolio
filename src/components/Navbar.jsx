import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import ProfileImg from '../assets/heropng.png';  // Assuming you have a profile image at this path

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 text-[#f6f6f6] text-[20px] bg-black fixed px-4'>
            <div className='flex items-center'>
                <h1 className='text-5xl font-signature ml-2 mt-3'>Rahul</h1>
                <img src={ProfileImg} alt="profile" className='ml-10 mb-2 w-12 h-12 rounded-lg border-2 border-white md:hidden ' />
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-[#FFFF00] hover:underline decoration-2 duration-200'>
                        <Link to={link} smooth duration={500} offset={-100}>{link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white-500 md:hidden'>
                {nav ? <FaTimes size={30} />
                    :
                    <FaBars size={30} />
                }
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-[#f6f6f6]-500'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-[#FFFF00] hover:underline decoration-2 duration-200'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
