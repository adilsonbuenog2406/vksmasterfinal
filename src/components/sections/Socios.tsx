import React, { useMemo, useState } from 'react';
import Container from '../ui/Container';
import { socios } from '../../constants/content';
import { ChevronDown } from 'lucide-react';

type Socio = {
  area: string;
  name: string;
  quote: string;
  description: string;
  image: string;
  cta: string;
  formation: string[];
  activities: string[];
};

const Socios: React.FC = () => {
  const data = useMemo(() => socios as unknown as Socio[], []);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => setOpenKey((prev) => (prev === key ? null : key));

  return (
    <section
      id="socios"
      className="section relative overflow-hidden bg-triad bg-cover bg-center text-white grid-overlay"
    >
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-4">
            <span className="text-[#d0aa7b]">Sócios</span>
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto">
            Expertise multidisciplinar para soluções jurídicas integradas
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {data.map((socio) => {
            const key = socio.name;
            const isOpen = openKey === key;

            return (
              <article key={key} className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Imagem 3/4 */}
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={socio.image}
                      alt={socio.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Degradê azul sutil (de baixo para cima) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,18,38,0.78),rgba(5,18,38,0.32)_55%,rgba(5,18,38,0)_100%)]" />

                    {/* Texto sobre a imagem */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d0aa7b]">
                        {socio.area}
                      </div>

                      <h3 className="text-[22px] md:text-[24px] font-semibold tracking-tight mb-3 whitespace-nowrap overflow-hidden text-ellipsis">
                        {socio.name}
                      </h3>

                      {/* Preview do quote (alinhado) */}
                      <p className="text-[12px] md:text-[13px] font-light italic leading-relaxed text-white/85 mb-3 h-[6.5em] overflow-hidden">
                        {socio.quote}
                      </p>
                    </div>
                  </div>

                  {/* Card do resumo */}
                  <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-b-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)] flex flex-col">
                    {/* Preview da descrição (alinhado) */}
                    <p
                    className={[
                      'text-[13px] leading-6 text-white/80 mb-5 transition-all duration-300 ease-out',
                      isOpen
                        ? 'max-h-[1000px] opacity-100'
                        : 'max-h-[4.5rem] overflow-hidden opacity-90',
                    ].join(' ')}
                  >
                    {socio.description}
                  </p>

                    {/* Toggle */}
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      className="mt-auto flex w-full items-center justify-between gap-3 text-left text-[12px] font-medium text-[#d0aa7b] hover:text-[#b69e60] transition-colors"
                    >
                      <span>{socio.cta}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>

                    {/* Conteúdo expansível */}
                    <div
                      className={[
                        'grid transition-all duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0',
                      ].join(' ')}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4">
                          <div className="h-px w-full bg-white/10" />
                          {/* (Opcional) Quote completo também */}
                          <div>
                            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d0aa7b]">
                              Visão
                            </h4>
                            <p className="mt-3 text-[12px] leading-6 text-white/75 italic">
                              {socio.quote}
                            </p>
                          </div>

                          {/* Formação */}
                          <div>
                            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d0aa7b]">
                              Formação
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {socio.formation?.map((item, idx) => (
                                <li key={idx} className="flex gap-2.5 text-[12px] leading-6 text-white/75">
                                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-white/25" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Atividades */}
                          <div>
                            <h4 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d0aa7b]">
                              Principais Atividades
                            </h4>
                            <ul className="mt-3 space-y-2">
                              {socio.activities?.map((item, idx) => (
                                <li key={idx} className="flex gap-2.5 text-[12px] leading-6 text-white/75">
                                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-white/25" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /expand */}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Socios;
