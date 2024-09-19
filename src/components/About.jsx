import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ParticlesBackground from './Particles'; // Import the Particles component

const About = () => {
  const [animateText, setAnimateText] = useState(false);
  const controls = useAnimation();

  // Function to toggle animation
  const toggleAnimation = () => {
    setAnimateText(prev => !prev);
  };

  // Effect to handle animations
  React.useEffect(() => {
    if (animateText) {
      controls.start({
        opacity: [1, 0.5, 1],
        y: [0, -10, 0],
        transition: { duration: 2, repeat: Infinity, repeatType: 'loop' },
      });
    } else {
      controls.stop();
      controls.set({ opacity: 1, y: 0 });
    }
  }, [animateText, controls]);

  return (
    <section className="relative w-full px-10 py-20 bg-[#A5B4FB] border-black border-b-2 overflow-hidden">
      {/* Particles background */}
      <ParticlesBackground />

      {/* Content above the particles */}
      <h2 className="relative text-5xl font-bold mb-8 text-center font-[Bebas Neue] text-[#1A1A1A] z-10">
        About Me
      </h2>

      {/* Reduced width wrapper */}
      <div className="relative max-w-3xl mx-auto z-10">
        <motion.p
          animate={controls}
          className="text-lg font-mono font-light text-[#1A1A1A]"
        >
          I am a passionate web developer specializing in building and designing modern web applications with the MERN stack. My expertise also includes Linux, C programming, and more.
        </motion.p>
        <motion.p
          animate={controls}
          className="text-lg py-10 font-mono font-light text-[#1A1A1A]"
        >
          I began my journey in web development with a fascination for how technology can transform ideas into reality. Over the years, I've honed my skills in building responsive and user-friendly websites and applications. My expertise spans across front-end and back-end development, with a particular focus on crafting seamless user interfaces and optimizing performance.
        </motion.p>
        <motion.p
          animate={controls}
          className="text-lg font-mono font-light text-[#1A1A1A]"
        >
          When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that challenge my creativity. I'm always eager to learn new technologies and stay updated with industry advancements.
        </motion.p>
        <motion.p
          animate={controls}
          className="text-lg font-mono font-light text-[#1A1A1A]"
        >
          I'm committed to leveraging my skills to deliver high-quality solutions and contribute to projects that make a difference. If you're interested in collaborating or just want to chat about tech, feel free to reach out!
        </motion.p>
      </div>

      {/* Button to toggle text animation */}
      <div className="relative mt-10 z-10 flex justify-end pr-10">
  <button
    onClick={toggleAnimation}
    className="bg-[white] text-[#1A1A1A] p-2 rounded-lg border-4 border-black shadow-[8px_8px_0px_#000000] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 font-bold"
  >
    {animateText ? 'Stop' : 'Move'}
  </button>
</div>


    </section>
  );
};

export default About;
