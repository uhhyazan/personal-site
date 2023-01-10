import React from 'react';

const Footer: React.FC = () => {
  return (
  <footer className="bottom-0 p-4 text-center mx-auto">
    <div>
      <p className="text-md mb-4">
        &copy; {new Date().getFullYear()} Yazan Musleh. All rights reserved.
      </p>
    </div>
  </footer>

)}
        
export default Footer;
