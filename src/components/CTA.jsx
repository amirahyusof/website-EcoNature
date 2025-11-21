import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 gradient-earth relative overflow-hidden">
      <div className="absolute inset-0 leaf-pattern opacity-30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of eco-warriors creating a sustainable future. Start your journey today.
        </p>
        <button className="bg-white text-green-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-lime-100 transition-all transform hover:scale-105 inline-flex items-center gap-2">
          Get Started Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;