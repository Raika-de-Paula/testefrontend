export const teachers = [
  { 
    id: 1, 
    name: 'Dr. Alan Turing', 
    role: 'Coordenador de Tecnologia', 
    topics: ['Algoritmos', 'IA', 'Segurança'],
    bio: "Pioneiro na ciência da computação, apaixonado por algoritmos e inteligência artificial.",
    avatar: "https://s1.static.brasilescola.uol.com.br/img/2019/09/alan-turing-be.jpg",
    email: 'alan.turing@mentesbrilhantes.edu.br'
  },
  { 
    id: 2, 
    name: 'Prof. Dieter Rams', 
    role: 'Diretor de Design Industrial', 
    topics: ['Design de Produto', 'Princípios de Design', 'Minimalismo'],
    bio: "Lenda do design industrial, cujos '10 Princípios do Bom Design' moldaram a estética moderna.",
    avatar: "https://images.squarespace-cdn.com/content/v1/5d6700e799e03b0001e82f2b/1590624042710-6RNW6GL62YDDOO12I7CM/RamsPortrait.jpg?format=750w",
    email: 'dieter.rams@mentesbrilhantes.edu.br'
  },
  { 
    // NOVA PROFESSORA 1: Substituindo Philip Kotler (Marketing)
    id: 3, 
    name: 'Dra. Brené Brown', 
    role: 'Pesquisadora em Liderança e Vulnerabilidade', 
    topics: ['Liderança Autêntica', 'Coragem', 'Comportamento'],
    bio: "Pesquisadora e palestrante, focada na coragem, vergonha, vulnerabilidade e empatia no ambiente de trabalho.",
    avatar: "https://sextante.com.br/cdn/shop/files/Brene_Brown.png?v=1750191792&width=240",
    email: 'brene.brown@mentesbrilhantes.edu.br'
  },
  { 
    id: 4, 
    name: 'Dra. Marie Curie', 
    role: 'Coordenadora de Ciência', 
    topics: ['Física', 'Química', 'Pesquisa'],
    bio: "Dupla vencedora do Prêmio Nobel, focada em descobertas atômicas e radioatividade.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqhVMbaNlO29H1DM9YdXdu_7n62H61HTi4A&s",
    email: 'marie.curie@mentesbrilhantes.edu.br'
  },
  { 
    // NOVA PROFESSORA 2: Substituindo Carl Sagan (Astrofísica)
    id: 5, 
    name: 'Profa. Katherine Johnson', 
    role: 'Matemática da NASA', 
    topics: ['Cálculos Orbitais', 'Geometria Analítica', 'Aeroespacial'],
    bio: "Matemática que calculou as trajetórias, janelas de lançamento e caminhos de retorno de muitos voos da NASA.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg",
    email: 'katherine.johnson@mentesbrilhantes.edu.br'
  },
  { 
    id: 6, 
    name: 'Profa. Nellie Bly', 
    role: 'Pioneira do Jornalismo Investigativo', 
    topics: ['Reportagem', 'Escrita', 'Ética na Mídia'],
    bio: "Famosa por suas reportagens investigativas sob disfarce, definindo o padrão para o jornalismo moderno.",
    avatar: "https://fosforoeditora.fbitsstatic.net/img/b/fe2abcf8-02af-4a88-80f2-05d20fd026d2.jpg",
    email: 'nellie.bly@mentesbrilhantes.edu.br' 
  },
  { 
    id: 7, 
    name: 'Prof. Linus Torvalds', 
    role: 'Arquiteto de Sistemas Operacionais', 
    topics: ['Desenvolvimento de Kernel', 'Open Source', 'Controle de Versão (Git)'],
    bio: "Criador do kernel Linux e da ferramenta de controle de versão Git. Focado em estabilidade e modularidade.",
    avatar: "https://cdn.facesofopensource.com/wp-content/uploads/2017/02/09202215/linus.faces22052.web_.jpg",
    email: 'linus.torvalds@mentesbrilhantes.edu.br' 
  },
  { 
    id: 8, 
    name: 'Profa. Grace Hopper', 
    role: 'Engenheira de Software Sênior', 
    topics: ['COBOL', 'Compiladores', 'Programação Orientada a Objetos'],
    bio: "Almirante e inventora do primeiro compilador. Ela desmistifica a programação.",
    avatar: "https://stories.vassar.edu/2017/assets/images/170706-legacy-of-grace-hopper-hopper-militarypportrait.jpg",
    email: 'grace.hopper@mentesbrilhantes.edu.br'
  },
  { 
    id: 9, 
    name: 'Prof. Peter Drucker', 
    role: 'Pai da Administração Moderna', 
    topics: ['Gestão Estratégica', 'Inovação', 'Empreendedorismo'],
    bio: "Consultor de gestão e educador, cujas ideias definiram a teoria e a prática da administração moderna no século XX.",
    avatar: "https://media.treasy.com.br/media/2017/05/peter-drucker.jpg",
    email: 'peter.drucker@mentesbrilhantes.edu.br'
  },
  { 
    id: 10, 
    name: 'Dra. Rosalind Franklin', 
    role: 'Bioquímica Principal', 
    topics: ['Biologia Molecular', 'Estrutura do DNA', 'Cristalografia'],
    bio: "Cientista fundamental para a descoberta da hélice dupla do DNA.",
    avatar: "https://www.pbs.org/wgbh/nova/media/images/rosalind-franklin-legacy-01.width-990_hhC6A0z.jpg",
    email: 'rosalind.franklin@mentesbrilhantes.edu.br'
  },
  { 
    id: 11, 
    name: 'Dr. Albert Einstein', 
    role: 'Físico Teórico', 
    topics: ['Relatividade', 'Mecânica Quântica', 'Filosofia da Ciência'],
    bio: "Seus pensamentos mudaram nossa compreensão do espaço e do tempo.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/2/28/Albert_Einstein_Head_cleaned.jpg",
    email: 'albert.einstein@mentesbrilhantes.edu.br'
  },
  { 
    id: 12, 
    name: 'Profa. Zaha Hadid', 
    role: 'Arquiteta e Urbanista', 
    topics: ['Arquitetura Moderna', 'Design Paramétrico', 'Desenho Urbano'],
    bio: "Mestra em criar estruturas fluídas e futuristas que desafiam a geometria.",
    avatar: "https://www.casaedeleganza.it/wp-content/uploads/2025/11/ZAHA-HADID-ARCHITETTO-MILANO-MIAMI.jpg",
    email: 'zaha.hadid@mentesbrilhantes.edu.br'
  },
];

export const courses = [
  // Cursos de Tecnologia e Design (mantidos)
  {
    id: 'c1',
    title: 'Introdução à Programação',
    desc: 'Aprenda os fundamentos da lógica de programação e escreva seus primeiros códigos.',
    teacherId: 1, 
    day: 'Segunda-feira',
    time: '08:00 - 10:00',
    tag: 'Tecnologia',
    image: 'src/assets/programacao.png'
  },
  {
    id: 'c2',
    title: 'Os 10 Princípios do Bom Design',
    desc: 'Domine a filosofia do design minimalista, funcional e duradouro de Dieter Rams.',
    teacherId: 2, 
    day: 'Terça-feira',
    time: '14:00 - 16:00',
    tag: 'Design'
  },
  {
    // CURSO ATUALIZADO (Antigo c3 - Marketing Digital)
    id: 'c3',
    title: 'Liderança Autêntica e Coragem',
    desc: 'Pesquisa sobre como a vulnerabilidade e a coragem impactam a liderança e a cultura empresarial.',
    teacherId: 3, // Dra. Brené Brown
    day: 'Quarta-feira',
    time: '19:00 - 21:00',
    tag: 'Liderança'
  },
  {
    id: 'c4',
    title: 'Física Moderna e Quântica',
    desc: 'Explore as teorias de relatividade e o comportamento da matéria subatômica.',
    teacherId: 11, 
    day: 'Quinta-feira',
    time: '10:00 - 12:00',
    tag: 'Ciência'
  },
  {
    id: 'c5',
    title: 'Design Paramétrico em Arquitetura',
    desc: 'Use algoritmos para gerar formas complexas e inovadoras no design de edifícios.',
    teacherId: 12, 
    day: 'Sexta-feira',
    time: '14:00 - 17:00',
    tag: 'Design'
  },
  {
    id: 'c6',
    title: 'Fundamentos da Criptografia',
    desc: 'Entenda como funcionam os algoritmos de segurança de dados modernos.',
    teacherId: 1, 
    day: 'Segunda-feira',
    time: '19:00 - 21:00',
    tag: 'Tecnologia'
  },
  {
    // CURSO ATUALIZADO (Antigo c7 - Estratégias de Branding)
    id: 'c7',
    title: 'Construindo Equipes Corajosas',
    desc: 'Aplicação de princípios de vulnerabilidade para criar ambientes de trabalho mais inovadores e empáticos.',
    teacherId: 3, // Dra. Brené Brown
    day: 'Terça-feira',
    time: '10:00 - 12:00',
    tag: 'Comportamento'
  },
  {
    id: 'c8',
    title: 'Jornalismo Investigativo e Ética',
    desc: 'Técnicas de reportagem aprofundada, apuração de fatos e a coragem de expor a verdade.',
    teacherId: 6, 
    day: 'Quarta-feira',
    time: '15:00 - 17:00',
    tag: 'Mídia'
  },
  {
    id: 'c9',
    title: 'Biologia Molecular: O Código da Vida',
    desc: 'Análise da estrutura do DNA, RNA e síntese proteica.',
    teacherId: 10, 
    day: 'Quinta-feira',
    time: '08:00 - 10:00',
    tag: 'Ciência'
  },
  {
    // CURSO ATUALIZADO (Antigo c10 - Introdução à Astrofísica)
    id: 'c10',
    title: 'Cálculos de Trajetória Orbital',
    desc: 'Introdução à Geometria Analítica e Matemática aplicada a voos aeroespaciais e órbitas.',
    teacherId: 5, // Profa. Katherine Johnson
    day: 'Sexta-feira',
    time: '19:00 - 21:00',
    tag: 'Matemática'
  },
  {
    id: 'c11',
    title: 'Teste de Software e QA',
    desc: 'Aprenda metodologias para garantir a qualidade de software, desde unitários até integração.',
    teacherId: 8, 
    day: 'Segunda-feira',
    time: '14:00 - 16:00',
    tag: 'Tecnologia'
  },
  {
    id: 'c12',
    title: 'Análise de Algoritmos',
    desc: 'Medição da eficiência e complexidade temporal e espacial de diferentes algoritmos.',
    teacherId: 1, 
    day: 'Terça-feira',
    time: '08:00 - 10:00',
    tag: 'Tecnologia'
  },
  {
    id: 'c13',
    title: 'Gestão Estratégica e Inovação',
    desc: 'Aplique os fundamentos da administração moderna de Drucker para gerenciar a mudança e a inovação.',
    teacherId: 9, 
    day: 'Quarta-feira',
    time: '09:00 - 11:00',
    tag: 'Negócios'
  },
  {
    id: 'c14',
    title: 'Arquitetura do Kernel Linux',
    desc: 'Estudo aprofundado do design e implementação de sistemas operacionais baseados em Unix.',
    teacherId: 7, 
    day: 'Quinta-feira',
    time: '14:00 - 17:00',
    tag: 'Tecnologia'
  },
  {
    id: 'c15',
    title: 'Teoria da Relatividade',
    desc: 'Entenda os princípios da Relatividade Especial e Geral e sua importância para a cosmologia.',
    teacherId: 11, 
    day: 'Sexta-feira',
    time: '10:00 - 13:00',
    tag: 'Ciência'
  },
  {
    id: 'c16',
    title: 'Design de Interação e Estética Funcional',
    desc: 'Como aplicar a estética minimalista e funcionalidade em interfaces digitais.',
    teacherId: 2, 
    day: 'Segunda-feira',
    time: '16:00 - 18:00',
    tag: 'Design'
  },
  {
    id: 'c17',
    title: 'Química e Radioatividade',
    desc: 'Estudo da decomposição atômica, isótopos e aplicações práticas da radioatividade.',
    teacherId: 4, 
    day: 'Terça-feira',
    time: '19:00 - 21:00',
    tag: 'Ciência'
  },
  {
    id: 'c18',
    title: 'Programação Orientada a Objetos (POO)',
    desc: 'Dominando classes, herança e polimorfismo em linguagens modernas.',
    teacherId: 8, 
    day: 'Quarta-feira',
    time: '14:00 - 16:00',
    tag: 'Tecnologia'
  },
  {
    id: 'c19',
    title: 'Desenvolvimento Open Source e Colaboração (GIT)',
    desc: 'Melhores práticas para contribuição em projetos abertos e domínio da ferramenta Git.',
    teacherId: 7, 
    day: 'Quinta-feira',
    time: '19:00 - 21:00',
    tag: 'Tecnologia'
  },
  {
    // CURSO ATUALIZADO (Antigo c20 - Análise de Mídia Paga)
    id: 'c20',
    title: 'Navegação Aeroespacial e Geometria',
    desc: 'Fundamentos de geometria analítica e sistemas de coordenadas aplicados à navegação em missões espaciais.',
    teacherId: 5, // Profa. Katherine Johnson
    day: 'Sexta-feira',
    time: '08:00 - 10:00',
    tag: 'Matemática'
  },
  {
    id: 'c21',
    title: 'Desenho Urbano Sustentável',
    desc: 'Planejamento de cidades com foco em sustentabilidade, fluxo e estética moderna.',
    teacherId: 12, 
    day: 'Sábado',
    time: '10:00 - 13:00',
    tag: 'Arquitetura'
  },
];