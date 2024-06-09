import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <h2 className="text-2xl font-bold text-lightOrange mb-4">About Me</h2>
      <img
        src="path/to/your-image.jpg" // Replace with the actual path to the image
        alt="Videographer"
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="max-w-prose">
        I am a professional videographer with a passion for capturing moments and telling stories through video. With years of experience in various types of videography, I strive to deliver high-quality videos that meet the unique needs of each client.
      </p>
    </div>
  );
};

export default About;
