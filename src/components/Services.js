import React from 'react';

const Services = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-foxOrange mb-4">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">Wedding Videography</h3>
          <p>Capture the most important day of your life with our professional wedding videography services.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">Corporate Videos</h3>
          <p>Enhance your business with high-quality corporate videos that showcase your brand.</p>
        </div>
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-xl font-bold mb-2">Event Coverage</h3>
          <p>From concerts to conferences, we provide comprehensive event coverage to capture every moment.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
