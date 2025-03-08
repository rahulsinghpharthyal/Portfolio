import React, { useState } from "react";
import frontEnd from '../assets/Front-end.png';
import mnnlr from '../assets/mnnlr.png';

const Certificates = () => {

    const certificatesData = [
        {
          id: 1,
          name: "Front-end Web Development",
          issuer: "Reliance Foundation / Skill Academy ",
          image: frontEnd,
        },

        {
          id: 2,
          name: "React JS Developer",
          issuer: "Man Need New Life Resourse (MNNLR) Internship",
          image: mnnlr,
        },
      ];

      const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div
      name="certificates"
      className="w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white flex justify-center items-center px-4"
    >
      <div className="max-w-screen-lg w-full">
        <div className="pb-8 text-center sm:text-left">
          <p className="text-3xl sm:text-4xl font-bold border-b-4 border-gray-500 inline-block">
            Certificates
          </p>

        </div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          These are the certificates of courses and internship in web developement.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="shadow-md hover:scale-105 duration-500 rounded-lg shadow-red-200">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-40 object-cover rounded-tl-lg rounded-tr-lg cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              />
              <h3 className="text-xl font-semibold mt-4 pr-4 pl-4">{cert.name}</h3>
              <p className="text-gray-400 pr-4 pl-4 pb-4">Issued by: {cert.issuer}</p>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <div className="relative">
              <img src={selectedImage} alt="Certificate" className="max-w-full max-h-screen rounded-lg" />
              <button
                className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-lg w-6 h-6 flex items-center justify-center"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
