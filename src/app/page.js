"use client"

import Header from './components/Header';
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Footer from './components/Footer';
import About from './components/About';

import Modal from './components/Modal';
import { useEffect } from 'react';




export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      
      if (loader) {
        // Delay the removal of the loader by 2000 milliseconds (2 seconds)
        setTimeout(() => {
          loader.remove();
        }, 1800);
      }
    }
  }, []);
  
  


  return (

    <div className="w-full">


      <div>
      <Header />
      </div>
      
      <div>
      <Hero />
      </div>

    
        <div>
        <About />
        <Modal />

          <Footer />
        
        </div>
            <div id="globalLoader">
        <img src="/assets/AutoBlockLogo.png" alt="" />
      </div>
    
   
    </div>

  )
}