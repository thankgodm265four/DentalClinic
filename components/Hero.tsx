import React from 'react';

const Hero: React.FC = () => {
  const stats = [
    { value: '5,000+', label: 'Happy Smiles' },
    { value: '15+', label: 'Years of Experience' },
  ];

  return (
    <section id="home" className="bg-bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-text-headings mb-6 leading-tight animate-fade-in-down">
              Fix Your Smile, <br />
              Restore Your Confidence
            </h1>
            <p className="text-lg text-text-body max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in-up">
              At White Emerald Dental Care, we specialize in beautifying smiles, maintaining your dental health, and helping you improve your appearance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#appointment"
                className="bg-brand-accent text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
              >
                Book an Appointment
              </a>
               {/* Stats Section */}
              <div className="flex items-center justify-center lg:justify-start gap-x-6">
                {stats.map(stat => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-bold text-text-headings">{stat.value}</p>
                    <p className="text-text-body tracking-wide text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="mt-12 lg:mt-0 animate-fade-in-up">
            <img 
              src="https://source.unsplash.com/800x1000/?african-woman-perfect-smile,close-up,happy"
              alt="A woman with a bright, confident smile"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[500px] object-top"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;