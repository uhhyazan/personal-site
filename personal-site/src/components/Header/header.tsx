import React from 'react';

const Header: React.FC = () => {
  return (
    <section className="px-4 py-2">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center">
          <img
            src="./images/selfportait.jpg"
            alt="Head Shot"
            className="border-full rounded-full h-64 w-64 m-4"
          />
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900">
            Yazan
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-stone-600">
            Full-Stack Software Engineer
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
