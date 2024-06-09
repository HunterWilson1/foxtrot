import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col items-center p-4 text-center">
      <h2 className="text-2xl font-bold text-lightOrange mb-4">Contact</h2>
      <p className="mb-4">Feel free to reach out to me for any videography services or inquiries. I look forward to working with you!</p>
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Name</h3>
          <p>John Doe</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Email</h3>
          <p>johndoe@example.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="flex justify-center mt-4">
          <a href="https://www.instagram.com/your-instagram-handle" className="mx-2 text-lightOrange hover:text-lightBlue" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-handle" className="mx-2 text-lightOrange hover:text-lightBlue" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
