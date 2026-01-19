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
    tag: '#ambiental',
    date: '15 Nov 2024',
    title: 'Licenciamento Ambiental: desafios e oportunidades em 2024',
    excerpt:
      'Análise das mudanças recentes na legislação ambiental e seus impactos em projetos de infraestrutura.',
    image: '/assets/driveVKS/artigos/at1.jpg',
    href: '#'
  },
  {
    tag: '#imobiliário',
    date: '08 Nov 2024',
    title: 'Regularização Fundiária: novo marco legal e aplicações práticas',
    excerpt:
      'Como a nova legislação de regularização fundiária impacta proprietários e incorporadores.',
    image: '/assets/driveVKS/artigos/at2.jpg',
    href: '#'
  },
  {
    tag: '#urbanístico',
    date: '02 Nov 2024',
    title: 'Planos Diretores Municipais: participação e planejamento urbano',
    excerpt:
      'A importância da participação social na elaboração de planos diretores sustentáveis.',
    image: '/assets/driveVKS/artigos/at3.jpg',
    href: '#'
  },
  {
    tag: '#ambiental',
    date: '28 Out 2024',
    title: 'ESG no setor imobiliário: tendências e compliance',
    excerpt: 'Como implementar práticas ESG em empreendimentos imobiliários de grande porte.',
    image: '/assets/driveVKS/artigos/at4.jpg',
    href: '#'
  },
  {
    tag: '#urbanístico',
    date: '22 Out 2024',
    title: 'Zoneamento urbano e direito de construir',
    excerpt: 'Aspectos jurídicos do zoneamento e sua relação com o direito de propriedade.',
    image: '/assets/driveVKS/artigos/at5.jpg',
    href: '#'
  },
  {
    tag: '#empresarial',
    date: '15 Out 2024',
    title: 'Due Diligence Ambiental em operações de M&A',
    excerpt: 'Checklist essencial para avaliação de passivos ambientais em fusões e aquisições.',
    image: '/assets/driveVKS/artigos/at6.jpg',
    href: '#'
  }
];

export const midiaSlides = [
  {
    title: 'Valor Econômico',
    date: '20 Nov 2024',
    description: 'Novo marco regulatório ambiental impacta setor de infraestrutura',
    link: '#',
    logo: '/assets/driveVKS/midia/valoreco.png',
  },
  {
    title: 'Estadão',
    date: '12 Nov 2024',
    description: 'Especialistas analisam impactos da reforma urbanística',
    link: '#',
    logo: '/assets/driveVKS/midia/estadao.png',
  },
  {
    title: 'Folha de S. Paulo',
    date: '05 Nov 2024',
    description: 'Regularização fundiária avança com nova legislação',
    link: '#',
    logo: '/assets/driveVKS/midia/folha.png',
  },
  {
    title: 'InfoMoney',
    date: '28 Out 2024',
    description: 'ESG em fundos imobiliários: tendências para 2025',
    link: '#',
    logo: '/assets/driveVKS/midia/info.png',
  },
  {
    title: 'JOTA',
    date: '18 Out 2024',
    description: 'Direito Ambiental e desenvolvimento sustentável',
    link: '#',
    logo: '/assets/driveVKS/midia/jota.png',
  },
  {
    title: 'Consultor Jurídico',
    date: '10 Out 2024',
    description: 'A integração entre Direito Urbanístico e Ambiental',
    link: '#',
    logo: '/assets/driveVKS/midia/consultor.png',
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
