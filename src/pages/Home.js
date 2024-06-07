import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-foxOrange mb-4">Portfolio</h2>
        <Gallery />
        <Services />
      </div>
    </div>
  );
};

export default Home;
