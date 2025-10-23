import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressTimeline = ({ currentStep, steps, onStepClick }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      {steps?.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        const isClickable = stepNumber <= currentStep || isCompleted;

        return (
          <React.Fragment key={stepNumber}>
            {/* Step Circle */}
            <button
              onClick={() => isClickable && onStepClick(stepNumber)}
              disabled={!isClickable}
              className={`relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-brand ${
                isActive
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : isCompleted
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground'
              } ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed'}`}
            >
              {isCompleted ? (
                <Icon name="Check" size={16} />
              ) : (
                stepNumber
              )}
              
              {/* Step Label */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground whitespace-nowrap">
                {step?.label}
              </span>
            </button>
            {/* Connector Line */}
            {index < steps?.length - 1 && (
              <div className={`w-16 h-0.5 transition-brand ${
                stepNumber < currentStep ? 'bg-accent' : 'bg-border'
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressTimeline;