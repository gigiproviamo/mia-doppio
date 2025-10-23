import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = ({ selectedIndustry }) => {
  const industryContent = {
    restaurant: {
      title: "Trasforma il tuo ristorante con MIA",
      subtitle: "Automatizza ordini, prenotazioni e servizio clienti in pochi minuti",
      benefits: [
        "Setup completo in meno di 10 minuti",
        "Integrazione con il tuo menu esistente",
        "Supporto WhatsApp Business gratuito",
        "Formazione del team inclusa"
      ],
      cta: "Inizia la tua prova gratuita",
      demo: "Prova il demo ristorante"
    },
    salon: {
      title: "Rivoluziona il tuo salone con MIA",
      subtitle: "Gestisci appuntamenti e clienti automaticamente via WhatsApp",
      benefits: [
        "Configurazione agenda in 5 minuti",
        "Riduzione no-show fino al 70%",
        "Promemoria automatici personalizzati",
        "Consulenza servizi 24/7"
      ],
      cta: "Attiva MIA per il tuo salone",
      demo: "Prova il demo salone"
    }
  };

  const content = industryContent?.[selectedIndustry];

  const handleWhatsAppContact = () => {
    const message = selectedIndustry === 'restaurant' 
      ? "Ciao! Sono interessato a MIA per il mio ristorante. Vorrei saperne di più." :"Ciao! Sono interessato a MIA per il mio salone. Vorrei saperne di più.";
    
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            {content?.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {content?.subtitle}
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {content?.benefits?.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3 bg-white/50 rounded-lg p-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Check" size={16} className="text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="default" 
            size="lg"
            className="cta-pulse"
            iconName="Zap"
            iconPosition="left"
          >
            {content?.cta}
          </Button>
          
          <Link to="/demo">
            <Button 
              variant="outline" 
              size="lg"
              iconName="Play"
              iconPosition="left"
            >
              {content?.demo}
            </Button>
          </Link>
        </div>
        
        {/* Contact Options */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-4">
            Hai domande? Parliamo direttamente
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleWhatsAppContact}
              iconName="MessageCircle"
              iconPosition="left"
            >
              Chatta su WhatsApp
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              iconName="Phone"
              iconPosition="left"
            >
              Richiedi una chiamata
            </Button>
            
            <Link to="/pricing">
              <Button 
                variant="ghost" 
                size="sm"
                iconName="Calculator"
                iconPosition="left"
              >
                Calcola il ROI
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={14} />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={14} />
              <span>Crittografia E2E</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} />
              <span>Supporto 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={14} />
              <span>300+ Attività Attive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;