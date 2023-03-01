import React from 'react';
import OutlineButton from '../../Button/outlinebutton';

interface ProjectCardProps {
    title: string
    siteUrl: string
    imageUrl: string
    githubUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, githubUrl, siteUrl }) => {
  return (
    <>
        <div className="bg-white rounded-lg shadow-md p-4">
          <a href={siteUrl} ><img src={imageUrl} alt={title} className="w-full rounded-lg" /></a>
          <h2 className="mt-2 text-xl font-bold text-stone-900">{title}</h2>
          <OutlineButton buttonText='View on GitHub' href={githubUrl} /> 
        </div>
    </>
  );
};

export default ProjectCard;