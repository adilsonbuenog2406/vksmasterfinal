import { Play } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const SobreNos = () => {
  return (
    <section id="sobre" className="relative isolate overflow-hidden min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh]">
      {/* Background Vimeo (substitui vídeo local pesado) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            src="/assets/videos/socios-comp.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            title="IMAGENS SÓCIOS COMPILADO"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100vw',
              height: '56.25vw',        // 16:9
              minWidth: '177.78vh',     // garante cover em alturas maiores
              minHeight: '100vh',       // garante cover em larguras menores
            }}
          />
        </div>
      </div>

      {/* Overlays (acima do vídeo) */}
      <div className="absolute inset-0 z-10 bg-black/35" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.70)_100%)]" />

      {/* Conteúdo */}
      <Container className="relative z-20 flex min-h-[85vh] items-center justify-center py-10 lg:min-h-[90vh]">
        <div
          className="
            w-full max-w-[980px]
            rounded-2xl
            border border-white/20
            bg-white/10
            backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            px-10 py-10
            md:px-14 md:py-12
            min-h-[250px] md:min-h-[290px]
          "
        >
          <div className="mb-6">
            <h3 className="text-3xl font-semibold text-white md:text-4xl">Sobre Nós</h3>
            <div className="mt-3 h-[3px] w-14 rounded-full bg-[#cfa269]" />
          </div>

          <p className="max-w-3xl text-[15px] leading-relaxed text-white/85 md:text-base">
            Na <span className="font-semibold text-white">VKS Advogados</span>, atuamos com visão sistêmica,
            inteligência multidisciplinar e estratégia jurídica integrada. Somos parte de um ecossistema que conecta
            patrimônio, território, meio ambiente e desenvolvimento sustentável. Nossa abordagem única permite oferecer
            soluções jurídicas completas e estratégicas para os desafios mais complexos.
          </p>

          <div className="mt-8 flex justify-end">
            <Button
              variant="glass"
              size="md"
              iconLeft={<Play className="mr-2 fill-white" size={16} />}
              className="rounded-md px-5 py-3 text-sm"
              href="https://www.youtube.com/watch?v=Wge7__9w6bE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assista ao Vídeo Institucional
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SobreNos;
