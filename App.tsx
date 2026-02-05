
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
