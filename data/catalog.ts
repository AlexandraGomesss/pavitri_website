export type Product = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  image: string;
  price?: string; // optional, e.g., "€59"
  includes?: string[];
  highlights?: string[];
  ctaHref: string; // checkout link
};

export type Service = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  image: string;
  duration?: string; // e.g., "60 min"
  includes?: string[];
  highlights?: string[];
  ctaHref: string; // booking link
};

export const products: Product[] = [
  {
    slug: "milagres-acontecem",
    title: "Liberta-te e Brilha",
    tag: "Equilíbrio Emocional",
    summary:
      "Programa online com ferramentas práticas para elevar a vibração, gerir emoções e cultivar paz interior.",
    image: "/images/libertate-e-brilha.webp",
    price: "€129",
    includes: ["Vídeos on-demand", "PDFs de apoio", "Checklists práticas"],
    highlights: [
      "Metodologia simples",
      "Resultados rápidos",
      "Acesso vitalício",
    ],
    ctaHref: "/checkout/liberta-te-e-brilha",
  },
  {
    slug: "meditacoes-pack",
    title: "Meditações de Luz - Pack",
    tag: "Áudios guiados",
    summary:
      "Coleção de meditações gravadas para serenidade, vitalidade e limpeza energética.",
    image: "/images/produtos/meditacoes-pack.jpg",
    price: "€39",
    includes: ["10 áudios .mp3", "Guia rápido em PDF"],
    highlights: ["Pausas de 10-15min", "Prático no dia a dia"],
    ctaHref: "/checkout/meditacoes-pack",
  },
  {
    slug: "yoga-terapeutico",
    title: "Yoga Terapêutico em Casa",
    tag: "Curso online",
    summary:
      "Sequências simples e seguras para reconectar corpo e mente, com vídeo-aulas e PDFs.",
    image: "/images/produtos/yoga-terapeutico.jpg",
    price: "€89",
    includes: ["12 aulas HD", "Planos semanais", "Modificações seguras"],
    highlights: ["Sem equipamentos", "Progressão suave"],
    ctaHref: "/checkout/yoga-terapeutico",
  },
  {
    slug: "21-dias-alta-vibracao",
    title: "21 Dias de Alta Vibração",
    tag: "Desafio guiado",
    summary:
      "Trilha diária de práticas curtas para mudar estados emocionais e energéticos.",
    image: "/images/produtos/21-dias.jpg",
    price: "€29",
    includes: ["21 áudios diários", "Calendário de hábitos"],
    highlights: ["5-12min por dia", "Microvitórias cumulativas"],
    ctaHref: "/checkout/21-dias",
  },
];

export const services: Service[] = [
  {
    slug: "mentoria-1-1",
    title: "Mentoria 1:1",
    tag: "Online",
    summary:
      "Acompanhamento personalizado para clarear emoções, elevar a vibração e criar rotinas que te sustentam.",
    image: "/images/servicos/mentoria.jpg",
    duration: "60-75 min",
    includes: ["Plano entre sessões", "Follow-up por email"],
    highlights: ["Clareza prática", "Ritmos realistas"],
    ctaHref: "/agendar/mentoria",
  },
  {
    slug: "reiki-a-distancia",
    title: "Reiki à Distância",
    tag: "Energia & Cura",
    summary:
      "Sessão energética não presencial para harmonizar corpo, emoções e mente.",
    image: "/images/servicos/reiki-distancia.jpg",
    duration: "30-45 min",
    includes: ["Intenção definida contigo", "Mensagem de integração"],
    highlights: ["Conforto de casa", "Equilíbrio suave"],
    ctaHref: "/agendar/reiki-distancia",
  },
  {
    slug: "reiki-presencial",
    title: "Reiki Presencial",
    tag: "Terapia Energética",
    summary:
      "Sessão com toque suave para relaxamento profundo e equilíbrio do fluxo energético.",
    image: "/images/servicos/reiki-presencial.jpg",
    duration: "60 min",
    includes: ["Ambiente tranquilo", "Orientações pós-sessão"],
    highlights: ["Relaxamento profundo", "Regulação do sistema nervoso"],
    ctaHref: "/agendar/reiki-presencial",
  },
  {
    slug: "massagem-terapeutica",
    title: "Massagem Terapêutica",
    tag: "Presencial",
    summary:
      "Técnicas de relaxamento e libertação de tensão muscular, com enfoque no teu bem-estar global.",
    image: "/images/servicos/massagem.jpg",
    duration: "60 ou 90 min",
    includes: ["Óleos naturais", "Ambiente acolhedor"],
    highlights: ["Alívio de tensão", "Sono reparador"],
    ctaHref: "/agendar/massagem",
  },
  {
    slug: "meditacao-ao-vivo",
    title: "Meditação Guiada (ao vivo)",
    tag: "Sessão em grupo",
    summary:
      "Prática guiada para serenidade, respiração e presença. Online ou presencial.",
    image: "/images/servicos/meditacao-ao-vivo.jpg",
    duration: "45-60 min",
    includes: ["Respiração & visualização", "Espaço seguro"],
    highlights: ["Serenidade", "Foco suave"],
    ctaHref: "/agendar/meditacao",
  },
];
