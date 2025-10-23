import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhatsAppFloatingButton = ({ activeIndustry }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Show tooltip after 3 seconds on first load
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = activeIndustry === 'restaurant' 
      ? "Ciao! Sono interessato a MIA per il mio ristorante. Vorrei vedere una demo! 🍝" :"Ciao! Sono interessato a MIA per il mio salone. Vorrei vedere una demo! 💅";
    
    window.open(`https://wa.me/393123456789?text=${encodeURIComponent(message)}`, '_blank');
    
    // Hide tooltip after click
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 w-64 bg-white rounded-2xl shadow-brand-xl border border-border p-4 animate-bounce">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="MessageCircle" size={20} className="text-accent-foreground" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm mb-1">
                Hai domande su MIA?
              </div>
              <div className="text-muted-foreground text-xs">
                Chatta con noi su WhatsApp per una demo personalizzata!
              </div>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-14 h-14 bg-accent hover:bg-accent/90 rounded-full shadow-brand-xl hover:shadow-brand-xl transition-all duration-300 flex items-center justify-center group touch-target"
        aria-label="Contattaci su WhatsApp"
      >
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
        
        {/* Icon */}
        <Icon 
          name="MessageCircle" 
          size={28} 
          className="text-accent-foreground relative z-10 transition-transform duration-300 group-hover:scale-110" 
        />
        
        {/* Hover Text */}
        {isHovered && (
          <div className="absolute right-full mr-4 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-brand">
            Chatta con noi
            <div className="absolute top-1/2 left-full w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-foreground transform -translate-y-1/2"></div>
          </div>
        )}
      </button>

      {/* Notification Badge */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">1</span>
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;