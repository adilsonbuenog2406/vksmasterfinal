import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import { artigos } from '../../constants/content';

const tagStyles: Record<string, string> = {
  ambiental: 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-200',
  'imobiliário': 'bg-amber-100 text-amber-800 group-hover:bg-amber-200',
  urbanístico: 'bg-blue-100 text-blue-800 group-hover:bg-blue-200',
  empresarial: 'bg-purple-100 text-purple-800 group-hover:bg-purple-200'
};

function normalizeTag(tag?: string) {
  return (tag ?? '').replace('#', '').trim().toLowerCase();
}

function tagClass(tag?: string) {
  const key = normalizeTag(tag);
  return tagStyles[key] ?? 'bg-slate-100 text-slate-700 group-hover:bg-slate-200';
}

const ArtigosNoticias = () => {
  return (
    <section id="artigos" className="theme-light bg-white py-24">
      <Container className="flex flex-col gap-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Artigos e Notícias
          </h2>

          <p className="text-base md:text-lg">
            Análises e insights sobre Direito Ambiental, Urbanístico e Imobiliário
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artigos.map((post, index) => {
            const href = (post as any).href ?? '#';

            return (
              <article
                key={`${post.title}-${index}`}
                className="group h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span
                      className={[
                        'inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-semibold transition-colors',
                        tagClass(post.tag)
                      ].join(' ')}
                    >
                      #{normalizeTag(post.tag)}
                    </span>

                    <span className="text-sm text-slate-500 whitespace-nowrap">
                      {post.date}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600">
                    {post.title}
                  </h3>

                  <p className="mb-4 text-sm md:text-base leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>

                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    aria-label={`Ler artigo: ${post.title}`}
                  >
                    Leia o artigo
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ArtigosNoticias;
