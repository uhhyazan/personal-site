import React from 'react';

interface Props {
  buttonText: string;
  href: string;
}

const OutlineButton: React.FC<Props> = ({ buttonText, href }) => {
  return (
    <a href={href} className="mt-3 mb-1 relative inline-flex items-center justify-start inline-block px-6 py-2 overflow-hidden font-bold rounded-full group">
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-stone-900 opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-stone-900 transition-colors duration-200 ease-in-out group-hover:text-gray-100">{buttonText}</span>
        <span className="absolute inset-0 border-2 border-black rounded-full"></span>
    </a>
  );
}

export default OutlineButton;