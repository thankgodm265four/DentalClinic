import React from 'react';
import { MAIN_SERVICES, OTHER_SERVICES_DETAILED } from '../constants';
import type { Service } from '../types';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

const ServiceCard: React.FC<{ service: Service; onClick: () => void }> = ({ service, onClick }) => (
  <div 
    className="bg-white p-8 rounded-lg shadow-lg text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200"
    onClick={onClick}
  >
    <div className="flex justify-center mb-4">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-text-headings mb-2">{service.name}</h3>
    <p className="text-text-body">{service.description}</p>
  </div>
);

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Our Services</h2>
          <p className="text-text-body mt-2 text-lg">We offer a wide range of dental services to meet your needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {MAIN_SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} onClick={() => onSelectService(service)} />
          ))}
        </div>
        <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-text-headings">Other Specialized Treatments</h3>
        </div>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {OTHER_SERVICES_DETAILED.map((service, index) => (
            <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform hover:-translate-y-1 transition-transform duration-200 border border-gray-200 flex flex-col items-center justify-center"
                onClick={() => onSelectService(service)}
            >
                <div className="flex justify-center mb-3">
                    {service.icon}
                </div>
                <h4 className="font-semibold text-text-headings text-center">{service.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;