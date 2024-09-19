import React from "react";
import { Howl } from 'howler';
import './Skills.css';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiLinux,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 size={50} /> },
    { name: "CSS", icon: <SiCss3 size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },
    { name: "GIT", icon: <SiGit size={50} /> },
    { name: "React", icon: <SiReact size={50} /> },
    { name: "Node.js", icon: <SiNodedotjs size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Linux", icon: <SiLinux size={50} /> },
    { name: "C Programming", icon: <SiC size={50} /> },
    { name: "GitHub", icon: <SiGithub size={50} /> },
  ];

  // Initialize Howl with bounce sound
  const sound = new Howl({
    src: ['sounds/bounce.wav'], // path to your bounce.wav file
    volume: 1.0,
  });

  const handlePlaySound = () => {
    sound.play();
  };

  return (
    <section className="w-full h-auto py-12 bg-white flex flex-col items-center border-black border-b-2 relative overflow-hidden">
      <h2 className="text-4xl mb-8 font-bold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 z-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 border-black border-2 bg-[#A6FAFF] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            onTouchStart={handlePlaySound} // Trigger sound on touch
            onClick={handlePlaySound}      // Trigger sound on click
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl">{skill.name}</h3>
          </div>
        ))}
      </div>

      {/* Flying shapes (crystals, circles, triangles, etc.) in the background */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none overflow-hidden z-0">
        <div className="animate-fly-shape w-10 h-10 bg-[#FFA6F6] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] absolute top-10 left-20 rounded-full"></div>
        <div className="animate-fly-shape w-12 h-12 bg-[#79F7FF] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] absolute top-40 right-32 rounded-full"></div>
        <div className="animate-fly-shape w-16 h-16 bg-[#FF7F6F] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] absolute bottom-20 left-40 clip-path-crystal"></div>
        <div className="animate-fly-shape w-14 h-14 bg-[#FFD966] border-black border-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] absolute bottom-32 right-48 clip-path-triangle"></div>
      </div>
    </section>
  );
};

export default Skills;
