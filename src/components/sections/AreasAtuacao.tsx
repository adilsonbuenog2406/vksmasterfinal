import Container from '../ui/Container';
import { areasAtuacao } from '../../constants/content';
import Button from '../ui/Button';

const AreasAtuacao = () => {
  return (
    <section id="areas" className="section bg-mist-100 text-navy-900">
      {/* max-w maior para os cards ficarem mais largos */}
      <Container className="max-w-7xl flex flex-col gap-12">
        <div className="text-center space-y-4">
          {/* Título maior */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-navy">Áreas de Atuação</h2>

          {/* Texto maior */}
          <p className="text-lg md:text-xl text-navy/80">
            Soluções jurídicas integradas para cada necessidade do seu projeto
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {areasAtuacao.map((area) => (
            <div
              key={area.title}
              className="group rounded-2xl bg-white shadow-card-soft border border-slate/20 p-7 md:p-8 flex flex-col gap-5 min-h-[220px] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-teal-700 hover:shadow-card hover:border-transparent"
            >
              {/* ÍCONE: manter dourado no hover (não virar branco) */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold transition duration-300 group-hover:bg-white/10">
                <area.icon size={22} />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-navy transition duration-300 group-hover:text-white">
                  {area.title}
                </h3>
                <p className="text-base text-navy/80 leading-relaxed transition duration-300 group-hover:text-white/85">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            iconRight={<span aria-hidden>→</span>}
            className="!text-white hover:!text-white [&_*]:!text-white hover:[&_*]:!text-white"
            href="https://drive.google.com/file/d/1EHqgw7Az3WZ4O_lZNcsbGXYFwBYXzg8M/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça nossas soluções jurídicas
          </Button>

          {/* Botão: bg branco + texto escuro */}
          <Button
            variant="secondary"
            className="!bg-white !text-navy border border-navy/15 hover:!bg-white/90 hover:border-navy/30"
            href="https://api.whatsapp.com/send?phone=554136180204"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AreasAtuacao;
