import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { navLinks } from '../../constants/content';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>('#inicio');

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
      if (isScrolled) setOpen(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Seção ativa (linha dourada sempre visível no item atual)
  useEffect(() => {
  if (typeof window === 'undefined') return;

  const targets = navLinks
    .map((l) => ({ href: l.href, el: document.querySelector(l.href) as HTMLElement | null }))
    .filter((x) => x.el);

  if (targets.length === 0) return;

  const headerOffset = 120; // ajuste fino se precisar (altura do header + folga)

  const pickActiveByTop = () => {
    const ordered = targets
      .map((t) => ({
        href: t.href,
        top: (t.el as HTMLElement).getBoundingClientRect().top,
      }))
      // pega a seção cujo top está mais próximo do header (sem passar muito)
      .filter((x) => x.top <= headerOffset + 80) // já “entrou” no viewport
      .sort((a, b) => Math.abs(a.top - headerOffset) - Math.abs(b.top - headerOffset));

    if (ordered[0]?.href) setActiveHref(ordered[0].href);
  };

  const observer = new IntersectionObserver(
    () => {
      pickActiveByTop();
    },
    {
      root: null,
      // considera o header: "encurta" a área útil do viewport
      rootMargin: `-${headerOffset}px 0px -60% 0px`,
      threshold: [0, 0.1, 0.2],
    }
  );

  targets.forEach((t) => t.el && observer.observe(t.el));

  // garante atualização imediata e em resize (mudança de layout)
  pickActiveByTop();
  window.addEventListener('resize', pickActiveByTop, { passive: true });

  return () => {
    observer.disconnect();
    window.removeEventListener('resize', pickActiveByTop);
  };
}, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled
          ? [
              'border-b border-white/10',
              'bg-black/25',
              'backdrop-blur-[16px] backdrop-saturate-100',
              'shadow-[0_10px_30px_rgba(0,0,0,0.18)]',
            ].join(' ')
          : 'border-b border-transparent bg-transparent shadow-none'
      )}
    >
      <Container className="flex w-full max-w-[1520px] items-center justify-between px-10 py-6">
        <div className="flex items-center gap-3">
          <img
            src="/assets/driveVKS/logo/2 - Colorida 2.png"
            alt="VKS"
            className="h-9 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        <nav className="hidden flex-1 items-center justify-end gap-8 text-sm font-medium md:flex">
          <div className="flex items-center gap-8 text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative inline-flex items-center',
                    'text-white/90 hover:text-white transition-colors',
                    "after:content-[''] after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full",
                    'after:origin-left after:transition-transform after:duration-300 after:ease-out',
                    'after:bg-[#d0aa7b]',
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <Button
            size="sm"
            className="ml-4 text-white"
            href="https://api.whatsapp.com/send?phone=554136180204"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato
          </Button>
        </nav>

        <button
          className="block rounded-lg border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-black/55 backdrop-blur-[16px] backdrop-saturate-100 px-6 pb-6 pt-3 md:hidden">
          <div className="flex flex-col gap-4 text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'relative inline-flex w-fit text-sm',
                    'text-white/90 hover:text-white transition-colors',
                    "after:content-[''] after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:w-full",
                    'after:origin-left after:transition-transform after:duration-300 after:ease-out',
                    'after:bg-[#d0aa7b]',
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                  ].join(' ')}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}

            <Button
              size="sm"
              className="w-full text-white"
              href="https://api.whatsapp.com/send?phone=554136180204"
              target="_blank"
              rel="noopener noreferrer"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
