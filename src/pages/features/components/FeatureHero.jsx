import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeatureHero = () => {
  const [activeIndustry, setActiveIndustry] = useState('restaurant');

  const industryContent = {
    restaurant: {
      title: "Funzionalità Complete per Ristoranti",
      subtitle: "Trasforma il tuo ristorante con l\'assistente AI più avanzato d\'Italia",
      description: "MIA gestisce prenotazioni, ordini e pagamenti attraverso WhatsApp, eliminando la necessità di app aggiuntive e aumentando le vendite fino al 35%.",
      features: ["Gestione Menu Dinamica", "Prenotazioni Automatiche", "Ordini Take-Away", "Pagamenti Integrati"]
    },
    salon: {
      title: "Soluzioni Avanzate per Saloni",
      subtitle: "Rivoluziona la gestione del tuo salone con intelligenza artificiale",
      description: "MIA coordina appuntamenti, servizi e clienti via WhatsApp, riducendo i no-show del 40% e ottimizzando la pianificazione giornaliera.",
      features: ["Booking Intelligente", "Gestione Servizi", "Promemoria Automatici", "Analisi Clienti"]
    }
  };

  const currentContent = industryContent?.[activeIndustry];

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Industry Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-brand border border-border">
            <button
              onClick={() => setActiveIndustry('restaurant')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-brand industry-toggle ${
                activeIndustry === 'restaurant' ?'bg-primary text-primary-foreground shadow-brand' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="UtensilsCrossed" size={16} className="inline mr-2" />
              Ristoranti
            </button>
            <button
              onClick={() => setActiveIndustry('salon')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-brand industry-toggle ${
                activeIndustry === 'salon' ?'bg-primary text-primary-foreground shadow-brand' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Scissors" size={16} className="inline mr-2" />
              Saloni
            </button>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            {currentContent?.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-primary font-medium mb-4">
            {currentContent?.subtitle}
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentContent?.description}
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {currentContent?.features?.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-full px-4 py-2 text-sm font-medium text-foreground shadow-brand"
              >
                <Icon name="Check" size={14} className="inline mr-2 text-accent" />
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="default"
              size="lg"
              className="cta-pulse"
              iconName="Play"
              iconPosition="left"
              iconSize={18}
            >
              Guarda Demo Interattiva
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={18}
              onClick={() => window.open('https://wa.me/1234567890?text=Ciao! Vorrei saperne di più sulle funzionalità di MIA per il mio business.', '_blank')}
            >
              Parla con un Esperto
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Scelto da oltre 500+ business in Italia</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-accent fill-current" />
                <span className="text-sm font-medium">4.9/5 Recensioni</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span className="text-sm font-medium">Setup in 5 minuti</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHero;