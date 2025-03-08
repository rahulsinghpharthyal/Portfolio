import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowAltCircleLeft, FaArrowAltCircleRight  } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/rahul-pharthyal-36aa1517b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/rahulsinghpharthyal",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:rahulpharthyal04@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://docs.google.com/document/d/1h_J0TPqZ_1avOBaTQTEJ1p_uKQLN7G34/edit?usp=sharing&ouid=107792749908186382897&rtpof=true&sd=true",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
        WhatsApp <FaWhatsapp size={30}/>
        </>
      ),
      href: "https://wa.me/6397104144?text=Hello",  // formet is `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      style: "rounded-br-md",
    }
  ];

  return (
    <div className="fixed top-[15%] left-0 lg:top-[35%] lg:flex">
      <button
        onClick={toggleLinks}
        className={`lg:hidden flex justify-center items-center text-white rounded-r-lg`}
      >
        {isOpen ? 
        <FaArrowAltCircleLeft size={20}/>
        : 
        <FaArrowAltCircleRight size={20}/>
        }
      </button>
      <ul className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <Link
              to={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
