import { ArrowRight, Play } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  const watermarkSrc = '/assets/driveVKS/element/glass_vks.png';

  // Vimeo video id: 1151571974
  const vimeoSrc =
    'https://player.vimeo.com/video/1151571974?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1';

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-hero bg-cover bg-center"
    >
      {/* Background Vimeo */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
        <iframe
          src={vimeoSrc}
          title="IMAGENS COMPILADO"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          className="
            pointer-events-none
            absolute left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            min-h-full min-w-full
            h-[56.25vw] w-[177.78vh]
          "
        />
      </div>

      {/* Seus overlays (mantidos) */}
      <div className="absolute inset-0 z-0 bg-[#081a2b]/45" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.65)_100%)]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050b12]/60 via-transparent to-transparent" />

      {/* Watermark (mantido) */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <img
          src={watermarkSrc}
          alt=""
          aria-hidden="true"
          className="vks-watermark-hero-loop absolute right-[4%] bottom-[-8%] w-[640px] max-w-none select-none sm:right-[3%] sm:w-[760px] md:right-[2%] md:w-[900px] lg:right-[1%] lg:w-[1020px]"
        />
      </div>

      {/* Conteúdo (mantido) */}
      <Container className="relative z-20 flex w-full max-w-[1520px] flex-col gap-10 px-10 pt-28 pb-16">
        <div className="flex w-full max-w-3xl flex-col gap-6">
          <h1 className="text-[56px] font-normal leading-[1.04] md:text-[72px] md:leading-[1.02]">
            Direito Ambiental, <br className="hidden md:block" />
            Urbanístico e Imobiliário.
          </h1>
          <h2 className="text-[52px] font-extrabold leading-[1.03] text-[#cfa269] md:text-[64px] md:leading-[1.02]">
            Integrados em um único <br className="hidden md:block" />
            ecossistema.
          </h2>

          <p className="max-w-2xl text-xl text-white/90 md:text-[22px]">
            Assessoria jurídica com impacto positivo, viabilidade técnica e conformidade ambiental,
            fundiária e urbanística.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              size="md"
              variant="primary"
              iconRight={<ArrowRight size={18} />}
              href="https://api.whatsapp.com/send?phone=554136180204"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre em contato
            </Button>

            <Button size="md" variant="glass" iconLeft={<Play className="mr-2 fill-white" size={18} />}
              href="https://www.youtube.com/watch?v=Wge7__9w6bE"
              target="_blank"
              rel="noopener noreferrer"
              >
              Assistir vídeo institucional
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:block">
          <div className="scroll-indicator flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/45 bg-white/10">
            <div className="mt-3 h-3 w-1 rounded-full bg-white/60" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
