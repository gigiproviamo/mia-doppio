import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DemoWalkthrough = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPath, setSelectedPath] = useState(null);

  const demoSteps = [
    {
      id: 'welcome',
      title: 'Benvenuto nella Demo di MIA',
      description: 'Scopri come MIA trasforma il tuo business in 3 semplici passaggi',
      icon: 'Sparkles',
      content: `MIA è il tuo assistente digitale che gestisce automaticamente:\n• Prenotazioni e ordini via WhatsApp\n• Risposte immediate ai clienti 24/7\n• Dashboard completa per il controllo totale\n\nNessuna app da scaricare per i tuoi clienti!`,
      action: 'Inizia il Tour'
    },
    {
      id: 'setup',
      title: 'Setup Istantaneo',
      description: 'Configurazione in meno di 5 minuti',
      icon: 'Zap',
      content: `1️⃣ **Connetti WhatsApp Business**\nColleghiamo il tuo numero esistente\n\n2️⃣ **Carica il Menu/Servizi**\nImporti facilmente prezzi e disponibilità\n\n3️⃣ **Personalizza le Risposte**\nMIA impara il tuo stile di comunicazione`,
      action: 'Vedi Setup'
    },
    {
      id: 'customer-flow',
      title: 'Esperienza Cliente',
      description: 'Come i tuoi clienti interagiscono con MIA',
      icon: 'Users',
      content: `👤 **Il cliente scrive su WhatsApp**\n"Vorrei prenotare per stasera"\n\n🤖 **MIA risponde istantaneamente**\nGuida la conversazione naturalmente\n\n✅ **Prenotazione confermata**\nTutto automatico, zero attesa`,
      action: 'Prova Conversazione'
    },
    {
      id: 'dashboard',
      title: 'Controllo Totale',
      description: 'Gestisci tutto dalla dashboard',
      icon: 'BarChart3',
      content: `📊 **Statistiche in tempo reale**\nOrdini, incassi, chat attive\n\n💬 **Gestione conversazioni**\nIntervieni quando necessario\n\n📈 **Report dettagliati**\nAnalizza performance e crescita`,
      action: 'Esplora Dashboard'
    }
  ];

  const businessPaths = [
    {
      id: 'restaurant',
      title: 'Ristorante',
      description: 'Gestione ordini e prenotazioni',
      icon: 'UtensilsCrossed',
      features: ['Prenotazioni tavoli', 'Ordini takeaway', 'Menu digitale', 'Pagamenti online'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'salon',
      title: 'Salone di Bellezza',
      description: 'Appuntamenti e servizi',
      icon: 'Scissors',
      features: ['Prenotazioni servizi', 'Gestione orari', 'Promemoria automatici', 'Listino prezzi'],
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const nextStep = () => {
    if (currentStep < demoSteps?.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handlePathSelection = (pathId) => {
    setSelectedPath(pathId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary p-4">
        <div className="flex items-center justify-between text-primary-foreground mb-4">
          <h3 className="text-lg font-semibold">Demo Interattiva</h3>
          <span className="text-sm opacity-90">
            {currentStep + 1} di {demoSteps?.length}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / demoSteps?.length) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Step Navigation */}
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-center space-x-2 overflow-x-auto">
          {demoSteps?.map((step, index) => (
            <button
              key={step?.id}
              onClick={() => goToStep(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-brand whitespace-nowrap ${
                index === currentStep
                  ? 'bg-primary text-primary-foreground'
                  : index < currentStep
                  ? 'bg-accent/10 text-accent' :'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon 
                name={index < currentStep ? 'Check' : step?.icon} 
                size={16} 
              />
              <span className="hidden sm:inline">{step?.title}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Step Content */}
      <div className="p-6">
        <div className="max-w-2xl mx-auto">
          {/* Current Step */}
          <div className="text-center mb-8">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
              currentStep === 0 ? 'bg-gradient-to-br from-primary to-secondary' :
              currentStep === 1 ? 'bg-gradient-to-br from-accent to-primary' :
              currentStep === 2 ? 'bg-gradient-to-br from-warning to-accent': 'bg-gradient-to-br from-success to-primary'
            }`}>
              <Icon 
                name={demoSteps?.[currentStep]?.icon} 
                size={32} 
                className="text-white" 
              />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {demoSteps?.[currentStep]?.title}
            </h2>
            <p className="text-muted-foreground">
              {demoSteps?.[currentStep]?.description}
            </p>
          </div>

          {/* Step-specific Content */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {demoSteps?.[currentStep]?.content}
                </p>
              </div>
              
              {/* Business Path Selection */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  Scegli il tuo settore per una demo personalizzata:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {businessPaths?.map((path) => (
                    <button
                      key={path?.id}
                      onClick={() => handlePathSelection(path?.id)}
                      className={`p-6 rounded-xl border-2 transition-brand text-left ${
                        selectedPath === path?.id
                          ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-primary/5'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path?.color} flex items-center justify-center mb-4`}>
                        <Icon name={path?.icon} size={24} className="text-white" />
                      </div>
                      <h5 className="font-semibold text-foreground mb-2">{path?.title}</h5>
                      <p className="text-sm text-muted-foreground mb-3">{path?.description}</p>
                      <div className="space-y-1">
                        {path?.features?.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-accent" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {demoSteps?.[currentStep]?.content}
                </p>
              </div>
              
              {/* Setup Visual */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: 'Smartphone', title: 'WhatsApp', desc: 'Connetti in 1 click' },
                  { icon: 'Upload', title: 'Menu/Servizi', desc: 'Carica facilmente' },
                  { icon: 'MessageSquare', title: 'Personalizza', desc: 'Imposta risposte' }
                ]?.map((item, index) => (
                  <div key={index} className="text-center p-4 border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name={item?.icon} size={24} className="text-primary" />
                    </div>
                    <h5 className="font-medium text-foreground mb-1">{item?.title}</h5>
                    <p className="text-sm text-muted-foreground">{item?.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-warning/10 to-accent/10 rounded-xl p-6">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {demoSteps?.[currentStep]?.content}
                </p>
              </div>
              
              {/* Customer Journey Visual */}
              <div className="space-y-4">
                {[
                  { step: '1', icon: 'MessageCircle', title: 'Cliente scrive', desc: 'Su WhatsApp normale' },
                  { step: '2', icon: 'Bot', title: 'MIA risponde', desc: 'Istantaneamente' },
                  { step: '3', icon: 'CheckCircle', title: 'Tutto risolto', desc: 'Senza intervento' }
                ]?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {item?.step}
                    </div>
                    <div className="w-12 h-12 bg-white border border-border rounded-lg flex items-center justify-center">
                      <Icon name={item?.icon} size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-foreground">{item?.title}</h5>
                      <p className="text-sm text-muted-foreground">{item?.desc}</p>
                    </div>
                    <Icon name="ArrowRight" size={20} className="text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-xl p-6">
                <p className="text-foreground whitespace-pre-line leading-relaxed">
                  {demoSteps?.[currentStep]?.content}
                </p>
              </div>
              
              {/* Dashboard Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: 'BarChart3', title: 'Analytics', desc: 'Statistiche dettagliate' },
                  { icon: 'MessageSquare', title: 'Chat Manager', desc: 'Gestione conversazioni' },
                  { icon: 'Calendar', title: 'Calendario', desc: 'Prenotazioni e orari' },
                  { icon: 'Settings', title: 'Impostazioni', desc: 'Personalizzazione completa' }
                ]?.map((feature, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover:shadow-brand transition-brand">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <Icon name={feature?.icon} size={20} className="text-primary" />
                    </div>
                    <h5 className="font-medium text-foreground mb-1">{feature?.title}</h5>
                    <p className="text-sm text-muted-foreground">{feature?.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            iconName="ChevronLeft"
            iconPosition="left"
            iconSize={16}
          >
            Indietro
          </Button>

          <div className="flex items-center space-x-2">
            {demoSteps?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-2 h-2 rounded-full transition-brand ${
                  index === currentStep ? 'bg-primary' : 'bg-border'
                }`}
              />
            ))}
          </div>

          {currentStep < demoSteps?.length - 1 ? (
            <Button
              variant="default"
              onClick={nextStep}
              iconName="ChevronRight"
              iconPosition="right"
              iconSize={16}
            >
              {demoSteps?.[currentStep]?.action}
            </Button>
          ) : (
            <Button
              variant="default"
              onClick={() => window.open('https://wa.me/1234567890?text=Ho completato la demo e vorrei iniziare con MIA Assistant!', '_blank')}
              iconName="MessageCircle"
              iconPosition="right"
              iconSize={16}
              className="cta-pulse"
            >
              Inizia Ora!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoWalkthrough;