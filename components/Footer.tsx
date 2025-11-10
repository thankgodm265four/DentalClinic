import React from 'react';

const InstagramIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163m0 1.441c-3.171 0-3.535.011-4.774.068-2.694.122-3.633.452-4.328 1.148-.695.695-1.025 1.633-1.148 4.328-.057 1.239-.068 1.603-.068 4.774s.011 3.535.068 4.774c.122 2.694.452 3.633 1.148 4.328.695.695 1.633 1.025 4.328 1.148 1.239.057 1.603.068 4.774.068s3.535-.011 4.774-.068c2.694-.122 3.633-.452 4.328-1.148.695-.695 1.025-1.633 1.148-4.328.057-1.239.068-1.603.068-4.774s-.011-3.535-.068-4.774c-.122-2.694-.452-3.633-1.148-4.328-.695-.695-1.633-1.025-4.328-1.148C15.535 3.614 15.171 3.604 12 3.604zM12 8.25c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75 3.75-1.679 3.75-3.75S14.071 8.25 12 8.25zm0 6c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25 2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25zm4.804-6.418c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/></svg>
);

const FacebookIcon = () => (
    <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-teal-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-2">White Emerald</h3>
            <p className="text-teal-100">Your smile, our priority. Providing exceptional dental care in Ilesa, Osun State.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-teal-200 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-200 transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-teal-200 transition-colors">Our Team</a></li>
              <li><a href="#appointment" className="hover:text-teal-200 transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-teal-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-teal-100">
                <li>+234 810 5001 567</li>
                <li>contact@wedc.com.ng</li>
                <li>Achiever Plaza Idi Ayan, Ilesa</li>
            </ul>
            <div className="mt-6 flex justify-center space-x-6 md:justify-start">
              <a href="https://www.instagram.com/white_emerald_dental_care/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-teal-100 hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/p/white_emerald_dental_care-100082744182240/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-teal-100 hover:text-white transition-colors">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20 py-4 text-center">
        <p className="text-sm text-teal-200">&copy; {new Date().getFullYear()} White Emerald Dental Care. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;