// src/components/Dropdown.js

import React from 'react';
import { FaBars } from 'react-icons/fa';

function Dropdown() {
  return (
    <div className="relative">
      <button
        className="text-2xl cursor-pointer focus:outline-none"
        id="dropdown-button"
      >
        <FaBars />
      </button>
      <div
        className="hidden absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md"
        id="dropdown-content"
      >
        <ul>
          <li>
            <a href="#name-occupation" className="block px-4 py-2">Name and Occupation</a>
          </li>
          <li>
            <a href="#about" className="block px-4 py-2">About</a>
          </li>
          <li>
            <a href="#portfolio" className="block px-4 py-2">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="block px-4 py-2">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
