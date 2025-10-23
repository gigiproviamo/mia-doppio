import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = ({ activeIndustry }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock success
    alert('Grazie! Ti contatteremo presto per configurare MIA.');
    setEmail('');
    setIsSubmitting(false);
  };

  const handleWhatsAppContact = () => {
    const message = activeIndustry === 'restaurant' 
      ? "Ciao! Sono interessato a MIA per il mio ristorante. Vorrei saperne di più! 🍝" :"Ciao! Sono interessato a MIA per il mio salone. Vorrei saperne di più! 💅";
    window.open(`https://wa.me/393123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  const benefits = [
    {
      icon: 'Zap',
      title: 'Setup in 10 minuti',
      description: 'Configurazione rapida e guidata'
    },
    {
      icon: 'Smartphone',
      title: 'Zero app da scaricare',
      description: 'Tutto funziona su WhatsApp'
    },
    {
      icon: 'TrendingUp',
      title: 'Risultati immediati',
      description: 'Inizia a ricevere ordini subito'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Supporto dedicato',
      description: 'Assistenza in italiano 24/7'
    }
  ];

  const industrySpecific = {
    restaurant: {
      title: "Trasforma il Tuo Ristorante",
      subtitle: "Inizia a ricevere ordini via WhatsApp oggi stesso",
      description: "Unisciti a oltre 300 ristoranti che hanno già automatizzato il loro servizio con MIA. Setup gratuito e risultati garantiti.",
      primaryCTA: "Inizia Gratis Ora",
      secondaryCTA: "Parla con un Esperto"
    },
    salon: {
      title: "Rivoluziona il Tuo Salone",
      subtitle: "Automatizza prenotazioni e gestione clienti",
      description: "Unisciti a centinaia di saloni che hanno semplificato la gestione appuntamenti con MIA. Configurazione gratuita e supporto completo.",
      primaryCTA: "Inizia Gratis Ora",
      secondaryCTA: "Parla con un Esperto"
    }
  };

  const content = industrySpecific[activeIndustry];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {content.title}
            </h2>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-4 font-medium">
              {content.subtitle}
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              {content.description}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name={benefit.icon} size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{benefit.title}</div>
                    <div className="text-primary-foreground/70 text-xs">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 cta-pulse"
                iconName="Rocket"
                iconPosition="left"
              >
                {content.primaryCTA}
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleWhatsAppContact}
                className="border-white/30 text-white hover:bg-white/10"
                iconName="MessageCircle"
                iconPosition="left"
              >
                {content.secondaryCTA}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">300+</div>
                <div className="text-xs text-primary-foreground/70">Clienti Attivi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs text-primary-foreground/70">Valutazione</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-primary-foreground/70">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-brand-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Inizia Subito
              </h3>
              <p className="text-muted-foreground">
                Lascia la tua email e ti contatteremo per configurare MIA gratuitamente
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Aziendale
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mario.rossi@ristorante.it"
                  required
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-brand"
                />
              </div>

              <div className="space-y-4">
                <Button 
                  type="submit"
                  variant="default" 
                  size="lg"
                  fullWidth
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Richiedi Demo Gratuita'}
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-muted-foreground">oppure</span>
                  </div>
                </div>

                <Button 
                  type="button"
                  variant="outline" 
                  size="lg"
                  fullWidth
                  onClick={handleWhatsAppContact}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Contattaci su WhatsApp
                </Button>
              </div>
            </form>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-muted/30 rounded-xl">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>I tuoi dati sono protetti e non verranno mai condivisi</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-primary">10min</div>
                <div className="text-xs text-muted-foreground">Setup</div>
              </div>
              <div>
                <div className="text-lg font-bold text-primary">0€</div>
                <div className="text-xs text-muted-foreground">Costi iniziali</div>
              </div>
              <div>
                <div className="text-lg font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Supporto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;