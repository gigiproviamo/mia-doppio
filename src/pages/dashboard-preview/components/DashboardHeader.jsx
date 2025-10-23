import React from 'react';

import Button from '../../../components/ui/Button';

const DashboardHeader = ({ selectedIndustry, onIndustryChange }) => {
  return (
    <div className="bg-white border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">MIA Dashboard</h1>
            <p className="text-sm text-muted-foreground">Il tuo assistente digitale</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Industry Toggle */}
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => onIndustryChange('restaurant')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-brand ${
                selectedIndustry === 'restaurant' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Ristorante
            </button>
            <button
              onClick={() => onIndustryChange('salon')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-brand ${
                selectedIndustry === 'salon' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              Salone
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground">Live</span>
          </div>
          
          <Button variant="outline" size="sm" iconName="Settings" iconPosition="left">
            Impostazioni
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;