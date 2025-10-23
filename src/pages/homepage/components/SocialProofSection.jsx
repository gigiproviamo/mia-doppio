import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = ({ activeIndustry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const restaurantTestimonials = [
    {
      id: 1,
      name: "Marco Rossi",
      business: "Ristorante La Bella Vista",
      location: "Roma",
      image: "https://images.unsplash.com/photo-1729162128021-f37dca3ff30d",
      imageAlt: "Professional headshot of middle-aged Italian man with dark hair and warm smile wearing white chef coat",
      rating: 5,
      quote: "MIA ha rivoluzionato il nostro servizio. I clienti ordinano direttamente dal menu WhatsApp e noi gestiamo tutto dall'app. Zero confusione, massima efficienza.",
      metrics: { orders: "+35%", satisfaction: "4.9★", time: "-50%" },
      videoThumbnail: "https://images.unsplash.com/photo-1715021927087-3e8ded440b8a",
      videoThumbnailAlt: "Interior view of elegant Italian restaurant with warm lighting and traditional decor"
    },
    {
      id: 2,
      name: "Giuseppe Marino",
      business: "Pizzeria Napoli Vera",
      location: "Napoli",
      image: "https://images.unsplash.com/photo-1609154799087-7b665c57eef9",
      imageAlt: "Friendly middle-aged man with gray beard wearing traditional pizza chef apron and cap",
      rating: 5,
      quote: "Incredibile! In 10 minuti era tutto configurato. Ora i clienti vedono il menu, ordinano e pagano tutto su WhatsApp. La mia pizzeria non è mai stata così organizzata.",
      metrics: { orders: "+40%", satisfaction: "4.8★", time: "-60%" },
      videoThumbnail: "https://images.unsplash.com/photo-1642698788624-3c8a5b9ccbb1",
      videoThumbnailAlt: "Traditional wood-fired pizza oven with flames and freshly baked pizzas"
    },
    {
      id: 3,
      name: "Elena Conti",
      business: "Osteria del Centro",
      location: "Firenze",
      image: "https://images.unsplash.com/photo-1707109533624-0faecae2c3ba",
      imageAlt: "Professional portrait of young woman with brown hair in chef whites smiling confidently",
      rating: 5,
      quote: "I nostri clienti adorano la semplicità. Niente app da scaricare, tutto via WhatsApp. MIA gestisce prenotazioni e ordini mentre noi ci concentriamo sulla cucina.",
      metrics: { orders: "+45%", satisfaction: "4.9★", time: "-45%" },
      videoThumbnail: "https://images.unsplash.com/photo-1693744192787-79a8feee3eb8",
      videoThumbnailAlt: "Cozy restaurant interior with rustic wooden tables and warm ambient lighting"
    }
  ];

  const salonTestimonials = [
    {
      id: 1,
      name: "Sofia Bianchi",
      business: "Salon Eleganza",
      location: "Milano",
      image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
      imageAlt: "Professional portrait of young woman with blonde hair in elegant black blazer smiling confidently",
      rating: 5,
      quote: "MIA ha trasformato il nostro salone. Le clienti prenotano facilmente via WhatsApp e noi gestiamo tutto dal calendario integrato. Zero doppie prenotazioni!",
      metrics: { bookings: "+50%", satisfaction: "4.9★", noShows: "-70%" },
      videoThumbnail: "https://images.unsplash.com/photo-1633681926053-9074b76e21a7",
      videoThumbnailAlt: "Modern beauty salon interior with comfortable styling chairs and professional lighting"
    },
    {
      id: 2,
      name: "Valentina Rosso",
      business: "Beauty Center Luxury",
      location: "Torino",
      image: "https://images.unsplash.com/photo-1693482000269-1cdd1821de12",
      imageAlt: "Professional headshot of woman with dark hair in white beauty therapist uniform",
      rating: 5,
      quote: "Fantastico! Le nostre clienti ricevono promemoria automatici e possono riprogrammare appuntamenti direttamente su WhatsApp. Il nostro lavoro è diventato molto più semplice.",
      metrics: { bookings: "+60%", satisfaction: "4.8★", noShows: "-65%" },
      videoThumbnail: "https://images.unsplash.com/photo-1675034742143-151fc66c9d0b",
      videoThumbnailAlt: "Professional hairstylist working on client hair with various styling tools visible"
    },
    {
      id: 3,
      name: "Chiara Neri",
      business: "Nails & Beauty Studio",
      location: "Bologna",
      image: "https://images.unsplash.com/photo-1608216874348-f0acf1cc149e",
      imageAlt: "Young professional woman with curly hair wearing white beauty salon uniform",
      rating: 5,
      quote: "MIA ci ha fatto risparmiare ore di lavoro amministrativo. Tutto automatizzato: prenotazioni, conferme, promemoria. Possiamo concentrarci solo sui trattamenti.",
      metrics: { bookings: "+55%", satisfaction: "4.9★", noShows: "-80%" },
      videoThumbnail: "https://images.unsplash.com/photo-1708397734091-410d87c8b50c",
      videoThumbnailAlt: "Close-up of professional nail treatment being performed in modern salon setting"
    }
  ];

  const testimonials = activeIndustry === 'restaurant' ? restaurantTestimonials : salonTestimonials;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials?.length, isAutoPlaying]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentSlide];

  const stats = [
    { label: "Attività Attive", value: "500+", icon: "Store" },
    { label: "Ordini e Appuntamenti", value: "15.000+", icon: "ShoppingCart" },
    { label: "Valutazione Media", value: "4.8★", icon: "Star" },
    { label: "Tempo di Setup", value: "&lt;10min", icon: "Clock" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Storie di <span className="text-green-800">Successo Reali</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri come i {activeIndustry === 'restaurant' ? 'locali' : 'saloni'} come il tuo stanno crescendo con MIA
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-brand hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div
                className="text-2xl lg:text-3xl font-bold text-foreground mb-1"
                dangerouslySetInnerHTML={{ __html: stat?.value }}
              />
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-3xl shadow-brand-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Video/Image Side */}
            <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-brand-lg">
                  <Image
                    src={currentTestimonial?.videoThumbnail}
                    alt={currentTestimonial?.videoThumbnailAlt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-brand shadow-brand">
                      <Icon name="Play" size={24} className="text-primary ml-1" />
                    </button>
                  </div>
                </div>

                {/* Floating Metrics */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-brand border border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">
                      {activeIndustry === 'restaurant'
                        ? currentTestimonial?.metrics?.orders
                        : currentTestimonial?.metrics?.bookings}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {activeIndustry === 'restaurant' ? 'Ordini' : 'Prenotazioni'}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-brand border border-border">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">
                      {currentTestimonial?.metrics?.satisfaction}
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
                "{currentTestimonial?.quote}"
              </blockquote>

              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={currentTestimonial?.image}
                  alt={currentTestimonial?.imageAlt}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{currentTestimonial?.name}</div>
                  <div className="text-primary font-medium">{currentTestimonial?.business}</div>
                  <div className="text-sm text-muted-foreground">{currentTestimonial?.location}</div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(currentTestimonial?.metrics)?.map(([key, value], index) => (
                  <div key={index} className="text-center p-3 bg-muted/30 rounded-xl">
                    <div className="text-lg font-bold text-primary">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key === 'orders'
                        ? 'Ordini'
                        : key === 'bookings'
                        ? 'Prenotazioni'
                        : key === 'satisfaction'
                        ? 'Soddisfazione'
                        : key === 'time'
                        ? 'Tempo'
                        : key === 'noShows'
                        ? 'No-Show'
                        : key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() =>
              handleSlideChange((currentSlide - 1 + testimonials?.length) % testimonials?.length)
            }
            className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-brand"
          >
            <Icon name="ChevronLeft" size={20} className="text-muted-foreground hover:text-primary" />
          </button>

          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-brand ${
                  index === currentSlide ? 'bg-primary' : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleSlideChange((currentSlide + 1) % testimonials?.length)}
            className="w-10 h-10 rounded-full border border-border hover:border-primary flex items-center justify-center transition-brand"
          >
            <Icon name="ChevronRight" size={20} className="text-muted-foreground hover:text-primary" />
          </button>
        </div>

        {/* Summary Stats — SUPER COMPACT ON MOBILE */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-primary to-green-600 text-white
                          rounded-lg md:rounded-2xl shadow-brand-xl
                          p-4 sm:p-6 md:p-8
                          w-full max-w-[380px] sm:max-w-2xl md:max-w-none mx-auto">
            <h3 className="text-base sm:text-xl md:text-3xl font-bold
                           leading-tight text-center mb-3 md:mb-6">
              Risultati Complessivi dei Nostri Clienti
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 text-center">
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-1 md:mb-2">2,847</div>
                <div className="opacity-90 text-[11px] sm:text-sm md:text-base">Ristoranti Attivi</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-1 md:mb-2">+78%</div>
                <div className="opacity-90 text-[11px] sm:text-sm md:text-base">Aumento Medio Ordini</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-1 md:mb-2">€4.2M</div>
                <div className="opacity-90 text-[11px] sm:text-sm md:text-base">Ricavi Extra Generati</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight mb-1 md:mb-2">99.2%</div>
                <div className="opacity-90 text-[11px] sm:text-sm md:text-base">Clienti Soddisfatti</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Certificato e sicuro</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-primary" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={20} className="text-primary" />
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-primary" />
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
