import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    product: [
      { label: 'Come Funziona', path: '/how-it-works' },
      { label: 'Funzionalità', path: '/features' },
      { label: 'Prezzi', path: '/pricing' },
      { label: 'Demo', path: '/demo' }
    ],
    support: [
      { label: 'Centro Assistenza', path: '/help' },
      { label: 'Documentazione', path: '/docs' },
      { label: 'API', path: '/api' },
      { label: 'Stato Servizi', path: '/status' }
    ],
    company: [
      { label: 'Chi Siamo', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Carriere', path: '/careers' },
      { label: 'Contatti', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Termini di Servizio', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'GDPR', path: '/gdpr' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/miaassistant' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/miaassistant' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/miaassistant' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/miaassistant' }
  ];

  const handleWhatsAppContact = () => {
    const message = "Ciao! Ho bisogno di assistenza con MIA Assistant. Potete aiutarmi?";
    window.open(`https://wa.me/393123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/homepage" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 text-accent-foreground" 
                    fill="currentColor"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold">MIA Assistant</span>
              </Link>
              
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Il tuo assistente digitale per automatizzare ristoranti e saloni direttamente su WhatsApp. 
                Zero app da scaricare, massima efficienza.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span className="text-sm">Via Roma 123, 00100 Roma, Italia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span className="text-sm">info@miaassistant.it</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span className="text-sm">+39 06 1234 5678</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Prodotto</h3>
              <ul className="space-y-3">
                {footerLinks?.product?.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link?.path}
                      className="text-secondary-foreground/70 hover:text-accent transition-brand text-sm"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Supporto</h3>
              <ul className="space-y-3">
                {footerLinks?.support?.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link?.path}
                      className="text-secondary-foreground/70 hover:text-accent transition-brand text-sm"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Azienda</h3>
              <ul className="space-y-3">
                {footerLinks?.company?.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link?.path}
                      className="text-secondary-foreground/70 hover:text-accent transition-brand text-sm"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Legale</h3>
              <ul className="space-y-3">
                {footerLinks?.legal?.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link?.path}
                      className="text-secondary-foreground/70 hover:text-accent transition-brand text-sm"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-secondary-foreground/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                Resta Aggiornato
              </h3>
              <p className="text-secondary-foreground/70 text-sm">
                Ricevi le ultime novità su MIA e consigli per far crescere la tua attività
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="La tua email aziendale"
                className="flex-1 px-4 py-3 bg-white/10 border border-secondary-foreground/20 rounded-xl text-secondary-foreground placeholder-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-brand whitespace-nowrap">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-secondary-foreground/70 text-sm">
              © {currentYear} MIA Assistant. Tutti i diritti riservati.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-brand"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
              
              {/* WhatsApp Contact */}
              <button
                onClick={handleWhatsAppContact}
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent/90 transition-brand"
                aria-label="Contattaci su WhatsApp"
              >
                <Icon name="MessageCircle" size={18} className="text-accent-foreground" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-secondary-foreground/70">
                <Icon name="Shield" size={14} className="text-accent" />
                <span>GDPR</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-secondary-foreground/70">
                <Icon name="Lock" size={14} className="text-accent" />
                <span>SSL</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-secondary-foreground/70">
                <Icon name="CheckCircle" size={14} className="text-accent" />
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;