import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesOverview from './components/FeaturesOverview';
import TestimonialsShowcase from './components/TestimonialsShowcase';
import CTASection from './components/CTASection';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import Footer from './components/Footer';

const Homepage = () => {
  const [activeIndustry, setActiveIndustry] = useState('restaurant');

  const handleIndustryToggle = (industry) => {
    setActiveIndustry(industry);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>MIA Assistant - Il Tuo Cameriere Digitale per Ristoranti e Saloni</title>
        <meta
          name="description"
          content="Trasforma WhatsApp nel tuo sistema di ordinazione automatico. MIA gestisce ordini, prenotazioni e pagamenti per ristoranti e saloni. Zero app da scaricare, setup in 10 minuti."
        />
        <meta
          name="keywords"
          content="whatsapp business, ristorante digitale, prenotazioni online, menu digitale, assistente virtuale, automazione ristoranti, gestione ordini"
        />
        <meta property="og:title" content="MIA Assistant - Il Tuo Cameriere Digitale" />
        <meta
          property="og:description"
          content="Automatizza il tuo ristorante o salone direttamente su WhatsApp. Oltre 300 attività già attive!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miaassistant.it" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://miaassistant.it" />
        <html lang="it" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero (toggle Ristoranti/Saloni) */}
          <HeroSection
            activeIndustry={activeIndustry}
            onIndustryToggle={handleIndustryToggle}
          />

          {/* Sezione Problemi */}
          <ProblemSection />

          {/* Sezione Caratteristiche */}
          <FeaturesOverview
            activeIndustry={activeIndustry}
            onIndustryToggle={handleIndustryToggle}
          />

          {/* Testimonials */}
          <TestimonialsShowcase activeIndustry={activeIndustry} />

          {/* CTA finale */}
          <CTASection activeIndustry={activeIndustry} />
        </main>

        <Footer />
        <WhatsAppFloatingButton activeIndustry={activeIndustry} />
      </div>
    </>
  );
};

export default Homepage;
