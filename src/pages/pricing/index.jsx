import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import PricingCard from './components/PricingCard';
import PricingCalculator from './components/PricingCalculator';
import PlanComparison from './components/PlanComparison';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [calculatorResults, setCalculatorResults] = useState({
    recommendedPlan: 'professional',
    estimatedOrders: 150,
    estimatedPrice: 79
  });
  const [showAnnual, setShowAnnual] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: showAnnual ? 290 : 29,
      originalPrice: showAnnual ? 348 : null,
      billing: showAnnual ? 'all\'anno' : 'al mese',
      description: 'Perfetto per piccoli ristoranti e saloni che iniziano',
      popular: false,
      ctaText: 'Prova Gratis 14 Giorni',
      note: showAnnual ? 'Risparmi €58 all\'anno' : 'Nessuna carta di credito richiesta',
      features: [
        { text: 'Fino a 100 ordini al mese', included: true },
        { text: '1.000 conversazioni WhatsApp', included: true },
        { text: 'Menu digitale integrato', included: true },
        { text: 'Dashboard analytics base', included: true },
        { text: '2 utenti staff', included: true },
        { text: '1 integrazione POS', included: true },
        { text: 'Supporto email', included: true },
        { text: 'Upselling intelligente', included: false },
        { text: 'Gestione prenotazioni', included: false },
        { text: 'Supporto prioritario', included: false }
      ],
      limits: [
        { label: 'Ordini mensili', value: '100' },
        { label: 'Conversazioni', value: '1.000' },
        { label: 'Utenti staff', value: '2' },
        { label: 'Integrazioni POS', value: '1' }
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      price: showAnnual ? 790 : 79,
      originalPrice: showAnnual ? 948 : null,
      billing: showAnnual ? 'all\'anno' : 'al mese',
      description: 'Ideale per attività in crescita e multi-servizio',
      popular: true,
      ctaText: 'Inizia ora',
      note: showAnnual ? 'Risparmi €158 all\'anno' : 'Piano più scelto dai nostri clienti',
      features: [
        { text: 'Fino a 500 ordini al mese', included: true },
        { text: '5.000 conversazioni WhatsApp', included: true },
        { text: 'Menu digitale avanzato', included: true },
        { text: 'Dashboard analytics completa', included: true },
        { text: '5 utenti staff', included: true },
        { text: 'Fino a 3 integrazioni POS', included: true },
        { text: 'Upselling intelligente', included: true },
        { text: 'Gestione prenotazioni', included: true },
        { text: 'Programma fedeltà', included: true },
        { text: 'Supporto chat prioritario', included: true },
        { text: 'Chiamata setup gratuita', included: true },
        { text: 'Multi-lingua', included: false }
      ],
      limits: [
        { label: 'Ordini mensili', value: '500' },
        { label: 'Conversazioni', value: '5.000' },
        { label: 'Utenti staff', value: '5' },
        { label: 'Integrazioni POS', value: '3' }
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: showAnnual ? 1490 : 149,
      originalPrice: showAnnual ? 1788 : null,
      billing: showAnnual ? 'all\'anno' : 'al mese',
      description: 'Per catene, franchising e multi-location',
      popular: false,
      ctaText: 'Contatta il Team',
      note: showAnnual ? 'Risparmi €298 all\'anno' : 'Setup e training personalizzato incluso',
      features: [
        { text: 'Ordini illimitati', included: true },
        { text: 'Conversazioni illimitate', included: true },
        { text: 'Menu multi-location', included: true },
        { text: 'Analytics avanzate + reporting', included: true },
        { text: 'Utenti staff illimitati', included: true },
        { text: 'Integrazioni POS illimitate', included: true },
        { text: 'Upselling + cross-selling AI', included: true },
        { text: 'Gestione prenotazioni multi-sede', included: true },
        { text: 'Programma fedeltà avanzato', included: true },
        { text: 'Multi-lingua completo', included: true },
        { text: 'API personalizzate', included: true },
        { text: 'Account manager dedicato', included: true },
        { text: 'Training personalizzato', included: true },
        { text: 'SLA garantito 99.9%', included: true }
      ],
      limits: [
        { label: 'Ordini mensili', value: 'Illimitati' },
        { label: 'Conversazioni', value: 'Illimitate' },
        { label: 'Utenti staff', value: 'Illimitati' },
        { label: 'Integrazioni POS', value: 'Illimitate' }
      ]
    }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    
    if (plan?.id === 'enterprise') {
      window.open('https://wa.me/1234567890?text=Ciao, sono interessato al piano Enterprise di MIA Assistant', '_blank');
    } else {
      // Simulate redirect to onboarding
      console.log(`Redirecting to onboarding for plan: ${plan?.name}`);
    }
  };

  const handleCalculatorChange = (results) => {
    setCalculatorResults(results);
  };

  const getRecommendedPlan = () => {
    return plans?.find(plan => plan?.id === calculatorResults?.recommendedPlan);
  };

  // Fixed WhatsApp button
  const WhatsAppButton = () => (
    <button
      onClick={() => window.open('https://wa.me/1234567890?text=Ciao, ho una domanda sui prezzi di MIA Assistant', '_blank')}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground w-14 h-14 rounded-full shadow-brand-xl flex items-center justify-center transition-brand cta-pulse"
      aria-label="Contattaci su WhatsApp"
    >
      <Icon name="MessageCircle" size={24} />
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Prezzi MIA Assistant - Piani Trasparenti per Ristoranti e Saloni</title>
        <meta name="description" content="Scopri i prezzi trasparenti di MIA Assistant. Piani flessibili per ristoranti e saloni con calcolatore ROI e confronto funzionalità. Prova gratuita 14 giorni." />
        <meta name="keywords" content="prezzi mia assistant, costi automazione ristorante, piano whatsapp business, roi calcolatore, prezzo gestione ordini" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Prezzi Trasparenti,
                <span className="text-primary block">Risultati Garantiti</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Scegli il piano perfetto per la tua attività. Tutti i prezzi sono IVA esclusa, 
                con prova gratuita e nessun costo di setup.
              </p>

              {/* Annual/Monthly Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-sm font-medium ${!showAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Mensile
                </span>
                <button
                  onClick={() => setShowAnnual(!showAnnual)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-brand ${
                    showAnnual ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      showAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${showAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annuale
                </span>
                {showAnnual && (
                  <span className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Risparmia fino a €298
                  </span>
                )}
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {plans?.map((plan) => (
                <PricingCard
                  key={plan?.id}
                  plan={plan}
                  isPopular={plan?.popular}
                  isSelected={selectedPlan?.id === plan?.id}
                  onSelect={handlePlanSelect}
                  calculatedPrice={plan?.id === calculatorResults?.recommendedPlan ? calculatorResults?.estimatedPrice : null}
                  calculatedOrders={plan?.id === calculatorResults?.recommendedPlan ? calculatorResults?.estimatedOrders : null}
                />
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-brand">
                <Icon name="Shield" size={24} className="text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">Sicurezza</div>
                <div className="text-sm text-muted-foreground">GDPR Compliant</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-brand">
                <Icon name="Clock" size={24} className="text-success mx-auto mb-2" />
                <div className="font-semibold text-foreground">Setup Veloce</div>
                <div className="text-sm text-muted-foreground">Operativo in 24h</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-brand">
                <Icon name="HeadphonesIcon" size={24} className="text-accent mx-auto mb-2" />
                <div className="font-semibold text-foreground">Supporto</div>
                <div className="text-sm text-muted-foreground">In italiano</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-brand">
                <Icon name="TrendingUp" size={24} className="text-primary mx-auto mb-2" />
                <div className="font-semibold text-foreground">ROI Medio</div>
                <div className="text-sm text-muted-foreground">300% in 3 mesi</div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Calcola il Tuo ROI
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scopri quanto puoi guadagnare e risparmiare con MIA Assistant
              </p>
            </div>

            <PricingCalculator onCalculationChange={handleCalculatorChange} />

            {/* Recommended Plan Highlight */}
            {calculatorResults?.recommendedPlan && (
              <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Piano Consigliato per Te
                    </h3>
                    <p className="text-muted-foreground">
                      Basato sui tuoi dati, il piano <strong>{getRecommendedPlan()?.name}</strong> è perfetto per la tua attività
                    </p>
                  </div>
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => handlePlanSelect(getRecommendedPlan())}
                    className="cta-pulse"
                  >
                    Scegli {getRecommendedPlan()?.name}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Plan Comparison Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PlanComparison onPlanSelect={handlePlanSelect} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TestimonialSection />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSection />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Pronto a Trasformare la Tua Attività?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Unisciti a oltre 450 ristoranti e saloni che hanno già scelto MIA Assistant
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handlePlanSelect(plans?.find(p => p?.id === 'starter'))}
                iconName="Play"
                iconPosition="left"
              >
                Prova Gratis 14 Giorni
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=Ciao, vorrei una demo personalizzata di MIA Assistant', '_blank')}
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              >
                Richiedi Demo
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/80 mt-6">
              Nessuna carta di credito richiesta • Setup gratuito • Supporto in italiano
            </p>
          </div>
        </section>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default PricingPage;