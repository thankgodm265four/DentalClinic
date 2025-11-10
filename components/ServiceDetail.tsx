import React from 'react';
import type { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onBook: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onBook }) => {
  return (
    <section className="bg-bg-primary pt-32 pb-16 md:pt-40 md:pb-24 animate-fade-in-down">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button onClick={onBack} className="flex items-center text-text-body font-semibold mb-8 hover:text-brand-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Services
          </button>

          {/* Service Header */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-text-headings mb-4">{service.name}</h1>
          <p className="text-lg text-text-body mb-8">{service.detailedDescription}</p>

          {/* Service Image */}
          <img 
            src={service.imageUrl}
            alt={service.name}
            className="rounded-2xl shadow-xl w-full h-auto object-cover max-h-[450px] mb-12"
          />

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
                <h2 className="text-3xl font-bold text-text-headings mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-brand-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-text-body text-lg">{benefit}</span>
                    </li>
                ))}
                </ul>
            </div>
            
            {/* CTA Block */}
            <div className="bg-brand-accent-light p-8 rounded-xl border border-border-color text-center">
                <h3 className="text-2xl font-bold text-text-headings mb-2">Ready for a Brighter Smile?</h3>
                <p className="text-text-body mb-6">
                    Let's get you started on the path to the perfect smile. Schedule your consultation today.
                </p>
                <button
                    onClick={onBook}
                    className="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
                >
                    Book This Service
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;