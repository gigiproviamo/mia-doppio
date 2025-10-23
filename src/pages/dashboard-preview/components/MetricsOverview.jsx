import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = ({ selectedIndustry }) => {
  const restaurantMetrics = [
    {
      id: 1,
      title: "Ordini Oggi",
      value: "47",
      change: "+12%",
      trend: "up",
      icon: "ShoppingBag",
      color: "text-accent"
    },
    {
      id: 2,
      title: "Fatturato",
      value: "€1.240",
      change: "+8%",
      trend: "up",
      icon: "Euro",
      color: "text-primary"
    },
    {
      id: 3,
      title: "Tempo Risposta",
      value: "2.3s",
      change: "-15%",
      trend: "down",
      icon: "Clock",
      color: "text-warning"
    },
    {
      id: 4,
      title: "Clienti Attivi",
      value: "156",
      change: "+23%",
      trend: "up",
      icon: "Users",
      color: "text-success"
    }
  ];

  const salonMetrics = [
    {
      id: 1,
      title: "Appuntamenti",
      value: "23",
      change: "+18%",
      trend: "up",
      icon: "Calendar",
      color: "text-accent"
    },
    {
      id: 2,
      title: "Fatturato",
      value: "€890",
      change: "+15%",
      trend: "up",
      icon: "Euro",
      color: "text-primary"
    },
    {
      id: 3,
      title: "Tasso Conferma",
      value: "94%",
      change: "+5%",
      trend: "up",
      icon: "CheckCircle",
      color: "text-success"
    },
    {
      id: 4,
      title: "Clienti Nuovi",
      value: "12",
      change: "+40%",
      trend: "up",
      icon: "UserPlus",
      color: "text-warning"
    }
  ];

  const metrics = selectedIndustry === 'restaurant' ? restaurantMetrics : salonMetrics;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics?.map((metric) => (
        <div key={metric?.id} className="bg-white rounded-lg border border-border p-6 hover-lift">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center ${metric?.color}`}>
              <Icon name={metric?.icon} size={24} />
            </div>
            <div className={`flex items-center space-x-1 text-sm ${
              metric?.trend === 'up' ? 'text-success' : 'text-error'
            }`}>
              <Icon 
                name={metric?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                size={16} 
              />
              <span>{metric?.change}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1">{metric?.value}</h3>
            <p className="text-sm text-muted-foreground">{metric?.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;