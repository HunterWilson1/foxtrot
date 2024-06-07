import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-foxWhite text-foxOrange p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">FoxTrot</h1>
      <nav>
        <Link to="/" className="mx-2 hover:text-foxBrown">Home</Link>
        <Link to="/about" className="mx-2 hover:text-foxBrown">About</Link>
        <Link to="/contact" className="mx-2 hover:text-foxBrown">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
