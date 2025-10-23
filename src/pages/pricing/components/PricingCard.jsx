import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingCard = ({ 
  plan, 
  isPopular = false, 
  isSelected = false, 
  onSelect,
  calculatedPrice,
  calculatedOrders 
}) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
    })?.format(price);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('it-IT')?.format(num);
  };

  return (
    <div className={`relative bg-white rounded-2xl border-2 transition-brand hover-lift ${
      isPopular 
        ? 'border-primary shadow-brand-lg' 
        : isSelected 
          ? 'border-accent shadow-brand' 
          : 'border-border hover:border-primary/50'
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Più Popolare
          </div>
        </div>
      )}
      <div className="p-6 lg:p-8">
        {/* Plan Header */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{plan?.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{plan?.description}</p>
          
          <div className="mb-4">
            <div className="text-3xl lg:text-4xl font-bold text-foreground">
              {calculatedPrice ? formatPrice(calculatedPrice) : formatPrice(plan?.price)}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              {plan?.billing} • IVA esclusa
            </div>
          </div>

          {calculatedOrders && (
            <div className="bg-muted rounded-lg p-3 mb-4">
              <div className="text-sm text-muted-foreground">Ordini stimati</div>
              <div className="text-lg font-semibold text-foreground">
                {formatNumber(calculatedOrders)}/mese
              </div>
            </div>
          )}
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-8">
          {plan?.features?.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <Icon 
                  name={feature?.included ? "Check" : "X"} 
                  size={16} 
                  className={feature?.included ? "text-success" : "text-muted-foreground"}
                />
              </div>
              <span className={`text-sm ${
                feature?.included ? "text-foreground" : "text-muted-foreground"
              }`}>
                {feature?.text}
              </span>
            </div>
          ))}
        </div>

        {/* Limits */}
        {plan?.limits && (
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-foreground mb-3">Limiti del Piano</h4>
            <div className="space-y-2">
              {plan?.limits?.map((limit, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{limit?.label}</span>
                  <span className="font-medium text-foreground">{limit?.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Button
          variant={isPopular ? "default" : "outline"}
          fullWidth
          onClick={() => onSelect(plan)}
          className={isPopular ? "cta-pulse" : ""}
        >
          {plan?.ctaText || "Inizia ora"}
        </Button>

        {/* Additional Info */}
        {plan?.note && (
          <p className="text-xs text-muted-foreground text-center mt-4">
            {plan?.note}
          </p>
        )}
      </div>
    </div>
  );
};

export default PricingCard;