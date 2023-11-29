"use client"


import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import SplineModel from './components/SplineModel';
import Modal from './components/Modal';
import Social from './components/Social';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      
      if (loader) {
        setTimeout(() => {
          loader.remove();
          setLoading(false);
        }, 1300);
      }
    }
  }, []);

  return (
    <div className="w-full bg-transparent">
      {loading ? (
        <div id="globalLoader">
          <img src="/assets/AutoBlockLogo.png" className="animate-pulse flex space-x-4" alt="" />
        </div>
      ) : (
        <>
          <div>
          </div>
          
          <div className='bg-blue-900'>
          <Header />
            <Hero />
          </div>

          <div>
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