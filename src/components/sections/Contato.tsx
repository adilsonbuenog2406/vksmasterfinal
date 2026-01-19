import { Mail, MapPin, Phone, Send, PhoneCall, Navigation } from 'lucide-react';
import Container from '../ui/Container';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import { contatoInfo } from '../../constants/content';

const Contato = () => {
  return (
    <section
      id="contato"
      className="section relative overflow-hidden bg-gradient-to-br from-teal-700 via-navy/90 to-navy-900 text-white"
    >
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <Container className="relative z-10 flex flex-col gap-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-[32px] font-extrabold text-white">
            Entre em <span className="text-gold">Contato</span>
          </h2>
          <p className="text-base text-white/80">
            Estamos prontos para atender suas demandas jurídicas com excelência
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1.4fr]">
          <div className="rounded-3xl bg-white p-8 shadow-card-soft text-navy">
            <div className="flex flex-col gap-4">
              <Input label="Nome completo" placeholder="Seu nome" variant="light" />
              <Input label="E-mail" placeholder="seu@email.com" type="email" variant="light" />
              <Input label="Telefone" placeholder="(00) 00000-0000" variant="light" />
              <Input label="Assunto" placeholder="Como podemos ajudar?" variant="light" />
              <Textarea label="Mensagem" placeholder="Descreva sua necessidade..." variant="light" />
              <label className="mt-2 flex items-center gap-2 text-sm text-navy/80">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 bg-white" />
                <span>
                  Aceito a Política de Privacidade e concordo em receber comunicações da VKS Advogados
                </span>
              </label>
              <Button className="mt-2" fullWidth iconRight={<Send size={16} />}>
                Enviar mensagem
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-white text-navy p-6 shadow-card-soft">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gold/20 p-3 text-gold">
                  <MapPin size={20} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-navy">Endereço</h3>
                  <p className="whitespace-pre-line text-sm text-navy/80 leading-relaxed">
                    {contatoInfo.endereco}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="light"
                      size="sm"
                      className="w-full justify-center rounded-lg"
                      iconLeft={<Navigation size={16} />}
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Anita+Garibaldi+850+Torre+C+Curitiba+PR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Maps
                    </Button>
                    <Button
                      variant="light"
                      size="sm"
                      className="w-full justify-center rounded-lg"
                      iconLeft={<Navigation size={16} />}
                      href="https://waze.com/ul?q=Av.+Anita+Garibaldi+850+Curitiba+PR"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Waze
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white text-navy p-6 shadow-card-soft flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold/20 p-3 text-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">Telefone</h3>
                  <p className="text-sm text-navy/80">{contatoInfo.telefone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold/20 p-3 text-gold">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">WhatsApp</h3>
                  <p className="text-sm text-navy/80">{contatoInfo.whatsapp}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white text-navy p-6 shadow-card-soft">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-gold/20 p-3 text-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">E-mail</h3>
                  <p className="text-sm text-navy/80">{contatoInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 border border-white/15 overflow-hidden shadow-card-soft">
              <iframe
                title="Mapa VKS"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.0012940612048!2d-49.25980059322654!3d-25.40299220162546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce7c7c1364a05%3A0x9e94557bbb85fd65!2sVKS-%20Valdivieso%2C%20Kryminice%20%26%20Silva%20Sociedade%20de%20Advogados!5e1!3m2!1spt-BR!2sbr!4v1767197722185!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                className="h-64 w-full border-0 md:h-80"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contato;
