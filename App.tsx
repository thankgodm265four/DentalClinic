import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';
import ServiceDetail from './components/ServiceDetail';
import type { Service } from './types';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('main');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setCurrentView('serviceDetail');
    window.scrollTo(0, 0);
  };

  const handleGoHome = (anchor?: string) => {
    setSelectedService(null);
    setCurrentView('main');
    
    if (anchor) {
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure the main view is rendered
    } else {
        window.scrollTo(0, 0);
    }
  };

  return (
    <div className="bg-bg-primary font-sans text-text-body">
      <Header onNavigate={handleGoHome} />
      <main>
        {currentView === 'main' ? (
          <>
            <Hero />
            <About />
            <Services onSelectService={handleSelectService} />
            <Team />
            {/* FIX: Render the Gallery component to display it on the page. */}
            <Gallery />
            <FAQ />
            <Appointment />
            <Contact />
          </>
        ) : (
          selectedService && <ServiceDetail service={selectedService} onBack={() => handleGoHome('#services')} onBook={() => handleGoHome('#appointment')} />
        )}
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default App;
