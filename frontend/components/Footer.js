import React from 'react';
import Footer from './Footer';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        &copy; {new Date().getFullYear()} House Rental Platform
      </div>
    </footer>
  );
};

export default Footer;