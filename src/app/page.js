import Header from './components/Header';
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Footer from './components/Footer';
import Modal from './components/Modal';




export default function Home() {
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
      
    
   
    </div>

  )
}