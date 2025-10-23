import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';

import Button from '../../components/ui/Button';
import StepCard from './components/StepCard';
import ProgressTimeline from './components/ProgressTimeline';
import InteractiveDemo from './components/InteractiveDemo';
import DownloadableChecklist from './components/DownloadableChecklist';
import TransformationStory from './components/TransformationStory';

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement?.scrollTop;
      const windowHeight = document.documentElement?.scrollHeight - document.documentElement?.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
  {
    step: 1,
    label: "Configurazione",
    title: "Configura il Tuo Profilo Aziendale",
    description: `Inizia collegando il tuo account WhatsApp Business esistente a MIA Assistant. Il processo è completamente guidato e richiede solo pochi minuti.\n\nNon serve scaricare app aggiuntive o cambiare numero di telefono. MIA si integra perfettamente con il tuo WhatsApp attuale.`,
    image: "https://images.unsplash.com/photo-1658311409759-ee6f20cf2149",
    imageAlt: "Modern smartphone displaying WhatsApp Business interface with professional setup screen",
    features: [
    "Connessione sicura con WhatsApp Business API",
    "Mantenimento del numero esistente",
    "Backup automatico delle conversazioni",
    "Configurazione guidata in 5 minuti"],

    ctaText: "Vedi Demo Configurazione",
    demo: {
      title: "Configurazione Account",
      messages: [
      {
        sender: 'system',
        text: 'Benvenuto in MIA Assistant! Iniziamo configurando il tuo profilo.',
        timestamp: new Date(Date.now() - 300000)
      },
      {
        sender: 'customer',
        text: 'Perfetto, come procediamo?',
        timestamp: new Date(Date.now() - 240000)
      },
      {
        sender: 'system',
        text: 'Ti guiderò passo dopo passo. Prima, confermi che questo è il numero WhatsApp del tuo ristorante?',
        timestamp: new Date(Date.now() - 180000)
      },
      {
        sender: 'customer',
        text: 'Sì, esatto!',
        timestamp: new Date(Date.now() - 120000)
      },
      {
        sender: 'system',
        text: 'Ottimo! Ora caricheremo il tuo menu. Hai già un menu digitale o preferisci che ti aiuti a crearlo?',
        timestamp: new Date(Date.now() - 60000)
      }]

    }
  },
  {
    step: 2,
    label: "Personalizzazione",
    title: "Personalizza Menu e Risposte Automatiche",
    description: `Carica il tuo menu completo con prezzi, descrizioni e immagini. MIA imparerà automaticamente a presentare i tuoi piatti e servizi.\n\nPersonalizza il tono di voce e lo stile comunicativo per riflettere la personalità del tuo brand. Ogni risposta sarà autentica e professionale.`,
    image: "https://images.unsplash.com/photo-1728044849321-4cbffc50cc1d",
    imageAlt: "Restaurant owner uploading menu items on tablet with food photos and descriptions visible on screen",
    features: [
    "Caricamento menu con foto e descrizioni",
    "Personalizzazione tono di voce",
    "Gestione prezzi e disponibilità",
    "Template di risposta personalizzabili"],

    ctaText: "Esplora Personalizzazione",
    demo: {
      title: "Personalizzazione Menu",
      messages: [
      {
        sender: 'customer',
        text: 'Ciao, avete pizza margherita?',
        timestamp: new Date(Date.now() - 180000)
      },
      {
        sender: 'system',
        text: 'Certo! La nostra Pizza Margherita è preparata con pomodoro San Marzano, mozzarella di bufala e basilico fresco. Costa €8,50.',
        timestamp: new Date(Date.now() - 120000)
      },
      {
        sender: 'customer',
        text: 'Perfetta! Posso ordinarla per le 20:00?',
        timestamp: new Date(Date.now() - 60000)
      },
      {
        sender: 'system',
        text: 'Assolutamente! Confermo Pizza Margherita per le 20:00. Ti serve altro dal menu?',
        timestamp: new Date(Date.now() - 30000)
      }]

    }
  },
  {
    step: 3,
    label: "Attivazione",
    title: "Vai Online e Inizia a Ricevere Ordini",
    description: `Una volta completata la configurazione, MIA è immediatamente operativo. I tuoi clienti possono iniziare a ordinare via WhatsApp senza scaricare app.\n\nMonitora tutto dalla dashboard: ordini in tempo reale, statistiche di vendita, e conversazioni clienti. Il controllo è sempre nelle tue mani.`,
    image: "https://images.unsplash.com/photo-1733232679107-9c9957c1affa",
    imageAlt: "Restaurant staff celebrating successful order management with tablets showing MIA dashboard and incoming WhatsApp orders",
    features: [
    "Attivazione immediata senza tempi di attesa",
    "Dashboard in tempo reale per monitoraggio",
    "Notifiche istantanee per nuovi ordini",
    "Supporto clienti 24/7 in italiano"],

    ctaText: "Vedi Dashboard Live",
    demo: {
      title: "Sistema Attivo",
      messages: [
      {
        sender: 'customer',
        text: 'Buonasera, vorrei prenotare un tavolo per 4 persone domani sera',
        timestamp: new Date(Date.now() - 240000)
      },
      {
        sender: 'system',
        text: 'Buonasera! Sarò felice di aiutarla con la prenotazione. Per che ora preferisce il tavolo?',
        timestamp: new Date(Date.now() - 180000)
      },
      {
        sender: 'customer',
        text: 'Verso le 20:30 se possibile',
        timestamp: new Date(Date.now() - 120000)
      },
      {
        sender: 'system',
        text: 'Perfetto! Ho disponibilità per domani alle 20:30. Può confermarmi il nome per la prenotazione?',
        timestamp: new Date(Date.now() - 60000)
      },
      {
        sender: 'customer',
        text: 'Marco Rossi',
        timestamp: new Date(Date.now() - 30000)
      },
      {
        sender: 'system',
        text: 'Prenotazione confermata per Marco Rossi, 4 persone, domani ore 20:30. Riceverà un promemoria. A presto!',
        timestamp: new Date()
      }]

    }
  }];


  const transformationStories = [
  {
    businessName: "Trattoria da Giuseppe",
    businessType: "Ristorante Tradizionale",
    location: "Roma Centro",
    businessImage: "https://images.unsplash.com/photo-1708430987268-22519ff418d1",
    businessImageAlt: "Cozy Italian restaurant interior with warm lighting and traditional wooden tables",
    timeframe: "3 mesi",
    beforeChallenges: [
    "Perdeva 30% delle chiamate durante il rush",
    "Errori frequenti negli ordini telefonici",
    "Staff sovraccarico nelle ore di punta",
    "Difficoltà a gestire prenotazioni multiple"],

    afterBenefits: [
    "100% degli ordini gestiti automaticamente",
    "Zero errori nella presa ordini",
    "Staff libero di concentrarsi sul servizio",
    "Prenotazioni organizzate e confermate"],

    metrics: [
    { value: "+45%", label: "Ordini" },
    { value: "0", label: "Errori" },
    { value: "24/7", label: "Disponibilità" },
    { value: "+€2.8k", label: "Ricavi/mese" }],

    quote: "MIA ha trasformato completamente il nostro modo di lavorare. Ora possiamo concentrarci sulla cucina e sul servizio, mentre MIA gestisce perfettamente tutti gli ordini. I clienti sono entusiasti della rapidità e precisione.",
    ownerName: "Giuseppe Martinelli",
    ownerTitle: "Proprietario"
  }];


  const handleStepClick = (stepNumber) => {
    setCurrentStep(stepNumber);
    const element = document.getElementById(`step-${stepNumber}`);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleDemoClick = (demo) => {
    setSelectedDemo(demo);
    setShowDemo(true);
  };

  return (
    <>
      <Helmet>
        <title>Come Funziona MIA Assistant - Setup in 3 Semplici Passi</title>
        <meta name="description" content="Scopri come configurare MIA Assistant in meno di 60 minuti. Processo guidato in 3 passi: configurazione WhatsApp, personalizzazione menu, attivazione immediata." />
        <meta name="keywords" content="setup MIA, configurazione WhatsApp Business, automazione ristorante, guida installazione" />
        <meta property="og:title" content="Come Funziona MIA Assistant - Setup Guidato" />
        <meta property="og:description" content="Processo di configurazione semplice e veloce per automatizzare il tuo ristorante con WhatsApp" />
        <link rel="canonical" href="/how-it-works" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Progress Bar */}
        <div className="fixed top-16 left-0 right-0 z-40">
          <div className="h-1 bg-border">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${scrollProgress}%` }} />

          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} />
              <span>Setup Completato in Meno di 10 Minuti</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Come Funziona{' '}
              <span className="text-primary">MIA Assistant</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Trasforma il tuo businass in un'attività completamente automatizzata con il nostro processo di configurazione guidato. Nessuna competenza tecnica richiesta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => handleStepClick(1)}
                iconName="Play"
                iconPosition="left"
                iconSize={20}
                className="cta-pulse">

                Inizia il Tour Guidato
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=Ciao, vorrei una demo personalizzata di MIA Assistant', '_blank')}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}>

                Richiedi Demo Personalizzata
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline Progress */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ProgressTimeline
              currentStep={currentStep}
              steps={steps}
              onStepClick={handleStepClick} />

          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {steps?.map((step) =>
              <div key={step?.step} id={`step-${step?.step}`}>
                  <StepCard
                  {...step}
                  isActive={currentStep === step?.step}
                  onActivate={() => setCurrentStep(step?.step)}
                  onCtaClick={() => handleDemoClick(step?.demo)} />

                </div>
              )}
            </div>
          </div>
        </section>

        {/* Transformation Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Storia di Trasformazione
              </h2>
              <p className="text-lg text-muted-foreground">
                Scopri come MIA ha rivoluzionato il business di Giuseppe
              </p>
            </div>
            
            <TransformationStory story={transformationStories?.[0]} />
          </div>
        </section>

        {/* Downloadable Checklist */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <DownloadableChecklist />
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Domande Frequenti sul Setup
              </h2>
              <p className="text-lg text-muted-foreground">
                Le risposte alle domande più comuni sul processo di configurazione
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
              {
                question: "Quanto tempo richiede la configurazione completa?",
                answer: "Il setup completo richiede meno di 60 minuti. La maggior parte dei clienti completa la configurazione in 30-45 minuti seguendo la nostra guida passo-passo."
              },
              {
                question: "Devo cambiare il mio numero WhatsApp esistente?",
                answer: "Assolutamente no! MIA si integra con il tuo numero WhatsApp Business esistente. Non dovrai cambiare numero né informare i clienti."
              },
              {
                question: "Cosa succede se ho bisogno di aiuto durante il setup?",
                answer: "Il nostro team di supporto italiano è disponibile via WhatsApp, email e telefono durante tutto il processo. Offriamo anche sessioni di configurazione assistita."
              },
              {
                question: "Posso testare MIA prima di attivarlo completamente?",
                answer: "Sì! Dopo la configurazione iniziale, puoi testare tutte le funzionalità in modalità sandbox prima di rendere MIA visibile ai clienti."
              }]?.
              map((faq, index) =>
              <div key={index} className="bg-white rounded-lg shadow-brand p-6">
                  <h3 className="font-semibold text-foreground mb-3">{faq?.question}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq?.answer}</p>
                </div>
              )}
            </div>

            <div className="text-center mt-8">
              <Link to="/faq">
                <Button
                  variant="outline"
                  iconName="HelpCircle"
                  iconPosition="left"
                  iconSize={16}>

                  Vedi Tutte le FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h2 className="text-3xl font-bold mb-4">
                Pronto a Trasformare il Tuo Business?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Unisciti a centinaia di ristoranti e saloni che hanno già automatizzato il loro servizio clienti con MIA Assistant. Setup gratuito e supporto completo incluso.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/pricing">
                  <Button
                    variant="secondary"
                    size="lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={20}
                    className="bg-white text-primary hover:bg-white/90">

                    Scegli il Tuo Piano
                  </Button>
                </Link>
                
                <Link to="/demo">
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Play"
                    iconPosition="left"
                    iconSize={20}
                    className="border-white text-white hover:bg-white/10">

                    Prova la Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-8 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span>Setup Gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span>Supporto 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span>Nessun Contratto</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            variant="default"
            size="icon"
            onClick={() => window.open('https://wa.me/1234567890?text=Ciao, ho visto la pagina "Come Funziona" e vorrei saperne di più su MIA Assistant', '_blank')}
            className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 shadow-brand-xl"
            iconName="MessageCircle"
            iconSize={24} />

        </div>

        {/* Interactive Demo Modal */}
        {showDemo && selectedDemo &&
        <InteractiveDemo
          demoData={selectedDemo}
          onClose={() => setShowDemo(false)} />

        }
      </div>
    </>);

};

export default HowItWorks;