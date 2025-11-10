import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="https://i.ibb.co/BvsBjnM/image-1.webp" alt="Dental Clinic Interior" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-text-headings mb-4">About DentalCare Clinic</h2>
          <p className="text-text-body mb-4">
            Welcome to DentalCare, where we combine state-of-the-art technology with a personal touch to provide the best dental care possible. Our mission is to help our patients achieve and maintain beautiful, healthy smiles for a lifetime.
          </p>
          <p className="text-text-body">
            Our experienced team is dedicated to creating a comfortable and relaxing atmosphere for every patient. From routine check-ups to complex procedures, we are here to listen to your needs and provide tailored treatment plans.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
