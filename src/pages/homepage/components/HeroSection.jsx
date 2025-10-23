import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import RotatingMetric from '../../../components/ui/RotatingMetric';
import IndustryToggle from '../../../components/ui/IndustryToggle'; // ⬅️ nuovo import

const HeroSection = ({ activeIndustry, onIndustryToggle }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  const testimonials = [
    {
      id: 1,
      name: "Marco Rossi",
      business: "Ristorante La Bella Vista",
      image: "https://images.unsplash.com/photo-1729162128021-f37dca3ff30d",
      imageAlt: "Professional headshot of middle-aged Italian man",
      quote: "MIA ha trasformato il nostro servizio. Zero app da scaricare per i clienti, tutto via WhatsApp!",
      revenue: "+35% ordini",
    },
    {
      id: 2,
      name: "Sofia Bianchi",
      business: "Salon Eleganza",
      image: "https://images.unsplash.com/photo-1684262855358-88f296a2cfc2",
      imageAlt: "Professional portrait of young woman",
      quote: "I nostri clienti adorano prenotare via WhatsApp. MIA gestisce tutto automaticamente.",
      revenue: "+50% prenotazioni",
    },
    {
      id: 3,
      name: "Giuseppe Marino",
      business: "Pizzeria Napoli",
      image: "https://images.unsplash.com/photo-1609154799087-7b665c57eef9",
      imageAlt: "Man with gray beard wearing pizza chef apron",
      quote: "Operativo in 10 minuti. I nostri clienti ordinano direttamente dal menu WhatsApp.",
      revenue: "+40% vendite",
    },
  ];

  const industryContent = {
  restaurant: {
    title: (
      <>
        Il Tuo <span className="text-green-800">Cameriere Digitale</span>
      </>
    ),
    description: (
  <>
    MIA gestisce ordini, prenotazioni e pagamenti direttamente su WhatsApp.{" "}
    <span className="font-semibold text-gray-900">
      Zero app da scaricare, massimi risultati.
    </span>
  </>
),
    features: [
      "Menu digitale interattivo",
      "Gestione ordini automatica",
      "Pagamenti integrati",
      "Prenotazioni tavoli",
    ],
    cta: "Inizia con il Ristorante",
    demoText: "Prova il menu demo",
  },
  salon: {
    title: (
      <>
        Il Tuo <span className="text-green-800">Assistente di Bellezza</span>
      </>
    ),
    description: (
  <>
    MIA coordina appuntamenti, servizi e promemoria direttamente su WhatsApp.{" "}
    <span className="font-semibold text-gray-900">
      Zero tempo perso, agenda sempre piena.
    </span>
  </>
),

    features: [
      "Prenotazioni automatiche",
      "Gestione calendario",
      "Promemoria appuntamenti",
      "Catalogo servizi",
    ],
    cta: "Inizia con il Salon",
    demoText: "Prova la prenotazione demo",
  },
};
  const currentContent = industryContent[activeIndustry];

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  const handleWhatsAppDemo = () => {
    const message =
      activeIndustry === 'restaurant'
        ? "Ciao! Vorrei vedere il menu demo del ristorante 🍝"
        : "Ciao! Vorrei prenotare un appuntamento demo 💅";
    window.open(`https://wa.me/393123456789?text=${encodeURIComponent(message)}`, "_blank");
  };

  const isRestaurant = activeIndustry === "restaurant";

  // 👇 avatar per la social proof (sotto il RotatingMetric)
  const avatars = [
    { src: "https://randomuser.me/api/portraits/men/32.jpg",   alt: "Ristoratore 1" },
    { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Ristoratrice 2" },
    { src: "https://randomuser.me/api/portraits/men/52.jpg",   alt: "Ristoratore 3" },
    { src: "https://randomuser.me/api/portraits/women/38.jpg", alt: "Ristoratrice 4" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5 pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23128C7E%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Toggle */}
            <div className="flex items-center space-x-4 mb-6">
              <IndustryToggle
                value={activeIndustry}
                onChange={onIndustryToggle}
              />
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">{currentContent.title}</h1>
              <p className="text-xl lg:text-2xl text-primary font-medium">{currentContent.subtitle}</p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{currentContent.description}</p>

              <div className="grid grid-cols-2 gap-4">
                {currentContent.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-accent-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="cta-pulse" iconName="ArrowRight" iconPosition="right">
                {currentContent.cta}
              </Button>
              <Button variant="outline" size="lg" onClick={handleWhatsAppDemo} iconName="MessageCircle" iconPosition="left">
                {currentContent.demoText}
              </Button>
            </div>

            {/* Metrics */}
            <div className="pt-8 border-t border-border">
              <RotatingMetric
                metrics={[
                  { number: 98, suffix: "%", label: "Soddisfazione Cliente" },
                  { number: 500, suffix: "+", label: "Attività attive" },
                  { number: 15000, suffix: "+", label: "Ordini e Prenotazioni questo mese" },
                ]}
                rotateEvery={3000}
                countDuration={900}
              />
            </div>

            {/* Social proof SOTTO il RotatingMetric */}
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {avatars.map((p, i) => (
                    <Image
                      key={i}
                      src={p.src}
                      alt={p.alt}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-base text-foreground">
                  <span className="font-semibold">500+ attività </span> hanno già trasformato il loro business
                </div>
              </div>
            </div>
          </div>

          {/* Right — Telefono + Testimonianze */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative mt-8 lg:mt-0">
              {/* dimensioni identiche */}
              <div className="relative mx-auto w-72 h-[560px] sm:w-72 sm:h-[580px]">
                {/* frame scuro e schermo */}
                <div className="relative w-full h-full bg-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                    {/* Header */}
                    <div className="bg-primary text-white p-3 flex items-center space-x-3">
                      <Icon name="ArrowLeft" size={18} color="white" />
                      <Image
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=40&h=40&fit=crop"
                        alt="Logo ristorante"
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-semibold">MIA Assistant</div>
                        <div className="text-xs opacity-90">online</div>
                      </div>
                      <Icon name="Phone" size={16} />
                      <Icon name="Video" size={16} />
                    </div>

                    {/* Chat – dinamica per settore */}
                    <div className="bg-[#E5DDD5] h-full p-3 space-y-3 overflow-y-auto">
                      {/* Msg 1 */}
                      <div className="bg-white p-3 rounded-lg shadow-sm max-w-[85%]">
                        <p className="text-xs">
                          {isRestaurant
                            ? "Ciao! Benvenuto al Ristorante Demo. Vuoi vedere il nostro menu? 🍝"
                            : "Ciao! Benvenuto al Salon Demo. Vuoi prenotare un appuntamento? 💅"}
                        </p>
                        <div className="text-[10px] text-gray-500 mt-1">12:30</div>
                      </div>

                      {/* CTA interna */}
                      <div className="bg-white p-3 rounded-lg shadow-sm max-w-[85%]">
                        <div className="flex items-center space-x-2 text-primary">
                          <Icon name="Menu" size={14} />
                          <span className="text-xs font-medium">
                            {isRestaurant ? "Visualizza Menu" : "Prenota Servizio"}
                          </span>
                        </div>
                      </div>

                      {/* Risposta utente */}
                      <div className="flex justify-end">
                        <div className="bg-primary text-white p-3 rounded-lg max-w-[85%]">
                          <p className="text-xs">
                            {isRestaurant ? "Sì, mostrami il menu!" : "Sì, vorrei prenotare!"}
                          </p>
                          <div className="text-[10px] opacity-90 mt-1 text-right">12:31 ✓✓</div>
                        </div>
                      </div>

                      {/* Box finale */}
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <div className="text-xs font-medium mb-2">
                          {isRestaurant ? "Riepilogo Ordine:" : "Dettagli Prenotazione:"}
                        </div>

                        {isRestaurant ? (
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between"><span>Pizza Margherita</span><span>€8.00</span></div>
                            <div className="flex justify-between"><span>Coca Cola</span><span>€3.00</span></div>
                            <div className="border-t pt-1 font-medium flex justify-between"><span>Totale</span><span>€11.00</span></div>
                          </div>
                        ) : (
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between"><span>Servizio</span><span>Taglio & Piega</span></div>
                            <div className="flex justify-between"><span>Data</span><span>Oggi</span></div>
                            <div className="flex justify-between"><span>Ora</span><span>15:00</span></div>
                          </div>
                        )}

                        <Button variant="default" size="sm" className="w-full mt-3 bg-primary text-[11px]">
                          {isRestaurant ? "Conferma Ordine" : "Conferma Prenotazione"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badge flottanti */}
                <div className="absolute -top-3 -right-3 bg-white p-2 rounded-lg shadow-lg z-10 flex items-center space-x-1">
                  <Icon name="CheckCircle" size={16} className="text-green-500" />
                  <span className="text-xs font-medium">Zero Errori</span>
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white p-2 rounded-lg shadow-lg z-10 flex items-center space-x-1">
                  <Icon name="TrendingUp" size={16} className="text-primary" />
                  <span className="text-xs font-medium">+20% Ordini</span>
                </div>
              </div>

              {/* Testimonianze fuori dal telefono */}
              <div className="mt-6 bg-white rounded-2xl p-4 shadow-brand-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].imageAlt}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonials[currentTestimonial].business}
                    </div>
                  </div>
                  <div className="ml-auto text-xs font-bold text-accent">
                    {testimonials[currentTestimonial].revenue}
                  </div>
                </div>
                <p className="text-sm text-foreground italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex justify-center space-x-2 mt-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-brand ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;

