import React from 'react';
import { Leaf } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Why Choose EcoNature?
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            We're more than just an eco-friendly service – we're a movement dedicated to sustainable living and environmental restoration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-72 h-72 gradient-green rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-linear-to-br from-green-100 to-lime-100 rounded-3xl p-12 shadow-xl">
                <Leaf className="w-32 h-32 text-green-700 mx-auto animate-float" />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 gradient-green rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Proven Impact</h3>
                <p className="text-stone-600">
                  Track your environmental contribution with transparent metrics and real-time updates on our collective impact.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 gradient-green rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Global Reach</h3>
                <p className="text-stone-600">
                  Our initiatives span across continents, bringing sustainable solutions to communities worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 gradient-green rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Expert Team</h3>
                <p className="text-stone-600">
                  Work with environmental scientists, sustainability experts, and passionate advocates for change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;