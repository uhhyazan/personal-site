import React from 'react';
import OutlineButton from '../../Button/outlinebutton';

interface ProjectCardProps {
    id: number;
    title: string;
    imageUrl: string;
    githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, imageUrl, githubUrl }) => {
  return (
    <>
        <div key={id} className="bg-white rounded-lg shadow-md p-4">
          <img src={imageUrl} alt={title} className="w-full rounded-lg" />
          <h2 className="mt-2 text-xl font-bold text-stone-900">{title}</h2>
          <OutlineButton buttonText='View on GitHub' href={githubUrl} /> 
          
        </div>
    </>
  );
};

export default ProjectCard;