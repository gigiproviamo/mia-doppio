import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsShowcase = ({ activeIndustry = 'restaurant' }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // --- Dataset ristoranti
  const restaurantTestimonials = [
    {
      id: 1,
      name: 'Marco Rossi',
      role: 'Proprietario Ristorante',
      business: 'Trattoria da Marco - Milano',
      avatar: 'https://images.unsplash.com/photo-1607845046636-dca2447c0dee',
      avatarAlt:
        'Professional headshot of Italian man with dark hair and friendly smile wearing white chef coat',
      rating: 5,
      content:
        "MIA ha rivoluzionato il nostro servizio. I clienti ordinano direttamente dal menu WhatsApp e noi gestiamo tutto dall'app. Zero confusione, massima efficienza.",
      metrics: { improvement: '+150% prenotazioni', timeSaved: '4 ore/giorno' },
    },
    {
      id: 2,
      name: 'Giuseppe Marino',
      role: 'Pizzaiolo & Titolare',
      business: 'Pizzeria Napoli Vera - Napoli',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      avatarAlt: 'Professional headshot of Italian businessman wearing suit',
      rating: 5,
      content:
        'In 10 minuti era tutto operativo. I clienti vedono il menu, ordinano e pagano su WhatsApp. La pizzeria non è mai stata così organizzata.',
      metrics: { improvement: '+40% ordini', timeSaved: '3 ore/giorno' },
    },
    {
      id: 3,
      name: 'Elena Conti',
      role: 'Restaurant Manager',
      business: 'Osteria del Centro - Firenze',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
      avatarAlt: 'Professional headshot of woman manager in restaurant',
      rating: 5,
      content:
        'Niente app da scaricare: i clienti usano WhatsApp. Prenotazioni e ordini scorrono fluidi e noi ci concentriamo sul servizio.',
      metrics: { improvement: '+30% coperti', timeSaved: '2 ore/giorno' },
    },
  ];

  // --- Dataset saloni
  const salonTestimonials = [
    {
      id: 1,
      name: 'Sofia Bianchi',
      role: 'Titolare Salone',
      business: 'Salon Eleganza - Milano',
      avatar: 'https://images.unsplash.com/photo-1684262855358-88f296a2cfc2',
      avatarAlt:
        'Professional portrait of Italian woman with brown hair in elegant black blazer smiling confidently',
      rating: 5,
      content:
        'Le clienti prenotano via WhatsApp e ricevono promemoria automatici. Addio doppie prenotazioni.<br /><br />&nbsp;',
      metrics: { improvement: '+80% efficienza', timeSaved: '2 ore/giorno' },
    },
    {
      id: 2,
      name: 'Valentina Rosso',
      role: 'Beauty Therapist',
      business: 'Beauty Center Luxury - Torino',
      avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
      avatarAlt: 'Professional headshot of beauty therapist',
      rating: 5,
      content:
        'La gestione agenda è automatica: conferme, reminder, riprogrammazioni. Noi pensiamo ai trattamenti, MIA al resto.',
      metrics: { improvement: '-65% no-show', timeSaved: '3 ore/giorno' },
    },
    {
      id: 3,
      name: 'Chiara Neri',
      role: 'Owner',
      business: 'Nails & Beauty Studio - Bologna',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      avatarAlt: 'Professional headshot of woman with curly hair',
      rating: 5,
      content:
        'Prenotazioni, conferme e follow-up sono automatici. Meno burocrazia, più qualità nei servizi.',
      metrics: { improvement: '+55% prenotazioni', timeSaved: '2.5 ore/giorno' },
    },
  ];

  // scegli dataset in base alla prop
  const testimonials =
    activeIndustry === 'salon' ? salonTestimonials : restaurantTestimonials;

  useEffect(() => {
    setHoveredCard(null);
  }, [activeIndustry]);

  const TestimonialCard = ({ testimonial }) => (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full relative overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl"
      onMouseEnter={() => setHoveredCard(testimonial.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Stelle */}
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
        ))}
      </div>

      {/* Quote – virgolette NORMALI nel testo */}
      <blockquote className="text-gray-700 leading-relaxed italic relative mb-6">
        <span
          className="relative z-10"
          dangerouslySetInnerHTML={{ __html: `“${testimonial.content}”` }}
        />
      </blockquote>

      <div className="flex-1" />

      {/* Metriche */}
      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-green-50 rounded-xl">
        <div className="text-center">
          <div className="text-lg font-bold text-green-700">
            {testimonial.metrics.improvement}
          </div>
          <div className="text-xs text-gray-600">Miglioramento</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-green-700">
            {testimonial.metrics.timeSaved}
          </div>
          <div className="text-xs text-gray-600">Tempo risparmiato</div>
        </div>
      </div>

      {/* Autore */}
      <div className="flex items-center space-x-4">
        <Image
          src={testimonial.avatar}
          alt={testimonial.avatarAlt}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-gray-900">{testimonial.name}</div>
          <div className="text-sm text-gray-600">{testimonial.role}</div>
          <div className="text-xs text-green-700">{testimonial.business}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Storie di successo di
            <span className="text-green-700 block">business italiani</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come centinaia di imprenditori italiani hanno trasformato il loro business con
            MIA.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Risultati Complessivi dei Nostri Clienti
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">2,847</div>
              <div className="opacity-90">Ristoranti Attivi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+78%</div>
              <div className="opacity-90">Aumento Medio Ordini</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">€4.2M</div>
              <div className="opacity-90">Ricavi Extra Generati</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.2%</div>
              <div className="opacity-90">Clienti Soddisfatti</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">Certificato e sicuro</p>
          <div className="flex justify-center items-center space-x-8 opacity-70">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-green-600" />
              <span className="text-sm font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={20} className="text-green-600" />
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-green-600" />
              <span className="text-sm font-medium">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsShowcase;
