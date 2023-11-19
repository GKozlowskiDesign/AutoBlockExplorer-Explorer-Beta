import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Footer from './components/Footer';
import Modal from './components/Modal';




export default function Home() {
  return (

    <div className="w-full overflow-hidden bg-black">
      <div className="w-full h-4 bg-blue-500 opactiy-80" />

      <div>
      <Header />
      </div>
      
      <div>
      <Hero />
      </div>

      <div>
        <div>
          <About />
          <Modal />
          <Gallery />
  
        
        </div>
      
      </div>
      <div>
      <Footer />
      </div>
    </div>

  )
}