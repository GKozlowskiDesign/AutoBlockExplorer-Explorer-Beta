import Header from './components/Header';
import Services from './components/Services'
import About from './components/About';
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Footer from './components/Footer';



export default function Home() {
  return (

    <div className="w-full overflow-hidden">
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
          <Services />
          <Gallery />
  
          <Footer />
        </div>
      </div>
    </div>

  )
}