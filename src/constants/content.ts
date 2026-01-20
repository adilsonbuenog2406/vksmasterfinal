import {
  Building2,
  Leaf,
  Landmark,
  Scale,
  BadgeCheck,
  BriefcaseBusiness,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Heart,
  Users,
  HandHeart
} from 'lucide-react';

export const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Sócios', href: '#socios' },
  { label: 'Artigos', href: '#artigos' },
  { label: 'Contato', href: '#contato' }
];

export const triadCards = [
  {
    title: 'Direito Imobiliário',
    icon: Building2,
    description:
      'Do patrimônio à regularização, garantindo segurança jurídica em todas as operações imobiliárias.'
  },
  {
    title: 'Direito Ambiental',
    icon: Leaf,
    description: 'Conformidade ambiental e sustentabilidade, equilibrando desenvolvimento e preservação.'
  },
  {
    title: 'Direito Urbanístico',
    icon: Landmark,
    description: 'Planejamento urbano e função social, viabilizando projetos com visão territorial integrada.'
  }
];

export const areasAtuacao = [
  {
    title: 'Direito Ambiental',
    description: 'Licenciamento, compliance ambiental e assessoria em sustentabilidade.',
    icon: Leaf
  },
  {
    title: 'Direito Urbanístico',
    description: 'Zoneamento, planos diretores e regularização urbanística.',
    icon: Landmark
  },
  {
    title: 'Direito Imobiliário e Registral',
    description: 'Transações imobiliárias, due diligence e regularização fundiária.',
    icon: Building2
  },
  {
    title: 'Direito Civil',
    description: 'Contratos, responsabilidade civil e questões patrimoniais.',
    icon: Users
  },
  {
    title: 'Direito Empresarial Estratégico',
    description: 'Governança corporativa, M&A e estruturação empresarial.',
    icon: BriefcaseBusiness
  },
  {
    title: 'Terceiro Setor',
    description: 'Assessoria para ONGs, fundações e organizações de impacto social.',
    icon: HandHeart
  }
];

export const socios = [
  {
    area: 'Urbanístico',
    name: 'Patrícia Valdivieso Hessel',
    quote:
      '“Transformar territórios exige mais do que técnica: exige escuta, sensibilidade e coragem para alinhar cidade, meio ambiente e propriedade privada em um mesmo compasso.”',
    description:
      'Advogada visionária especialista nas áreas de Direito Imobiliário, Urbanístico, Ambiental e Empresarial. Usa o Direito como ferramenta para transformar territórios e construir soluções com equilíbrio, estratégia e empatia.',
    image: '/assets/driveVKS/element/patricia.jpg',
    cta: 'Ver formação e atividades',
    formation: [
      'Especialização em Direito Urbanístico e Ambiental – USP São Paulo, Campus Ribeirão Preto',
      'Especialização em Direito Imobiliário – Universidade Positivo',
      'Especialização em Gestão de Negócios – Fundação Dom Cabral',
      'Especialização em Direito Empresarial – Universidade Positivo',
      'Bacharelado em Direito – Universidade Estadual de Londrina',
      'Técnica em Transações Imobiliárias'
    ],
    activities: [
      'Diretora Estadual do IBRADIM (2024/2027)',
      'Membro das Comissões de Direito Imobiliário e Ambiental da OAB/PR',
      'Membro da Comissão de Direito Urbanístico do IBRADIM'
    ]
  },
  {
    area: 'Ambiental',
    name: 'Bruno Kryminice',
    quote:
      '“Soluções jurídicas ambientais estratégicas que aliam inovação, compliance e sustentabilidade para impulsionar negócios e gerar valor econômico, ambiental e social.”',
    description:
      'Advogado especialista em Direito Administrativo, Direito Ambiental e Direito Regulatório, mestre e Doutor, alia densidade acadêmica na busca do equilíbrio entre o desenvolvimento econômico com soluções sustentáveis.',
    image: '/assets/driveVKS/element/bruno.jpg',
    cta: 'Ver formação e atividades',
    formation: [
      'Doutorando em Meio Ambiente e Desenvolvimento (PPGMADE) – Universidade Federal do Paraná – UFPR',
      'Mestrado em Meio Ambiente e Desenvolvimento (PPGMADE) – Universidade Federal do Paraná – UFPR',
      'Pós-Graduação em Advocacia Pública – Advocacia-Geral da União (EAGU)',
      'Pós-Graduação em Direito Administrativo – Instituto de Direito Romeu Felipe Bacellar',
      'Pós-Graduação em Direito Constitucional – Academia Brasileira de Direito Constitucional (ABDConst)',
      'Pós-Graduação em Direito Aplicado – Escola da Magistratura do Paraná (EMAP)',
      'Pós-Graduação em Direito Civil e Processual Civil – Centro Universitário Curitiba (UNICURITIBA)',
      'Graduação em Direito – Centro Universitário Curitiba (UNICURITIBA)'
    ],
    activities: [
      'Consultoria jurídica especializada em Direito Ambiental e Urbanístico, incluindo processos de licenciamento ambiental e defesas em autuações ambientais',
      'Elaboração de pareceres técnicos e jurídicos de alta complexidade em Direito Administrativo, com foco na segurança jurídica e na prevenção de riscos legais para gestores e empresas',
      'Realização de palestras, cursos e treinamentos especializados, com foco em sustentabilidade, compliance ambiental e governança urbana, voltados à capacitação e atualização técnica de gestores públicos e profissionais do setor privado'
    ]
  },
  {
    area: 'Imobiliário',
    name: 'Everson Lucas Silva',
    quote:
      '“Quando lidamos com imóveis, lidamos com vínculos, histórias e decisões que moldam vidas. O patrimônio é vivo, e a verdadeira expertise está em traduzir isso em soluções jurídicas seguras, humanas e consistentes.”',
    description:
      'Advogado especialista em Direito Imobiliário e Registral, com paixão genuína pelo setor e olhar sensível à complexidade e à humanidade por trás de cada negociação.',
    image: '/assets/driveVKS/element/everson.jpg',
    cta: 'Ver formação e atividades',
    formation: [
      'MBA em Gestão de Projetos – Universidade de São Paulo – POLI/USP',
      'Bacharelado em Direito – Universidade Tuiuti do Paraná',
      'Idiomas: Inglês – fluente | Mandarim – iniciante',
      'Experiência Complementar: Automação de fluxos jurídicos e uso estratégico de tecnologia aplicada ao Direito',
      'Participante da Virada de Copérnico – UFPR'
    ],
    activities: [
      'Advogado Pleno, com MBA em Gestão de Projetos pela Universidade de São Paulo – POLI/USP, atuante nas áreas de Direito Imobiliário e Registral',
      'Dedica-se à estruturação jurídica de negócios imobiliários, com foco na regularização extrajudicial de imóveis urbanos e rurais',
      'Análise registral, planejamento patrimonial e elaboração de instrumentos contratuais sofisticados'
    ]
  }
];

export const artigos = [
  {
    tag: '#urbanístico',
    date: '03 Out 2024',
    title: 'Ajustamento de conduta como instrumento de regularização urbanística',
    excerpt: 'Como o TAC pode viabilizar a regularização urbanística com segurança jurídica.',
    image: '/assets/driveVKS/artigos/at1.jpg',
    href: 'https://www.migalhas.com.br/depeso/416445/ajustamento-de-conduta-como-instrumento-de-regularizacao-urbanistica'
  },
  {
    tag: '#ambiental',
    date: '08 Out 2024',
    title: 'Saneamento básico no Brasil: Caminho para a universalização sustentável?',
    excerpt:
      'O novo marco do saneamento básico busca universalizar os serviços de forma sustentável no Brasil.',
    image: '/assets/driveVKS/artigos/at2.jpg',
    href: 'https://www.migalhas.com.br/depeso/416801/saneamento-basico-no-brasil-caminho-para-universalizacao-sustentavel'
  },
  {
    tag: '#urbanístico',
    date: '15 Jun 2024',
    title: 'Retrofit: uma solução urbana para regenerar',
    excerpt:
      'Requalificação de edificações antigas, preservando a arquitetura e modernizando instalações para atender necessidades atuais.',
    image: '/assets/driveVKS/artigos/at3.jpg',
    href: 'https://www.linkedin.com/pulse/retrofit-uma-solu%C3%A7%C3%A3o-urbana-para-regenerar-famcf/'
  },
  {
    tag: '#urbanístico',
    date: '01 Jan 2023',
    title: 'Competência municipal para a aprovação ambiental da Reurb em APPs',
    excerpt: 'Limites e responsabilidades na regularização fundiária em áreas de preservação.',
    image: '/assets/driveVKS/artigos/at4.jpg',
    href: 'https://www.conjur.com.br/2023-jan-01/bruno-kryminice-competencia-aprovacao-reurb-apps/'
  },
  {
    tag: '#ambiental',
    date: '20 Jan 2023',
    title: 'Apuração de infrações ambientais e o Decreto federal nº 11.373/2023',
    excerpt: 'Atualizações normativas e seus impactos na responsabilização ambiental.',
    image: '/assets/driveVKS/artigos/at5.jpg',
    href: 'https://www.conjur.com.br/2023-jan-20/bruno-kryminice-infracoes-ambientais-decreto-113732023/'
  },
  {
    tag: '#ambiental',
    date: '01 Jan 2023',
    title: '25 anos do SNUC: conservação da natureza e a luta contra a crise climática',
    excerpt: 'O papel do sistema de unidades de conservação frente à emergência climática.',
    image: '/assets/driveVKS/artigos/at6.jpg',
    href: 'https://www.conjur.com.br/2025-jul-18/25-anos-do-snuc-conservacao-da-natureza-e-a-luta-contra-a-crise-climatica/'
  }
];

export const midiaSlides = [
  {
    title: 'Paraná Imprensa',
    date: '15 Jan 2026',
    description: 'Contratos sob pressão: Alta dos juros e inflação exigem renegociação consciente de contratos de locação',
    link: 'https://www.paranaimprensa.com.br/2026/01/contratos-sob-pressao-alta-dos-juros-e.html',
    logo: '/assets/driveVKS/midia/parana.jpg',
  },
  {
   title: 'Gazeta da Semana',
    date: '04 Set 2025',
    description: 'Escritório curitibano adota novo nome e amplia atuação em áreas estratégicas',
    link: 'https://gazetadasemana.com.br/noticia/245607/escritorio-curitibano-adota-novo-nome-e-amplia-atuacao-em-areas-estrategicas',
    logo: '/assets/driveVKS/midia/gs.png',
  },
  {
    title: 'Jornal do povo Paraná',
    date: '17 Set 2025',
    description: 'Escritório curitibano adota novo nome e amplia atuação em áreas estratégicas',
    link: 'https://jornaldopovoparana.com.br/2025/09/17/escritorio-curitibano-adota-novo-nome-e-amplia-atuacao-em-areas-estrategicas/',
    logo: '/assets/driveVKS/midia/jnpr.png',
  },
  {
    title: 'Jornal do Brás',
    date: '29 Set 2025',
    description: 'IBRADIM/PR promove debate sobre a Nova Lei Geral do Licenciamento Ambiental',
    link: 'https://jornaldobras.com.br/noticia/90504/ibradim-pr-promove-debate-sobre-a-nova-lei-geral-do-licenciamento-ambiental', 
    logo: '/assets/driveVKS/midia/bras.png',
  },
  {
    title: 'Portal Olhar Dinâmico',
    date: '06 Jan 2026',
    description: 'A integração entre Direito Urbanístico e Ambiental',
    link: 'https://www.portalolhardinamico.com.br/noticia/15210/contratos-sob-pressao',
    logo: '/assets/driveVKS/midia/portalolhar.png',
  },
];

export const ecosCards = [
  { title: 'grafelo', subtitle: 'Inteligência de Negócios' },
  { title: 'VKS Hub Central', subtitle: 'Análise Jurídica e Estratégica' },
  { title: 'Soluções Técnicas', subtitle: 'Engenharia & Ambiente' }
];

export const oraPilares = [
  { icon: Leaf, label: 'Conservação da Natureza' },
  { icon: BadgeCheck, label: 'Comunidades Locais' },
  { icon: Heart, label: 'Impacto Social' }
] as const;

const PDF_ID = '1EHqgw7Az3WZ4O_lZNcsbGXYFwBYXzg8M';

export const portfolioCards = [
  {
    title: 'Portfólio Geral',
    description: 'Visão completa de todas as nossas áreas de atuação e cases de sucesso',
    cta: 'Download PDF',
    href: '/assets/driveVKS/pdf/Apresentacao-Geral.pdf'
  },
  {
    title: 'Portfólio Ambiental',
    description: 'Especialização em Direito Ambiental, licenciamento e compliance',
    cta: 'Download PDF',
    href: '/assets/driveVKS/pdf/Portfolio-Ambiental.pdf'
  }
];

export const contatoInfo = {
  telefone: '(41) 3618-0204',
  whatsapp: '(41) 98742 8627',
  email: 'contato@vks.adv.br',
  endereco:
    'Av. Anita Garibaldi, 850, Torre C – Salas 810 / 811\nCabral, Curitiba - PR\nCEP 80540-400',
  maps: '#',
  waze: '#'
};

export const footerLinks = {
  linksRapidos: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sócios', href: '#socios' },
    { label: 'Artigos', href: '#artigos' },
    { label: 'Contato', href: '#contato' }
  ],
  areas: [
    { label: 'Direito Ambiental', href: '#areas' },
    { label: 'Direito Urbanístico', href: '#areas' },
    { label: 'Direito Imobiliário', href: '#areas' },
    { label: 'Direito Civil', href: '#areas' },
    { label: 'Direito Empresarial', href: '#areas' },
    { label: 'Terceiro Setor', href: '#areas' }
  ],
  contato: [
    { label: 'Av. Anita Garibaldi, 850, Torre C – Salas 810 / 811', href: '#contato', icon: MapPin },
    { label: '(41) 3618-0204', href: 'tel:+554136180204', icon: Phone },
    { label: 'contato@vks.adv.br', href: 'mailto:contato@vks.adv.br', icon: Mail }
  ],
  legal: [
    { label: 'Política de Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
    { label: 'Cookies', href: '#cookies' }
  ]
};
