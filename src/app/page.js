"use client"

import Header from './components/Header';
import Hero from './components/Hero'
import Footer from './components/Footer';
import About from './components/About';
import SplineModel from './components/SplineModel'

import Modal from './components/Modal';
import { useEffect } from 'react';
import Social from './components/Social';




export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      
      if (loader) {
        // Delay the removal of the loader by 2000 milliseconds (2 seconds)
        setTimeout(() => {
          loader.remove();
        }, 1300);
      }
    }
  }, []);
  
  


  return (

    <div className="w-full bg-transparent">


      <div>
      <Header />
      </div>
      
      <div className='bg-blue-900'>
      <Hero />
      </div>

    
        <div>
        <Modal />
        <SplineModel />

        <About />
        <Social />
        <Footer />
        
        </div>
            <div id="globalLoader">
        <img src="/assets/AutoBlockLogo.png" className="animate-pulse flex space-x-4" alt=""></img>
       </div>
    
   
    </div>

  )
}