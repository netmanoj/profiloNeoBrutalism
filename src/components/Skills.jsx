import React from "react";
import { SiReact, SiNodedotjs, SiMongodb, SiLinux, SiC, SiHtml5, SiCss3, SiJavascript, SiGit, SiGithub } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <SiHtml5 size={50}/>},
    { name: "CSS", icon: <SiCss3 size={50}/>},
    { name: "Java Script", icon: <SiJavascript size={50}/>},
    { name: "GIT", icon: <SiGit size={50}/>},
    { name: "React", icon: <SiReact size={50} /> },
    { name: "Node.js", icon: <SiNodedotjs size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Linux", icon: <SiLinux size={50} /> },
    { name: "C Programming", icon: <SiC size={50} /> },
    { name: "Git Hub", icon: <SiGithub size={50}/>},
    // Add more skills as needed
  ];

  return (
    <section className="w-full h-auto py-12 bg-white flex flex-col items-center border-black border-b-2">
      <h2 className="text-4xl mb-8 font-bold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-4 border-black border-2 bg-[#A6FAFF] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
