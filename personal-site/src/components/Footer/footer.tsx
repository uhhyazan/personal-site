import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 p-4 text-center">
      <div>
        <p className="text-md mb-4">
        &copy; {new Date().getFullYear()} Yazan Musleh. All rights reserved.
        </p>
      </div>
    </footer>
)}
        
export default Footer;