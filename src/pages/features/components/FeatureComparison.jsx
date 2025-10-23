import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeatureComparison = () => {
  // Solo i risultati misurabili
  const benefits = [
    { metric: 'Tempo Risparmiato',     traditional: '0 ore/giorno',   mia: '4-6 ore/giorno', improvement: '+600%', icon: 'Clock' },
    { metric: 'Tasso Conversione',     traditional: '60-70%',         mia: '95-98%',         improvement: '+40%',  icon: 'TrendingUp' },
    { metric: 'Errori Operativi',      traditional: '15-20/giorno',   mia: '0-2/giorno',     improvement: '-90%',  icon: 'Shield' },
    { metric: 'Soddisfazione Cliente', traditional: '3.5/5',          mia: '4.8/5',          improvement: '+37%',  icon: 'Star' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Risultati Misurabili
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numeri reali ottenuti dai clienti che usano MIA Assistant
          </p>
        </div>

        {/* Benefits only */}
        <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl
                           bg-white shadow-brand-lg -translate-y-1
                           transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} size={24} className="text-primary" />
                </div>

                <h4 className="font-semibold text-foreground mb-3">{benefit.metric}</h4>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prima:</span>
                    <span className="text-red-600 font-medium">{benefit.traditional}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Con MIA:</span>
                    <span className="text-primary font-medium">{benefit.mia}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-accent font-bold">{benefit.improvement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Unisciti a oltre 500+ business che hanno già fatto il salto
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="cta-pulse"
                iconName="Rocket"
                iconPosition="left"
              >
                Inizia la Trasformazione
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
              >
                Calcola il ROI
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComparison;
