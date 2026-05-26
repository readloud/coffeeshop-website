import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import LocationContact from './components/LocationContact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  useEffect(() => {
    // Set page title for SEO
    document.title = "Java Reserve | Premium Coffee Experience"
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <LocationContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App