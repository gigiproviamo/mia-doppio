import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PlanComparison = ({ onPlanSelect }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      billing: 'al mese',
      description: 'Perfetto per piccoli ristoranti e saloni',
      popular: false,
      ctaText: 'Inizia Gratis',
      note: 'Prova gratuita di 14 giorni'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 79,
      billing: 'al mese',
      description: 'Ideale per attività in crescita',
      popular: true,
      ctaText: 'Inizia ora',
      note: 'Piano più scelto'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 149,
      billing: 'al mese',
      description: 'Per catene e multi-location',
      popular: false,
      ctaText: 'Contattaci',
      note: 'Setup personalizzato incluso'
    }
  ];

  const features = [
    {
      category: 'Funzionalità Base',
      items: [
        { name: 'Assistente WhatsApp AI', starter: true, professional: true, enterprise: true },
        { name: 'Gestione ordini automatica', starter: true, professional: true, enterprise: true },
        { name: 'Menu digitale integrato', starter: true, professional: true, enterprise: true },
        { name: 'Notifiche in tempo reale', starter: true, professional: true, enterprise: true },
        { name: 'Dashboard analytics', starter: 'Base', professional: 'Avanzata', enterprise: 'Completa' }
      ]
    },
    {
      category: 'Limiti Operativi',
      items: [
        { name: 'Ordini al mese', starter: 'Fino a 100', professional: 'Fino a 500', enterprise: 'Illimitati' },
        { name: 'Conversazioni WhatsApp', starter: '1.000', professional: '5.000', enterprise: 'Illimitate' },
        { name: 'Utenti staff', starter: '2', professional: '5', enterprise: 'Illimitati' },
        { name: 'Integrazioni POS', starter: '1', professional: '3', enterprise: 'Illimitate' }
      ]
    },
    {
      category: 'Funzionalità Avanzate',
      items: [
        { name: 'Upselling intelligente', starter: false, professional: true, enterprise: true },
        { name: 'Gestione prenotazioni', starter: false, professional: true, enterprise: true },
        { name: 'Programma fedeltà', starter: false, professional: true, enterprise: true },
        { name: 'Multi-lingua', starter: false, professional: false, enterprise: true },
        { name: 'API personalizzate', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      category: 'Supporto & Training',
      items: [
        { name: 'Supporto email', starter: true, professional: true, enterprise: true },
        { name: 'Supporto chat prioritario', starter: false, professional: true, enterprise: true },
        { name: 'Chiamata setup gratuita', starter: false, professional: true, enterprise: true },
        { name: 'Account manager dedicato', starter: false, professional: false, enterprise: true },
        { name: 'Training personalizzato', starter: false, professional: false, enterprise: true }
      ]
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    })?.format(price);
  };

  const renderFeatureValue = (feature, plan) => {
    const value = feature?.[plan?.id];
    
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={16} className="text-success mx-auto" />
      ) : (
        <Icon name="X" size={16} className="text-muted-foreground mx-auto" />
      );
    }
    
    return (
      <span className={`text-sm ${value ? 'text-foreground' : 'text-muted-foreground'}`}>
        {value || '-'}
      </span>
    );
  };

  const visibleFeatures = showAllFeatures ? features : features?.slice(0, 2);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-brand overflow-hidden">
      <div className="p-6 lg:p-8 border-b border-border">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Confronta i Piani
          </h3>
          <p className="text-muted-foreground">
            Scegli il piano perfetto per la tua attività
          </p>
        </div>

        {/* Plans Header */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="hidden lg:block"></div>
          {plans?.map((plan) => (
            <div key={plan?.id} className="text-center relative">
              {plan?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Popolare
                  </span>
                </div>
              )}
              <div className={`p-4 rounded-lg border-2 ${
                plan?.popular ? 'border-primary bg-primary/5' : 'border-border'
              }`}>
                <h4 className="font-bold text-lg text-foreground">{plan?.name}</h4>
                <div className="text-2xl font-bold text-foreground mt-2">
                  {formatPrice(plan?.price)}
                </div>
                <div className="text-sm text-muted-foreground">{plan?.billing}</div>
                <Button
                  variant={plan?.popular ? "default" : "outline"}
                  size="sm"
                  className="mt-4 w-full"
                  onClick={() => onPlanSelect(plan)}
                >
                  {plan?.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Features Comparison */}
      <div className="overflow-x-auto">
        {visibleFeatures?.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="bg-muted/50 px-6 lg:px-8 py-3 border-b border-border">
              <h5 className="font-semibold text-foreground">{category?.category}</h5>
            </div>
            {category?.items?.map((feature, featureIndex) => (
              <div key={featureIndex} className="grid grid-cols-4 gap-4 px-6 lg:px-8 py-4 border-b border-border hover:bg-muted/30 transition-colors">
                <div className="font-medium text-foreground text-sm lg:text-base">
                  {feature?.name}
                </div>
                {plans?.map((plan) => (
                  <div key={plan?.id} className="text-center">
                    {renderFeatureValue(feature, plan)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Show More/Less Button */}
      <div className="p-6 lg:p-8 text-center border-t border-border">
        <Button
          variant="ghost"
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          iconName={showAllFeatures ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
        >
          {showAllFeatures ? 'Mostra meno funzionalità' : 'Mostra tutte le funzionalità'}
        </Button>
      </div>
    </div>
  );
};

export default PlanComparison;