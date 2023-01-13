import React from 'react';

const Header: React.FC = () => {
    return (
      <>
      <section>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <img
            src='./images/selfportait.jpg'
            alt="Head Shot"
            className="border-full rounded-full h-64 w-64 m-4"
          />
          <h1 className="text-5xl font-bold text-gray-800">Yazan</h1>
          <h2 className="text-xl font-semibold text-gray-600">Full-Stack Software Engineer</h2>
        </div>
      </div>
      </section>
      </>
    );
  }

export default Header;