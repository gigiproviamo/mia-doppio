import React from 'react';
import Icon from '../../../components/AppIcon';

const AutomationStats = ({ selectedIndustry }) => {
  const restaurantStats = [
    {
      id: 1,
      title: "Ordini Automatizzati",
      value: "89%",
      description: "Ordini gestiti senza intervento manuale",
      icon: "Zap",
      trend: "+5% questa settimana"
    },
    {
      id: 2,
      title: "Prenotazioni Confermate",
      value: "94%",
      description: "Tasso di conferma automatica",
      icon: "CheckCircle",
      trend: "+2% questo mese"
    },
    {
      id: 3,
      title: "Tempo Risparmiato",
      value: "4.2h",
      description: "Ore risparmiate oggi",
      icon: "Clock",
      trend: "Media giornaliera"
    }
  ];

  const salonStats = [
    {
      id: 1,
      title: "Appuntamenti Auto",
      value: "92%",
      description: "Prenotazioni gestite automaticamente",
      icon: "Zap",
      trend: "+8% questa settimana"
    },
    {
      id: 2,
      title: "Promemoria Inviati",
      value: "156",
      description: "Promemoria automatici oggi",
      icon: "Bell",
      trend: "100% consegnati"
    },
    {
      id: 3,
      title: "No-Show Ridotti",
      value: "73%",
      description: "Riduzione mancate presentazioni",
      icon: "TrendingDown",
      trend: "vs mese scorso"
    }
  ];

  const stats = selectedIndustry === 'restaurant' ? restaurantStats : salonStats;

  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Statistiche Automazione</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Performance dell'intelligenza artificiale
        </p>
      </div>
      <div className="p-6 space-y-6">
        {stats?.map((stat) => (
          <div key={stat?.id} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={stat?.icon} size={20} className="text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-foreground">{stat?.title}</h4>
                <span className="text-2xl font-bold text-primary">{stat?.value}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">{stat?.description}</p>
              
              <div className="flex items-center space-x-1">
                <Icon name="TrendingUp" size={14} className="text-success" />
                <span className="text-xs text-success">{stat?.trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Efficienza complessiva</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
              <div className="w-[91%] h-full bg-primary rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-foreground">91%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationStats;