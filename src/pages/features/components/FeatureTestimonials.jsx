import React, { useRef, useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeatureTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const rowRef = useRef(null);

  // Evita che "no-show" venga spezzato a capo (usa non-breaking hyphen U+2011)
  const nobreak = (s) => (s || '').replace(/no-show/gi, 'no\u2011show');

  // Inserisce possibili punti di a capo dopo "/" e prima di parentesi
  const softWrap = (s) =>
    (s || '')
      .replaceAll('/', '/\u200B')  // potrà andare a capo dopo "/"
      .replaceAll('(', '\u200B(')
      .replaceAll(')', ')\u200B');

  // Rende la metrica in due livelli: valore grande + descrizione piccola
  const renderMetric = (raw, colorClass) => {
    const s = softWrap(nobreak(raw));

    // cattura numero/percentuale/segno all'inizio (es: 4, 30, -87%, 150)
    const m = /^([+\-]?\d+(?:[.,]\d+)?%?)/.exec(s);
    const value = m ? m[1] : s;
    const rest = m ? s.slice(m[0].length).trim() : '';

    return (
      <div className="flex flex-col items-center">
        <span
          className={`font-extrabold leading-none ${colorClass}`}
          style={{
            // grande ma adattivo: tra 22px e 34px
            fontSize: 'clamp(1.375rem, 2.4vw, 2.125rem)',
          }}
        >
          {value}
        </span>
        {rest && (
          <span
            className="mt-1 text-gray-700 text-center leading-snug"
            style={{
              // testo di supporto adattivo: tra 12px e 16px
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              hyphens: 'auto',
            }}
          >
            {rest}
          </span>
        )}
      </div>
    );
  };

  const testimonials = [
    {
      id: 1,
      name: 'Marco Benedetti',
      role: 'Proprietario',
      business: 'Ristorante Da Marco - Roma',
      avatar: 'https://images.unsplash.com/photo-1735181094336-7fa757df9622',
      avatarAlt:
        "Professional headshot of middle-aged Italian man with dark hair and warm smile in chef's jacket",
      feature: 'Prenotazioni Automatiche',
      quote:
        'MIA ha rivoluzionato il nostro sistema di prenotazioni. Prima perdevo almeno 10-15 chiamate al giorno durante il servizio. Ora MIA gestisce tutto automaticamente e i no-show sono praticamente scomparsi.',
      metrics: { before: '60% tasso conferma', after: '95% tasso conferma', improvement: '+58%' },
      rating: 5,
    },
    {
      id: 2,
      name: 'Giulia Marchetti',
      role: 'Titolare',
      business: 'Salone Bellezza Giulia - Milano',
      avatar: 'https://images.unsplash.com/photo-1708256258190-c3388ab06b44',
      avatarAlt: 'Professional portrait of elegant Italian woman with brown hair in stylish salon uniform',
      feature: 'Gestione Appuntamenti',
      quote:
        'Con MIA ho automatizzato completamente la gestione degli appuntamenti. Le clienti adorano poter prenotare su WhatsApp e io risparmio 3-4 ore al giorno che prima spendevo al telefono.',
      metrics: { before: '4 ore/giorno telefonate', after: '30 min/giorno gestione', improvement: '-87%' },
      rating: 5,
    },
    {
      id: 3,
      name: 'Antonio Rossi',
      role: 'Chef & Proprietario',
      business: 'Pizzeria Napoli Vera - Napoli',
      avatar: 'https://images.unsplash.com/photo-1607952666110-35b73ec1fccd',
      avatarAlt: 'Friendly portrait of Italian chef with mustache wearing traditional white chef hat and apron',
      feature: 'Ordini Take-Away',
      quote:
        'Gli ordini da asporto sono aumentati del 40% da quando uso MIA. I clienti possono ordinare direttamente su WhatsApp vedendo il menu sempre aggiornato. È fantastico!',
      metrics: { before: '150 ordini/settimana', after: '210 ordini/settimana', improvement: '+40%' },
      rating: 5,
    },
    {
      id: 4,
      name: 'Francesca Bianchi',
      role: 'Proprietaria',
      business: 'Beauty Center Francesca - Firenze',
      avatar: 'https://images.unsplash.com/photo-1648466982925-65dac4ed0814',
      avatarAlt: 'Professional headshot of young Italian woman with blonde hair in elegant beauty salon attire',
      feature: 'Pagamenti Integrati',
      quote:
        'I pagamenti anticipati tramite WhatsApp hanno eliminato completamente i no-show. Le clienti pagano quando prenotano e questo ha migliorato incredibilmente il nostro cash flow.',
      metrics: { before: '25% no-show rate', after: '3% no-show rate', improvement: '-88%' },
      rating: 5,
    },
  ];

  const current = testimonials[activeTestimonial];

  const scrollToIndex = (idx) => {
    const container = rowRef.current;
    const el = container?.children?.[idx];
    if (!container || !el) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const deltaLeft = elRect.left - containerRect.left;

    const targetLeft = container.scrollLeft + deltaLeft - (container.clientWidth - el.clientWidth) / 2;
    const max = container.scrollWidth - container.clientWidth;
    const clamped = Math.max(0, Math.min(targetLeft, max));
    container.scrollTo({ left: clamped, behavior: 'smooth' });
  };

  const setByIndex = (i) => {
    const idx = ((i % testimonials.length) + testimonials.length) % testimonials.length;
    setActiveTestimonial(idx);
    scrollToIndex(idx);
  };

  return (
    <section className="py-12 lg:py-20 bg-white" lang="it">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-3">
            Storie di successo di
            <span className="text-green-700 block">business italiani</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come i nostri clienti hanno trasformato i loro business con MIA Assistant
          </p>
        </div>

        {/* AVATAR row */}
        <div className="mb-6 lg:mb-10">
          <div
            ref={rowRef}
            data-carousel
            className="flex items-center justify-center gap-8 overflow-x-auto scroll-smooth py-2 pb-3 overflow-visible"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onWheel={(e) => {
              if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
                rowRef.current.scrollLeft += e.deltaY;
              }
            }}
          >
            <style>{`[data-carousel]::-webkit-scrollbar { display: none; }`}</style>

            {testimonials.map((t, index) => {
              const active = index === activeTestimonial;
              return (
                <button
                  key={t.id}
                  onClick={() => setByIndex(index)}
                  aria-pressed={active}
                  className="relative group shrink-0 overflow-visible"
                >
                  <Image
                    src={t.avatar}
                    alt={t.avatarAlt}
                    className={`w-16 h-16 rounded-full object-cover border-4 ${
                      active ? 'border-primary shadow-lg' : 'border-gray-300'
                    }`}
                  />
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5
                                bg-gray-900 text-white text-xs rounded-md whitespace-nowrap
                                transition-opacity duration-200 ${
                                  active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                    style={{ pointerEvents: 'none' }}
                  >
                    {t.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-1 w-full bg-gray-200 rounded-full">
            <div
              className="h-1 bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
            />
          </div>
        </div>

        {/* CONTENUTO + SIDEBAR */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
              {/* Pill funzionalità */}
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4 md:mb-6">
                <Icon name="Star" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Funzionalità: {current?.feature}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed italic mb-6 md:mb-8 text-lg md:text-xl">
                {`“${nobreak(current?.quote)}”`}
              </blockquote>

              {/* Metriche (fixate) */}
              <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="text-center p-3 md:p-4 bg-white rounded-xl border border-gray-100 overflow-hidden min-h-[110px] md:min-h-[120px] flex items-center justify-center">
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">Prima</div>
                    {renderMetric(current?.metrics?.before, 'text-red-600')}
                  </div>
                </div>

                <div className="text-center p-3 md:p-4 bg-white rounded-xl border border-gray-100 overflow-hidden min-h-[110px] md:min-h-[120px] flex items-center justify-center">
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">Dopo</div>
                    {renderMetric(current?.metrics?.after, 'text-green-700')}
                  </div>
                </div>

                <div className="text-center p-3 md:p-4 bg-green-50 rounded-xl border border-green-100 overflow-hidden min-h-[110px] md:min-h-[120px] flex items-center justify-center">
                  <div>
                    <div className="text-xs md:text-sm text-gray-600 mb-1">Miglioramento</div>
                    {renderMetric(current?.metrics?.improvement, 'text-green-700')}
                  </div>
                </div>
              </div>

              {/* Autore */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <Image src={current?.avatar} alt={current?.avatarAlt} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 text-base truncate">{current?.name}</h4>
                  <p className="text-sm text-gray-600">{current?.role}</p>
                  <p className="text-xs text-green-700 truncate">{current?.business}</p>
                </div>
                <div className="ml-auto">
                  <div className="flex gap-1">
                    {[...Array(current?.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4">Risultati Complessivi</h4>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Clienti Attivi</span>
                  <span className="font-bold text-green-700">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">ROI Medio</span>
                  <span className="font-bold text-emerald-600">340%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Soddisfazione</span>
                  <span className="font-bold text-yellow-600">4.9/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tempo Setup</span>
                  <span className="font-bold text-gray-900">&lt; 5 min</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-6 text-white text-center shadow-lg border border-transparent">
              <h4 className="font-semibold mb-1 md:mb-2">Unisciti ai Nostri Clienti</h4>
              <p className="text-sm opacity-90 mb-3 md:mb-4">Inizia la tua trasformazione digitale oggi</p>
              <Button variant="secondary" fullWidth iconName="ArrowRight" iconPosition="right">
                Inizia Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTestimonials;
