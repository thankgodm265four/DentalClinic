import React from 'react';

const Logo = () => (
    <img 
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAJAAkADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EABgQAQEBAQEAAAAAAAAAAAAAAAABEUEh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAREh/9oADAMBAAIRAxEBAx8A/tIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgqCoKgq-DN/li8-Z" 
        alt="White Emerald Dental Care Logo" 
        className="h-14 w-auto mb-4" 
    />
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

const Footer: React.FC = () => {
    const companyLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    const serviceLinks = [
        'Teeth Whitening', 'Orthodontics', 'Dental Implants', 
        'Scaling & Polishing', 'Dental Crowns', 'Composite Fillings'
    ];

    return (
        <footer className="bg-text-headings text-gray-300">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Column 1: Logo & About */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="text-sm leading-relaxed text-gray-400">
                            At White Emerald Dental Care, we specialize in beautifying smiles and maintaining your dental health for patients of all ages.
                        </p>
                    </div>

                    {/* Column 2: Company */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
                        <ul className="space-y-3">
                            {serviceLinks.map(service => (
                                <li key={service}>
                                    <a href="#services" className="hover:text-white transition-colors">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <LocationIcon />
                                <div>
                                    <span className="font-semibold text-white block">Clinic Location</span>
                                    <span>Achiever Plaza Idi Ayan, Ilesa, Osun State</span>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <PhoneIcon />
                                <div>
                                    <span className="font-semibold text-white block">Call Us</span>
                                    <a href="tel:+2348105001567" className="hover:text-white transition-colors">+234 810 5001 567</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <EmailIcon />
                                <div>
                                    <span className="font-semibold text-white block">Send a Message</span>
                                    <a href="mailto:contact@wedc.com.ng" className="hover:text-white transition-colors">contact@wedc.com.ng</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-6 text-center">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} White Emerald Dental Care. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;