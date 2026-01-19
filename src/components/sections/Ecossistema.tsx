import { ArrowRight, Network } from 'lucide-react';

import Container from '../ui/Container';
import Button from '../ui/Button';
import { ecosCards } from '../../constants/content';
import vksLogo from '/assets/driveVKS/logo/2 - Colorida 2.png';
import grafeloLogo from '/assets/driveVKS/logo/grafelo.png';

const Ecossistema = () => {
  const grafelo = ecosCards?.[0];
  const hub = ecosCards?.[1];
  const tecnicas = ecosCards?.[2];
  const asset = (path: string) => encodeURI(`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`);


  return (
    <section
      id="ecossistema"
      className="section relative overflow-hidden bg-triad bg-cover bg-center grid-overlay"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b3a42]/35 via-[#061a2b]/70 to-[#061425]/90" />

      <style>
        {`
          @keyframes ecosHubPulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.03); }
          }
        `}
      </style>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#d0aa7b]/20 border border-[#d0aa7b]/30 rounded-full mb-6">
              <Network className="w-5 h-5 text-[#d0aa7b]" aria-hidden="true" />
              <span className="text-[#d0aa7b] text-sm font-medium">Ecossistema Integrado</span>
            </div>

            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">Ecossistema Integrado</h2>
            <div className="w-20 h-1 bg-[#d0aa7b] mb-8" />

            {/* IMPORTANTE: sem logo aqui (logos vão nos cards do diagrama) */}
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              A VKS integra um ecossistema de soluções que une estratégia jurídica de alto nível à
              inteligência de negócios da <span className="font-semibold">grafelo</span>, boutique
              especializada na estruturação e gestão de ativos imobiliários e ambientais.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Enquanto a VKS conduz a análise jurídica, regulatória e urbanístico-ambiental das operações, a
              Grafelo organiza dados, origina oportunidades, estrutura ativos e conecta patrimônio e capital
              com precisão técnica.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Essa complementaridade amplia a visão estratégica dos projetos, revela potencial oculto, qualifica
              decisões e permite oferecer aos clientes um olhar integrado sobre regularização, desenvolvimento
              imobiliário, gestão patrimonial e operações de investimento.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              O resultado é uma jornada mais sólida, eficiente e orientada à valorização sustentável dos ativos.
            </p>

            <Button
              variant="primary"
              className="bg-[#d0aa7b] hover:bg-[#b69e60] text-white px-8"
              iconRight={<ArrowRight className="ml-2" aria-hidden="true" />}
              href="https://www.grafelo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conheça a Grafelo
            </Button>
          </div>

          {/* RIGHT - Diagrama */}
          <div className="relative">
            <div className="relative h-96 flex items-center justify-center">
              {/* Linhas pontilhadas */}
              <svg className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="20%"
                  stroke="#d0aa7b"
                  strokeWidth="2"
                  strokeDasharray="2 10"
                  strokeLinecap="round"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="80%"
                  stroke="#d0aa7b"
                  strokeWidth="2"
                  strokeDasharray="2 10"
                  strokeLinecap="round"
                />
              </svg>

              {/* HUB CENTRAL (center) - COM LOGO VKS */}
              <div
                className="absolute left-1/2 top-1/2 bg-white/10 backdrop-blur-lg border-2 border-[#d0aa7b] rounded-2xl px-10 py-8 shadow-2xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.03]"
                style={{ animation: 'ecosHubPulse 4.2s ease-in-out infinite' }}
              >
                <img
                  src={vksLogo}
                  alt="VKS Advogados"
                  className="h-10 md:h-12 w-auto mb-3"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-sm md:text-base text-[#d0aa7b] leading-snug">
                  {hub?.subtitle ?? 'Análise Jurídica e Estratégica'}
                </div>
              </div>

              {/* GRAFELO (top-right) - COM LOGO GRAFELO */}
              <div className="absolute -right-20 top-[-45px] bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl px-10 py-7 flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={grafeloLogo}
                  alt="Grafelo"
                  className="h-10 md:h-12 w-auto mb-3"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="text-sm text-slate-300">{grafelo?.subtitle ?? 'Inteligência de Negócios'}</div>
              </div>

              {/* SOLUÇÕES TÉCNICAS (bottom-left) */}
              <div className="absolute bottom-0 left-0 bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <div className="text-lg text-white leading-none">{tecnicas?.title ?? 'Soluções Técnicas'}</div>
                <div className="text-xs text-slate-400 mt-2">{tecnicas?.subtitle ?? 'Engenharia & Ambiente'}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ecossistema;
