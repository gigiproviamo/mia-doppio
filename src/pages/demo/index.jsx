import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import WhatsAppSimulator from './components/WhatsAppSimulator';
import DashboardPreview from './components/DashboardPreview';
import DemoWalkthrough from './components/DemoWalkthrough';
import VideoPlayer from './components/VideoPlayer';

const Demo = () => {
  const [activeDemo, setActiveDemo] = useState('walkthrough');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const demoSections = [
  {
    id: 'walkthrough',
    title: 'Tour Guidato',
    description: 'Scopri MIA passo dopo passo',
    icon: 'Route',
    component: DemoWalkthrough
  },
  {
    id: 'chat',
    title: 'Chat Simulator',
    description: 'Prova le conversazioni WhatsApp',
    icon: 'MessageCircle',
    component: WhatsAppSimulator
  },
  {
    id: 'dashboard',
    title: 'Dashboard Live',
    description: 'Esplora il pannello di controllo',
    icon: 'BarChart3',
    component: DashboardPreview
  },
  {
    id: 'video',
    title: 'Video Demo',
    description: 'Guarda MIA in azione',
    icon: 'Play',
    component: VideoPlayer
  }];


  const testimonials = [
  {
    id: 1,
    name: 'Marco Rossi',
    business: 'Ristorante Da Marco',
    location: 'Milano',
    rating: 5,
    comment: `MIA ha rivoluzionato il nostro servizio! In una settimana abbiamo aumentato le prenotazioni del 40%. I clienti adorano la semplicità di WhatsApp.`,
    avatar: "https://images.unsplash.com/photo-1677061856381-1a000bf70999",
    avatarAlt: 'Professional headshot of restaurant owner Marco with warm smile and chef attire',
    results: {
      orders: '+40%',
      satisfaction: '98%',
      time: '-60%'
    }
  },
  {
    id: 2,
    name: 'Sofia Bianchi',
    business: 'Salone Eleganza',
    location: 'Roma',
    rating: 5,
    comment: `Incredibile! MIA gestisce tutti gli appuntamenti automaticamente. Ora posso concentrarmi sui clienti invece che sul telefono.`,
    avatar: "https://images.unsplash.com/photo-1661256093460-d9a5906b4951",
    avatarAlt: 'Professional headshot of salon owner Sofia with elegant styling and confident expression',
    results: {
      bookings: '+65%',
      efficiency: '+80%',
      revenue: '+35%'
    }
  }];


  const stats = [
  { label: 'Ristoranti Attivi', value: '300+', icon: 'UtensilsCrossed' },
  { label: 'Ordini Processati', value: '15K+', icon: 'ShoppingBag' },
  { label: 'Tempo di Risposta', value: '<15s', icon: 'Clock' },
  { label: 'Soddisfazione', value: '98%', icon: 'Heart' }];


  const ActiveComponent = demoSections?.find((section) => section?.id === activeDemo)?.component;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Icon name="Bot" size={32} className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Caricamento Demo...</h2>
          <p className="text-muted-foreground">Preparando l'esperienza MIA per te</p>
        </div>
      </div>);

  }

  return (
    <>
      <Helmet>
        <title>Demo Interattiva - MIA Assistant | Il Tuo Cameriere Digitale</title>
        <meta name="description" content="Prova MIA Assistant gratuitamente. Demo interattiva con simulatore WhatsApp, dashboard live e tour guidato. Scopri come automatizzare il tuo business in 3 minuti." />
        <meta name="keywords" content="demo MIA, prova gratuita, simulatore WhatsApp, dashboard ristorante, automazione business" />
        <meta property="og:title" content="Demo Interattiva MIA Assistant - Prova Gratis" />
        <meta property="og:description" content="Testa MIA Assistant con la nostra demo interattiva. Simulatore WhatsApp, dashboard live e video dimostrativi." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/demo" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Zap" size={16} />
                <span>Demo Interattiva Gratuita</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Prova <span className="text-primary">MIA Assistant</span>
                <br />
                <span className="text-2xl lg:text-4xl text-muted-foreground font-normal">
                  Il tuo cameriere digitale
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Scopri come MIA trasforma il tuo business con WhatsApp. 
                Nessuna registrazione richiesta, inizia subito la demo!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats?.map((stat, index) =>
                <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{stat?.value}</div>
                    <div className="text-sm text-muted-foreground">{stat?.label}</div>
                  </div>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  className="cta-pulse"
                  onClick={() => setActiveDemo('walkthrough')}
                  iconName="Play"
                  iconPosition="left"
                  iconSize={20}>

                  Inizia Demo Guidata
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://wa.me/1234567890?text=Ciao! Vorrei provare MIA Assistant per il mio business', '_blank')}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={20}>

                  Prova su WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Navigation */}
        <section className="py-8 border-b border-border bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <nav className="flex space-x-1 bg-muted/50 rounded-xl p-1 overflow-x-auto">
                {demoSections?.map((section) =>
                <button
                  key={section?.id}
                  onClick={() => setActiveDemo(section?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-brand whitespace-nowrap ${
                  activeDemo === section?.id ?
                  'bg-white text-primary shadow-brand' :
                  'text-muted-foreground hover:text-foreground hover:bg-white/50'}`
                  }>

                    <Icon name={section?.icon} size={16} />
                    <span className="hidden sm:inline">{section?.title}</span>
                  </button>
                )}
              </nav>
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {/* Demo Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {demoSections?.find((s) => s?.id === activeDemo)?.title}
                </h2>
                <p className="text-muted-foreground">
                  {demoSections?.find((s) => s?.id === activeDemo)?.description}
                </p>
              </div>

              {/* Active Demo Component */}
              {ActiveComponent && <ActiveComponent />}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Cosa Dicono i Nostri Clienti
                </h2>
                <p className="text-muted-foreground">
                  Risultati reali da business che hanno scelto MIA
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials?.map((testimonial) =>
                <div key={testimonial?.id} className="bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-brand">
                    <div className="flex items-start space-x-4 mb-6">
                      <img
                      src={testimonial?.avatar}
                      alt={testimonial?.avatarAlt}
                      className="w-16 h-16 rounded-full object-cover" />

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial?.rating)]?.map((_, i) =>
                          <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                          )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{testimonial?.business}</p>
                        <p className="text-xs text-muted-foreground">{testimonial?.location}</p>
                      </div>
                    </div>

                    <blockquote className="text-foreground mb-6 italic">
                      "{testimonial?.comment}"
                    </blockquote>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                      {Object.entries(testimonial?.results)?.map(([key, value]) =>
                    <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key === 'orders' ? 'Ordini' :
                        key === 'satisfaction' ? 'Soddisfazione' :
                        key === 'time' ? 'Tempo Risparmiato' :
                        key === 'bookings' ? 'Prenotazioni' :
                        key === 'efficiency' ? 'Efficienza' :
                        key === 'revenue' ? 'Fatturato' : key}
                          </div>
                        </div>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Pronto a Trasformare il Tuo Business?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Unisciti a centinaia di ristoranti e saloni che hanno già scelto MIA. 
                Setup gratuito e supporto completo incluso.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 cta-pulse"
                  iconName="Zap"
                  iconPosition="left"
                  iconSize={20}>

                  Inizia Gratis Ora
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-primary-foreground border-primary-foreground hover:bg-white/10"
                  onClick={() => window.open('https://wa.me/1234567890?text=Ho provato la demo e vorrei parlare con un esperto MIA', '_blank')}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={20}>

                  Parla con un Esperto
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span className="text-sm">Setup in 5 minuti</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span className="text-sm">Supporto gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} />
                  <span className="text-sm">Nessun contratto</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-secondary text-secondary-foreground py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold">MIA Assistant</span>
                  </div>
                  <p className="text-secondary-foreground/80 mb-4 max-w-md">
                    Il cameriere digitale che trasforma il tuo business con WhatsApp. 
                    Automazione intelligente, risultati immediati.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-secondary-foreground hover:text-accent"
                      onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                      iconName="MessageCircle"
                      iconPosition="left"
                      iconSize={16}>

                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Demo</h4>
                  <ul className="space-y-2 text-secondary-foreground/80">
                    <li><button onClick={() => setActiveDemo('walkthrough')} className="hover:text-accent transition-brand">Tour Guidato</button></li>
                    <li><button onClick={() => setActiveDemo('chat')} className="hover:text-accent transition-brand">Chat Simulator</button></li>
                    <li><button onClick={() => setActiveDemo('dashboard')} className="hover:text-accent transition-brand">Dashboard Live</button></li>
                    <li><button onClick={() => setActiveDemo('video')} className="hover:text-accent transition-brand">Video Demo</button></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Supporto</h4>
                  <ul className="space-y-2 text-secondary-foreground/80">
                    <li><a href="/how-it-works" className="hover:text-accent transition-brand">Come Funziona</a></li>
                    <li><a href="/features" className="hover:text-accent transition-brand">Funzionalità</a></li>
                    <li><a href="/pricing" className="hover:text-accent transition-brand">Prezzi</a></li>
                    <li><button onClick={() => window.open('https://wa.me/1234567890?text=Ho bisogno di aiuto con MIA', '_blank')} className="hover:text-accent transition-brand">Contattaci</button></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
                <p>&copy; {new Date()?.getFullYear()} MIA Assistant. Tutti i diritti riservati.</p>
              </div>
            </div>
          </div>
        </footer>

        {/* Fixed WhatsApp Button */}
        <button
          onClick={() => window.open('https://wa.me/1234567890?text=Ciao! Ho provato la demo e vorrei saperne di più su MIA Assistant', '_blank')}
          className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-brand-xl hover:shadow-brand-lg hover:scale-110 transition-brand flex items-center justify-center z-50"
          aria-label="Contattaci su WhatsApp">

          <Icon name="MessageCircle" size={24} />
        </button>
      </div>
    </>);

};

export default Demo;