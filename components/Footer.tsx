import React from 'react';

const Logo = () => (
    <img 
        src="https://i.ibb.co/yYyW9f7/Whats-App-Image-2025-11-10-at-3-11-33-AM-2-removebg-preview.png"
        alt="White Emerald Dental Care Logo" 
        className="h-12 w-auto" 
    />
);

const Footer: React.FC = () => {
    const serviceLinks = [
        'Teeth Whitening', 'Scaling & Polishing', 'Orthodontics', 'Dental Implants'
    ];

    return (
        <footer className="bg-bg-primary border-t-4 border-brand-accent">
            <div className="container mx-auto px-6 py-16">
                <div className="mb-12">
                    <Logo />
                    <p className="mt-4 max-w-sm text-text-body">
                        Your smile is our priority. We specialize in beautifying smiles and maintaining your dental health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Column 1: Services */}
                    <div>
                        <h4 className="text-lg font-bold text-text-headings mb-4">Services</h4>
                        <ul className="space-y-3">
                            {serviceLinks.map(service => (
                                <li key={service}>
                                    <a href="#services" className="text-text-body hover:text-brand-accent transition-colors">{service}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Hours */}
                    <div>
                        <h4 className="text-lg font-bold text-text-headings mb-4">Hours</h4>
                        <ul className="space-y-3 text-text-body">
                            <li><span className="font-semibold text-text-headings">Mon - Sat:</span> 8am - 6pm</li>
                            <li><span className="font-semibold text-text-headings">Sun:</span> 12pm - 6pm</li>
                        </ul>
                    </div>

                    {/* Column 3: Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold text-text-headings mb-4">Newsletter</h4>
                        <p className="text-text-body mb-4">Discover new offers and stay up to date.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                className="w-full px-4 py-3 bg-bg-secondary border border-border-color rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
                            />
                            <button 
                                type="submit" 
                                aria-label="Subscribe to newsletter"
                                className="bg-brand-accent text-white px-4 py-3 rounded-r-lg hover:bg-opacity-90 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="border-t border-border-color py-6 text-center">
                <p className="text-sm text-text-body">&copy; {new Date().getFullYear()} White Emerald Dental Care. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;