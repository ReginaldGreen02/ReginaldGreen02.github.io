// src/App.js

import React from 'react';
import Dropdown from './Dropdown';
import PortfolioLanding from './PortfolioLanding';

function App() {
  return (
    <div className="App">
      <header className="p-4 bg-gray-200">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Website</h1>
          <Dropdown />
        </nav>
      </header>
      <PortfolioLanding />
    </div>
  );
}

export default App;
