import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/">
          <a className="text-white font-bold text-xl">House Rental</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/listings">
            <a className="text-white hover:text-gray-300">Listings</a>
          </Link>
          <Link href="/register">
            <a className="text-white hover:text-gray-300">Register</a>
          </Link>
          <Link href="/login">
            <a className="text-white hover:text-gray-300">Login</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;