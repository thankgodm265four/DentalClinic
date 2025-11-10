import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.ibb.co/67YB0WbG/gettyimages-1486369860-612x612.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Your Smile, Our Passion</h1>
          <p className="text-xl mb-8">Providing comprehensive and compassionate dental care for the whole family.</p>
          <a href="#appointment" className="bg-brand-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
