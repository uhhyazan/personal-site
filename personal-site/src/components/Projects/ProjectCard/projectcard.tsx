import React from 'react';

interface ProjectCardProps {
    id: number;
    title: string;
    imageUrl: string;
    githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, imageUrl, githubUrl }) => {
  return (
    <>
        <div key={id} className="bg-gray-100 rounded-lg shadow-md p-4">
          <img src={imageUrl} alt={title} className="w-full rounded-lg" />
          <h2 className="mt-2 text-xl font-bold text-gray-800">{title}</h2>
          <a href={githubUrl} className="mt-2 block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            View on GitHub
          </a>
        </div>
    </>
  );
};

export default ProjectCard;