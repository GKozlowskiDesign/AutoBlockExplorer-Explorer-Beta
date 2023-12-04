"use client"



import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import SplineModel from './components/SplineModel';
import Modal from './components/Modal';
import Social from './components/Social';
import Navigation from './components/Navigation';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      
      if (loader) {
        setTimeout(() => {
          loader.remove();
          setLoading(false);
        }, 2000);
      }
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-gray-950 to-blue-900">

      {loading ? (
        <div id="globalLoader">
          <img src="/assets/AutoBlockLogo.png" className="animate-pulse flex space-x-4" alt="" />
        </div>
      ) : (
        <>
          <div>
          </div>
          
          <div className='bg-transparent'>
            <Navigation />
            <Hero />
            <Modal />
            <SplineModel />
            <About />
            <Social />
            <Footer />
          </div>
        </>
      )}

    </div>
  );
}