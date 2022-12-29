import React from 'react';
import About from '../components/About/about';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';
import Header from '../components/Header/header';
import Projects from '../components/Projects/projects';
import Timeline from '../components/Timeline/timeline';

interface PortfolioProps { }

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className='mx-auto max-w-lg  p-4'>
      <Header />
      <About />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio