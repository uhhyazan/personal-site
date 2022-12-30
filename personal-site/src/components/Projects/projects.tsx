import React from 'react';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Project 1',
      imageUrl: '/project1.png',
      githubUrl: 'https://github.com/user/project1',
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: '/project2.png',
      githubUrl: 'https://github.com/user/project2',
    },
    {
      id: 3,
      title: 'Project 3',
      imageUrl: '/project3.png',
      githubUrl: 'https://github.com/user/project3',
    },
    // additional projects here
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-100 rounded-lg shadow-md p-4">
          <img src={project.imageUrl} alt={project.title} className="w-full rounded-lg" />
          <h2 className="mt-2 text-xl font-bold text-gray-800">{project.title}</h2>
          <a href={project.githubUrl} className="mt-2 block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View on GitHub
          </a>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Projects;
