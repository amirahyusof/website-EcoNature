import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-lime-400" />
              <span className="text-xl font-bold">EcoNature</span>
            </div>
            <p className="text-stone-400">
              Creating a sustainable future, one step at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-stone-400 hover:text-lime-400 transition-colors">Home</a>
              <a href="#about" className="block text-stone-400 hover:text-lime-400 transition-colors">About</a>
              <a href="#services" className="block text-stone-400 hover:text-lime-400 transition-colors">Services</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-stone-400 hover:text-lime-400 transition-colors">Blog</a>
              <a href="#" className="block text-stone-400 hover:text-lime-400 transition-colors">Guides</a>
              <a href="#" className="block text-stone-400 hover:text-lime-400 transition-colors">Community</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-stone-400">
              <p>info@econature.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
          <p>&copy; 2025 EcoNature. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;