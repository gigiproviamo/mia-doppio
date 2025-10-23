import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveConversations = ({ selectedIndustry }) => {
  const [conversations, setConversations] = useState([]);

  const restaurantConversations = [
  {
    id: 1,
    customer: "Marco Rossi",
    avatar: "https://images.unsplash.com/photo-1654727157781-e4d438e3a02a",
    avatarAlt: "Professional headshot of young Italian man with dark hair and friendly smile",
    lastMessage: "Vorrei prenotare per 4 persone stasera alle 20:00",
    timestamp: new Date(Date.now() - 300000),
    status: "active",
    type: "reservation"
  },
  {
    id: 2,
    customer: "Sofia Bianchi",
    avatar: "https://images.unsplash.com/photo-1507532459814-b32f63cf4497",
    avatarAlt: "Professional portrait of young woman with brown hair and warm smile",
    lastMessage: "Perfetto! Grazie per la conferma dell\'ordine",
    timestamp: new Date(Date.now() - 600000),
    status: "completed",
    type: "order"
  },
  {
    id: 3,
    customer: "Luca Ferrari",
    avatar: "https://images.unsplash.com/photo-1632179068477-3cb975300d13",
    avatarAlt: "Casual portrait of man with beard wearing blue shirt outdoors",
    lastMessage: "Avete ancora la pizza margherita disponibile?",
    timestamp: new Date(Date.now() - 900000),
    status: "pending",
    type: "inquiry"
  }];


  const salonConversations = [
  {
    id: 1,
    customer: "Elena Conti",
    avatar: "https://images.unsplash.com/photo-1730344996660-5d87635efdf3",
    avatarAlt: "Professional headshot of elegant woman with blonde hair and confident expression",
    lastMessage: "Vorrei spostare l'appuntamento di domani alle 15:00",
    timestamp: new Date(Date.now() - 240000),
    status: "active",
    type: "reschedule"
  },
  {
    id: 2,
    customer: "Giulia Romano",
    avatar: "https://images.unsplash.com/photo-1722291493584-9e75986c6c5c",
    avatarAlt: "Portrait of young woman with curly hair and bright smile in natural lighting",
    lastMessage: "Grazie per il promemoria! Confermo per domani",
    timestamp: new Date(Date.now() - 480000),
    status: "confirmed",
    type: "reminder"
  },
  {
    id: 3,
    customer: "Anna Ricci",
    avatar: "https://images.unsplash.com/photo-1734456611474-13245d164868",
    avatarAlt: "Professional portrait of woman with dark hair in business attire",
    lastMessage: "Che trattamenti avete disponibili per capelli ricci?",
    timestamp: new Date(Date.now() - 720000),
    status: "pending",
    type: "consultation"
  }];


  useEffect(() => {
    setConversations(selectedIndustry === 'restaurant' ? restaurantConversations : salonConversations);
  }, [selectedIndustry]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':return 'bg-accent';
      case 'completed':return 'bg-success';
      case 'confirmed':return 'bg-success';
      case 'pending':return 'bg-warning';
      default:return 'bg-muted-foreground';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'reservation':return 'Calendar';
      case 'order':return 'ShoppingBag';
      case 'inquiry':return 'MessageCircle';
      case 'reschedule':return 'Clock';
      case 'reminder':return 'Bell';
      case 'consultation':return 'HelpCircle';
      default:return 'MessageCircle';
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) return 'ora';
    if (minutes < 60) return `${minutes}m fa`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h fa`;
  };

  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Conversazioni Live</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              {conversations?.filter((c) => c?.status === 'active')?.length} attive
            </span>
          </div>
        </div>
      </div>
      <div className="divide-y divide-border">
        {conversations?.map((conversation) =>
        <div key={conversation?.id} className="p-4 hover:bg-muted/50 transition-brand cursor-pointer">
            <div className="flex items-start space-x-3">
              <div className="relative">
                <img
                src={conversation?.avatar}
                alt={conversation?.avatarAlt}
                className="w-10 h-10 rounded-full object-cover" />

                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(conversation?.status)}`}></div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-medium text-foreground truncate">
                    {conversation?.customer}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <Icon
                    name={getTypeIcon(conversation?.type)}
                    size={14}
                    className="text-muted-foreground" />

                    <span className="text-xs text-muted-foreground">
                      {formatTime(conversation?.timestamp)}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground truncate">
                  {conversation?.lastMessage}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary/80 transition-brand font-medium">
          Visualizza tutte le conversazioni
        </button>
      </div>
    </div>);

};

export default LiveConversations;