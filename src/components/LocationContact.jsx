import React from 'react'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

const LocationContact = () => {
  return (
    <section id="location" className="py-20 bg-cream">
      <div className="container-custom">
        <h2 className="section-title">Visit Us</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.85373338031!2d106.82398170232771!3d-6.333959728122749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed71141bbb49%3A0x1f3a8b809315f70a!2sDessert%20Darlings%20by%20Agustina%20Anggri!5e0!3m2!1sid!2sid!4v1778833415417!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Coffee Shop Location"
              className="w-full h-full min-h-[400px]"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brown mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-coffee-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brown">Location</h4>
                    <p className="text-gray-600">Jl. Moch. Kahfi II No.42, RT.2/RW.1, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan<br />Daerah Khusus Ibukota Jakarta 12620</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-coffee-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brown">Phone</h4>
                    <p className="text-gray-600">+62817623939</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-coffee-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brown">Email</h4>
                    <p className="text-gray-600">hello@javareserve.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-coffee-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brown">Opening Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 12:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 12:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-brown mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors transform hover:scale-110">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors transform hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-coffee-600 rounded-full flex items-center justify-center text-white hover:bg-coffee-700 transition-colors transform hover:scale-110">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-brown mb-4">Send us a message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-500"
                ></textarea>
                <button className="w-full bg-coffee-600 text-white py-3 rounded-lg font-semibold hover:bg-coffee-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationContact
