import Container from '../ui/Container';
import { triadCards } from '../../constants/content';

const THEME = [
  {
    ring: 'border-blue-400/30',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.35),_inset_0_0_20px_rgba(255,255,255,0.06)]',
    pulseBg: 'bg-blue-600/10',
    hoverBg: 'group-hover:bg-blue-600/20',
  },
  {
    ring: 'border-emerald-400/30',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.30),_inset_0_0_20px_rgba(255,255,255,0.06)]',
    pulseBg: 'bg-emerald-500/10',
    hoverBg: 'group-hover:bg-emerald-500/20',
  },
  {
    ring: 'border-amber-300/30',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.30),_inset_0_0_20px_rgba(255,255,255,0.06)]',
    pulseBg: 'bg-amber-400/10',
    hoverBg: 'group-hover:bg-amber-400/20',
  },
];

const Triade = () => {
  return (
    <section
      id="triade"
      className="section relative overflow-hidden bg-triad bg-cover bg-center text-white grid-overlay"
    >
      {/* Camadas de background (degradê diagonal + vinheta suave) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,26,43,0.20)_0%,rgba(8,26,43,0.70)_40%,rgba(8,26,43,0.90)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-14">
        {/* Título maior (como seu HTML de referência) */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-bold text-5xl md:text-6xl text-white mb-6">
            A Força da <span className="text-[#d0aa7b]">Tríade</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Integração plena entre Direito Imobiliário, Urbanístico e Ambiental. Decisões planejadas a partir do todo: do imóvel ao território, do impacto ambiental à função social da cidade.
          </p>
        </div>

        {/* Cards (ícone + card juntos, igual ao Figma) */}
        <div className="grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
          {triadCards.map((card, index) => {
            const t = THEME[index % THEME.length];

            return (
              <div key={card.title} className="group flex flex-col items-center">
                {/* Ícone circular com glow + pulso + hover zoom */}
                <div
                  className={[
                    'relative w-28 h-28 md:w-32 md:h-32',
                    'rounded-full border-2 backdrop-blur-2xl',
                    'bg-white/5',
                    t.ring,
                    t.glow,
                    t.hoverBg,
                    'flex items-center justify-center mb-10',
                    'cursor-pointer transition-transform duration-1000 ease-out',
                    'group-hover:scale-[1.1]',
                  ].join(' ')}
                >
                  {/* brilho diagonal (como no Figma) */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />

                  {/* ícone (mantém lucide / seu content.ts) */}
                  <div className="relative z-10 text-[#d0aa7b] transition-transform duration-300 ease-out group-hover:scale-110">
                    <card.icon size={44} strokeWidth={1.6} />
                  </div>

                  {/* pulso “pulsando” (sem precisar mexer no tailwind.config) */}
                  <div className={`triad-pulse absolute inset-0 rounded-full ${t.pulseBg} opacity-70`} />
                </div>

                {/* Card cinza-azulado com hover zoom (imagem 2) */}
                <div
                  className={[
                    'w-full max-w-sm rounded-2xl',
                    'border border-white/15',
                    'bg-[#2A3342]/65', // cinza com azul
                    'backdrop-blur-xl',
                    'p-8',
                    'shadow-[0_10px_30px_rgba(0,0,0,0.35)]',
                    'transition-transform duration-300 ease-out',
                    'group-hover:scale-[1.03]',
                  ].join(' ')}
                >
                  <h3 className="font-bold text-2xl text-white mb-4">{card.title}</h3>
                  <p className="text-slate-200 leading-relaxed text-base">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CSS local para o pulso (scale ~1.17 como no seu HTML) */}
        <style>
          {`
            @keyframes triadPulse {
              0%   { transform: scale(1.02); opacity: .35; }
              55%  { transform: scale(1.17); opacity: .55; }
              100% { transform: scale(1.02); opacity: .35; }
            }
            .triad-pulse {
              animation: triadPulse 1.8s ease-in-out infinite;
            }
          `}
        </style>
      </Container>
    </section>
  );
};

export default Triade;
