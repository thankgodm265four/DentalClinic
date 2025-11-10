import React, { useState } from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const About: React.FC = () => {
    const [imagesReversed, setImagesReversed] = useState(false);
    const features = [
        'Personalized Treatment Plans',
        'State-of-the-Art Technology',
        'Gentle Care for Kids and Adults',
        'Flexible Appointment Scheduling',
    ];
    
    const image1Src = "https://i.ibb.co/67YB0WbG/gettyimages-1486369860-612x612.jpg";
    const image2Src = "https://i.ibb.co/BvsBjnM/image-1.webp";

    return (
        <section id="about" className="py-24 bg-bg-primary overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Column */}
                    <div
                        className="relative h-[550px] hidden lg:block animate-fade-in-down cursor-pointer group"
                        onClick={() => setImagesReversed(!imagesReversed)}
                        title="Click to swap images"
                    >
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            Click to Swap
                        </div>
                        <img
                            src={imagesReversed ? image2Src : image1Src}
                            alt="Dentist attending to a patient"
                            className="absolute top-0 left-0 w-3/4 rounded-2xl shadow-lg object-cover h-[350px] transform transition-all duration-500 group-hover:scale-105"
                        />
                        <img
                            src={imagesReversed ? image1Src : image2Src}
                            alt="Close-up of dental procedure"
                            className="absolute bottom-0 right-0 w-[85%] rounded-2xl shadow-2xl object-cover h-[400px] transform transition-all duration-500 group-hover:scale-105 border-8 border-bg-primary"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="animate-fade-in-up">
                        <p className="text-brand-blue font-bold mb-2 text-lg">About Us</p>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-text-headings mb-6 leading-tight">
                            Your teeth deserve <br />
                            <span className="text-brand-blue">the very best</span>
                        </h2>
                        <p className="text-text-body leading-relaxed text-lg mb-8">
                            White Emerald Dental Clinic is a modern dental care center committed to excellence in oral healthcare, aesthetics, and patient comfort. Our clinic has quickly become a trusted destination for comprehensive dental solutions in Ilesa, Osun State.
                        </p>
                        
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                            {features.map(feature => (
                                <li key={feature} className="flex items-center">
                                    <CheckIcon />
                                    <span className="ml-3 text-text-body font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#appointment"
                            className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            See a Dentist
                        </a>
                    </div>
                     {/* Image for Mobile */}
                    <div className="relative h-[450px] lg:hidden animate-fade-in-down">
                         <img
                            src="https://i.ibb.co/BvsBjnM/image-1.webp"
                            alt="Dental procedure"
                            className="w-full h-full rounded-2xl shadow-2xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;