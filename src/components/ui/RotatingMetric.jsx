import { useEffect, useRef, useState } from "react";

// metrics = [{ number: 500, suffix: "+", label: "Ristoranti Italiani" }, ...]
export default function RotatingMetric({
  metrics = [],
  // quanto dura ogni “slide” prima di passare alla prossima
  rotateEvery = 3000,
  // durata dell’animazione del conteggio (ms)
  countDuration = 900,
}) {
  const [i, setI] = useState(0);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);

  // passa al prossimo elemento ogni rotateEvery ms
  useEffect(() => {
    if (metrics.length <= 1) return;
    const id = setInterval(
      () => setI((v) => (v + 1) % metrics.length),
      rotateEvery
    );
    return () => clearInterval(id);
  }, [metrics.length, rotateEvery]);

  // anima il numero quando cambia la metrica corrente
  useEffect(() => {
    const target = metrics[i]?.number ?? 0;
    cancelAnimationFrame(rafRef.current);

    const start = performance.now();
    const from = 0; // se vuoi animare dal valore precedente: const from = display;

    const step = (t) => {
      const e = Math.min(1, (t - start) / countDuration); // progress 0..1
      // easing “easeOutQuad”
      const eased = 1 - (1 - e) * (1 - e);
      const val = Math.floor(from + (target - from) * eased);
      setDisplay(val);
      if (e < 1) rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i, countDuration]);

  if (!metrics.length) return null;

  const { suffix = "", label = "" } = metrics[i] ?? {};
  const formatted = new Intl.NumberFormat("it-IT").format(display);

  return (
    <div className="text-center sm:text-left" aria-live="polite">
      <div className="text-4xl sm:text-5xl font-extrabold leading-none text-primary">
        {formatted}
        {suffix}
      </div>
      <div className="text-sm sm:text-base text-gray-600 mt-1">{label}</div>
    </div>
  );
}
