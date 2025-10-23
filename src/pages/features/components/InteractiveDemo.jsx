import React, { useState, useEffect, useRef } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const STEP_INTERVAL = 2200;   // tempo tra i messaggi
const FINAL_PAUSE   = 2500;   // pausa prima di mostrare overlay finale

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('booking');
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Stato overlay/telefono
  const [hasStarted, setHasStarted]   = useState(false);
  const [isFinished, setIsFinished]   = useState(false);
  const phoneRef = useRef(null);

  const demos = {
    booking: {
      title: 'Prenotazione Automatica',
      description: 'Guarda come MIA gestisce una prenotazione completa',
      icon: 'Calendar',
      steps: [
        { type: 'customer', message: 'Ciao! Vorrei prenotare un tavolo per 2 persone domani sera alle 20:00', timestamp: '19:45' },
        { type: 'mia',      message: "Ciao! Perfetto, controllo subito la disponibilità per domani sera alle 20:00 per 2 persone... ✨", timestamp: '19:45' },
        { type: 'mia',      message: "Ottima notizia! Ho disponibilità alle 20:00. Posso confermare la prenotazione a tuo nome? Mi serve solo il tuo nome completo 📝", timestamp: '19:45' },
        { type: 'customer', message: 'Sì, Marco Rossi', timestamp: '19:46' },
        { type: 'mia',      message: "Perfetto Marco! ✅\n\n📅 Prenotazione confermata:\n• Data: Domani 19 Ottobre\n• Orario: 20:00\n• Persone: 2\n• Nome: Marco Rossi\n\nTi invierò un promemoria 2 ore prima. A presto! 🍽️", timestamp: '19:46' }
      ]
    },
    menu: {
      title: 'Consultazione Menu',
      description: 'Scopri come MIA presenta il menu e consiglia piatti',
      icon: 'MenuSquare',
      steps: [
        { type: 'customer', message: 'Potresti mostrarmi il menu di oggi?', timestamp: '20:15' },
        { type: 'mia',      message: "Certamente! Ecco il nostro menu di oggi 📋\n\n🍝 PRIMI PIATTI\n• Spaghetti Carbonara - €14\n• Risotto ai Porcini - €16\n• Penne all'Arrabbiata - €12\n\n🥩 SECONDI PIATTI\n• Tagliata di Manzo - €22\n• Branzino al Sale - €20\n• Pollo alle Erbe - €18", timestamp: '20:15' },
        { type: 'customer', message: 'Cosa mi consigli per una cena romantica?', timestamp: '20:16' },
        { type: 'mia',      message: "Per una serata speciale ti consiglio:\n\n💕 MENU ROMANTICO\n🍝 Risotto ai Porcini (cremoso e raffinato)\n🐟 Branzino al Sale (piatto signature)\n🍷 Pinot Grigio delle nostre colline\n🍰 Tiramisù della casa\n\nTotale: €42 per persona\nVuoi che aggiunga qualcosa? ✨", timestamp: '20:16' }
      ]
    },
    payment: {
      title: 'Pagamento Integrato',
      description: 'Vedi come funziona il sistema di pagamento sicuro',
      icon: 'CreditCard',
      steps: [
        { type: 'customer', message: 'Perfetto! Come posso pagare?', timestamp: '21:30' },
        { type: 'mia',      message: "Puoi pagare comodamente qui su WhatsApp! 💳\n\nAccettiamo:\n• Carte di credito/debito\n• PayPal\n• Apple Pay\n• Google Pay\n\nIl totale è €89,50. Ti invio il link sicuro per il pagamento 🔒", timestamp: '21:30' },
        { type: 'mia',      message: "🔗 Link Pagamento Sicuro\n💰 Totale: €89,50\n🛡️ Pagamento protetto SSL\n\n[PAGA ORA] ← Clicca qui\n\nDopo il pagamento riceverai la ricevuta digitale via email 📧", timestamp: '21:31' },
        { type: 'customer', message: 'Pagamento completato!', timestamp: '21:32' },
        { type: 'mia',      message: "✅ Pagamento ricevuto con successo!\n\n📧 Ricevuta inviata a: marco.rossi@email.com\n🎉 Grazie per aver scelto il nostro ristorante!\n\nTi aspettiamo domani alle 20:00. Buona giornata! 🍽️✨", timestamp: '21:32' }
      ]
    }
  };

  const currentDemo = demos[activeDemo];

  // Avanzamento automatico dei messaggi
  useEffect(() => {
    if (!isPlaying) return;
    if (currentStep >= currentDemo.steps.length - 1) {
      setIsPlaying(false);
      // Ritardo prima di mostrare l’overlay finale
      const t = setTimeout(() => setIsFinished(true), FINAL_PAUSE);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => {
      setCurrentStep((s) => s + 1);
    }, STEP_INTERVAL);
    return () => clearInterval(id);
  }, [isPlaying, currentStep, currentDemo.steps.length]);

  // Cambio demo: reset telefono
  const handleDemoChange = (key) => {
    setActiveDemo(key);
    setCurrentStep(0);
    setIsPlaying(false);
    setHasStarted(false);
    setIsFinished(false);
    // scroll dolce verso il telefono
    requestAnimationFrame(() => {
      phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  const startDemo = () => {
    setHasStarted(true);
    setIsFinished(false);
    setCurrentStep(0);
    setIsPlaying(true);
    // autoscroll al telefono quando parte
    phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const replayDemo = () => {
    setCurrentStep(0);
    setIsFinished(false);
    setIsPlaying(true);
    phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const closeOverlay = () => setIsFinished(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Prova MIA in Azione</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interagisci con le demo per vedere come MIA trasforma le conversazioni in risultati
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Selettore demo (rimane) */}
          <div className="lg:col-span-4">
            <div className="space-y-4">
              {Object.entries(demos).map(([key, demo]) => (
                <button
                  key={key}
                  onClick={() => handleDemoChange(key)}
                  className={`w-full text-left p-6 rounded-xl transition-brand hover-lift ${
                    activeDemo === key
                      ? 'bg-primary text-primary-foreground shadow-brand-lg'
                      : 'bg-muted/30 hover:bg-muted/50 text-foreground border border-border'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${activeDemo === key ? 'bg-white/20' : 'bg-primary/10'} p-3 rounded-lg`}>
                      <Icon name={demo.icon} size={24} className={activeDemo === key ? 'text-white' : 'text-primary'} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{demo.title}</h3>
                      <p className={`text-sm ${activeDemo === key ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {demo.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Telefono */}
          <div className="lg:col-span-8">
            <div ref={phoneRef} className="relative mx-auto w-[320px] h-[640px] sm:w-[320px] sm:h-[660px]">
              {/* Telaio telefono */}
              <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
                  {/* Header chat */}
                  <div className="bg-primary text-white p-3 flex items-center space-x-3">
                    <Icon name="ArrowLeft" size={18} />
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=40&h=40&fit=crop"
                      alt="Logo"
                      className="w-9 h-9 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold">MIA Assistant</div>
                      <div className="text-xs opacity-90">online</div>
                    </div>
                    <Icon name="Phone" size={16} />
                    <Icon name="Video" size={16} />
                  </div>

                  {/* Chat */}
                  <div className="relative bg-[#E5DDD5] flex-1 p-3 space-y-3 overflow-y-auto">
                    {currentDemo.steps.slice(0, hasStarted ? currentStep + 1 : 0).map((step, idx) => (
                      <div key={idx} className={`flex ${step.type === 'customer' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                            step.type === 'customer'
                              ? 'bg-primary text-white'
                              : 'bg-white text-foreground border border-border shadow-sm'
                          }`}
                        >
                          <p className="text-xs whitespace-pre-line">{step.message}</p>
                          <p
                            className={`text-[10px] mt-1 ${
                              step.type === 'customer' ? 'text-white/80 text-right' : 'text-gray-500'
                            }`}
                          >
                            {step.timestamp}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Indicator typing (facoltativo) */}
                    {isPlaying && currentStep < currentDemo.steps.length - 1 && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-border rounded-2xl px-4 py-3 shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Overlay iniziale SOLO pulsante */}
                    {!hasStarted && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                          <Button
                            variant="default"
                            size="lg"
                            iconName="Play"
                            iconPosition="left"
                            onClick={startDemo}
                          >
                            Avvia demo
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Overlay finale (mostrato dopo FINAL_PAUSE) */}
                    {isFinished && (
                      <div className="absolute inset-0 flex items-end justify-center pb-6">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 flex gap-3">
                          <Button variant="default" size="sm" iconName="RotateCcw" iconPosition="left" onClick={replayDemo}>
                            Rivedi demo
                          </Button>
                          <Button variant="outline" size="sm" onClick={closeOverlay}>
                            Chiudi
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input disabilitato */}
                  <div className="p-3 border-t border-border">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-full border border-border opacity-50">
                      <Icon name="MessageCircle" size={20} className="text-muted-foreground" />
                      <span className="flex-1 text-muted-foreground text-sm">Demo in corso... usa il pulsante nel display</span>
                      <Icon name="Send" size={20} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge flottanti (opzionali) */}
              <div className="absolute -top-3 -right-3 bg-white p-2 rounded-lg shadow-lg z-10 flex items-center space-x-1">
                <Icon name="CheckCircle" size={16} className="text-green-500" />
                <span className="text-xs font-medium">Zero Errori</span>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-white p-2 rounded-lg shadow-lg z-10 flex items-center space-x-1">
                <Icon name="TrendingUp" size={16} className="text-primary" />
                <span className="text-xs font-medium">+20% Ordini</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
