"use client"



import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Spline from './components/SplineModel';
import Modal from './components/Modal';
import Navigation from './components/Navigation';
import Image from 'next/image';
import X2Earn from './components/X2Earn';

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
          <Image src="/assets/ABExplorer.png" width={100} height={100} className="animate-pulse flex space-x-4" alt="ABExplorer" />
        </div>
      ) : (
        <>
          <div>
          </div>
          
          <div className='bg-transparent'>
            <Navigation />
            <Hero />
            <Modal />
            <About />
            <X2Earn />
            <Spline />
            <Footer />
          </div>
        </>
      )}

    </div>
  );
}