import React, { useState } from 'react';
import { MAIN_SERVICES, OTHER_SERVICES_DETAILED } from '../constants';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  return (
    <div 
      className="bg-bg-primary p-8 rounded-xl shadow-lg border border-border-color text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer flex flex-col items-center"
      onClick={() => onSelect(service)}
    >
      <div className="mb-6">
        {React.isValidElement(service.icon) && React.cloneElement(service.icon)}
      </div>
      <h3 className="text-2xl font-bold text-text-headings mb-3">{service.name}</h3>
      <p className="text-text-body flex-grow">{service.description}</p>
      <button className="mt-6 font-semibold text-brand-accent hover:underline focus:outline-none">
        Learn More &rarr;
      </button>
    </div>
  );
};

interface ServicesProps {
    onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="services" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-accent font-bold mb-2 text-lg">Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-text-headings">What We Offer</h2>
          <p className="text-text-body mt-4 text-lg max-w-2xl mx-auto">
            We provide a wide range of dental services to ensure you have a healthy and beautiful smile.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MAIN_SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} onSelect={onSelectService} />
          ))}
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-text-headings mb-4">Other Dental Treatments</h3>
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showMore ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto p-8 bg-bg-primary rounded-lg shadow-inner border border-border-color">
                    {OTHER_SERVICES_DETAILED.map(service => (
                        <button 
                            key={service.name} 
                            onClick={() => onSelectService(service)}
                            className="font-medium text-text-body hover:text-brand-accent transition-colors text-left"
                        >
                            &bull; {service.name}
                        </button>
                    ))}
                </div>
            </div>
            <button
                onClick={() => setShowMore(!showMore)}
                className="mt-8 bg-brand-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
                {showMore ? 'View Less' : 'View More Treatments'}
            </button>
        </div>

      </div>
    </section>
  );
};

export default Services;