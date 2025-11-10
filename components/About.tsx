import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-teal-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-teal-dark mb-4">About White Emerald</h2>
            <p className="text-gray-700 leading-relaxed">
              White Emerald Dental Care is made for you to be smiling all the time. We specialize in beautifying smiles, maintaining your dental health, and helping you improve your appearance. Our experienced and friendly staff takes great pride in keeping your smile beautiful.
            </p>
          </div>
          <div>
            {/* Photo of the friendly, African clinic team. */}
            <img
              src="https://source.unsplash.com/600x400/?african-dentists,clinic,friendly"
              alt="The friendly team at White Emerald Dental Care"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;