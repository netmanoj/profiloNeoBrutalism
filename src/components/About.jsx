import React from 'react';

const About = () => {
  return (
    <section className="w-full px-10 py-20 bg-[#A5B4FB] border-black border-b-2">
      <h2 className="text-5xl font-bold mb-8 text-center font-[Bebas Neue] text-[#1A1A1A]">
        About Me
      </h2>

      {/* Reduced width wrapper */}
      <div className="max-w-4xl mx-auto">
        <p className="text-lg font-mono font-light text-[#1A1A1A]">
          I am a passionate web developer specializing in building and designing modern web applications with the MERN stack. My expertise also includes Linux, C programming, and more.
        </p>
        <p className="text-lg py-10 font-mono font-light text-[#1A1A1A]">
          I began my journey in web development with a fascination for how technology can transform ideas into reality. Over the years, I've honed my skills in building responsive and user-friendly websites and applications. My expertise spans across front-end and back-end development, with a particular focus on crafting seamless user interfaces and optimizing performance.
        </p>
        <p className="text-lg font-mono font-light text-[#1A1A1A]">
          When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or working on personal projects that challenge my creativity. I'm always eager to learn new technologies and stay updated with industry advancements.
        </p>
        <p className="text-lg font-mono font-light text-[#1A1A1A]">
          I'm committed to leveraging my skills to deliver high-quality solutions and contribute to projects that make a difference. If you're interested in collaborating or just want to chat about tech, feel free to reach out!
        </p>
      </div>
    </section>
  );
};

export default About;
