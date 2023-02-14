import React from 'react';
import './App.css';
import { ExploreTopBooks } from './layout/NavbarAndFooter/HomePage/ExploreTopBooks';
import { Navbar } from './layout/NavbarAndFooter/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
    </div>
    

  );
}

export default App;
