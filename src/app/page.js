"use client"


import Header from './components/Header';
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Footer from './components/Footer';
import Modal from './components/Modal';
import { useEffect } from 'react';




export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
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
        <Modal />

          <Footer />
        
        </div>
            <div id="globalLoader">
        <img src="/assets/AutoBlockLogo.png" alt="" />
      </div>
    
   
    </div>

  )
}