
import React from 'react';

interface Props {
  buttonText: string;
  href: string;
}

const GradientButton: React.FC<Props> = ({ buttonText, href }) => {
  return (
    <a href={href} className="relative p-1 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-4 py-2 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-stone-100">{buttonText}</span>
      </span>
    </a>
  );
}

export default GradientButton;
