import { useEffect, useRef, useState } from 'react'; import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'; import Container from '../ui/Container'; import { midiaSlides } from '../../constants/content';

type MidiaItem = { title: string; date: string; description: string; link: string; logo: string; logoAlt?: string };

function getVisibleCount() { if (typeof window === 'undefined') return 3; return window.innerWidth >= 1024 ? 3 : 1; }

function parseGapPx(value: string) { const first = (value || '0px').split(' ')[0] ?? '0px'; const n = Number.parseFloat(first.replace('px', '')); return Number.isFinite(n) ? n : 0; }

const NaMidia = () => {
  const slides = midiaSlides as unknown as MidiaItem[];
  const len = slides.length;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLAnchorElement | null>(null);

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const [step, setStep] = useState(0);

  // índice “real” (sem loop infinito por clones)
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const maxIndex = Math.max(0, len - visibleCount);

  useEffect(() => {
    const onResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // clamp quando muda o visibleCount
  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, len - visibleCount)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount, len]);

  // mede step (cardWidth + gap real)
  useEffect(() => {
    const measure = () => {
      const cardEl = measureRef.current;
      const trackEl = trackRef.current;
      if (!cardEl || !trackEl) return;

      const cardW = cardEl.getBoundingClientRect().width;
      const gap = parseGapPx(getComputedStyle(trackEl).gap || '0px');
      setStep(Math.round(cardW + gap));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (measureRef.current) ro.observe(measureRef.current);
    if (trackRef.current) ro.observe(trackRef.current);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const canSlide = len > visibleCount && step > 0;

  const next = () => {
    if (!canSlide || isAnimating) return;

    // chegou no fim: volta pro começo com 1 clique
    if (index >= maxIndex) {
      setIsAnimating(true);
      setIndex(0);
      return;
    }

    setIsAnimating(true);
    setIndex((p) => p + 1);
  };

  const prev = () => {
    if (!canSlide || isAnimating) return;

    // chegou no começo: vai pro fim com 1 clique (opcional, mas recomendado)
    if (index <= 0) {
      setIsAnimating(true);
      setIndex(maxIndex);
      return;
    }

    setIsAnimating(true);
    setIndex((p) => p - 1);
  };

  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== 'transform') return;
    setIsAnimating(false);
  };

  const translateX = step ? -(index * step) : 0;

  return (
    <section id="midia" className="relative overflow-hidden py-24 md:py-32 bg-[url('/assets/imagens/midia-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/95" />
      <div className="absolute -top-24 left-1/2 h-[420px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.18),transparent)] blur-2xl opacity-60 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-extrabold text-4xl md:text-5xl text-white mb-4">
            Na <span className="text-gold">Mídia</span>
          </h2>
          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto">
            Nossa expertise é reconhecida por diversos veículos de comunicação
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <button type="button" onClick={prev} aria-label="Anterior" disabled={!canSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg hover:bg-white/30 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.30) 0px 8px 32px, rgba(255, 255, 255, 0.20) 0px 0px 20px inset' }}
          >
            <ChevronLeft className="w-7 h-7 text-white/70 group-hover:text-gold transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          </button>

          <button type="button" onClick={next} aria-label="Próximo" disabled={!canSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 hidden lg:flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg hover:bg-white/30 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.30) 0px 8px 32px, rgba(255, 255, 255, 0.20) 0px 0px 20px inset' }}
          >
            <ChevronRight className="w-7 h-7 text-white/70 group-hover:text-gold transition-colors" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          </button>

          <div className="overflow-hidden px-2">
            <div
              ref={trackRef}
              onTransitionEnd={onTransitionEnd}
              className="flex gap-6 will-change-transform"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {slides.map((item, idx) => {
                const href = item.link ?? '#';
                const isInfoMoney = item.title?.toLowerCase().includes('infomoney');

                return (
                  <a
                    key={`${idx}-${item.date}-${item.title}`}
                    href={href}
                    target={href !== '#' ? '_blank' : undefined}
                    rel={href !== '#' ? 'noreferrer' : undefined}
                    className="flex-shrink-0 w-full lg:w-[calc(33.333%-16px)] group relative"
                    style={{ minWidth: 300 }}
                    ref={idx === 0 ? measureRef : undefined}
                  >
                    <div className="relative h-full p-6 rounded-2xl bg-white/35 backdrop-blur-xl border border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-transparent to-transparent pointer-events-none" />

                      <div className="relative z-10">
                        <div
                          className={[
                            'flex items-center justify-center w-full h-[74px] md:h-[78px] mb-4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden',

                          ].join(' ')}
                        >
                          <img
                            src={item.logo}
                            alt={item.logoAlt ?? item.title}
                            loading="lazy"
                            className={
                              isInfoMoney
                                ? 'w-full h-full max-w-none max-h-none object-cover origin-center'
                                : 'w-auto h-auto max-w-[92%] max-h-[46px] md:max-h-[50px] object-contain origin-center transform scale-[1.08] md:scale-[1.12]'
                            }
                          />
                        </div>

                        <div className="text-sm text-slate-700/80 mb-2 font-medium">{item.date}</div>

                        <h3 className="font-bold text-lg text-slate-900 mb-3 leading-snug min-h-[56px]">
                          {item.description}
                        </h3>

                        <div className="inline-flex items-center gap-2 text-sm text-gold font-semibold transition-colors group-hover:text-[#d4b574]">
                          <span>Ler mais</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>

                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ boxShadow: 'rgba(255, 255, 255, 0.10) 0px 0px 40px inset, rgba(208, 170, 123, 0.20) 0px 0px 40px' }}
                      />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NaMidia;
