import React from 'react';
import About from '../components/About/about';
import Contact from '../components/Contact/contact';
import Header from '../components/Header/header';
import Projects from '../components/Projects/projects';

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div>
      <Header />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default Portfolio