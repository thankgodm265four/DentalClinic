import React, { useState, useEffect } from 'react';

const Logo = () => (
    <img 
        src="https://i.ibb.co/SDcrgDpp/image.png"
        alt="White Emerald Dental Care Logo" 
        className="h-12 w-auto" 
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