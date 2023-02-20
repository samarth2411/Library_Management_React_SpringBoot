import React from 'react';
import './App.css';
import { Footer } from './layout/NavbarAndFooter/Footer';
import { Carousel } from './layout/NavbarAndFooter/HomePage/components/Carousel';
import { HomePage } from './layout/NavbarAndFooter/HomePage/HomePage';
import { Navbar } from './layout/NavbarAndFooter/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>


  );
}

