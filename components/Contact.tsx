import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-teal-dark">Get In Touch & Visit Us</h2>
          <p className="text-gray-600 mt-2">Have a question or need directions? We're here to help.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-teal-dark border-b-2 border-brand-teal pb-2">Contact Details</h3>
              <div className="flex items-start space-x-4">
                <p className="font-semibold w-28">Phone:</p>
                <div className="text-gray-700">
                    <a href="tel:+2348105001567" className="hover:text-brand-teal block">+234 810 5001 567 (WhatsApp)</a>
                    <a href="tel:+2349056288938" className="hover:text-brand-teal block">+234 905 6288 938 (Call)</a>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <p className="font-semibold w-28">Email:</p>
                <a href="mailto:contact@wedc.com.ng" className="text-gray-700 hover:text-brand-teal">contact@wedc.com.ng</a>
              </div>
               <div className="flex items-start space-x-4">
                <p className="font-semibold w-28">Address:</p>
                <p className="text-gray-700">Achiever Plaza Idi Ayan, Ilesa, Osun State</p>
              </div>
              <div className="flex items-start space-x-4">
                <p className="font-semibold w-28">Working Hours:</p>
                <div className="text-gray-700">
                    <p>Mon–Sat: 8am–6pm</p>
                    <p>Sun: 12pm–6pm</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-6 pt-8 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200 md:pl-10">
                <h3 className="text-xl font-bold text-brand-teal-dark mb-2">Quick Contact</h3>
                <a href="https://wa.me/2348105001567" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs text-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                    Chat on WhatsApp
                </a>
                <a href="mailto:contact@wedc.com.ng" className="w-full max-w-xs text-center bg-brand-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-teal-dark transition-all duration-300 transform hover:scale-105">
                    Send an Email
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;