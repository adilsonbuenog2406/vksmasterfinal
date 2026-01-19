import { CSSProperties } from 'react';
import { Download, FileText } from 'lucide-react';

import Container from '../ui/Container';
import { portfolioCards } from '../../constants/content';

const V_LOGO_SRC = '/assets/driveVKS/element/V.png';

type Watermark = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  rotate: number;
  opacity: number;
  blur: number;
  pulse?: boolean;      // <-- novo
  duration?: string;    // <-- agora opcional (só usa se pulse=true)
  hideOnMobile?: boolean;
};

const watermarks: Watermark[] = [
  // esquerda (bem sutil, grande)
  { top: '22%', left: '3.5%', size: 260, rotate: -10, opacity: 0.08, blur: 0.6, duration: '8.5s', hideOnMobile: true },
  // esquerda embaixo
  { bottom: '10%', left: '10%', size: 240, rotate: 8, opacity: 0.07, blur: 0.9, duration: '9.5s', hideOnMobile: true },
  // direita (grande e mais visível)
  { top: '18%', right: '4%', size: 320, rotate: 12, opacity: 0.10, blur: 0.7, duration: '7.5s', hideOnMobile: true },
  // direita meio (stack visual)
 { top: '28%', right: '5%', size: 360, rotate: 10, opacity: 0.10, blur: 0.7, hideOnMobile: true, pulse: true, duration: '8.5s' },
  // direita embaixo
  { bottom: '10%', right: '16%', size: 220, rotate: 6, opacity: 0.07, blur: 1.0, duration: '11s', hideOnMobile: true },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="section relative overflow-hidden py-32 text-white"
    >
      {/* FUNDO (igual referência: gradient + vinheta + leve textura diagonal) */}
      <div className="absolute inset-0 -z-10">
        {/* gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00575e] via-slate-900 to-[#172236]" />

        {/* vinheta/profundidade (escurece bordas e dá “focus” no centro) */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_65%_at_50%_28%,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0)_42%,rgba(0,0,0,0.55)_100%)]" />

        {/* textura diagonal bem sutil */}
        <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255, 255, 255, 0.1) 35px, rgba(255, 255, 255, 0.1) 70px)',
            }}
          />      
      </div>

      {/* Watermarks “V” pulsando (bem suave) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {watermarks.map((w, idx) => (
          <div
            key={idx}
            className={[
              'absolute select-none bg-center bg-no-repeat bg-contain',
              w.hideOnMobile ? 'hidden lg:block' : '',
            ].join(' ')}
            style={
              {
                top: w.top,
                left: w.left,
                right: w.right,
                bottom: w.bottom,
                width: `${w.size}px`,
                height: `${w.size}px`,
                backgroundImage: `url(${V_LOGO_SRC})`,
                opacity: w.opacity,
                filter: `blur(${w.blur}px)`,
                ['--wm-rotate' as any]: `${w.rotate}deg`,
                animation: w.pulse ? `wmPulse ${w.duration ?? '8.5s'} ease-in-out infinite` : undefined,
                transform: w.pulse ? undefined : `rotate(${w.rotate}deg)`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <Container className="relative z-10">
        {/* Header central */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Conheça <span className="text-[#d0aa7b]">Nosso Portfólio</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
            Baixe nossos portfólios e conheça mais sobre nossas soluções jurídicas
          </p>
        </div>

        {/* Cards centrais */}
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-6 sm:flex-row">
          {portfolioCards.map((card) => {
            const isAmbiental = card.title.toLowerCase().includes('ambiental');

            return (
              <div key={card.title} className="flex-1">
                <div
                  className={[
                    'rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg',
                    'transition-all duration-300 hover:bg-white/10',
                    'shadow-[0_20px_60px_rgba(0,0,0,0.35)]',
                  ].join(' ')}
                >
                  {/* Icon box */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-700/50">
                    <FileText className="h-8 w-8 text-[#d0aa7b]" />
                  </div>

                  <h3 className="mb-4 text-center text-2xl text-white">
                    {card.title}
                  </h3>

                  <p className="mb-6 text-center text-slate-300">
                    {card.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={card.href}
                    download
                    className={[
                      'inline-flex h-10 w-full items-center justify-center gap-2 rounded-md px-6 text-sm font-medium',
                      'transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-white/20',
                      isAmbiental
                        ? 'bg-[#d0aa7b] text-white hover:bg-[#b69e60]'
                        : 'border border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
                    ].join(' ')}
                  >
                    <Download className="h-4 w-4" />
                    {card.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* animação que preserva rotação */}
      <style>{`
        @keyframes wmPulse {
          0%, 100% { transform: scale(1) rotate(var(--wm-rotate)); }
          50% { transform: scale(1.035) rotate(var(--wm-rotate)); }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
