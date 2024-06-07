import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foxWhite text-foxOrange p-4 text-center shadow-inner">
      &copy; {new Date().getFullYear()} FoxTrot
    </footer>
  );
};

export default Footer;
