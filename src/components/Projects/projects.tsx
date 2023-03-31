import React from 'react';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard/projectcard';

interface ProjectCard {
  title: string
  siteUrl: string
  imageUrl: string
  githubUrl: string
  tags: string[];
}

const Projects: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            siteUrl={project.siteUrl}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
