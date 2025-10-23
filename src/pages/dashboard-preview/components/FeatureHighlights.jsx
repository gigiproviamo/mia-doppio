import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeatureHighlights = ({ selectedIndustry }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const restaurantFeatures = [
    {
      id: 1,
      title: "Gestione Ordini Automatica",
      description: "MIA riceve e processa gli ordini via WhatsApp, calcola totali e conferma disponibilità automaticamente.",
      icon: "ShoppingCart",
      benefits: ["Riduce errori del 95%", "Velocizza il servizio", "Integrazione POS"],
      demo: "Cliente: 'Vorrei 2 margherite e 1 marinara'\nMIA: 'Perfetto! 2 Margherite (€16) + 1 Marinara (€14) = €30. Confermi l'ordine?'"
    },
    {
      id: 2,
      title: "Prenotazioni Intelligenti",
      description: "Sistema di prenotazione che verifica disponibilità, gestisce liste d'attesa e invia promemoria.",
      icon: "Calendar",
      benefits: ["Ottimizza i tavoli", "Riduce no-show", "Promemoria automatici"],
      demo: "Cliente: 'Tavolo per 4 stasera alle 20:00'\nMIA: 'Disponibile! Ho prenotato per Marco Rossi, 4 persone, oggi 20:00. Ti invierò un promemoria.'"
    },
    {
      id: 3,
      title: "Menu Dinamico",
      description: "Aggiornamento automatico disponibilità piatti, prezzi e promozioni in tempo reale.",
      icon: "FileText",
      benefits: ["Sempre aggiornato", "Promozioni automatiche", "Gestione allergeni"],
      demo: "Cliente: 'Che primi avete oggi?'\nMIA: 'Oggi abbiamo: Carbonara (€12), Amatriciana (€11), Cacio e Pepe (€10). Tutti disponibili!'"
    }
  ];

  const salonFeatures = [
    {
      id: 1,
      title: "Prenotazioni Automatiche",
      description: "MIA gestisce appuntamenti, verifica disponibilità operatori e servizi in tempo reale.",
      icon: "Scissors",
      benefits: ["Agenda ottimizzata", "Zero conflitti", "Conferme automatiche"],
      demo: "Cliente: 'Vorrei un taglio domani pomeriggio'\nMIA: 'Disponibile alle 15:30 con Sara o 16:00 con Marco. Quale preferisci?'"
    },
    {
      id: 2,
      title: "Promemoria Intelligenti",
      description: "Sistema di promemoria personalizzati che riduce drasticamente i no-show.",
      icon: "Bell",
      benefits: ["Riduce no-show 70%", "Messaggi personalizzati", "Conferme automatiche"],
      demo: "MIA: 'Ciao Elena! Ti ricordo l'appuntamento domani alle 15:00 per taglio e piega con Sara. Confermi?'"
    },
    {
      id: 3,
      title: "Consulenza Servizi",
      description: "MIA fornisce informazioni dettagliate su trattamenti, prezzi e consigli personalizzati.",
      icon: "HelpCircle",
      benefits: ["Consulenza 24/7", "Prezzi aggiornati", "Consigli personalizzati"],
      demo: "Cliente: 'Che trattamento consigli per capelli danneggiati?'\nMIA: 'Ti consiglio il trattamento ricostruttivo (€45, 90min). Vuoi prenotare una consulenza gratuita?'"
    }
  ];

  const features = selectedIndustry === 'restaurant' ? restaurantFeatures : salonFeatures;

  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Funzionalità in Evidenza</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Scopri come MIA automatizza il tuo business
        </p>
      </div>
      <div className="p-6">
        {/* Feature Tabs */}
        <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
          {features?.map((feature, index) => (
            <button
              key={feature?.id}
              onClick={() => setActiveFeature(index)}
              className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-brand ${
                activeFeature === index
                  ? 'bg-white text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Icon name={feature?.icon} size={16} />
                <span className="hidden sm:inline">{feature?.title}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Active Feature Content */}
        <div className="space-y-6">
          <div>
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={features?.[activeFeature]?.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {features?.[activeFeature]?.title}
                </h4>
                <p className="text-muted-foreground">
                  {features?.[activeFeature]?.description}
                </p>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {features?.[activeFeature]?.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-muted/50 rounded-lg p-3">
                  <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Demo Conversation */}
            <div className="bg-muted/30 rounded-lg p-4">
              <h5 className="text-sm font-medium text-foreground mb-3 flex items-center space-x-2">
                <Icon name="MessageSquare" size={16} />
                <span>Esempio Conversazione</span>
              </h5>
              <div className="space-y-2">
                {features?.[activeFeature]?.demo?.split('\n')?.map((line, index) => {
                  const isCustomer = line?.startsWith('Cliente:');
                  const isMIA = line?.startsWith('MIA:');
                  
                  return (
                    <div key={index} className={`flex ${isCustomer ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        isCustomer 
                          ? 'bg-muted text-foreground' 
                          : isMIA 
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground'
                      }`}>
                        {line?.replace(/^(Cliente:|MIA:)\s*/, '')}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <Button 
            variant="default" 
            fullWidth
            iconName="Play"
            iconPosition="left"
          >
            Prova questa funzionalità
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlights;