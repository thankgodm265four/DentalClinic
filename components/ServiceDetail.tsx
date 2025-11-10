import React from 'react';
import type { Service } from '../types';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onBook: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onBook }) => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <button onClick={onBack} className="mb-8 text-brand-accent hover:underline">
          &larr; Back to all services
        </button>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-brand-accent">{service.icon}</div>
              <h1 className="text-4xl font-bold text-text-headings">{service.name}</h1>
            </div>
            <p className="text-lg text-text-body mb-6">{service.detailedDescription}</p>
            <h2 className="text-2xl font-bold text-text-headings mb-4">Key Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-text-body">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3">
             <div className="bg-bg-secondary p-8 rounded-lg shadow-md border border-gray-200 sticky top-24">
                 <h2 className="text-2xl font-bold text-text-headings mb-6 text-center">Ready to transform your smile?</h2>
                 <p className="text-text-body mb-6 text-center">Book an appointment with our experts to discuss this treatment.</p>
                 <button onClick={onBook} className="w-full bg-brand-accent text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                    Book Now
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;