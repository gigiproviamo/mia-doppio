import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StepCard = ({ 
  step, 
  title, 
  description, 
  image, 
  imageAlt, 
  features, 
  isActive, 
  onActivate,
  ctaText,
  onCtaClick 
}) => {
  return (
    <div 
      className={`relative bg-white rounded-2xl shadow-brand transition-brand cursor-pointer ${
        isActive ? 'ring-2 ring-primary shadow-brand-lg' : 'hover:shadow-brand-lg'
      }`}
      onClick={onActivate}
    >
      {/* Step Number Badge */}
      <div className="absolute -top-4 left-6 z-10">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
          isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
        }`}>
          {step}
        </div>
      </div>
      <div className="p-6 pt-8">
        {/* Image Section */}
        <div className="mb-6 overflow-hidden rounded-lg bg-muted">
          <Image
            src={image}
            alt={imageAlt}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          {/* Features List */}
          {features && features?.length > 0 && (
            <ul className="space-y-2">
              {features?.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon 
                    name="Check" 
                    size={16} 
                    className="text-accent mt-0.5 flex-shrink-0" 
                  />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA Button */}
          {ctaText && (
            <Button
              variant="outline"
              size="sm"
              onClick={onCtaClick}
              className="w-full mt-4"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={16}
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepCard;