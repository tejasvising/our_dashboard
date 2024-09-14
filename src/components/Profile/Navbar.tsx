import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  // props needed for Navbar
}

const Navbar: React.FC<NavbarProps> = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <nav className="mb-8 relative">
      <div className="flex justify-between">
        <h1 className="text-2xl hover:underline content-center text-white">
          <Link to="/">Profile Dashboard</Link>
        </h1>
        <div className="lg:flex hidden">
          {/* Buttons for larger screens */}
          <Link to="/create-new-graph">
            <button className="bg-blue-300 text-blue-900 px-4 py-2 rounded-md mr-2 hover:underline">
              Create New Graph
            </button>
          </Link>
          <Link to="/">
            <button className="bg-blue-300 text-blue-900 px-4 py-2 rounded-md mr-2 hover:underline">
              Share Graph
            </button>
          </Link>
          <Link to="/">
            <button className="bg-blue-300 text-blue-900 px-4 py-2 rounded-md hover:underline">
              Upload Papers
            </button>
          </Link>
        </div>
        <button
          className="lg:hidden text-2xl text-white px-4 rounded-md"
          onClick={toggleNavMenu}
        >
          {showNavMenu ? "✕" : "☰"}
        </button>
      </div>
      {/* Menu for smaller screens */}
      {showNavMenu && (
        <div className="lg:hidden absolute top-full right-0 p-4 bg-blue-900 rounded-lg border border-solid border-white">
          <ul>
            <li>
              <Link
                to="/create-new-graph"
                className="text-white hover:underline"
              >
                Create New Graph
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:underline">
                Share Graph
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white hover:underline">
                Upload Papers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
