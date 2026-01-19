import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { oraPilares } from '../../constants/content';

const oraImages = [
  '/assets/driveVKS/InsORA/mato1.png',
  '/assets/driveVKS/InsORA/mato2.png',
  '/assets/driveVKS/InsORA/rio.png',
  '/assets/driveVKS/InsORA/sol.png'
];

const InstitutoORA = () => {
  return (
    <section id="instituto" className="section theme-light relative bg-white">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative z-10 max-w-xl">
          <div className="mb-6">
            <img
              src="/assets/driveVKS/InsORA/ora.png"
              alt="Instituto ORA"
              className="h-24 md:h-28 w-auto mx-auto lg:mx-0 object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Compromisso com o Futuro
          </h2>

          <div className="w-20 h-1 bg-[#d0aa7b] mb-8" />

          <p className="text-lg md:text-xl leading-relaxed mb-6">
            A VKS Advogados apoia iniciativas de impacto socioambiental, como o{' '}
            <span className="font-semibold">Instituto ORA</span>, que atua na conservação da natureza e em soluções
            técnicas de sustentabilidade urbana.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-10">
            Acreditamos que a advocacia vai além da assessoria jurídica. É sobre construir um futuro sustentável,
            equilibrando desenvolvimento econômico, preservação ambiental e justiça social.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
            {oraPilares.map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#d0aa7b]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-[#b69e60]" aria-hidden />
                </div>
                <div className="text-xs md:text-sm leading-snug">{item.label}</div>
              </div>
            ))}
          </div>

          <Button
            className="!text-white"
            variant="primary"
            iconRight={<ArrowRight className="ml-2" />}
            href="https://www.orainstituto.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça o Instituto ORA
          </Button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={oraImages[0]}
                  alt="Mata"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={oraImages[1]}
                  alt="Natureza"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4 pt-10 md:pt-12">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={oraImages[2]}
                  alt="Rio"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={oraImages[3]}
                  alt="Pôr do sol"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 w-28 h-28 md:w-32 md:h-32 bg-emerald-600/10 rounded-full -z-10" />
          <div className="absolute -bottom-6 -left-6 w-36 h-36 md:w-40 md:h-40 bg-blue-600/10 rounded-full -z-10" />
        </div>
      </Container>
    </section>
  );
};

export default InstitutoORA;
