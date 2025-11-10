import React, { useState } from 'react';

// Icons for the buttons
const WhatsAppIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.803 6.142l-1.111 4.054 4.144-1.085z"/></svg>
);

const InstagramIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0 1.441c-3.171 0-3.535.011-4.774.068-2.694.122-3.633.452-4.328 1.148-.695.695-1.025 1.633-1.148 4.328-.057 1.239-.068 1.603-.068 4.774s.011 3.535.068 4.774c.122 2.694.452 3.633 1.148 4.328.695.695 1.633 1.025 4.328 1.148 1.239.057 1.603.068 4.774.068s3.535-.011 4.774-.068c2.694-.122 3.633-.452 4.328-1.148.695-.695 1.025-1.633 1.148-4.328.057-1.239.068-1.603.068-4.774s-.011-3.535-.068-4.774c-.122-2.694-.452-3.633-1.148-4.328-.695-.695-1.633-1.025-4.328-1.148C15.535 3.614 15.171 3.604 12 3.604zM12 8.25c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75 3.75-1.679 3.75-3.75S14.071 8.25 12 8.25zm0 6c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25 2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25zm4.804-6.418c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/></svg>
);

const FacebookIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
);

const PhoneIcon = () => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const FloatingSocials: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { href: 'https://wa.me/2348105001567', icon: <WhatsAppIcon />, color: 'bg-green-500', name: 'WhatsApp' },
        { href: 'https://www.instagram.com/white_emerald_dental_care/?hl=en', icon: <InstagramIcon />, color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400', name: 'Instagram' },
        { href: 'https://www.facebook.com/p/white_emerald_dental_care-100082744182240/', icon: <FacebookIcon />, color: 'bg-blue-600', name: 'Facebook' },
        { href: 'tel:+2349056288938', icon: <PhoneIcon />, color: 'bg-gray-700', name: 'Call Us' },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="flex flex-col items-center space-y-4">
                 {/* Social Links */}
                <div className={`flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 invisible'}`}>
                    {socialLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className={`${link.color} text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110`}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Main FAB */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-brand-blue text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl focus:outline-none transition-all duration-300 hover:scale-110 hover:bg-brand-blue-dark"
                    aria-label="Toggle contact options"
                >
                    <div className="transform transition-transform duration-300">
                      {isOpen ? <CloseIcon /> : <ChatIcon />}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default FloatingSocials;