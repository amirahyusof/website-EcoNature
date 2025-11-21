import React from 'react';
import { ArrowRight, ChevronDown, Trees, Droplets, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-earth leaf-pattern overflow-hidden pt-20"
      style={{ backgroundImage: "url('/hero-background.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}  
    >
      <div className="absolute inset-0 bg-black/50 opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Nurture Nature,<br />
            <span className="text-lime-300">Sustain Life</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Join our mission to create a greener, more sustainable future for generations to come. Every action counts.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-green-800 px-4 py-2 cursor-pointer rounded-full font-semibold hover:bg-lime-100 transition-all transform hover:scale-105 flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 cursor-pointer border-white hover:border-lime-200 hover:bg-lime-200 text-white px-4 py-2 rounded-full font-semibold transition-all">
              Learn More
            </button>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-lime-400 border-2 border-white"></div>
              ))}
            </div>
            <p className="text-white/90 text-sm ml-2">
              Join 50,000+ eco-warriors
            </p>
          </div>
        </div>

        <div className="relative animate-on-scroll">
          <div className="relative w-full h-96 animate-float">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center">
                  <Trees className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">2.5M+</h3>
                  <p className="text-stone-600">Trees Planted</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Droplets className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">500M+</h3>
                  <p className="text-stone-600">Liters Water Saved</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-800">15K+</h3>
                  <p className="text-stone-600">Solar Installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;