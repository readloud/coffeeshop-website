import React from 'react'
import { ArrowRight, Coffee } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-cream">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6 animate-float">
            <Coffee size={64} className="text-coffee-400" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Crafting Perfect
            <span className="block text-coffee-400">Coffee Moments</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the finest artisanal coffee in a cozy atmosphere. 
            Where every cup tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-3 bg-coffee-600 text-white rounded-full font-semibold hover:bg-coffee-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Menu
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#location"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-cream text-cream rounded-full font-semibold hover:bg-cream hover:text-brown transition-all duration-300"
            >
              Find Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero