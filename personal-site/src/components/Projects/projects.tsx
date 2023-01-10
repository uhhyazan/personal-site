import React from 'react';
import ProjectCard from './ProjectCard/projectcard';

interface ProjectCard {
  id: number;
  title: string;
  imageUrl: string;
  githubUrl: string;
}

const Projects: React.FC = () => {
  const projects: ProjectCard[] = [
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
  ];

  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard 
          id={project.id} 
          title={project.title} 
          imageUrl={project.imageUrl} 
          githubUrl={project.githubUrl} 
        />
      ))}
      </div>
    </section>
  );
};

export default Projects;
