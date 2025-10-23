import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const DownloadableChecklist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const checklistItems = [
    {
      id: 1,
      title: "Preparazione Account WhatsApp Business",
      description: "Configura il tuo profilo aziendale con informazioni complete",
      estimatedTime: "5 minuti"
    },
    {
      id: 2,
      title: "Caricamento Menu/Servizi",
      description: "Inserisci i tuoi prodotti o servizi nel sistema MIA",
      estimatedTime: "15 minuti"
    },
    {
      id: 3,
      title: "Personalizzazione Risposte",
      description: "Adatta i messaggi automatici al tuo stile comunicativo",
      estimatedTime: "10 minuti"
    },
    {
      id: 4,
      title: "Test Conversazioni",
      description: "Prova il sistema con scenari reali prima del lancio",
      estimatedTime: "10 minuti"
    },
    {
      id: 5,
      title: "Formazione Staff",
      description: "Istruisci il team sull\'uso della dashboard MIA",
      estimatedTime: "20 minuti"
    }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Mock download trigger
      setTimeout(() => {
        const element = document.createElement('a');
        element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('MIA Assistant - Checklist di Setup Completa\n\nScaricato il: ' + new Date()?.toLocaleDateString('it-IT'));
        element.download = 'mia-setup-checklist.txt';
        element?.click();
      }, 1000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-brand p-8 text-center">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Download" size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Download Avviato!</h3>
        <p className="text-muted-foreground mb-6">
          La checklist completa è stata inviata alla tua email e il download dovrebbe iniziare automaticamente.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          iconName="RotateCcw"
          iconPosition="left"
          iconSize={16}
        >
          Scarica di Nuovo
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-brand p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckSquare" size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Checklist di Setup Completa
        </h3>
        <p className="text-muted-foreground">
          Scarica la guida passo-passo per configurare MIA Assistant in meno di 60 minuti
        </p>
      </div>
      {/* Preview Items */}
      <div className="space-y-4 mb-8">
        {checklistItems?.map((item) => (
          <div key={item?.id} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-primary">{item?.id}</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground text-sm">{item?.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{item?.description}</p>
              <div className="flex items-center space-x-1 mt-2">
                <Icon name="Clock" size={12} className="text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{item?.estimatedTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Download Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          label="Email per il Download"
          placeholder="la-tua-email@esempio.it"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          description="Riceverai anche consigli esclusivi per ottimizzare MIA"
        />
        
        <Button
          type="submit"
          variant="default"
          fullWidth
          disabled={!email}
          iconName="Download"
          iconPosition="left"
          iconSize={16}
        >
          Scarica Checklist Gratuita
        </Button>
      </form>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Nessuno spam. Puoi annullare l'iscrizione in qualsiasi momento.
      </p>
    </div>
  );
};

export default DownloadableChecklist;