import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      {/* Photo of smiling African dental professionals. */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1920x1080/?african-dentist-team,smile')" }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">Your Smile, Our Priority.</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          At White Emerald Dental Care, we specialize in beautifying smiles and maintaining your dental health.
        </p>
        <a
          href="#appointment"
          className="bg-brand-teal text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-brand-teal-dark transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
};

export default Hero;