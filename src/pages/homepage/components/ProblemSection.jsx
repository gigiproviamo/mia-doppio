import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProblemSection = () => {
  const [activeScenario, setActiveScenario] = useState('before');

  const scenarios = {
    before: {
      title: "La Tua Situazione Attuale",
      subtitle: "Caos, stress e ordini persi ogni giorno",
      color: "red",
      problems: [
      {
        icon: "PhoneOff",
        title: "Telefono sempre occupato",
        description: "Mentre cucini, il telefono squilla. Ma non puoi rispondere a tutti. Ogni chiamata persa è un ordine che vola via."
      },
      {
        icon: "Clock",
        title: "Orari limitati per prenotazioni",
        description: "Puoi prendere prenotazioni solo quando sei presente. Di notte e nei giorni di chiusura perdi opportunità."
      },
      {
        icon: "Users",
        title: "Gestione manuale stressante",
        description: "Annotare ordini a mano, gestire prenotazioni su quaderni, calcolare totali... tempo prezioso sprecato."
      },
      {
        icon: "TrendingDown",
        title: "Ricavi sotto le aspettative",
        description: "Ogni chiamata persa è denaro che vola via. I concorrenti rispondono subito, tu no. E i tuoi clienti li seguono."
      }],

      testimonial: {
        quote: "Perdevo almeno 10-15 ordini al giorno perché non riuscivo a rispondere al telefono. Era frustrante vedere i clienti andare dalla concorrenza.",
        author: "Marco Bianchi",
        role: "Proprietario Pizzeria Da Marco, Roma",
        avatar: "https://images.unsplash.com/photo-1607845046636-dca2447c0dee",
        avatarAlt: "Professional headshot of middle-aged Italian man with short brown hair wearing chef\'s white coat"
      }
    },
    after: {
      title: "Con StoreBot AI",
      subtitle: "Automazione completa, zero stress, massimi ricavi",
      color: "green",
      problems: [
      {
        icon: "Bot",
        title: "MIA risponde sempre",
        description: "Risponde ai clienti anche quando tu dormi. Ordini e prenotazioni 24 ore su 24, 7 giorni su 7."
      },
      {
        icon: "Zap",
        title: "Automazione istantanea",
        description: "Ogni messaggio diventa un ordine confermato in pochi secondi. Nessun intervento, zero errori."
      },
      {
        icon: "BarChart3",
        title: "Dashboard completa",
        description: "Monitora tutto dal tuo smartphone: ordini, incassi, prenotazioni. Controllo totale ovunque tu sia."
      },
      {
        icon: "TrendingUp",
        title: "Ricavi aumentati del 67%",
        description: "Con più ordini e clienti felici, i ricavi crescono in automatico. I risultati parlano chiaro."
      }],

      testimonial: {
        quote: "In 3 mesi ho raddoppiato le prenotazioni e aumentato gli ordini del 70%. MIA ha trasformato completamente il mio business.",
        author: "Giulia Rossi",
        role: "Proprietaria Trattoria Nonna Giulia, Milano",
        avatar: "https://images.unsplash.com/photo-1726654368677-65707ed11c71",
        avatarAlt: "Professional headshot of smiling Italian woman with long dark hair wearing black chef\'s jacket"
      }
    }
  };

  const currentScenario = scenarios?.[activeScenario];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Basta Perdere Ordini e Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ogni ordine perso è tempo e denaro che non torneranno. 
            Con MIA, ogni messaggio diventa un cliente felice.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
            <div className="flex">
              <Button
                variant={activeScenario === 'before' ? 'default' : 'ghost'}
                onClick={() => setActiveScenario('before')}
                className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
                activeScenario === 'before' ?
                'bg-red-500 text-white shadow-lg' : 'text-gray-600 hover:text-red-500'}`
                }
                iconName="AlertTriangle"
                iconPosition="left">

                Situazione Attuale
              </Button>
              <Button
                variant={activeScenario === 'after' ? 'default' : 'ghost'}
                onClick={() => setActiveScenario('after')}
                className={`rounded-full px-8 py-3 font-semibold transition-all duration-300 ${
                activeScenario === 'after' ? 'bg-green-500 text-white shadow-lg' : 'text-gray-600 hover:text-green-500'}`
                }
                iconName="CheckCircle"
                iconPosition="left">

                Con StoreBot
              </Button>
            </div>
          </div>
        </div>

        {/* Scenario Content */}
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-500 transform ${
          activeScenario === 'before' ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-90'}`
          }>
            {/* Title */}
            <div className="text-center mb-12">
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
              currentScenario?.color === 'red' ? 'text-red-600' : 'text-green-600'}`
              }>
                {currentScenario?.title}
              </h3>
              <p className="text-xl text-gray-600">
                {currentScenario?.subtitle}
              </p>
            </div>

            {/* Problems Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {currentScenario?.problems?.map((problem, index) =>
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                currentScenario?.color === 'red' ? 'border-red-500 hover:border-red-600' : 'border-green-500 hover:border-green-600'}`
                }>

                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  currentScenario?.color === 'red' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`
                  }>
                      <Icon name={problem?.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {problem?.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {problem?.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Testimonial */}
            <div className={`bg-white rounded-2xl p-8 shadow-lg border-t-4 ${
            currentScenario?.color === 'red' ? 'border-red-500' : 'border-green-500'}`
            }>
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src={currentScenario?.testimonial?.avatar}
                    alt={currentScenario?.testimonial?.avatarAlt}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-200" />

                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-4">
                    "{currentScenario?.testimonial?.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900">
                      {currentScenario?.testimonial?.author}
                    </div>
                    <div className="text-gray-600">
                      {currentScenario?.testimonial?.role}
                    </div>
                  </div>
                </div>
                <div className={`flex-shrink-0 ${
                currentScenario?.color === 'red' ? 'text-red-500' : 'text-green-500'}`
                }>
                  <Icon name="Quote" size={48} className="opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        {activeScenario === 'before' &&
        <div className="text-center mt-16">
            <Button
            variant="default"
            size="lg"
            onClick={() => setActiveScenario('after')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            iconName="ArrowRight"
            iconPosition="right">

              Scopri la Soluzione
            </Button>
          </div>
        }

        {activeScenario === 'after' &&
        <div className="text-center mt-16">
            <Button
            variant="default"
            size="lg"
            onClick={() => {
              const trialSection = document.getElementById('trial');
              if (trialSection) {
                trialSection?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            iconName="Rocket"
            iconPosition="right">

              Inizia la Trasformazione Ora
            </Button>
          </div>
        }
      </div>
    </section>);

};

export default ProblemSection;
