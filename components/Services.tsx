import React from 'react';
import { MAIN_SERVICES, OTHER_SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
    <div className="bg-brand-blue-light p-4 rounded-full mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue-dark">Our Services</h2>
          <p className="text-gray-600 mt-2 text-lg">Comprehensive dental solutions to keep your smile healthy and bright.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {MAIN_SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-brand-blue-dark mb-6">Other Dental Treatments</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 max-w-4xl mx-auto text-gray-700">
            {OTHER_SERVICES.map((treatment) => (
              <li key={treatment} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-red mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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