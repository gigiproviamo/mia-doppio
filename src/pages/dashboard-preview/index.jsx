import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import DashboardHeader from './components/DashboardHeader';
import MetricsOverview from './components/MetricsOverview';
import LiveConversations from './components/LiveConversations';
import AutomationStats from './components/AutomationStats';
import RevenueChart from './components/RevenueChart';
import FeatureHighlights from './components/FeatureHighlights';
import SystemStatus from './components/SystemStatus';
import CTASection from './components/CTASection';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const DashboardPreview = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('restaurant');
  const [currentLanguage, setCurrentLanguage] = useState('it');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const handleWhatsAppContact = () => {
    const message = selectedIndustry === 'restaurant' ? "Ciao! Ho visto l'anteprima dashboard per ristoranti. Vorrei saperne di più su MIA." :"Ciao! Ho visto l'anteprima dashboard per saloni. Vorrei saperne di più su MIA.";
    
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Anteprima Dashboard - MIA Assistant | Il tuo cameriere digitale</title>
        <meta name="description" content="Scopri l'interfaccia MIA Dashboard. Gestisci ordini, prenotazioni e automazione del tuo ristorante o salone direttamente da WhatsApp. Prova gratuita disponibile." />
        <meta name="keywords" content="dashboard MIA, gestione ristorante, automazione salone, WhatsApp business, interfaccia utente" />
        <meta property="og:title" content="Anteprima Dashboard MIA - Gestione Automatizzata" />
        <meta property="og:description" content="Esplora la dashboard MIA per ristoranti e saloni. Automazione completa via WhatsApp con metriche in tempo reale." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/dashboard-preview" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Anteprima Dashboard MIA
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Scopri come MIA trasforma la gestione del tuo business con un'interfaccia 
                intuitiva e automazione intelligente via WhatsApp
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="default" 
                  size="lg"
                  className="cta-pulse"
                  iconName="Play"
                  iconPosition="left"
                >
                  Inizia la demo interattiva
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleWhatsAppContact}
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Parla con un esperto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Interface */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Dashboard Container */}
            <div className="bg-white rounded-xl shadow-brand-lg border border-border overflow-hidden">
              {/* Dashboard Header */}
              <DashboardHeader 
                selectedIndustry={selectedIndustry}
                onIndustryChange={setSelectedIndustry}
              />
              
              {/* Dashboard Content */}
              <div className="p-6 bg-muted/30">
                {/* Metrics Overview */}
                <MetricsOverview selectedIndustry={selectedIndustry} />
                
                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  {/* Left Column - Conversations & Stats */}
                  <div className="lg:col-span-2 space-y-8">
                    <LiveConversations selectedIndustry={selectedIndustry} />
                    <RevenueChart selectedIndustry={selectedIndustry} />
                  </div>
                  
                  {/* Right Column - Automation & System */}
                  <div className="space-y-8">
                    <AutomationStats selectedIndustry={selectedIndustry} />
                    <SystemStatus />
                  </div>
                </div>
                
                {/* Feature Highlights */}
                <FeatureHighlights selectedIndustry={selectedIndustry} />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Funzionalità Interactive
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Esplora le capacità avanzate di MIA con questi elementi interattivi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Live Chat Simulation */}
              <div className="bg-muted/30 rounded-lg p-6 hover-lift">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Chat Simulation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Prova una conversazione reale con MIA per vedere come gestisce {selectedIndustry === 'restaurant' ? 'ordini e prenotazioni' : 'appuntamenti e consulenze'}
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Avvia simulazione
                </Button>
              </div>
              
              {/* Analytics Deep Dive */}
              <div className="bg-muted/30 rounded-lg p-6 hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Analytics Avanzate
                </h3>
                <p className="text-muted-foreground mb-4">
                  Esplora report dettagliati su performance, ROI e metriche di automazione
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Visualizza report
                </Button>
              </div>
              
              {/* Integration Preview */}
              <div className="bg-muted/30 rounded-lg p-6 hover-lift">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Plug" size={24} className="text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Integrazioni POS
                </h3>
                <p className="text-muted-foreground mb-4">
                  Scopri come MIA si integra con il tuo sistema POS esistente
                </p>
                <Button variant="outline" size="sm" fullWidth>
                  Vedi integrazioni
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Specifiche Tecniche
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Architettura robusta e sicura per la tua tranquillità
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <Icon name="Zap" size={32} className="text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">Risposta &lt; 2s</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <Icon name="Shield" size={32} className="text-success mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Sicurezza</h4>
                <p className="text-sm text-muted-foreground">Crittografia E2E</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <Icon name="Globe" size={32} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Disponibilità</h4>
                <p className="text-sm text-muted-foreground">99.9% Uptime</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center">
                <Icon name="Smartphone" size={32} className="text-warning mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Mobile First</h4>
                <p className="text-sm text-muted-foreground">Ottimizzato WhatsApp</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <CTASection selectedIndustry={selectedIndustry} />
          </div>
        </section>

        {/* Fixed WhatsApp Button */}
        <button
          onClick={handleWhatsAppContact}
          className="fixed bottom-6 right-6 w-14 h-14 bg-accent hover:bg-accent/90 rounded-full shadow-brand-lg flex items-center justify-center transition-brand z-40 touch-target"
          aria-label="Contatta su WhatsApp"
        >
          <Icon name="MessageCircle" size={24} className="text-white" />
        </button>
      </div>
    </>
  );
};

export default DashboardPreview;