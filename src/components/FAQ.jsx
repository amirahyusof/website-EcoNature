import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      question: "How can I start living more sustainably?",
      answer: "Begin with small changes like reducing plastic use, conserving energy, and supporting local eco-friendly businesses. Our consultation service can provide personalized guidance."
    },
    {
      question: "What are your reforestation programs?",
      answer: "We partner with communities worldwide to plant native trees, restore ecosystems, and create sustainable forestry practices. Every subscription contributes to our planting initiatives."
    },
    {
      question: "Are your services available globally?",
      answer: "Yes! We operate in over 50 countries and are continuously expanding our reach to help communities embrace sustainable practices."
    },
    {
      question: "How do I track my environmental impact?",
      answer: "Our platform provides detailed analytics and reports showing your contribution to carbon reduction, trees planted, and water conserved."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-stone-600">
            Everything you need to know about our services and mission.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-stone-200 rounded-2xl overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center bg-white hover:bg-stone-50 transition-colors text-left"
                onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
              >
                <span className="text-lg font-semibold text-green-800">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-green-700 transition-transform ${
                    activeAccordion === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeAccordion === index && (
                <div className="px-6 py-5 bg-stone-50 border-t-2 border-stone-200 animate-slide-down">
                  <p className="text-stone-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;