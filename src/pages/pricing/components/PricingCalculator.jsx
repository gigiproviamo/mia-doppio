import React, { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingCalculator = ({ onCalculationChange }) => {
  const [businessType, setBusinessType] = useState('restaurant');
  const [monthlyOrders, setMonthlyOrders] = useState(150);
  const [averageOrderValue, setAverageOrderValue] = useState(25);
  const [currentConversionRate, setCurrentConversionRate] = useState(15);
  const [isExpanded, setIsExpanded] = useState(false);

  const businessOptions = [
    { value: 'restaurant', label: 'Ristorante' },
    { value: 'salon', label: 'Salone di Bellezza' },
    { value: 'cafe', label: 'Bar/Caffetteria' },
    { value: 'pizzeria', label: 'Pizzeria' },
    { value: 'other', label: 'Altro' }
  ];

  const calculateROI = () => {
    const currentRevenue = monthlyOrders * averageOrderValue;
    const improvedConversionRate = Math.min(currentConversionRate + 25, 85);
    const additionalOrders = (monthlyOrders * (improvedConversionRate - currentConversionRate)) / 100;
    const additionalRevenue = additionalOrders * averageOrderValue;
    const miaSubscriptionCost = monthlyOrders <= 100 ? 29 : monthlyOrders <= 500 ? 79 : 149;
    const netROI = additionalRevenue - miaSubscriptionCost;
    const roiPercentage = ((netROI / miaSubscriptionCost) * 100);

    return {
      currentRevenue,
      additionalRevenue,
      netROI,
      roiPercentage,
      miaSubscriptionCost,
      improvedConversionRate,
      additionalOrders: Math.round(additionalOrders),
      totalOrders: monthlyOrders + Math.round(additionalOrders)
    };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('it-IT')?.format(num);
  };

  const results = calculateROI();

  useEffect(() => {
    onCalculationChange({
      recommendedPlan: results?.miaSubscriptionCost === 29 ? 'starter' : 
                      results?.miaSubscriptionCost === 79 ? 'professional' : 'enterprise',
      estimatedOrders: results?.totalOrders,
      estimatedPrice: results?.miaSubscriptionCost
    });
  }, [monthlyOrders, averageOrderValue, currentConversionRate, onCalculationChange]);

  return (
    <div className="bg-white rounded-2xl border border-border shadow-brand p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Calcolatore ROI
          </h3>
          <p className="text-muted-foreground text-sm">
            Scopri quanto puoi guadagnare con MIA Assistant
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
        >
          {isExpanded ? 'Nascondi' : 'Espandi'}
        </Button>
      </div>
      {/* Quick Results - Always Visible */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-success/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-success">
            {formatCurrency(results?.additionalRevenue)}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Ricavi aggiuntivi/mese
          </div>
        </div>
        <div className="bg-primary/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-primary">
            {results?.roiPercentage > 0 ? '+' : ''}{Math.round(results?.roiPercentage)}%
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            ROI mensile
          </div>
        </div>
        <div className="bg-accent/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-accent">
            +{results?.additionalOrders}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Ordini aggiuntivi
          </div>
        </div>
        <div className="bg-muted rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-foreground">
            {formatCurrency(results?.miaSubscriptionCost)}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Costo MIA/mese
          </div>
        </div>
      </div>
      {/* Expanded Calculator */}
      {isExpanded && (
        <div className="space-y-6 border-t border-border pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Select
                label="Tipo di attività"
                options={businessOptions}
                value={businessType}
                onChange={setBusinessType}
              />

              <Input
                label="Ordini attuali al mese"
                type="number"
                value={monthlyOrders}
                onChange={(e) => setMonthlyOrders(Number(e?.target?.value))}
                min="1"
                max="10000"
              />

              <Input
                label="Valore medio ordine (€)"
                type="number"
                value={averageOrderValue}
                onChange={(e) => setAverageOrderValue(Number(e?.target?.value))}
                min="1"
                max="1000"
              />

              <Input
                label="Tasso di conversione attuale (%)"
                type="number"
                value={currentConversionRate}
                onChange={(e) => setCurrentConversionRate(Number(e?.target?.value))}
                min="1"
                max="100"
                description="Percentuale di clienti che completano l'ordine"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">
                Proiezione Mensile con MIA
              </h4>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ricavi attuali:</span>
                  <span className="font-medium">{formatCurrency(results?.currentRevenue)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conversione migliorata:</span>
                  <span className="font-medium text-success">
                    {currentConversionRate}% → {results?.improvedConversionRate}%
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ordini totali:</span>
                  <span className="font-medium">
                    {formatNumber(monthlyOrders)} → {formatNumber(results?.totalOrders)}
                  </span>
                </div>
                
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Guadagno netto:</span>
                    <span className={`font-bold ${results?.netROI > 0 ? 'text-success' : 'text-error'}`}>
                      {formatCurrency(results?.netROI)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Icon name="Lightbulb" size={20} className="text-primary mt-0.5" />
              <div>
                <h5 className="font-medium text-foreground mb-1">
                  Come MIA migliora i tuoi risultati:
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Risposta immediata 24/7 ai clienti</li>
                  <li>• Riduzione degli ordini abbandonati</li>
                  <li>• Upselling automatico intelligente</li>
                  <li>• Gestione prenotazioni senza errori</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCalculator;