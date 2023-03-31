import React from "react";
import OutlineButton from "../../Button/outlinebutton";

interface ProjectCardProps {
  title: string;
  siteUrl: string;
  imageUrl: string;
  githubUrl: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  githubUrl,
  siteUrl,
  tags,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="relative group">
          <a href={siteUrl}>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-opacity duration-300 pointer-events-none hover:bg-opacity-25">
              <span className="text-white text-xl font-medium z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Visit</span>
            </div>
            <img
              src={imageUrl}
              alt={title}
              className="h-36 w-full object-cover rounded-lg hover:brightness-50 transition-all duration-300"
            />
          </a>
        </div>
        <h2 className="mt-2 text-xl font-bold text-stone-900">{title}</h2>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 rounded-full text-gray-700 text-xs font-medium px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2 flex justify-center">
          <OutlineButton buttonText="GitHub" href={githubUrl} />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
