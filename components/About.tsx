import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About <span className="text-brand-blue">White Emerald</span></h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              White Emerald Dental Care is made for you to be smiling all the time. We specialize in beautifying smiles, maintaining your dental health, and helping you improve your appearance. Our experienced and friendly staff takes great pride in keeping your smile beautiful.
            </p>
          </div>
          <div>
            {/* Photo of the friendly, African clinic team. */}
            <img
              src="https://source.unsplash.com/600x400/?african-dentists,clinic,friendly"
              alt="The friendly team at White Emerald Dental Care"
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;