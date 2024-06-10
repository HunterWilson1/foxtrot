import React from 'react';
import { FaInstagram, FaLinkedin, FaVimeo, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <h2 className="text-2xl font-bold text-lightOrange mb-4">Contact</h2>
      <p className="mb-4">Feel free to reach out to me for videography or photography services! I look forward to working with you!</p>
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Name</h3>
          <p>Emma Holston</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Email</h3>
          <p>ehvideo20@gmail.com</p>
        </div>
        <div className="flex justify-center mt-4">
          <a href="https://www.instagram.com/emma_for_reel/" className="mx-2 text-lightOrange hover:text-lightBlue" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} />
          </a>
          <a href="https://www.linkedin.com/in/emmaholston/" className="mx-2 text-lightOrange hover:text-lightBlue" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
          <a href="https://vimeo.com/emmaholston" className="mx-2 text-lightOrange hover:text-lightBlue" target="_blank" rel="noopener noreferrer">
            <FaVimeo size={32} />
          </a>
          <a href="https://vimeo.com/emmaholston" className="mx-2 text-lightOrange hover:text-lightBlue" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
