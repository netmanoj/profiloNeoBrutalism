import Typewriter from "typewriter-effect";
import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center border-black border-b-2"
      style={{ backgroundImage: "url('/images/back.png')" }}
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

      <div className="relative z-10 w-100 h-auto border-4 border-black bg-white rounded-lg hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-shadow duration-300 flex items-center p-8">
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
          <h1 className="text-4xl mb-6 text-black font-[Anton]">Manoj Adhikari</h1>
          <h2 className="text-2xl text-black font-mono">
            <Typewriter
              options={{
                strings: ["a Web Developer_", "a Full Stack Developer_", "a Linux Enthusiast_"],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
