import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaRegImage, FaImage } from 'react-icons/fa'; // Import icons

const Hero = () => {
  // State to manage the background image
  const [backgroundImage, setBackgroundImage] = useState('/images/back.png');

  // Function to toggle the background image
  const toggleBackgroundImage = () => {
    setBackgroundImage(prevImage =>
      prevImage === '/images/back.png' ? '/images/back1.png' : '/images/back.png'
    );
  };

  // Determine icon color based on background image
  const iconColor = backgroundImage === '/images/back.png' ? '#00FFFF' : 'white'; // Light blue for 'back.png'

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center border-black border-b-2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shape crystal1"></div>
        <div className="shape crystal2"></div>
        <div className="shape crystal3"></div>
        <div className="shape crystal4"></div>
        <div className="shape crystal5"></div>
        <div className="shape circle1"></div>
        <div className="shape circle2"></div>
        <div className="shape triangle1"></div>
        <div className="shape triangle2"></div>
        <div className="shape triangle3"></div>
      </div>

      {/* Browser-like Box */}
      <div className="relative z-10 w-[90%] md:w-[500px] border-4 border-black bg-white rounded-lg hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-shadow duration-300 flex flex-col items-stretch">
        {/* Browser Window Top Bar */}
        <div className="w-full h-8 bg-gray-200 border-b-2 border-black flex justify-between items-center px-4">
          {/* Browser Window Controls */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
          </div>
          <div className="text-sm text-black font-mono">Portfolio - Manoj Adhikari</div>
        </div>

        {/* Main Content Box */}
        <div className="flex items-center p-8">
          {/* Profile Photo */}
          <div className="w-32 h-32 rounded-full border-4 border-black bg-gray-200 shadow-[8px_8px_0_rgba(0,0,0,1)] overflow-hidden mr-6">
            <img
              src="/images/profile.png" // Replace with your profile photo URL
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Box */}
          <div className="flex flex-col">
            {/* Fixed Position for "Manoj Adhikari" */}
            <div className="fixed-text">
              <h1 className="text-4xl mb-6 text-black font-[Anton]">Manoj Adhikari</h1>
            </div>

            {/* Typewriter Text */}
            <div className="dynamic-text h-10">
              <Typewriter
                options={{
                  strings: ["a Web Developer_", "a Full Stack Developer_", "a Linux Enthusiast_"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button to change background image with icons */}
      <button
        onClick={toggleBackgroundImage}
        className="absolute bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle Background Image"
      >
        {backgroundImage === '/images/back.png' ? (
          <FaImage size={24} color={iconColor} /> // Icon for 'back.png'
        ) : (
          <FaRegImage size={24} color={iconColor} /> // Icon for 'back1.png'
        )}
      </button>
    </section>
  );
};

export default Hero;
