// src/components/Dropdown.js

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" onClick={toggleDropdown}>
      <button
        className="text-2xl cursor-pointer focus:outline-none"
        onClick={toggleDropdown}
        onBlur={() => {}} // Prevent closing on blur
      >
        <FaBars />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md"
          id="dropdown-content"
          onClick={(e) => {
            e.stopPropagation(); // Prevent the dropdown from closing when clicking inside
          }}
        >
          <ul>
            <li>
              <ScrollLink
                to="name-occupation"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 cursor-pointer"
              >
                Name and Occupation
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 cursor-pointer"
              >
                Portfolio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="block px-4 py-2 cursor-pointer"
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
