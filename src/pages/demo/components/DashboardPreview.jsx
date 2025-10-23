import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [liveStats, setLiveStats] = useState({
    activeChats: 12,
    todayOrders: 47,
    revenue: 1250,
    avgResponse: 15
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        ...prev,
        activeChats: Math.max(8, Math.min(20, prev?.activeChats + (Math.random() > 0.5 ? 1 : -1))),
        todayOrders: prev?.todayOrders + (Math.random() > 0.7 ? 1 : 0),
        revenue: prev?.revenue + (Math.random() > 0.8 ? Math.floor(Math.random() * 50) + 10 : 0)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const recentOrders = [
  {
    id: '#2847',
    customer: 'Marco Rossi',
    items: 'Margherita x2, Coca Cola x2',
    total: 28.50,
    status: 'preparing',
    time: '2 min fa',
    avatar: "https://images.unsplash.com/photo-1526408915383-4ad3afda633c",
    avatarAlt: 'Professional headshot of young man with brown hair and friendly smile'
  },
  {
    id: '#2846',
    customer: 'Sofia Bianchi',
    items: 'Carbonara, Tiramisù',
    total: 22.00,
    status: 'ready',
    time: '5 min fa',
    avatar: "https://images.unsplash.com/photo-1717329817976-2762c73d38ff",
    avatarAlt: 'Professional headshot of woman with blonde hair in business attire'
  },
  {
    id: '#2845',
    customer: 'Luca Verdi',
    items: 'Pizza Diavola, Birra Moretti',
    total: 18.50,
    status: 'delivered',
    time: '12 min fa',
    avatar: "https://images.unsplash.com/photo-1663720527180-4c60a78fe3b7",
    avatarAlt: 'Professional headshot of man with dark hair and beard in casual shirt'
  }];


  const activeChats = [
  {
    id: 1,
    customer: 'Anna Neri',
    lastMessage: 'A che ora chiudete stasera?',
    time: '1 min',
    unread: 1,
    status: 'online',
    avatar: "https://images.unsplash.com/photo-1725271765764-669af9988700",
    avatarAlt: 'Professional headshot of woman with dark hair and warm smile'
  },
  {
    id: 2,
    customer: 'Giuseppe Mancini',
    lastMessage: 'Vorrei modificare la prenotazione',
    time: '3 min',
    unread: 2,
    status: 'away',
    avatar: "https://images.unsplash.com/photo-1602872246746-7578684cfc96",
    avatarAlt: 'Professional headshot of middle-aged man with gray hair in suit'
  },
  {
    id: 3,
    customer: 'Chiara Russo',
    lastMessage: 'Grazie per il servizio! 😊',
    time: '8 min',
    unread: 0,
    status: 'offline',
    avatar: "https://images.unsplash.com/photo-1722291493584-9e75986c6c5c",
    avatarAlt: 'Professional headshot of young woman with curly hair and bright smile'
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'preparing':return 'text-warning bg-warning/10';
      case 'ready':return 'text-accent bg-accent/10';
      case 'delivered':return 'text-success bg-success/10';
      default:return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'preparing':return 'In preparazione';
      case 'ready':return 'Pronto';
      case 'delivered':return 'Consegnato';
      default:return status;
    }
  };

  const tabs = [
  { id: 'overview', label: 'Panoramica', icon: 'BarChart3' },
  { id: 'orders', label: 'Ordini', icon: 'ShoppingBag' },
  { id: 'chats', label: 'Chat', icon: 'MessageCircle' }];


  return (
    <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Dashboard MIA</h3>
            <p className="text-primary-foreground/80">Ristorante Da Mario - Live Demo</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm">Live</span>
          </div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="border-b border-border">
        <nav className="flex">
          {tabs?.map((tab) =>
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-brand ${
            activeTab === tab?.id ?
            'border-primary text-primary bg-primary/5' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}`
            }>

              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          )}
        </nav>
      </div>
      {/* Content */}
      <div className="p-6">
        {activeTab === 'overview' &&
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Chat Attive</p>
                    <p className="text-2xl font-bold text-primary counter-reveal">{liveStats?.activeChats}</p>
                  </div>
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Ordini Oggi</p>
                    <p className="text-2xl font-bold text-accent counter-reveal">{liveStats?.todayOrders}</p>
                  </div>
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name="ShoppingBag" size={20} className="text-accent" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Incasso</p>
                    <p className="text-2xl font-bold text-success counter-reveal">€{liveStats?.revenue}</p>
                  </div>
                  <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                    <Icon name="Euro" size={20} className="text-success" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tempo Risposta</p>
                    <p className="text-2xl font-bold text-warning">{liveStats?.avgResponse}s</p>
                  </div>
                  <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-warning" />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-muted/30 rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-4">Azioni Rapide</h4>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Button variant="outline" size="sm" iconName="Plus" iconPosition="left" iconSize={16}>
                  Nuovo Ordine
                </Button>
                <Button variant="outline" size="sm" iconName="Calendar" iconPosition="left" iconSize={16}>
                  Prenotazioni
                </Button>
                <Button variant="outline" size="sm" iconName="Settings" iconPosition="left" iconSize={16}>
                  Impostazioni
                </Button>
                <Button variant="outline" size="sm" iconName="BarChart3" iconPosition="left" iconSize={16}>
                  Report
                </Button>
              </div>
            </div>
          </div>
        }

        {activeTab === 'orders' &&
        <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Ordini Recenti</h4>
              <Button variant="outline" size="sm" iconName="RefreshCw" iconPosition="left" iconSize={16}>
                Aggiorna
              </Button>
            </div>

            <div className="space-y-3">
              {recentOrders?.map((order) =>
            <div key={order?.id} className="border border-border rounded-lg p-4 hover:shadow-brand transition-brand">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                    src={order?.avatar}
                    alt={order?.avatarAlt}
                    className="w-10 h-10 rounded-full object-cover" />

                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-foreground">{order?.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order?.status)}`}>
                            {getStatusText(order?.status)}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{order?.customer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">€{order?.total?.toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground">{order?.time}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm text-muted-foreground">{order?.items}</p>
                  </div>
                </div>
            )}
            </div>
          </div>
        }

        {activeTab === 'chats' &&
        <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Conversazioni Attive</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">{liveStats?.activeChats} attive</span>
              </div>
            </div>

            <div className="space-y-2">
              {activeChats?.map((chat) =>
            <div key={chat?.id} className="border border-border rounded-lg p-4 hover:shadow-brand transition-brand cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                      src={chat?.avatar}
                      alt={chat?.avatarAlt}
                      className="w-12 h-12 rounded-full object-cover" />

                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    chat?.status === 'online' ? 'bg-accent' :
                    chat?.status === 'away' ? 'bg-warning' : 'bg-muted-foreground'}`
                    }></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-foreground">{chat?.customer}</span>
                          {chat?.unread > 0 &&
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                              {chat?.unread}
                            </span>
                      }
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{chat?.lastMessage}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{chat?.time}</p>
                      <Icon name="ChevronRight" size={16} className="text-muted-foreground mt-1" />
                    </div>
                  </div>
                </div>
            )}
            </div>
          </div>
        }
      </div>
      {/* Footer */}
      <div className="border-t border-border p-4 bg-muted/30">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Ultimo aggiornamento: {new Date()?.toLocaleTimeString('it-IT')}
          </p>
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open('/dashboard-preview', '_blank')}
            iconName="ExternalLink"
            iconPosition="right"
            iconSize={16}>

            Vedi Dashboard Completa
          </Button>
        </div>
      </div>
    </div>);

};

export default DashboardPreview;