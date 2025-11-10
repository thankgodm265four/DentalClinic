import React, { useState } from 'react';
import { MAIN_SERVICES, OTHER_SERVICES } from '../constants';
import type { Service } from '../types';

interface ServiceCardProps {
    service: Service;
    onSelect: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => (
  <div className="bg-bg-primary p-8 rounded-xl border border-border-color text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-text-headings mb-2">{service.name}</h3>
    <p className="text-text-body mb-4 flex-grow">{service.description}</p>
    <button onClick={() => onSelect(service)} className="font-bold text-brand-accent hover:underline text-left">
        Learn More &rarr;
    </button>
  </div>
);

interface ServicesProps {
    onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [showOtherServices, setShowOtherServices] = useState(false);

  return (
    <section id="services" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Our Services</h2>
          <p className="text-text-body mt-2 text-lg max-w-2xl mx-auto">Comprehensive dental solutions to keep your smile healthy and bright for years to come.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MAIN_SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} onSelect={onSelectService} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => setShowOtherServices(!showOtherServices)}
            className="bg-brand-accent-light text-brand-accent px-8 py-3 rounded-lg font-bold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-sm border border-border-color"
          >
            {showOtherServices ? 'View Less Treatments' : 'View More Treatments'}
          </button>
        </div>
        
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showOtherServices ? 'max-h-[500px] opacity-100 mt-16' : 'max-h-0 opacity-0'}`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-headings mb-6">Other Dental Treatments</h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 max-w-4xl mx-auto text-text-body">
              {OTHER_SERVICES.map((treatment) => (
                <li key={treatment} className="flex items-center justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;