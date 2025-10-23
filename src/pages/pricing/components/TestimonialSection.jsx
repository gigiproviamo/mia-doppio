import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const testimonials = [
  {
    id: 1,
    name: "Marco Rossi",
    business: "Trattoria da Marco",
    location: "Milano",
    avatar: "https://images.unsplash.com/photo-1696277602097-37e704194f13",
    avatarAlt: "Professional headshot of middle-aged Italian man with dark hair and friendly smile in chef\'s attire",
    quote: `Da quando usiamo MIA, i nostri ordini sono aumentati del 40%. I clienti adorano ordinare via WhatsApp e noi risparmiamo ore di lavoro ogni giorno.`,
    savings: "€2.400",
    savingsLabel: "risparmiati al mese",
    metrics: {
      orders: "+40%",
      revenue: "+€8.500",
      time: "15h/settimana"
    },
    plan: "Professional"
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    business: "Bella Vista Salon",
    location: "Roma",
    avatar: "https://images.unsplash.com/photo-1708256258190-c3388ab06b44",
    avatarAlt: "Professional portrait of young Italian woman with brown hair and warm smile in salon uniform",
    quote: `MIA ha rivoluzionato la gestione delle prenotazioni. Zero doppie prenotazioni e i clienti possono prenotare 24/7. Il ROI è stato immediato.`,
    savings: "€1.800",
    savingsLabel: "di costi operativi",
    metrics: {
      bookings: "+60%",
      efficiency: "+35%",
      satisfaction: "98%"
    },
    plan: "Professional"
  },
  {
    id: 3,
    name: "Antonio Ferri",
    business: "Pizzeria Napoletana",
    location: "Napoli",
    avatar: "https://images.unsplash.com/photo-1607952666110-35b73ec1fccd",
    avatarAlt: "Friendly portrait of Italian pizzaiolo with mustache wearing traditional white chef hat and apron",
    quote: `Con il piano Starter abbiamo iniziato piano, ora siamo passati al Professional. MIA gestisce tutto: ordini, pagamenti, anche le richieste speciali!`,
    savings: "€900",
    savingsLabel: "primo mese",
    metrics: {
      orders: "+25%",
      accuracy: "99%",
      growth: "Continua"
    },
    plan: "Starter → Professional"
  }];


  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    })?.format(amount?.replace('€', '')?.replace('.', ''));
  };

  return (
    <div className="bg-muted/30 rounded-2xl p-6 lg:p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Risultati Reali dei Nostri Clienti
        </h3>
        <p className="text-muted-foreground">
          Scopri come MIA ha trasformato queste attività
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testimonials?.map((testimonial) =>
        <div key={testimonial?.id} className="bg-white rounded-xl p-6 shadow-brand hover-lift">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <Image
                src={testimonial?.avatar}
                alt={testimonial?.avatarAlt}
                className="w-12 h-12 rounded-full object-cover" />

                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} className="text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial?.business}</p>
                <p className="text-xs text-muted-foreground">{testimonial?.location}</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-sm text-foreground mb-4 italic">
              "{testimonial?.quote}"
            </blockquote>

            {/* Savings Highlight */}
            <div className="bg-success/10 rounded-lg p-3 mb-4 text-center">
              <div className="text-xl font-bold text-success">
                {testimonial?.savings}
              </div>
              <div className="text-xs text-muted-foreground">
                {testimonial?.savingsLabel}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {Object.entries(testimonial?.metrics)?.map(([key, value]) =>
            <div key={key} className="text-center">
                  <div className="text-sm font-semibold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
            )}
            </div>

            {/* Plan Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Piano utilizzato:</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                {testimonial?.plan}
              </span>
            </div>
          </div>
        )}
      </div>
      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-foreground">300+</div>
            <div className="text-sm text-muted-foreground">Ristoranti attivi</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">150+</div>
            <div className="text-sm text-muted-foreground">Saloni di bellezza</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">15.000+</div>
            <div className="text-sm text-muted-foreground">Ordini questo mese</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">4.8/5</div>
            <div className="text-sm text-muted-foreground">Soddisfazione clienti</div>
          </div>
        </div>
      </div>
    </div>);

};

export default TestimonialSection;