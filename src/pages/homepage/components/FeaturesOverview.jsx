import React, { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import IndustryToggle from '../../../components/ui/IndustryToggle';

const FeaturesOverview = ({ activeIndustry, onIndustryToggle }) => {
  const [activeId, setActiveId] = useState(null); // uno slot aperto alla volta

  const restaurantFeatures = [
    {
      id: 'menu',
      icon: 'Menu',
      title: 'Menu Digitale Interattivo',
      description: 'Menu sempre aggiornato con prezzi, disponibilità e immagini dei piatti',
      benefits: ['Aggiornamenti in tempo reale', 'Immagini HD dei piatti', 'Categorie personalizzabili'],
      image: 'https://images.unsplash.com/photo-1677449243782-edbd92d8454f',
      imageAlt: 'Elegant restaurant table setting with white plates, wine glasses, and silverware on dark wooden table',
    },
    {
      id: 'orders',
      icon: 'ShoppingCart',
      title: 'Gestione Ordini Automatica',
      description: 'Ricevi e gestisci ordini direttamente su WhatsApp senza perdere nessuna richiesta',
      benefits: ['Notifiche istantanee', 'Conferma automatica', 'Tracking dello stato'],
      image: 'https://images.unsplash.com/photo-1623651671311-a38286c4699b',
      imageAlt: 'Professional chef in white uniform preparing multiple dishes in modern commercial kitchen',
    },
    {
      id: 'payments',
      icon: 'CreditCard',
      title: 'Pagamenti Integrati',
      description: 'Accetta pagamenti sicuri direttamente nella chat WhatsApp',
      benefits: ['Pagamenti sicuri', 'Ricevute automatiche', 'Integrazione POS'],
      image: 'https://images.unsplash.com/photo-1609921307735-98bf1617ecfc',
      imageAlt: 'Close-up of hands holding smartphone showing payment app interface with credit card nearby',
    },
    {
      id: 'reservations',
      icon: 'Calendar',
      title: 'Prenotazioni Tavoli',
      description: 'Sistema di prenotazione intelligente con gestione automatica della disponibilità',
      benefits: ["Calendario integrato", "Promemoria automatici", "Gestione liste d'attesa"],
      image: 'https://images.unsplash.com/photo-1563207463-03f7ec05dd0c',
      imageAlt: 'Elegant restaurant interior with empty tables set for dinner, warm lighting and modern decor',
    },
  ];

  const salonFeatures = [
    {
      id: 'booking',
      icon: 'Calendar',
      title: 'Prenotazioni Automatiche',
      description: 'Sistema di prenotazione intelligente che gestisce automaticamente il tuo calendario',
      benefits: ['Disponibilità in tempo reale', 'Conferme automatiche', 'Gestione cancellazioni'],
      image: 'https://images.unsplash.com/photo-1633681926053-9074b76e21a7',
      imageAlt: 'Modern beauty salon interior with comfortable styling chairs and professional lighting',
    },
    {
      id: 'services',
      icon: 'Scissors',
      title: 'Catalogo Servizi',
      description: 'Mostra tutti i tuoi servizi con prezzi, durata e descrizioni dettagliate',
      benefits: ['Prezzi trasparenti', 'Durata servizi', 'Pacchetti personalizzati'],
      image: 'https://images.unsplash.com/photo-1675034742143-151fc66c9d0b',
      imageAlt: 'Professional hairstylist working on client hair with various styling tools and products visible',
    },
    {
      id: 'reminders',
      icon: 'Bell',
      title: 'Promemoria Intelligenti',
      description: 'Invia promemoria automatici per appuntamenti e follow-up personalizzati',
      benefits: ['Promemoria personalizzati', 'Conferme appuntamenti', 'Follow-up automatici'],
      image: 'https://images.unsplash.com/photo-1651335607978-5130c85c2f50',
      imageAlt: 'Woman receiving professional manicure treatment at modern nail salon with elegant decor',
    },
    {
      id: 'staff',
      icon: 'Users',
      title: 'Riepilogo Giornaliero',
      description: 'Ricevi ogni sera un messaggio con gli appuntamenti del giorno successivo e le cancellazioni.',
      benefits: ['Calendario condiviso', 'Specializzazioni staff', 'Ottimizzazione orari'],
      image: 'https://images.unsplash.com/photo-1595475716260-0f2c35f5a40f',
      imageAlt: 'Team of professional beauty salon staff smiling together in modern salon environment',
    },
  ];

  const features = activeIndustry === 'restaurant' ? restaurantFeatures : salonFeatures;

  // chiudi lo slot attivo quando cambi settore
  useEffect(() => {
    setActiveId(null);
  }, [activeIndustry]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6 flex justify-center">
            <IndustryToggle value={activeIndustry} onChange={onIndustryToggle} />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tutto Quello Che Ti Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {activeIndustry === 'restaurant'
              ? 'Una piattaforma completa per gestire il tuo locale direttamente su WhatsApp'
              : 'Tutti gli strumenti per far crescere il tuo salone di bellezza via WhatsApp'}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              feature={feature}
              isOpen={activeId === feature.id}
              onToggle={() => setActiveId((prev) => (prev === feature.id ? null : feature.id))}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pronto a Iniziare?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Configura MIA in meno di 10 minuti e inizia subito a ricevere ordini e prenotazioni via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="cta-pulse" iconName="Rocket" iconPosition="left">
                Inizia Gratis
              </Button>
              <Button variant="outline" size="lg" iconName="Play" iconPosition="left">
                Guarda Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Sezione singola con layout centrato e micro-ritocchi di densità, immagine e badge */
const FeatureItem = ({ feature, isOpen, onToggle }) => {
  const itemId = `feature-content-${feature.id}`;
  const btnId = `feature-trigger-${feature.id}`;

  return (
    <article
      className={`relative p-6 rounded-2xl transition-all duration-300 border ${
        isOpen
          ? 'bg-gradient-to-br from-primary/5 to-emerald-50/30 border-primary/50 shadow-brand'
          : 'bg-white border-border hover:bg-muted/20'
      }`}
    >
      {/* Header */}
      <button
        id={btnId}
        aria-controls={itemId}
        aria-expanded={isOpen}
        className="w-full text-left"
        onClick={onToggle}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
            }`}
          >
            <Icon name={feature?.icon} size={24} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">{feature?.title}</h3>
            <p className="text-muted-foreground/90 mt-1">{feature?.description}</p>
          </div>

          <Icon
            name="ChevronDown"
            size={20}
            className={`text-muted-foreground transition-transform duration-300 mt-2 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* divider soft quando aperto */}
      {isOpen && (
        <div className="mt-3 mb-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      )}

      {/* Contenuto */}
      <div
        id={itemId}
        role="region"
        aria-labelledby={btnId}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1200px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        {/* BLOCCO CENTRATO: bullets + immagine */}
        <div
          className="
            grid items-center gap-5 md:gap-8
            md:grid-cols-[minmax(280px,1fr)_minmax(280px,420px)]
          "
        >
          {/* Bullets più densi e più scuri */}
          <ul className="space-y-2.5 md:space-y-3 md:justify-self-start">
            {feature?.benefits?.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Icon name="Check" size={18} className="text-emerald-600 mt-0.5" />
                <span className="text-[15px] md:text-[16px] text-gray-800">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Immagine più compatta, corner coerenti, badge più vicini al bordo */}
          <div className="relative rounded-xl overflow-hidden shadow-md w-full md:w-[400px] mx-auto">
            <div className="relative aspect-[16/10] max-h-[340px]">
              <Image
                src={feature?.image}
                alt={feature?.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />

              {/* overlay soft */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent pointer-events-none" />

              {/* Badge glass top-right (compatti) */}
              <div className="absolute top-2.5 right-2.5">
                <div className="rounded-lg px-2.5 py-1 bg-white/70 backdrop-blur-md border border-white/50 shadow">
                  <div className="text-center leading-tight">
                    <div className="text-[12px] font-semibold text-primary leading-none">99.9%</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">Uptime</div>
                  </div>
                </div>
              </div>

              {/* Badge glass bottom-left (compatti) */}
              <div className="absolute bottom-2.5 left-2.5">
                <div className="rounded-lg px-2.5 py-1 bg-white/70 backdrop-blur-md border border-white/50 shadow">
                  <div className="text-center leading-tight">
                    <div className="text-[12px] font-semibold text-emerald-600 leading-none">&lt;3s</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">Risposta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </article>
  );
};

export default FeaturesOverview;
