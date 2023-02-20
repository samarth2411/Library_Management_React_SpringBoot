import React from 'react';
import './App.css';
import { Footer } from './layout/NavbarAndFooter/Footer';
import { Carousel } from './layout/NavbarAndFooter/HomePage/Carousel';
import { ExploreTopBooks } from './layout/NavbarAndFooter/HomePage/ExploreTopBooks';
import { Heros } from './layout/NavbarAndFooter/HomePage/Heros';
import { LibraryServices } from './layout/NavbarAndFooter/HomePage/LibraryServices';
import { Navbar } from './layout/NavbarAndFooter/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>


  );
}

export default App;
