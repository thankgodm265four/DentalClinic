import React from 'react';

const Logo = () => (
    <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABABAMAAAB1HU02AAAAGFBMVEVHcEz/AAD/AAD/AAD/AAD/AAD/AAD9+v32iP1iAAAACHRSTlMAv0Bg768QkF/1UAAAA9pJREFUeNrt2M2R20gYBvB/B5iAjsBJ6AicgI7ASegInICcgI7AScgInICcgI7ASegInICcwD/QG5h17s6a9/P88r2f2SWzV+JGl4YAAAAAAAAAAAAAAADgEaXl8p68d4/P8b3e/RgeD8Pjcfyq/D083t49wvvJ8/j5/C88Pif+vt5gPPl5e/z/D48H8bN/fD8+4v3n6+3j8+sB+Pl4vV5P+L1eLy/fA8A/D++P+HsA8vbw8vDx7A+AHy8vl8v58+sB+Pl4vl7v58+P5/eP4v2f8f55/yB+H18fH+Lz5/19H/H+9vgA8o/A/h5vL4B+Pp7ePj7eAHi8Pz7e3z4+P+L3AfD+4g+A/y/i+f0A8H7xfXz8+vj4eL5e7+fP+/t7vD/e3z9g/Dx+H/e7gPh4+wDk4eXh5eHxA+A/eLz+4v3j/QP4/eL7+Pj18fHweLyA9+f9/T3eH+8/YOzh4x+Q3+8B4OXh8Xg8vQAeL48f8Xp8/Dj+/gB8Hw8fH7/eH78+Pp7f3//D+8f3D/Dx8fX19f75fQvw8f75f/0B+L2/B4D7+f0B+L1/gN/vx+f3D2A+/38/AHw8/oAPgJfL8/0B+D0+vj4+f39/gA/A+3uA/y/i+f1j+H1/fw9/APDx8f75egvw8fX19fHx+f0B+H18fDweHy/vx9fHx9fHx8f7B2z8+v4AfL0+AN8HwNvl8//6AwDAv/wCeAA8Pl4AL5fHx8f78/4+AD4+Pz/g8wEAz/v7D/Dx+vPx8f4BfL3eHy/fA/Dx+P19vA8A7+fHx+v1APj5/AF83z8Anj8AD7+f7+/v8/oBeL1fL8/H5/N6ff+A3+f3+3u8P+ID0Ofz+/t7vD/iA9DH4+P9/f0D+PyA9wH4+P+IH0Cfz+f3D/Dx+QEAz+fzA/Dx+fn/9wH4AHi9Pl4v3+f19fHx8fHx+QH4eXy9Xo/v7x+Aj1cAAAAAAAAAAAAAAAAAAAAAAOA/q9Wf5/V4eT0eXn4ev16P5+v58vPx8/L1eDy+vu4/8Pl6PH8v1+v1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAfw9Pq4/Pyej183o/n4+Pj+fV+fLy8vL1ejwDAx8Pj8foD+Pl6PH4fL8fHx/P1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf/gL4s+k9S2G37QAAAABJRU5ErkJggg==" 
        alt="White Emerald Dental Care Logo" 
        className="h-10 w-auto" 
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