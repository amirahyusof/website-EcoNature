import React from 'react';
import { Leaf, Sun, Droplets, Trees } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco Consultation",
      description: "Expert guidance on sustainable living and environmental practices for your home or business."
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Reforestation",
      description: "Join our tree planting initiatives and contribute to restoring natural habitats worldwide."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Conservation",
      description: "Innovative solutions for water management and conservation in your community."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Solar Energy",
      description: "Transition to renewable energy with our comprehensive solar installation services."
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive solutions for sustainable living and environmental conservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient-green rounded-full flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">{service.title}</h3>
              <p className="text-stone-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
