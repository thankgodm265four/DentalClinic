import React from 'react';
import { MAIN_SERVICES, OTHER_SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-center items-center mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-teal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-teal-dark">Our Services</h2>
          <p className="text-gray-600 mt-2">Comprehensive dental solutions to keep your smile healthy and bright.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {MAIN_SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-teal-dark mb-6">Other Dental Treatments</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 max-w-4xl mx-auto text-gray-700">
            {OTHER_SERVICES.map((treatment) => (
              <li key={treatment} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {treatment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
