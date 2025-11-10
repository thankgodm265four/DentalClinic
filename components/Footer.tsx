import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} DentalCare. All Rights Reserved.</p>
        <p className="text-sm mt-2">Designed with care for your smile.</p>
      </div>
    </footer>
  );
};

export default Footer;
