import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // load tsParticles instance
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
  };

  return <Particles init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
