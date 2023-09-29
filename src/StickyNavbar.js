// src/components/StickyNavbar.js

import React from 'react';
import Dropdown from './Dropdown'; // Import your Dropdown component

function StickyNavbar() {
  return (
    <nav className="sticky top-0 bg-transparent p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Website</h1>
        <Dropdown />
      </div>
    </nav>
  );
}

export default StickyNavbar;
