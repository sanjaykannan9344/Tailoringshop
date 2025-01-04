import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  HiPhone,
  HiOutlineLocationMarker,
  HiOutlineHome,
  HiArchive,
} from "react-icons/hi";
import { IoQrCodeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-9 ">
        <li>
          <HiOutlineHome />
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
        </li>
        <li>
          <HiArchive />
          <Link to="/services" className="hover:text-cyan-400">
            Services
          </Link>
        </li>
        <li>
          <HiOutlineLocationMarker />
          <Link to="/map" className="hover:text-cyan-400">
            Location
          </Link>
        </li>
        <li>
          <HiPhone />
          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </li>
        <li>
          <IoQrCodeOutline />
          <Link to="/qr" className="hover:text-cyan-400">
            QR
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
