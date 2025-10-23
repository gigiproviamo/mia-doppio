import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WhatsAppSimulator = () => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState('');

  const demoScenarios = [
    {
      id: 'restaurant',
      title: 'Prenotazione Ristorante',
      description: 'Simula una prenotazione per 4 persone',
      initialMessage: 'Ciao! Vorrei prenotare un tavolo per stasera'
    },
    {
      id: 'salon',
      title: 'Appuntamento Salone',
      description: 'Prenota un taglio e piega',
      initialMessage: 'Buongiorno, avrei bisogno di un appuntamento'
    }
  ];

  const conversationFlow = {
    restaurant: [
      {
        type: 'user',
        content: 'Ciao! Vorrei prenotare un tavolo per stasera',
        timestamp: new Date(Date.now() - 300000)
      },
      {
        type: 'mia',
        content: `Ciao! Sono MIA, il tuo assistente digitale 🤖\n\nSarò felice di aiutarti con la prenotazione!\n\nPer quante persone vorresti prenotare?`,
        timestamp: new Date(Date.now() - 280000)
      },
      {
        type: 'user',
        content: '4 persone',
        timestamp: new Date(Date.now() - 260000)
      },
      {
        type: 'mia',
        content: `Perfetto! Per 4 persone 👥\n\nA che ora preferiresti cenare? Abbiamo disponibilità per:\n• 19:30\n• 20:00\n• 20:30\n• 21:00`,
        timestamp: new Date(Date.now() - 240000)
      },
      {
        type: 'user',
        content: '20:00 va bene',
        timestamp: new Date(Date.now() - 220000)
      },
      {
        type: 'mia',
        content: `Ottimo! Tavolo per 4 persone alle 20:00 ✅\n\nPosso avere il tuo nome per la prenotazione?`,
        timestamp: new Date(Date.now() - 200000)
      },
      {
        type: 'user',
        content: 'Marco Rossi',
        timestamp: new Date(Date.now() - 180000)
      },
      {
        type: 'mia',
        content: `Grazie Marco! 🎉\n\n✅ PRENOTAZIONE CONFERMATA\n👤 Nome: Marco Rossi\n👥 Persone: 4\n🕐 Orario: 20:00\n📅 Data: Oggi\n\nTi aspettiamo! Se hai bisogno di modificare, scrivimi pure 😊`,
        timestamp: new Date(Date.now() - 160000)
      }
    ],
    salon: [
      {
        type: 'user',
        content: 'Buongiorno, avrei bisogno di un appuntamento',
        timestamp: new Date(Date.now() - 300000)
      },
      {
        type: 'mia',
        content: `Buongiorno! Sono MIA, il tuo assistente digitale ✨\n\nSarò felice di aiutarti a prenotare!\n\nChe servizio ti interessa?\n• Taglio\n• Piega\n• Colore\n• Trattamenti`,
        timestamp: new Date(Date.now() - 280000)
      },
      {
        type: 'user',
        content: 'Taglio e piega',
        timestamp: new Date(Date.now() - 260000)
      },
      {
        type: 'mia',
        content: `Perfetto! Taglio + Piega ✂️💇‍♀️\n\nQuando vorresti venire? Ecco le prossime disponibilità:\n\n📅 OGGI\n• 14:30\n• 16:00\n\n📅 DOMANI\n• 10:00\n• 15:30`,
        timestamp: new Date(Date.now() - 240000)
      },
      {
        type: 'user',
        content: 'Domani alle 15:30',
        timestamp: new Date(Date.now() - 220000)
      },
      {
        type: 'mia',
        content: `Ottima scelta! 🎯\n\nPosso avere il tuo nome e numero di telefono per confermare?`,
        timestamp: new Date(Date.now() - 200000)
      },
      {
        type: 'user',
        content: 'Sofia Bianchi, 347 123 4567',
        timestamp: new Date(Date.now() - 180000)
      },
      {
        type: 'mia',
        content: `Grazie Sofia! 💫\n\n✅ APPUNTAMENTO CONFERMATO\n👤 Nome: Sofia Bianchi\n✂️ Servizio: Taglio + Piega\n🕐 Orario: 15:30\n📅 Data: Domani\n📱 Tel: 347 123 4567\n\nTi aspettiamo! Ti invierò un promemoria 1 ora prima 😊`,
        timestamp: new Date(Date.now() - 160000)
      }
    ]
  };

  const [selectedScenario, setSelectedScenario] = useState('restaurant');
  const [isPlaying, setIsPlaying] = useState(false);

  const formatTime = (date) => {
    return date?.toLocaleTimeString('it-IT', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const startDemo = async (scenarioId) => {
    setSelectedScenario(scenarioId);
    setMessages([]);
    setCurrentStep(0);
    setIsPlaying(true);
    
    const flow = conversationFlow?.[scenarioId];
    
    for (let i = 0; i < flow?.length; i++) {
      if (i > 0) {
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsTyping(false);
      }
      
      setMessages(prev => [...prev, flow?.[i]]);
      setCurrentStep(i + 1);
      
      if (i < flow?.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 800));
      }
    }
    
    setIsPlaying(false);
  };

  const resetDemo = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsPlaying(false);
    setIsTyping(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={20} />
            </div>
            <div>
              <h3 className="font-semibold">MIA Assistant</h3>
              <p className="text-sm opacity-90">Il tuo cameriere digitale</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Phone" size={20} />
            <Icon name="Video" size={20} />
            <Icon name="MoreVertical" size={20} />
          </div>
        </div>
      </div>
      {/* Scenario Selection */}
      {!isPlaying && messages?.length === 0 && (
        <div className="p-6 border-b border-border">
          <h4 className="font-semibold text-foreground mb-4">Scegli uno scenario da testare:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {demoScenarios?.map((scenario) => (
              <button
                key={scenario?.id}
                onClick={() => startDemo(scenario?.id)}
                className="p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-brand text-left"
              >
                <h5 className="font-medium text-foreground mb-2">{scenario?.title}</h5>
                <p className="text-sm text-muted-foreground mb-3">{scenario?.description}</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  <Icon name="Play" size={16} className="mr-2" />
                  Inizia Demo
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`flex ${message?.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl ${
                message?.type === 'user' ?'bg-accent text-accent-foreground' :'bg-white text-foreground border border-border'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message?.content}</p>
              <p className={`text-xs mt-1 ${
                message?.type === 'user' ? 'text-accent-foreground/70' : 'text-muted-foreground'
              }`}>
                {formatTime(message?.timestamp)}
              </p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-border rounded-2xl px-4 py-3 max-w-xs">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-xs text-muted-foreground ml-2">MIA sta scrivendo...</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Input Area */}
      <div className="p-4 border-t border-border bg-white">
        <div className="flex items-center space-x-3">
          <div className="flex-1 flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
            <Icon name="Smile" size={20} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Scrivi un messaggio..."
              value={userInput}
              onChange={(e) => setUserInput(e?.target?.value)}
              className="flex-1 bg-transparent outline-none text-sm"
              disabled={isPlaying}
            />
            <Icon name="Paperclip" size={20} className="text-muted-foreground" />
          </div>
          <button
            className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-brand"
            disabled={isPlaying}
          >
            <Icon name="Send" size={18} />
          </button>
        </div>

        {/* Demo Controls */}
        {messages?.length > 0 && (
          <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="sm"
              onClick={resetDemo}
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={16}
            >
              Ricomincia
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open('https://wa.me/1234567890?text=Ciao! Ho testato la demo e vorrei saperne di più su MIA Assistant', '_blank')}
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
            >
              Prova con WhatsApp
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppSimulator;