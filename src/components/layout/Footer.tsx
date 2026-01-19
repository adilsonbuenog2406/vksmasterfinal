import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Container from '../ui/Container';
import { footerLinks } from '../../constants/content';

const Footer = () => {
  const logoSrc = '/assets/driveVKS/logo/7_Negativa.png';

  return (
    <footer
      className="
        relative mt-20 overflow-hidden text-white
        bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,255,255,0.10),rgba(0,0,0,0)_60%),linear-gradient(135deg,#0c5a66_0%,#073e4a_45%,#052c36_100%)]
      "
    >
      {/* Grid overlay bem sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
        <div className="grid-overlay h-full w-full" />
      </div>

      {/* Watermark VKS (visível o tempo inteiro) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/assets/driveVKS/element/glass_vks.png"
          alt=""
          aria-hidden="true"
          className="
            vks-watermark-footer-loop
            absolute
            left-[44%] top-[5%]
            w-[790px] max-w-none select-none
          "
        />
      </div>

      <Container className="relative z-10 max-w-[1560px] px-10 pt-20 pb-10">
        {/* Em md+ usamos grid com colunas fixas e justify-between para “encaixar” nas áreas */}
        <div
          className="
            grid gap-10
            md:grid-cols-[420px_260px_260px_300px]
            md:justify-between
            md:gap-x-16
          "
        >
          {/* Coluna 1 */}
          <div className="space-y-5">
            <img
              src={logoSrc}
              alt="VKS"
              className="h-12 w-auto object-contain"
              onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
            />

            <p className="max-w-sm text-[16px] leading-relaxed text-white/65">
              Direito Ambiental, Urbanístico e Imobiliário integrados em um único ecossistema jurídico.
            </p>

            <div className="flex items-center gap-4 pt-2 text-white/70">
              <a
                href="https://www.linkedin.com/company/vksadvogados/?originalSubdomain=br"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/vks_advogados/"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/vksadvogados/"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=554136180204"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 2 */}
          <div className="space-y-5">
            <h4 className="text-[18px] font-semibold text-white">Links Rápidos</h4>
            <div className="flex flex-col gap-4 text-[16px] text-white/70">
              {footerLinks.linksRapidos.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 3 */}
          <div className="space-y-5">
            <h4 className="text-[18px] font-semibold text-white">Áreas de Atuação</h4>
            <div className="flex flex-col gap-4 text-[16px] text-white/70">
              {footerLinks.areas.map((link) => (
                <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 4 */}
          <div className="space-y-5">
            <h4 className="text-[18px] font-semibold text-white">Contato</h4>
            <div className="flex flex-col gap-4 text-[16px] text-white/75">
              {footerLinks.contato.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-4 transition-colors hover:text-white"
                >
                  <item.icon size={18} className="mt-0.5 text-[#cfa269]" />
                  <span className="leading-relaxed">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* divisor */}
        <div className="mt-14 border-t border-white/10" />

        {/* bottom */}
        <div className="flex flex-col gap-5 py-8 text-[15px] text-white/55 md:flex-row md:items-center md:justify-between">
          <span className="text-center md:flex-1 md:text-left">
            © 2026  VKS Advogados. Todos os direitos reservados.
          </span>

          <div className="flex flex-col items-center gap-1 md:flex-1">
            <span className="text-xs tracking-wide text-white/40">
              desenvolvido por
            </span>

            <a
              href="https://centoeonze.space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <img
                src="/assets/driveVKS/element/centoeonze-logo-DXNpJquz.png"
                alt="centoeonze"
                className="h-5 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:flex-1 md:justify-end">
            {footerLinks.legal.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
 
