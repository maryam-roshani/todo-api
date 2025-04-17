import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 px-4 py-3">
      <div className="mx-auto flex justify-between items-center">
        {/* Left: Icon + Title */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-clock text-xl" />
          <h1 className="text-xl font-semibold">My App</h1>
        </div>

        {/* Hamburger - mobile only */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Right: Buttons */}
        <div className={`flex-col md:flex-row md:flex items-center md:space-x-4 space-y-2 md:space-y-0 mt-3 md:mt-0 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition">Login</button>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
