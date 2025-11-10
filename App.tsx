import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

const App: React.FC = () => {
  return (
    <div className="bg-bg-primary font-sans text-text-body">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <FAQ />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default App;