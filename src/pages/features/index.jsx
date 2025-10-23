import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FeatureHero from './components/FeatureHero';
import CoreFeatures from './components/CoreFeatures';
import FeatureComparison from './components/FeatureComparison';
import InteractiveDemo from './components/InteractiveDemo';
import ROICalculator from './components/ROICalculator';
import AdvancedFeatures from './components/AdvancedFeatures';
import FeatureTestimonials from './components/FeatureTestimonials';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const Features = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Funzionalità MIA Assistant - Automazione AI per Ristoranti e Saloni</title>
        <meta 
          name="description" 
          content="Scopri tutte le funzionalità di MIA Assistant: prenotazioni automatiche, gestione menu, pagamenti integrati, analisi AI e molto altro. Trasforma il tuo business con l'intelligenza artificiale." 
        />
        <meta name="keywords" content="funzionalità MIA, automazione ristorante, AI assistant, prenotazioni automatiche, gestione menu, pagamenti WhatsApp, analisi business" />
        <meta property="og:title" content="Funzionalità Complete MIA Assistant - Automazione Intelligente" />
        <meta property="og:description" content="Esplora le potenti funzionalità di MIA: dall'automazione delle prenotazioni all'analisi predittiva AI. Tutto integrato in WhatsApp." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mia-assistant.com/features" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <FeatureHero />
        
        {/* Core Features */}
        <CoreFeatures />
        
        {/* Feature Comparison */}
        <FeatureComparison />
        
        {/* Interactive Demo */}
        <InteractiveDemo />
        
        {/* ROI Calculator */}
        <ROICalculator />
        
        {/* Advanced Features */}
        <AdvancedFeatures />
        
        {/* Testimonials */}
        <FeatureTestimonials />
        
        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto a Rivoluzionare il Tuo Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Unisciti a oltre 500+ business che hanno già trasformato la loro gestione con MIA Assistant
              </p>
              
              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-80">Tasso di Soddisfazione</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">&lt; 5min</div>
                  <div className="text-sm opacity-80">Tempo di Setup</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">340%</div>
                  <div className="text-sm opacity-80">ROI Medio</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  className="cta-pulse"
                  iconName="Rocket"
                  iconPosition="left"
                >
                  Inizia Gratis Ora
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => window.open('https://wa.me/1234567890?text=Ciao! Ho visto tutte le funzionalità e vorrei iniziare con MIA Assistant.', '_blank')}
                >
                  Parla con un Esperto
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm opacity-80 mb-4">
                  Garanzia soddisfatti o rimborsati • Setup gratuito • Supporto 24/7
                </p>
                <div className="flex justify-center items-center space-x-6 text-sm opacity-70">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Lock" size={16} />
                    <span>Sicurezza Bancaria</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} />
                    <span>Certificato ISO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            variant="default"
            size="lg"
            className="rounded-full shadow-brand-xl bg-accent hover:bg-accent/90 cta-pulse"
            iconName="MessageCircle"
            iconSize={24}
            onClick={() => window.open('https://wa.me/1234567890?text=Ciao! Vorrei saperne di più sulle funzionalità di MIA Assistant.', '_blank')}
          >
            <span className="hidden sm:inline ml-2">Chatta con Noi</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Features;