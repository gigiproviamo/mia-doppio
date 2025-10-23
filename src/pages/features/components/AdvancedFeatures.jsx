import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AdvancedFeatures = () => {
  const [expandedFeature, setExpandedFeature] = useState(null);

  const advancedFeatures = [
    {
      id: 'ai-insights',
      title: "Analisi AI Predittive",
      description: "Intelligenza artificiale che analizza i pattern dei clienti per ottimizzare il business",
      icon: "Brain",
      category: "Analytics",
      benefits: [
        "Previsioni vendite accurate",
        "Identificazione trend clienti",
        "Ottimizzazione prezzi dinamica",
        "Suggerimenti menu personalizzati"
      ],
      technicalDetails: [
        "Machine Learning avanzato per pattern recognition",
        "Analisi predittiva basata su 50+ variabili",
        "Aggiornamento modelli in tempo reale",
        "Dashboard analytics con insights azionabili"
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
      imageAlt: "Modern analytics dashboard displaying AI-powered business insights with charts and predictive data visualization",
      videoDemo: "Guarda come l'AI prevede i picchi di vendita",
      roi: "25% incremento ricavi"
    },
    {
      id: 'multi-location',
      title: "Gestione Multi-Sede",
      description: "Coordina più location con un'unica dashboard centralizzata",
      icon: "Building2",
      category: "Management",
      benefits: [
        "Dashboard unificata multi-sede",
        "Sincronizzazione inventario real-time",
        "Reporting consolidato",
        "Gestione staff centralizzata"
      ],
      technicalDetails: [
        "Architettura cloud scalabile",
        "Sincronizzazione dati in tempo reale",
        "Backup automatico multi-regione",
        "API per integrazioni custom"
      ],
      image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
      imageAlt: "Modern business office with multiple screens showing centralized management dashboard for restaurant chain operations",
      videoDemo: "Scopri la gestione centralizzata",
      roi: "30% riduzione costi operativi"
    },
    {
      id: 'voice-ai',
      title: "Assistente Vocale AI",
      description: "Interazione vocale naturale per ordini e prenotazioni hands-free",
      icon: "Mic",
      category: "Innovation",
      benefits: [
        "Ordini vocali WhatsApp",
        "Riconoscimento linguaggio naturale",
        "Supporto dialetti italiani",
        "Accessibilità migliorata"
      ],
      technicalDetails: [
        "NLP avanzato per italiano e dialetti",
        "Riconoscimento vocale edge computing",
        "Elaborazione real-time < 200ms",
        "Privacy-first: nessun dato vocale salvato"
      ],
      image: "https://images.unsplash.com/photo-1631016800686-1b3524982956",
      imageAlt: "Person speaking into smartphone with voice recognition interface showing Italian language processing and restaurant ordering system",
      videoDemo: "Prova l'assistente vocale",
      roi: "40% aumento accessibilità"
    }
  ];

  // Filtri solo per le categorie rimaste
  const categories = ['Tutti', 'Analytics', 'Management', 'Innovation'];
  const [activeCategory, setActiveCategory] = useState('Tutti');

  const filteredFeatures =
    activeCategory === 'Tutti'
      ? advancedFeatures
      : advancedFeatures?.filter((feature) => feature?.category === activeCategory);

  const toggleFeature = (featureId) => {
    setExpandedFeature(expandedFeature === featureId ? null : featureId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Tecnologie Avanzate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Funzionalità del Futuro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri le tecnologie innovative che rendono MIA l'assistente AI più avanzato per il tuo business
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-brand ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-white text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className="bg-white rounded-2xl shadow-brand-lg overflow-hidden hover-lift"
            >
              {/* Feature Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name={feature?.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{feature?.title}</h3>
                      <span className="text-sm text-primary font-medium">{feature?.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-accent">{feature?.roi}</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{feature?.description}</p>

                {/* Feature Image */}
                <div className="mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={feature?.image}
                    alt={feature?.imageAlt}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Quick Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {feature?.benefits?.slice(0, 4)?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Expand Button */}
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={() => toggleFeature(feature?.id)}
                  iconName={expandedFeature === feature?.id ? 'ChevronUp' : 'ChevronDown'}
                  iconPosition="right"
                >
                  {expandedFeature === feature?.id ? 'Nascondi Dettagli' : 'Dettagli Tecnici'}
                </Button>
              </div>

              {/* Expanded Content */}
              {expandedFeature === feature?.id && (
                <div className="px-6 pb-6 border-t border-border">
                  <div className="pt-6">
                    <h4 className="font-semibold text-foreground mb-4">Specifiche Tecniche</h4>
                    <ul className="space-y-2 mb-6">
                      {feature?.technicalDetails?.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="Cpu" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="default"
                        iconName="Play"
                        iconPosition="left"
                        className="flex-1"
                      >
                        {feature?.videoDemo}
                      </Button>
                      <Button
                        variant="outline"
                        iconName="MessageCircle"
                        iconPosition="left"
                        onClick={() =>
                          window.open(
                            `https://wa.me/1234567890?text=Ciao! Vorrei saperne di più su ${feature?.title}`,
                            '_blank'
                          )
                        }
                      >
                        Richiedi Info
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Accesso Anticipato alle Nuove Funzionalità
            </h3>
            <p className="text-lg mb-6 opacity-90">
              I nostri clienti Premium ottengono accesso prioritario a tutte le innovazioni
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Crown"
                iconPosition="left"
              >
                Diventa Premium
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Bell"
                iconPosition="left"
              >
                Notifiche Novità
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
