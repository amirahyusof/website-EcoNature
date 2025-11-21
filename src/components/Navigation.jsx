import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-green rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-green-800">EcoNature</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-stone-700 hover:text-green-700 transition-colors">Home</a>
            <a href="#about" className="text-stone-700 hover:text-green-700 transition-colors">About</a>
            <a href="#services" className="text-stone-700 hover:text-green-700 transition-colors">Services</a>
            <a href="#faq" className="text-stone-700 hover:text-green-700 transition-colors">FAQ</a>
            <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-stone-700 hover:text-green-700 transition-colors">Home</a>
              <a href="#about" className="text-stone-700 hover:text-green-700 transition-colors">About</a>
              <a href="#services" className="text-stone-700 hover:text-green-700 transition-colors">Services</a>
              <a href="#faq" className="text-stone-700 hover:text-green-700 transition-colors">FAQ</a>
              <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;