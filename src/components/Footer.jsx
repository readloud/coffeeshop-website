import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown text-cream py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8" />
              <span className="font-playfair text-2xl font-bold">Java Reserve</span>
            </div>
            <p className="text-cream/80 text-sm">
              Crafting perfect coffee moments since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-cream/80 hover:text-coffee-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream/80 hover:text-coffee-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#menu" className="text-cream/80 hover:text-coffee-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-cream/80 hover:text-coffee-400 transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-cream/80">
              <li>Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta</li>
              <li>+62817623939</li>
              <li>hello@javareserve.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-cream/80 mb-3">Get updates on special offers!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg text-brown"
              />
              <button className="bg-coffee-600 px-4 py-2 rounded-r-lg hover:bg-coffee-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="text-cream/80 text-sm flex items-center justify-center">
            Made with
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            by Java Reserve © 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
