import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CoreFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'smart-booking',
      title: 'Prenotazioni Intelligenti',
      description:
        'Sistema di booking automatico che gestisce disponibilità, conferme e promemoria senza intervento manuale.',
      benefits: [
        'Riduzione no-show del 65%',
        "Gestione automatica liste d\'attesa",
        'Sincronizzazione calendario in tempo reale',
        'Conferme automatiche via WhatsApp',
      ],
      icon: 'Calendar',
      image: 'https://images.unsplash.com/photo-1672870634122-6ea7b16d2bb4',
      imageAlt:
        'Modern restaurant interior with elegant table settings and warm lighting showing organized dining space',
      demo: {
        customer: 'Vorrei prenotare per 4 persone stasera alle 20:00',
        mia: 'Perfetto! Ho disponibilità per 4 persone alle 20:00. Confermo la prenotazione a nome di Marco Rossi. Riceverai un promemoria 2 ore prima. 📅✨',
      },
      stats: {
        value: '95%',
        label: 'Tasso di conferma automatica',
      },
    },
    {
      id: 'menu-management',
      title: 'Gestione Menu Dinamica',
      description:
        'Menu digitale sempre aggiornato con prezzi, disponibilità e descrizioni che si adattano automaticamente.',
      benefits: [
        'Aggiornamenti istantanei disponibilità',
        'Prezzi dinamici per promozioni',
        'Descrizioni multilingue automatiche',
        'Suggerimenti personalizzati AI',
      ],
      icon: 'MenuSquare',
      image: 'https://images.unsplash.com/photo-1728044849321-4cbffc50cc1d',
      imageAlt:
        'Elegant restaurant menu displayed on tablet with various Italian dishes and wine selections',
      demo: {
        customer: 'Cosa mi consigli per una cena romantica?',
        mia: 'Per una serata speciale ti consiglio il nostro Risotto ai Porcini (€18) e il Branzino in Crosta di Sale (€24). Abbinamento perfetto con il nostro Pinot Grigio. 🍷✨',
      },
      stats: {
        value: '40%',
        label: 'Aumento ordini medi',
      },
    },
    {
      id: 'payment-integration',
      title: 'Pagamenti Integrati',
      description:
        'Sistema di pagamento sicuro direttamente in WhatsApp con supporto per tutte le carte e metodi digitali.',
      benefits: [
        'Pagamenti sicuri in-chat',
        'Supporto carte e wallet digitali',
        'Fatturazione automatica',
        'Riconciliazione contabile',
      ],
      icon: 'CreditCard',
      image: 'https://images.unsplash.com/photo-1631016800686-1b3524982956',
      imageAlt:
        'Modern payment terminal and smartphone showing secure digital payment transaction in restaurant setting',
      demo: {
        customer: 'Posso pagare con carta?',
        mia: 'Certamente! Ti invio il link di pagamento sicuro. Accettiamo Visa, Mastercard, PayPal e Apple Pay. Il totale è €45,50 💳',
      },
      stats: {
        value: '99.9%',
        label: 'Transazioni sicure',
      },
    },
    {
      id: 'customer-analytics',
      title: 'Analisi Clienti Avanzate',
      description:
        'Dashboard completa con insights sui clienti, preferenze e comportamenti per ottimizzare il business.',
      benefits: [
        'Profili clienti automatici',
        'Analisi preferenze e abitudini',
        'Campagne marketing mirate',
        'Previsioni vendite AI',
      ],
      icon: 'BarChart3',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
      imageAlt:
        'Business analytics dashboard on laptop screen showing customer data charts and sales metrics',
      demo: {
        customer: 'Quali sono i miei piatti preferiti?',
        mia: 'Dai tuoi ultimi ordini vedo che ami la Carbonara (ordinata 8 volte) e il Tiramisù. Oggi abbiamo una variante speciale della Carbonara con tartufo! 🍝',
      },
      stats: {
        value: '35%',
        label: 'Incremento customer retention',
      },
    },
  ];

  const currentFeature = features?.[activeFeature];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funzionalità che Fanno la Differenza
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ogni funzione è progettata per semplificare la gestione del tuo business e migliorare l&apos;esperienza dei
            clienti
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* NAV / ACCORDION (mobile) */}
          <div className="lg:col-span-4">
            <div className="space-y-3">
              {features?.map((feature, index) => {
                const isActive = activeFeature === index;
                const regionId = `corefeat-${index}`;
                const btnId = `corefeat-btn-${index}`;

                return (
                  <article
                    key={feature?.id}
                    className={`rounded-xl transition-brand hover-lift border-2 ${
                      isActive
                        ? 'bg-white border-primary text-foreground shadow-brand-lg'
                        : 'bg-muted/30 border-transparent text-foreground hover:bg-muted/50'
                    }
                    ${isActive ? 'lg:bg-primary lg:text-primary-foreground lg:border-transparent' : 'lg:bg-muted/30'}
                  `}
                  >
                    <button
                      id={btnId}
                      aria-controls={regionId}
                      aria-expanded={isActive}
                      onClick={() => setActiveFeature(index)}
                      className="w-full text-left p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-2 rounded-lg ${
                            isActive ? 'bg-primary/10 lg:bg-white/20' : 'bg-primary/10'
                          }`}
                        >
                          <Icon
                            name={feature?.icon}
                            size={24}
                            className={isActive ? 'text-primary lg:text-white' : 'text-primary'}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{feature?.title}</h3>
                          <p
                            className={`text-sm ${
                              isActive ? 'text-foreground/80 lg:text-primary-foreground/80' : 'text-muted-foreground'
                            }`}
                          >
                            {feature?.description}
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* MOBILE: contenuto inline nell'accordion */}
                    <div
                      id={regionId}
                      role="region"
                      aria-labelledby={btnId}
                      className={`${isActive ? 'block' : 'hidden'} lg:hidden px-6 pt-0
                                  pb-[calc(5rem+env(safe-area-inset-bottom))]`}
                    >
                      {/* Immagine compatta */}
                      <div className="mb-6 overflow-hidden rounded-xl">
                        <Image
                          src={feature?.image}
                          alt={feature?.imageAlt}
                          className="w-full h-48 sm:h-56 object-cover"
                        />
                      </div>

                      {/* Dettagli */}
                      <div className="space-y-8">
                        {/* Vantaggi */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Vantaggi Principali</h4>
                          <ul className="space-y-3">
                            {feature?.benefits?.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                                <span className="text-foreground/90">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Demo */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Esempio Conversazione</h4>
                          <div className="space-y-3">
                            <div className="whatsapp-message whatsapp-message-received">
                              <p className="text-sm">{feature?.demo?.customer}</p>
                            </div>
                            <div className="whatsapp-message whatsapp-message-sent">
                              <p className="text-sm">{feature?.demo?.mia}</p>
                            </div>
                          </div>

                          {/* Stat pill compatta e glass */}
                          <div className="mt-6 flex justify-center">
                            <div className="inline-flex flex-col items-center justify-center 
                                            rounded-2xl bg-white/70 backdrop-blur-sm shadow-md 
                                            ring-1 ring-black/5 px-6 py-3">
                              <div className="text-2xl font-bold text-primary tracking-tight drop-shadow-sm">
                                {feature?.stats?.value}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5 text-center whitespace-nowrap">
                                {feature?.stats?.label}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA full width */}
                        <div className="pt-6 border-t border-border">
                          <Button variant="default" size="lg" className="w-full" iconName="Play" iconPosition="left">
                            Prova {feature?.title}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* DESKTOP: pannello contenuti */}
          <div className="lg:col-span-8 hidden lg:block">
            <div className="bg-gradient-to-br from-muted/20 to-primary/5 rounded-2xl p-8">
              <div className="mb-8 overflow-hidden rounded-xl">
                <Image
                  src={currentFeature?.image}
                  alt={currentFeature?.imageAlt}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Vantaggi Principali</h4>
                  <ul className="space-y-3">
                    {currentFeature?.benefits?.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Esempio Conversazione</h4>
                  <div className="space-y-3">
                    <div className="whatsapp-message whatsapp-message-received">
                      <p className="text-sm">{currentFeature?.demo?.customer}</p>
                    </div>
                    <div className="whatsapp-message whatsapp-message-sent">
                      <p className="text-sm">{currentFeature?.demo?.mia}</p>
                    </div>
                  </div>

                  {/* Stat pill compatta */}
                  <div className="mt-6 flex justify-center">
                    <div className="inline-flex flex-col items-center justify-center 
                                    rounded-2xl bg-white/70 backdrop-blur-sm shadow-md 
                                    ring-1 ring-black/5 px-6 py-3">
                      <div className="text-2xl font-bold text-primary tracking-tight drop-shadow-sm">
                        {currentFeature?.stats?.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 text-center whitespace-nowrap">
                        {currentFeature?.stats?.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <Button variant="default" size="lg" iconName="Play" iconPosition="left">
                  Prova {currentFeature?.title}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
