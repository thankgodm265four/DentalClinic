import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (anchor?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', anchor: '#hero' },
    { name: 'About', anchor: '#about' },
    { name: 'Services', anchor: '#services' },
    { name: 'Team', anchor: '#team' },
    { name: 'FAQ', anchor: '#faq' },
    { name: 'Contact', anchor: '#contact' },
  ];

  const handleNavClick = (anchor?: string) => {
    onNavigate(anchor);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-brand-primary cursor-pointer" onClick={() => handleNavClick()}>
          DentalCare
        </div>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.anchor)}
              className="text-text-body hover:text-brand-accent transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
        </nav>
        <button
          onClick={() => handleNavClick('#appointment')}
          className="hidden md:block bg-brand-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
        >
          Book Appointment
        </button>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.anchor)}
                className="text-text-body hover:text-brand-accent transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#appointment')}
              className="bg-brand-accent text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;