import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Get In Touch</h2>
          <p className="text-text-body mt-2 text-lg">We'd love to hear from you. Contact us for any inquiries.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 text-center">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-bold text-xl mb-2 text-text-headings">Address</h3>
            <p className="text-text-body">123 Dental Lane, Smileville, 45678</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-bold text-xl mb-2 text-text-headings">Phone</h3>
            <p className="text-text-body">(123) 456-7890</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-bold text-xl mb-2 text-text-headings">Email</h3>
            <p className="text-text-body">contact@dentalcare.com</p>
          </div>
           <div className="w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-bold text-xl mb-2 text-text-headings">Working Hours</h3>
            <p className="text-text-body">Mon - Fri: 9am - 6pm</p>
            <p className="text-text-body">Sat: 10am - 4pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
