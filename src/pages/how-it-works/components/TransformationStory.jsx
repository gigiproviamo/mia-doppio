import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TransformationStory = ({ story }) => {
  return (
    <div className="bg-white rounded-2xl shadow-brand p-8">
      {/* Business Info */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-muted">
          <Image
            src={story?.businessImage}
            alt={story?.businessImageAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground">{story?.businessName}</h3>
          <p className="text-sm text-muted-foreground">{story?.businessType} • {story?.location}</p>
        </div>
      </div>
      {/* Before/After Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Before */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-error/10 rounded-full flex items-center justify-center">
              <Icon name="AlertCircle" size={16} className="text-error" />
            </div>
            <h4 className="font-semibold text-foreground">Prima di MIA</h4>
          </div>
          <ul className="space-y-2">
            {story?.beforeChallenges?.map((challenge, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={16} className="text-success" />
            </div>
            <h4 className="font-semibold text-foreground">Dopo MIA</h4>
          </div>
          <ul className="space-y-2">
            {story?.afterBenefits?.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Results Metrics */}
      <div className="bg-muted/30 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-foreground mb-4 text-center">Risultati in {story?.timeframe}</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {story?.metrics?.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
              <div className="text-xs text-muted-foreground">{metric?.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Quote */}
      <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
        "{story?.quote}"
        <footer className="mt-2 text-sm font-medium text-foreground">
          — {story?.ownerName}, {story?.ownerTitle}
        </footer>
      </blockquote>
    </div>
  );
};

export default TransformationStory;