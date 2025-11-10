import React, { useState, useEffect } from 'react';

const Logo = () => (
    <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAABABAMAAAB1HU02AAAAGFBMVEVHcEz/AAD/AAD/AAD/AAD/AAD/AAD9+v32iP1iAAAACHRSTlMAv0Bg768QkF/1UAAAA9pJREFUeNrt2M2R20gYBvB/B5iAjsBJ6AicgI7ASegInICcgI7AScgInICcgI7ASegInICcwD/QG5h17s6a9/P88r2f2SWzV+JGl4YAAAAAAAAAAAAAAADgEaXl8p68d4/P8b3e/RgeD8Pjcfyq/D083t49wvvJ8/j5/C88Pif+vt5gPPl5e/z/D48H8bN/fD8+4v3n6+3j8+sB+Pl4vV5P+L1eLy/fA8A/D++P+HsA8vbw8vDx7A+AHy8vl8v58+sB+Pl4vl7v58+P5/eP4v2f8f55/yB+H18fH+Lz5/19H/H+9vgA8o/A/h5vL4B+Pp7ePj7eAHi8Pz7e3z4+P+L3AfD+4g+A/y/i+f0A8H7xfXz8+vj4eL5e7+fP+/t7vD/e3z9g/Dx+H/e7gPh4+wDk4eXh5eHxA+A/eLz+4v3j/QP4/eL7+Pj18fHweLyA9+f9/T3eH+8/YOzh4x+Q3+8B4OXh8Xg8vQAeL48f8Xp8/Dj+/gB8Hw8fH7/eH78+Pp7f3//D+8f3D/Dx8fX19f75fQvw8f75f/0B+L2/B4D7+f0B+L1/gN/vx+f3D2A+/38/AHw8/oAPgJfL8/0B+D0+vj4+f39/gA/A+3uA/y/i+f1j+H1/fw9/APDx8f75egvw8fX19fHx+f0B+H18fDweHy/vx9fHx9fHx8f7B2z8+v4AfL0+AN8HwNvl8//6AwDAv/wCeAA8Pl4AL5fHx8f78/4+AD4+Pz/g8wEAz/v7D/Dx+vPx8f4BfL3eHy/fA/Dx+P19vA8A7+fHx+v1APj5/AF83z8Anj8AD7+f7+/v8/oBeL1fL8/H5/N6ff+A3+f3+3u8P+ID0Ofz+/t7vD/iA9DH4+P9/f0D+PyA9wH4+P+IH0Cfz+f3D/Dx+QEAz+fzA/Dx+fn/9wH4AHi9Pl4v3+f19fHx8fHx+QH4eXy9Xo/v7x+Aj1cAAAAAAAAAAAAAAAAAAAAAAOA/q9Wf5/V4eT0eXn4ev16P5+v58vPx8/L1eDy+vu4/8Pl6PH8v1+v1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAfw9Pq4/Pyej183o/n4+Pj+fV+fLy8vL1ejwDAx8Pj8foD+Pl6PH4fL8fHx/P1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODf/gL4s+k9S2G37QAAAABJRU5ErkJggg==" 
        alt="White Emerald Dental Care Logo" 
        className="h-10 w-auto" 
    />
);

interface HeaderProps {
  onNavigate: (anchor: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX: Add a navigation link for the new Gallery section.
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const headerClass = isScrolled 
    ? 'bg-bg-primary/95 shadow-md border-b border-border-color backdrop-blur-md' 
    : 'bg-bg-primary';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    if(isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center">
            <Logo />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="font-medium text-text-body hover:text-brand-accent transition-colors">
                    {link.name}
                </a>
            ))}
        </nav>

        <a
          href="#appointment"
          onClick={(e) => handleNavClick(e, '#appointment')}
          className="hidden md:inline-block bg-brand-accent text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-opacity-90 shadow-sm"
        >
          Book an Appointment
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-headings" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-primary py-4 shadow-lg border-t border-border-color">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-text-body hover:text-brand-accent transition-colors" onClick={(e) => handleNavClick(e, link.href)}>
                {link.name}
              </a>
            ))}
            <a
              href="#appointment"
              className="bg-brand-accent text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 w-4/5 text-center mt-2"
              onClick={(e) => handleNavClick(e, '#appointment')}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;