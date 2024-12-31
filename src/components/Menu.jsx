import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-6">
        <li>
          <Link to="/home" className="hover:text-cyan-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-cyan-400">
            Services
          </Link>
        </li>
        <li>
          <Link to="/map" className="hover:text-cyan-400">
            Location
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
