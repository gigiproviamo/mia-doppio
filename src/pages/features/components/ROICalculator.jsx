import React, { useState, useEffect, useRef } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

/* Hook breakpoint: mobile < lg */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(max-width: 1023px)').matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);
  return isMobile;
};

const ROICalculator = () => {
  const [businessType, setBusinessType] = useState('restaurant');
  const [monthlyOrders, setMonthlyOrders] = useState('100');
  const [averageOrder, setAverageOrder] = useState('25');
  const [currentStaff, setCurrentStaff] = useState('3');

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false); // ⬅️ nuovo

  const isMobile = useIsMobile();
  const roiRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const businessOptions = [
    { value: 'restaurant', label: 'Ristorante' },
    { value: 'pizzeria', label: 'Pizzeria' },
    { value: 'salon', label: 'Salone di Bellezza' },
    { value: 'barbershop', label: 'Barbiere' },
    { value: 'cafe', label: 'Bar/Caffetteria' }
  ];

  const orderOptions = [
    { value: '50', label: '50-100 ordini/mese' },
    { value: '100', label: '100-200 ordini/mese' },
    { value: '300', label: '200-400 ordini/mese' },
    { value: '500', label: '400-600 ordini/mese' },
    { value: '800', label: '600+ ordini/mese' }
  ];

  const staffOptions = [
    { value: '1', label: '1-2 persone' },
    { value: '3', label: '3-5 persone' },
    { value: '6', label: '6-10 persone' },
    { value: '11', label: '10+ persone' }
  ];

  // ⬇️ funzione ora è parametrica: apre il modal solo se lo chiediamo
  const calculateROI = (openModal = false) => {
    setIsCalculating(true);

    setTimeout(() => {
      const orders = parseInt(monthlyOrders);
      const avgOrder = parseFloat(averageOrder);
      const staff = parseInt(currentStaff);

      const currentRevenue = orders * avgOrder;
      const timesSavedHours = staff * 4;
      const timeSavedCost = timesSavedHours * 15 * 30;
      const increasedOrders = Math.round(orders * 0.35);
      const increasedRevenue = increasedOrders * avgOrder;
      const reducedNoShows = Math.round(orders * 0.15 * avgOrder * 0.65);

      const totalMonthlySavings = timeSavedCost + increasedRevenue + reducedNoShows;
      const miaCost = businessType === 'salon' ? 49 : 39;
      const netBenefit = totalMonthlySavings - miaCost;
      const roiPercentage = Math.round((netBenefit / miaCost) * 100);
      const yearlyBenefit = netBenefit * 12;

      const newResults = {
        currentRevenue,
        timeSavedCost,
        increasedRevenue,
        reducedNoShows,
        totalMonthlySavings,
        miaCost,
        netBenefit,
        roiPercentage,
        yearlyBenefit,
        paybackDays: Math.ceil(miaCost / (netBenefit / 30))
      };

      setResults(newResults);
      setIsCalculating(false);

      if (isMobile && openModal) {
        setIsModalOpen(true);
      } else if (!isMobile) {
        setTimeout(() => {
          roiRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 200);
      }
    }, 1500);
  };

  // ⬇️ ricalcola automaticamente SOLO dopo il primo click (hasCalculated = true)
  useEffect(() => {
    if (!hasCalculated) return;
    calculateROI(false); // ricalcola senza riaprire il modal
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [businessType, monthlyOrders, averageOrder, currentStaff]);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calcolatore ROI Personalizzato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri quanto puoi risparmiare e guadagnare con MIA Assistant nel tuo business
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">I Tuoi Dati Business</h3>

              <div className="space-y-6">
                <div className="greenize">
                  <Select
                    label="Tipo di Business"
                    options={businessOptions}
                    value={businessType}
                    onChange={setBusinessType}
                  />
                </div>

                <div className="greenize">
                  <Select
                    label="Ordini/Prenotazioni Mensili"
                    options={orderOptions}
                    value={monthlyOrders}
                    onChange={setMonthlyOrders}
                  />
                </div>

                <div className="greenize">
                  <Input
                    label="Scontrino/Servizio Medio (€)"
                    type="number"
                    value={averageOrder}
                    onChange={(e) => setAverageOrder(e?.target?.value)}
                    placeholder="25"
                  />
                </div>

                <div className="greenize">
                  <Select
                    label="Personale Attuale"
                    options={staffOptions}
                    value={currentStaff}
                    onChange={setCurrentStaff}
                  />
                </div>

                <Button
                  variant="default"
                  fullWidth
                  loading={isCalculating}
                  onClick={() => { setHasCalculated(true); calculateROI(true); }}
                  iconName="Calculator"
                  iconPosition="left"
                >
                  {isCalculating ? 'Calcolando...' : hasCalculated ? 'Ricalcola ROI' : 'Calcola ROI'}
                </Button>
              </div>

              {/* Trust */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Calcoli basati su dati reali di 500+ clienti
                </p>
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span>Dati Sicuri</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-accent" />
                    <span>ROI Garantito</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results (desktop invariato) */}
          <div className="lg:col-span-7 hidden lg:block">
            {results ? (
              <div className="space-y-6">
                <div ref={roiRef} className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Il Tuo ROI con MIA</h3>
                    <div className="text-5xl font-bold mb-2 counter-reveal">{results?.roiPercentage}%</div>
                    <p className="text-lg opacity-90">Ritorno sull'investimento mensile</p>
                    <div className="mt-4 text-sm opacity-80">Recuperi l'investimento in {results?.paybackDays} giorni</div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-brand">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="TrendingUp" size={20} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Ricavi Aggiuntivi</h4>
                        <p className="text-sm text-muted-foreground">+35% ordini mensili</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-accent">+€{results?.increasedRevenue?.toLocaleString()}</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-brand">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Clock" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Tempo Risparmiato</h4>
                        <p className="text-sm text-muted-foreground">4-6 ore/giorno</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">€{results?.timeSavedCost?.toLocaleString()}</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-brand">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="Shield" size={20} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">No-Show Ridotti</h4>
                        <p className="text-sm text-muted-foreground">-65% mancate presenze</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">+€{results?.reducedNoShows?.toLocaleString()}</div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-brand">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Icon name="Euro" size={20} className="text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Beneficio Annuale</h4>
                        <p className="text-sm text-muted-foreground">Proiezione 12 mesi</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-yellow-600">€{results?.yearlyBenefit?.toLocaleString()}</div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-brand">
                  <h4 className="font-semibold text-foreground mb-4">Riepilogo Mensile</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Benefici Totali</span>
                      <span className="font-semibold text-accent">+€{results?.totalMonthlySavings?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Costo MIA</span>
                      <span className="font-semibold text-red-600">-€{results?.miaCost}</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-foreground">Profitto Netto</span>
                        <span className="font-bold text-primary text-xl">€{results?.netBenefit?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Inizia oggi e vedrai i risultati dal primo giorno</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="default" size="lg" className="cta-pulse" iconName="Rocket" iconPosition="left">
                      Inizia Ora - €{results?.miaCost}/mese
                    </Button>
                    <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                      Scarica Report ROI
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 shadow-brand-lg text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Calculator" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Inserisci i Tuoi Dati</h3>
                <p className="text-muted-foreground">
                  Compila il modulo a sinistra per vedere il tuo ROI personalizzato con MIA Assistant
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal mobile: tutto dentro + CTA sticky */}
      {isMobile && isModalOpen && results && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-[1.5px] px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative modal-enter w-[92vw] max-w-md max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* layout interno a colonne per sticky footer */}
            <div className="flex h-full flex-col">
              {/* Close */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/85 hover:bg-white flex items-center justify-center shadow"
                aria-label="Chiudi"
              >
                <Icon name="X" size={18} />
              </button>

              {/* Hero verde */}
              <div className="bg-gradient-to-r from-primary to-accent text-white px-5 pt-6 pb-4">
                <h4 className="text-sm font-medium opacity-95 mb-1">Il tuo ROI con MIA</h4>
                <div className="text-3xl font-extrabold tracking-tight">{results?.roiPercentage}%</div>
                <div className="mt-1 text-[13px] opacity-95">Ritorno sull'investimento mensile</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[12px]">
                  <Icon name="Calendar" size={14} />
                  <span>Recuperi in {results?.paybackDays} giorni</span>
                </div>
              </div>

              {/* Contenuto scrollabile */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {/* KPI grid compatta */}
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 shadow-brand">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon name="TrendingUp" size={16} className="text-accent" />
                      </div>
                      <h5 className="font-medium text-[14px]">Ricavi Aggiuntivi</h5>
                    </div>
                    <div className="text-[18px] font-bold text-accent">
                      +€{results?.increasedRevenue?.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-brand">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Clock" size={16} className="text-primary" />
                      </div>
                      <h5 className="font-medium text-[14px]">Tempo Risparmiato</h5>
                    </div>
                    <div className="text-[18px] font-bold text-primary">
                      €{results?.timeSavedCost?.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-brand">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                        <Icon name="Shield" size={16} className="text-green-600" />
                      </div>
                      <h5 className="font-medium text-[14px]">No-Show Ridotti</h5>
                    </div>
                    <div className="text-[18px] font-bold text-green-600">
                      +€{results?.reducedNoShows?.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-3 shadow-brand">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Icon name="Euro" size={16} className="text-yellow-600" />
                      </div>
                      <h5 className="font-medium text-[14px]">Beneficio Annuale</h5>
                    </div>
                    <div className="text-[18px] font-bold text-yellow-600">
                      €{results?.yearlyBenefit?.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Riepilogo compatto */}
                <div className="bg-white rounded-xl p-3 shadow-brand">
                  <h5 className="font-semibold mb-2 text-[14px]">Riepilogo Mensile</h5>
                  <div className="space-y-2 text-[14px]">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Benefici Totali</span>
                      <span className="font-semibold text-accent">
                        +€{results?.totalMonthlySavings?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Costo MIA</span>
                      <span className="font-semibold text-red-600">-€{results?.miaCost}</span>
                    </div>
                    <div className="border-t border-border pt-2 mt-1">
                      <div className="flex justify-between">
                        <span className="font-semibold">Profitto Netto</span>
                        <span className="font-bold text-primary text-[18px]">
                          €{results?.netBenefit?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA sticky dentro il popup */}
              <div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-border p-3">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full"
                  iconName="Rocket"
                  iconPosition="left"
                >
                  Inizia Ora - €{results?.miaCost}/mese
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bordi verdi fissi ai campi */}
      <style jsx>{`
        .greenize :is(input, select, button, div[role='combobox'], [aria-haspopup='listbox']) {
          border: 2px solid rgb(21 128 61 / 1) !important;
          border-radius: 0.75rem !important;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(12px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .modal-enter { animation: modalIn .22s ease-out both; }
        /* mini-breakpoint per 2 colonne su device un po' più larghi */
        @media (min-width: 380px) {
          .xs\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
};

export default ROICalculator;
