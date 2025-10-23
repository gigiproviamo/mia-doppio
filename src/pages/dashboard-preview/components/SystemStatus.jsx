import React from 'react';
import Icon from '../../../components/AppIcon';

const SystemStatus = () => {
  const systemMetrics = [
    {
      id: 1,
      service: "WhatsApp API",
      status: "operational",
      uptime: "99.9%",
      responseTime: "120ms",
      icon: "MessageCircle"
    },
    {
      id: 2,
      service: "AI Engine",
      status: "operational",
      uptime: "99.8%",
      responseTime: "2.1s",
      icon: "Brain"
    },
    {
      id: 3,
      service: "Database",
      status: "operational",
      uptime: "100%",
      responseTime: "45ms",
      icon: "Database"
    },
    {
      id: 4,
      service: "Payment Gateway",
      status: "operational",
      uptime: "99.7%",
      responseTime: "890ms",
      icon: "CreditCard"
    }
  ];

  const securityFeatures = [
    {
      id: 1,
      feature: "Crittografia End-to-End",
      status: "active",
      description: "Tutti i messaggi sono crittografati"
    },
    {
      id: 2,
      feature: "GDPR Compliance",
      status: "certified",
      description: "Conforme alle normative europee"
    },
    {
      id: 3,
      feature: "Backup Automatici",
      status: "active",
      description: "Backup ogni 6 ore"
    },
    {
      id: 4,
      feature: "Monitoraggio 24/7",
      status: "active",
      description: "Sorveglianza continua del sistema"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': case'active': case'certified':
        return 'text-success';
      case 'degraded':
        return 'text-warning';
      case 'outage':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational': case'active': case'certified':
        return 'CheckCircle';
      case 'degraded':
        return 'AlertTriangle';
      case 'outage':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="space-y-6">
      {/* System Status */}
      <div className="bg-white rounded-lg border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Stato del Sistema</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm text-success font-medium">Tutti i servizi operativi</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          {systemMetrics?.map((metric) => (
            <div key={metric?.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name={metric?.icon} size={20} className="text-muted-foreground" />
                <div>
                  <h4 className="text-sm font-medium text-foreground">{metric?.service}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-muted-foreground">
                      Uptime: {metric?.uptime}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Risposta: {metric?.responseTime}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon 
                  name={getStatusIcon(metric?.status)} 
                  size={16} 
                  className={getStatusColor(metric?.status)} 
                />
                <span className={`text-sm font-medium ${getStatusColor(metric?.status)}`}>
                  Operativo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Security & Compliance */}
      <div className="bg-white rounded-lg border border-border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Sicurezza & Compliance</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Protezione dati e conformità normative
          </p>
        </div>
        
        <div className="p-6 space-y-4">
          {securityFeatures?.map((feature) => (
            <div key={feature?.id} className="flex items-start space-x-3">
              <Icon 
                name={getStatusIcon(feature?.status)} 
                size={16} 
                className={`${getStatusColor(feature?.status)} mt-0.5 flex-shrink-0`} 
              />
              <div>
                <h4 className="text-sm font-medium text-foreground">{feature?.feature}</h4>
                <p className="text-xs text-muted-foreground mt-1">{feature?.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Ultimo controllo sicurezza</span>
            <span className="text-sm font-medium text-foreground">18 Ottobre 2025, 06:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;