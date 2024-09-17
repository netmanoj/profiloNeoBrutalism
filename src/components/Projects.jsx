import React from 'react';

const projects = [
  {
    title: 'Movies Go',
    date: '2024',
    description: 'Movies Database built using TMDB Api',
    image: '/images/movies.png',
    link: 'https://github.com/netmanoj/moviesGo'
  },
  {
    title: 'Groupie Group Chat App',
    date: 'December 2022',
    description: 'This project is a real-time chat application built with React, Redux, Node.js,Firebase featuring live messaging, notifications, and user statuses.',
    image: '/images/group.png',
    link: 'https://real-time-chat-app-5952a.firebaseapp.com/'
  },
  {
    title: 'Find Food App',
    date: 'August 2024',
    description: 'A responsive app developed using React and ContextApi that helps users find and order food. The application features a sleek UI, real-time search functionality, and user-friendly navigation.',
    image: '/images/food.png',
    link: 'https://github.com/netmanoj/findFoodApp'
  },
  {
    title: 'Expense Tracker',
    date: 'August 5th, 2023',
    description: 'An open-source expense tracker application built using React ContextApi. It includes features for tracking expenses, generating reports, and user-friendly error handling.',
    image: '/images/track.png',
    link: 'https://github.com/netmanoj/expenseTrack'
  },
  {
    title: 'Electricity Management System UI',
    date: 'August 5th, 2023',
    description: 'A user interface for managing electricity systems, featuring a responsive design built with modern web technologies. The application includes dashboards for monitoring usage, managing accounts, and generating reports.',
    image: '/images/electric.png',
    link: 'https://github.com/netmanoj/electricShockAdminPanel'
  },
  {
    title: 'Homieforever- Food Delivery System',
    date: '2021',
    description: 'A food delivery web application for ordering food.',
    image: '/images/homie.png',
    link: 'https://github.com/netmanoj/fos'
  }
];

const Projects = () => {
  return (
    <section className="w-full py-12 bg-[#FFF59F] border-black border-b-2">
      <h2 className="text-3xl text-center mb-8 font-bold">Projects</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="w-64 h-80 border-black border-2 rounded-md hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white">
              <a href={project.link} className="block cursor-pointer">
                <article className="w-full h-full">
                  <figure className="w-full h-1/2 border-black border-b-2">
                    <img
                      src={project.image}
                      alt={`Thumbnail for ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                  <div className="px-4 py-3 text-left h-full">
                    <p className="text-sm mb-2">{project.date}</p>
                    <h1 className="text-xl mb-2">{project.title}</h1>
                    <p className="text-xs mb-2 line-clamp-3">{project.description}</p>
                    <strong>Read More</strong>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
