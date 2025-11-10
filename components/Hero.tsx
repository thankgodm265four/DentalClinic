import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const stats = [
    { value: '5,000+', label: 'Happy Smiles' },
    { value: '15+', label: 'Years of Experience' },
  ];

  const heroImages = [
    'https://i.ibb.co/r2SYr0tC/front-page-img.jpg',
    'https://i.ibb.co/BvsBjnM/image-1.webp',
    'https://i.ibb.co/4gM7CjNf/front-page-img2.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 1000); // Change image every 1 second as requested

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

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
            <div className="relative w-full h-[500px] rounded-3xl shadow-2xl overflow-hidden">
              {heroImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Hero image ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;