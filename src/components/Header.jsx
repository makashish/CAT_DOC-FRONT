import React from 'react';
import logo from '../assets/logo.png'; // Make sure the logo image is placed at src/assets/logo.png

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-3 h-3 rounded-full image-float" />
        <h1 className="text-2xl font-bold ">Click Image/Upload PDF Of Any Language to Make Document</h1>
      </div>
      {/* Add nav or profile links here if needed */}
    </header>
  );
};

export default Header;