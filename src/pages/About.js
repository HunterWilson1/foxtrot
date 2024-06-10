import React from 'react';
import emma from '../assets/emma.jpg';

const About = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <h2 className="text-2xl font-bold text-lightOrange mb-4">About Me</h2>
      <img 
        src={emma} 
        alt="Videographer"
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="max-w-prose">
        I am a professional videographer and photographer with a passion for capturing moments and telling stories. I'm a 2024 graduate of The University of Southern Mississippi, gaining a Bachelor of Science degree in Media and Entertainment arts with an emphasis in Video Arts!
      <br>
      </br>
      With years of experience in various types of videography, I strive to deliver high-quality videos that meet the unique needs of each client.
      </p>
    </div>
  );
};

export default About;

