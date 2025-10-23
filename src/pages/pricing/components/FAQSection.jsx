import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqs = [
    {
      question: "Posso cambiare piano in qualsiasi momento?",
      answer: `Assolutamente sì! Puoi fare upgrade o downgrade del tuo piano in qualsiasi momento. Le modifiche avranno effetto dal ciclo di fatturazione successivo.\n\nSe fai upgrade, pagherai solo la differenza proporzionale per il periodo rimanente. Se fai downgrade, il credito rimanente verrà applicato al prossimo pagamento.`
    },
    {
      question: "Cosa succede se supero i limiti del mio piano?",
      answer: `Ti invieremo una notifica quando raggiungi l'80% del limite. Se superi il limite:\n\n• Ordini extra: €0,50 per ordine aggiuntivo\n• Conversazioni extra: €0,02 per conversazione\n• Ti suggeriremo automaticamente l'upgrade al piano superiore per risparmiare`
    },
    {
      question: "È inclusa l\'integrazione con il mio POS?",
      answer: `Sì, l'integrazione con i principali sistemi POS è inclusa in tutti i piani:\n\n• Starter: 1 integrazione POS\n• Professional: fino a 3 integrazioni\n• Enterprise: integrazioni illimitate\n\nSupportiamo oltre 50 sistemi POS italiani. Il setup è gratuito e viene fatto dal nostro team tecnico.`
    },
    {
      question: "Quanto tempo serve per essere operativi?",
      answer: `Il setup di MIA è incredibilmente veloce:\n\n• Configurazione base: 15 minuti\n• Menu e catalogo: 30 minuti\n• Integrazione POS: 1-2 ore (con il nostro supporto)\n• Training del team: 1 ora\n\nLa maggior parte dei clienti è operativa entro 24 ore dalla registrazione.`
    },
    {
      question: "Che tipo di supporto ricevo?",
      answer: `Il supporto varia per piano:\n\n• Starter: Email support (risposta entro 24h)\n• Professional: Chat prioritario + email + chiamata setup\n• Enterprise: Account manager dedicato + supporto telefonico\n\nTutti i piani includono la knowledge base completa e video tutorial.`
    },
    {
      question: "I prezzi includono l'IVA?",
      answer: `No, tutti i prezzi sono indicati IVA esclusa. L'IVA (22%) verrà aggiunta in fase di checkout per clienti italiani.\n\nPer aziende con Partita IVA valida, l'IVA non viene applicata nelle transazioni B2B intracomunitarie secondo la normativa europea.`
    },
    {
      question: "Posso testare MIA prima di acquistare?",
      answer: `Certamente! Offriamo:\n\n• Demo interattiva gratuita (senza registrazione)\n• Prova gratuita di 14 giorni per il piano Starter\n• Consulenza gratuita di 30 minuti per piani Professional ed Enterprise\n\nNessun impegno, nessuna carta di credito richiesta per iniziare.`
    },
    {
      question: "Cosa succede se cancello l\'abbonamento?",
      answer: `Puoi cancellare in qualsiasi momento:\n\n• Accesso completo fino alla fine del periodo pagato\n• Esportazione di tutti i tuoi dati\n• Nessuna penale di cancellazione\n• Possibilità di riattivare l'account entro 90 giorni mantenendo tutti i dati`
    }
  ];

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems?.has(index)) {
      newOpenItems?.delete(index);
    } else {
      newOpenItems?.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-white rounded-2xl border border-border shadow-brand p-6 lg:p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Domande Frequenti sui Prezzi
        </h3>
        <p className="text-muted-foreground">
          Tutto quello che devi sapere sui nostri piani e prezzi
        </p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div key={index} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors focus-brand"
            >
              <span className="font-medium text-foreground pr-4">
                {faq?.question}
              </span>
              <Icon 
                name={openItems?.has(index) ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                className="text-muted-foreground flex-shrink-0"
              />
            </button>
            
            {openItems?.has(index) && (
              <div className="px-6 pb-4 border-t border-border bg-muted/20">
                <div className="pt-4 text-sm text-muted-foreground whitespace-pre-line">
                  {faq?.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Contact Support */}
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-muted-foreground mb-4">
          Non trovi la risposta che cerchi?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.open('https://wa.me/1234567890?text=Ciao, ho una domanda sui prezzi di MIA Assistant', '_blank')}
            className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
          >
            <Icon name="MessageCircle" size={16} />
            <span className="text-sm font-medium">Chatta con noi su WhatsApp</span>
          </button>
          <span className="text-muted-foreground text-sm hidden sm:block">•</span>
          <button
            onClick={() => window.open('mailto:support@mia-assistant.it?subject=Domanda sui prezzi', '_blank')}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Icon name="Mail" size={16} />
            <span className="text-sm font-medium">Invia email al supporto</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;