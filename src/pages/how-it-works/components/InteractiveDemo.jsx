import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const InteractiveDemo = ({ demoData, onClose }) => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const nextMessage = () => {
    if (currentMessage < demoData?.messages?.length - 1) {
      setCurrentMessage(currentMessage + 1);
    }
  };

  const prevMessage = () => {
    if (currentMessage > 0) {
      setCurrentMessage(currentMessage - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-brand-xl max-w-md w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{demoData?.title}</h3>
              <p className="text-sm text-muted-foreground">Demo interattiva</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            iconSize={20}
          />
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
          {demoData?.messages?.slice(0, currentMessage + 1)?.map((message, index) => (
            <div
              key={index}
              className={`flex ${message?.sender === 'customer' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                message?.sender === 'customer' ?'bg-muted text-foreground' :'bg-primary text-primary-foreground'
              }`}>
                <p className="text-sm">{message?.text}</p>
                {message?.timestamp && (
                  <p className="text-xs opacity-70 mt-1">
                    {new Date(message.timestamp)?.toLocaleTimeString('it-IT', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevMessage}
              disabled={currentMessage === 0}
              iconName="ChevronLeft"
              iconPosition="left"
              iconSize={16}
            >
              Precedente
            </Button>
            
            <span className="text-sm text-muted-foreground">
              {currentMessage + 1} di {demoData?.messages?.length}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextMessage}
              disabled={currentMessage === demoData?.messages?.length - 1}
              iconName="ChevronRight"
              iconPosition="right"
              iconSize={16}
            >
              Successivo
            </Button>
          </div>

          <Button
            variant="default"
            fullWidth
            onClick={() => window.open('https://wa.me/1234567890?text=Ciao, vorrei provare MIA Assistant!', '_blank')}
            iconName="MessageCircle"
            iconPosition="left"
            iconSize={16}
          >
            Prova su WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;