//data/sampleData.js
export const teachers = [
  { 
    id: 1, 
    name: 'Dr. Alan Turing', 
    role: 'Coordenador de Tecnologia', 
    topics: ['Algoritmos', 'IA', 'Segurança', 'Teoria da Computação'],
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
    topics: ['Liderança Autêntica', 'Psicologia', 'Desenvolvimento Pessoal'],
    bio: "Pesquisadora e palestrante, focada na coragem, vergonha, vulnerabilidade e empatia no ambiente de trabalho.",
    avatar: "https://sextante.com.br/cdn/shop/files/Brene_Brown.png?v=1750191792&width=240",
    email: 'brene.brown@mentesbrilhantes.edu.br'
  },
  { 
    id: 4, 
    name: 'Dra. Marie Curie', 
    role: 'Coordenadora de Ciência', 
    topics: ['Física', 'Química', 'Método experimental', 'Radiotividade'],
    bio: "Dupla vencedora do Prêmio Nobel, focada em descobertas atômicas e radioatividade.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqhVMbaNlO29H1DM9YdXdu_7n62H61HTi4A&s",
    email: 'marie.curie@mentesbrilhantes.edu.br'
  },
  { 
    // NOVA PROFESSORA 2: Substituindo Carl Sagan (Astrofísica)
    id: 5, 
    name: 'Profa. Katherine Johnson', 
    role: 'Matemática da NASA', 
    topics: ['Cálculos Orbitais', 'Geometria Analítica', 'Engenharia Aeroespacial'],
    bio: "Matemática que calculou as trajetórias, janelas de lançamento e caminhos de retorno de muitos voos da NASA.",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg",
    email: 'katherine.johnson@mentesbrilhantes.edu.br'
  },
  { 
    id: 6, 
    name: 'Profa. Nellie Bly', 
    role: 'Pioneira do Jornalismo Investigativo', 
    topics: ['Reportagem', 'Escrita', 'Ética na Mídia', 'Jornalismo investigativo'],
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
    topics: ['Gestão Estratégica', 'Inovação', 'Empreendedorismo', 'Teoria administrativa'],
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
  {
    id: 'c1',
    title: 'Introdução à Programação',
    duration: '40 horas',
    desc: 'Aprenda os fundamentos da lógica de programação e escreva seus primeiros códigos.',
    teacherId: 1, 
    day: 'Segunda-feira',
    time: '08:00 - 10:00',
    tag: 'Tecnologia',
    image: "https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/01/GUIA-INTRODU%C3%87%C3%83O-PROGRAMA%C3%87%C3%83O.png",
    descDetail: "Este curso abrange a introdução ao pensamento computacional, lógica de programação e resolução de problemas. Os alunos aprenderão conceitos fundamentais como algoritmos, variáveis, estruturas condicionais e laços de repetição, desenvolvendo a base necessária para avançar em linguagens de programação modernas."
  },
  {
    id: 'c2',
    title: 'Os 10 Princípios do Bom Design',
    duration: '25 horas',
    desc: 'Domine a filosofia do design minimalista, funcional e duradouro de Dieter Rams.',
    teacherId: 2, 
    day: 'Terça-feira',
    time: '14:00 - 16:00',
    tag: 'Design',
    image: "https://img.freepik.com/vetores-gratis/design-grafico-em-letras-geometricas_23-2148470664.jpg?semt=ais_hybrid&w=740&q=80",
    descDetail: "O curso explora detalhadamente os dez princípios do bom design propostos por Dieter Rams, abordando funcionalidade, estética, clareza e sustentabilidade. Os estudantes analisarão produtos reais e aprenderão a aplicar esses conceitos em projetos de design físico e digital."

  },
  {
    id: 'c3',
    title: 'Liderança Autêntica e Coragem',
    duration: '30 horas',
    desc: 'Pesquisa sobre como a vulnerabilidade e a coragem impactam a liderança e a cultura empresarial.',
    teacherId: 3, 
    day: 'Quarta-feira',
    time: '19:00 - 21:00',
    tag: 'Liderança',
    image: "https://abrhes.org.br/wp-content/uploads/2025/07/03_foto-artigo.jpg",
    descDetail: "Este curso investiga como a vulnerabilidade, a empatia e a coragem influenciam a liderança moderna. Baseado em pesquisas científicas, aborda comunicação autêntica, construção de confiança e desenvolvimento de culturas organizacionais saudáveis."
  },
  {
    id: 'c4',
    title: 'Física Moderna e Quântica',
    duration: '60 horas',
    desc: 'Explore as teorias de relatividade e o comportamento da matéria subatômica.',
    teacherId: 11, 
    day: 'Quinta-feira',
    time: '10:00 - 12:00',
    tag: 'Ciência',
    descDetail: "Estudo aprofundado dos fundamentos da Física Moderna, incluindo Relatividade Especial, dualidade onda-partícula e princípios da Mecânica Quântica. O curso enfatiza a compreensão conceitual e suas aplicações tecnológicas e científicas.",
    image: "https://thumbs.dreamstime.com/b/estrutura-at%C3%B4mica-qu%C3%A2ntica-para-f%C3%ADsica-moderna-e-design-do-vetor-de-ci%C3%AAncia-generativa-ai-%C3%ADcone-vetorial-estilizado-uma-387426818.jpg"
  },
  {
    id: 'c5',
    title: 'Design Paramétrico em Arquitetura',
    duration: '50 horas',
    descDetail: "O curso apresenta o uso de algoritmos e ferramentas computacionais para a criação de formas arquitetônicas complexas. Os alunos aprenderão conceitos de design paramétrico aplicados à inovação, eficiência estrutural e estética contemporânea.",
    desc: 'Use algoritmos para gerar formas complexas e inovadoras no design de edifícios.',
    teacherId: 12, 
    day: 'Sexta-feira',
    time: '14:00 - 17:00',
    tag: 'Design',
    image: "https://static.vecteezy.com/ti/vetor-gratis/p1/11855508-ilustracao-de-icone-do-dos-desenhos-animados-da-paisagem-urbana-edificio-arquitetura-icone-conceito-isolado-premium-estilo-de-desenho-animado-plano-vetor.jpg"
  },
  {
    id: 'c6',
    title: 'Fundamentos da Criptografia',
    duration: '35 horas',
    desc: 'Entenda como funcionam os algoritmos de segurança de dados modernos.',
    descDetail: "Introdução aos princípios matemáticos e computacionais da criptografia moderna. Serão abordados algoritmos de criptografia simétrica e assimétrica, funções hash, assinaturas digitais e fundamentos da segurança da informação.",
    teacherId: 1, 
    day: 'Segunda-feira',
    time: '19:00 - 21:00',
    tag: 'Tecnologia',
    image: "https://kinsta.com/wp-content/uploads/2023/07/symmetric-encryption.jpg"
  },
  {
    id: 'c7',
    title: 'Construindo Equipes Corajosas',
    duration: '20 horas',
    desc: 'Aplicação de princípios de vulnerabilidade para criar ambientes de trabalho mais inovadores e empáticos.',
    descDetail: "Este curso aborda estratégias para criar ambientes de trabalho colaborativos e inovadores. A partir de conceitos de psicologia e liderança, os alunos aprenderão a promover confiança, engajamento e comunicação aberta em equipes.",
    teacherId: 3, 
    day: 'Terça-feira',
    time: '10:00 - 12:00',
    tag: 'Comportamento',
    image: "https://static.vecteezy.com/ti/vetor-gratis/p1/10181787-trabalho-em-equipe-resolver-problema-colaboracao-trabalhar-juntos-para-alcancar-sucesso-ajuda-comunidade-encontrar-solucoes-conceitos-empresarios-construir-equipe-e-conectar-elementos-quebra-cabeca-para-construir-uma-lampada-vetor.jpg"
  },
  {
    id: 'c8',
    title: 'Jornalismo Investigativo e Ética',
    duration: '45 horas',
    desc: 'Técnicas de reportagem aprofundada, apuração de fatos e a coragem de expor a verdade.',
    descDetail: "O curso explora técnicas de jornalismo investigativo, apuração rigorosa de fatos e ética profissional. Os estudantes aprenderão métodos de pesquisa, entrevistas e análise crítica de informações no contexto da mídia contemporânea.",
    teacherId: 6, 
    day: 'Quarta-feira',
    time: '15:00 - 17:00',
    tag: 'Mídia',
    image: "https://img.freepik.com/vetores-premium/banner-de-vista-superior-do-jornalismo-no-estilo-de-arte-linha_124507-4156.jpg"
  },
  {
    id: 'c9',
    title: 'Biologia Molecular: O Código da Vida',
    duration: '55 horas',
    desc: 'Análise da estrutura do DNA, RNA e síntese proteica.',
    descDetail: "Estudo da estrutura e função do DNA e RNA, mecanismos de replicação, transcrição e tradução genética. O curso fornece uma base sólida em biologia molecular aplicada à pesquisa científica e à biotecnologia.",
    teacherId: 10, 
    day: 'Quinta-feira',
    time: '08:00 - 10:00',
    tag: 'Ciência',
    image: "https://www.shutterstock.com/image-vector/man-biotechnology-young-guy-medical-600nw-2525602799.jpg"
  },
  {
    id: 'c10',
    title: 'Cálculos de Trajetória Orbital',
    duration: '80 horas',
    desc: 'Introdução à Geometria Analítica e Matemática aplicada a voos aeroespaciais e órbitas.',
    descDetail: "Introdução aos cálculos matemáticos utilizados na determinação de trajetórias orbitais. O curso aborda geometria analítica, sistemas de coordenadas e aplicações práticas em engenharia aeroespacial e missões espaciais.",
    teacherId: 5, 
    day: 'Sexta-feira',
    time: '19:00 - 21:00',
    tag: 'Matemática',
    image: "https://www.if.ufrgs.br/oei/solar/solar04/ss2.jpg"
  },
  {
    id: 'c11',
    title: 'Teste de Software e QA',
    duration: '30 horas',
    desc: 'Aprenda metodologias para garantir a qualidade de software, desde unitários até integração.',
    descDetail: "O curso apresenta metodologias e técnicas para garantir a qualidade de software. Inclui testes unitários, de integração e funcionais, além de práticas de automação e controle de qualidade no ciclo de desenvolvimento.",
    teacherId: 8, 
    day: 'Segunda-feira',
    time: '14:00 - 16:00',
    tag: 'Tecnologia',
    image: "https://sisnema.com.br/media/resize/1920x1920/blogpost/1867/5efe320ccb908.jpg"
  },
  {
    id: 'c12',
    title: 'Análise de Algoritmos',
    duration: '45 horas',
    desc: 'Medição da eficiência e complexidade temporal e espacial de diferentes algoritmos.',
    descDetail: "Estudo da eficiência de algoritmos por meio da análise de complexidade temporal e espacial. Os alunos aprenderão a comparar soluções computacionais e otimizar algoritmos para diferentes cenários.",
    teacherId: 1, 
    day: 'Terça-feira',
    time: '08:00 - 10:00',
    tag: 'Tecnologia',
    image: "https://oliveiraweb.com.br/wp-content/uploads/2025/01/699de060-bbe2-4bd9-9b63-fa90231877ce.jpg"
  },
  {
    id: 'c13',
    title: 'Gestão Estratégica e Inovação',
    duration: '40 horas',
    desc: 'Aplique os fundamentos da administração moderna de Drucker para gerenciar a mudança e a inovação.',
    descDetail: "O curso aborda os fundamentos da administração moderna, com foco em estratégia, inovação e tomada de decisão. Baseado nas ideias de Peter Drucker, explora gestão de mudanças e criação de valor organizacional.",
    teacherId: 9, 
    day: 'Quarta-feira',
    time: '09:00 - 11:00',
    tag: 'Negócios',
    image: "https://cdn.evg.gov.br/cursos/1398_EVG/imagem_curso_1398.png"
  },
  {
    id: 'c14',
    title: 'Arquitetura do Kernel Linux',
    duration: '100 horas',
    desc: 'Estudo aprofundado do design e implementação de sistemas operacionais baseados em Unix.',
    descDetail: "Curso avançado sobre a arquitetura interna do kernel Linux. Aborda gerenciamento de processos, memória, sistemas de arquivos e drivers, oferecendo uma visão profunda de sistemas operacionais baseados em Unix.",
    teacherId: 7, 
    day: 'Quinta-feira',
    time: '14:00 - 17:00',
    tag: 'Tecnologia',
    image: "https://blog.desdelinux.net/wp-content/uploads/2018/08/linux-kernel.jpg"
  },
  {
    id: 'c15',
    title: 'Teoria da Relatividade',
    duration: '35 horas',
    desc: 'Entenda os princípios da Relatividade Especial e Geral e sua importância para a cosmologia.',
    descDetail: "Introdução aos princípios da Relatividade Especial e Geral, explorando conceitos de espaço-tempo, gravidade e suas implicações na física moderna e na cosmologia.",
    teacherId: 11, 
    day: 'Sexta-feira',
    time: '10:00 - 13:00',
    tag: 'Ciência',
    image: "https://s4.static.brasilescola.uol.com.br/be/2023/10/teoria-relatividade-geral-espaco-tempo.jpg"
  },
  {
    id: 'c16',
    title: 'Design de Interação e Estética Funcional',
    duration: '25 horas',
    desc: 'Como aplicar a estética minimalista e funcionalidade em interfaces digitais.',
    descDetail: "Este curso explora a criação de interfaces digitais centradas no usuário, combinando estética minimalista e funcionalidade. Aborda princípios de usabilidade, acessibilidade e experiência do usuário.",
    teacherId: 2, 
    day: 'Segunda-feira',
    time: '16:00 - 18:00',
    tag: 'Design',
    image: "https://static.imasters.com.br/wp-content/uploads/2018/07/18105742/O-que-voce%CC%82-precisa-saber-sobre-o-Design-de-Interac%CC%A7a%CC%83o-.jpg"
  },
  {
    id: 'c17',
    title: 'Química e Radioatividade',
    duration: '40 horas',
    desc: 'Estudo da decomposição atômica, isótopos e aplicações práticas da radioatividade.',
    descDetail: "Estudo dos fenômenos da radioatividade, decaimento nuclear e propriedades dos isótopos. O curso destaca aplicações científicas, médicas e industriais, com base nas descobertas de Marie Curie.",
    teacherId: 4, 
    day: 'Terça-feira',
    time: '19:00 - 21:00',
    tag: 'Ciência',
    image: "https://media.istockphoto.com/id/936677778/pt/vetorial/danger-yellow-vector-signs-radiation-sign-biohazard-sign-toxic-sign.jpg?s=612x612&w=0&k=20&c=d7fi9GS3E6ke6Plg5y5lu5bS1Gs3Vo6uwP5E3zsGlB8="
  },
  {
    id: 'c18',
    title: 'Programação Orientada a Objetos (POO)',
    duration: '45 horas',
    desc: 'Dominando classes, herança e polimorfismo em linguagens modernas.',
    descDetail: "O curso apresenta os princípios da Programação Orientada a Objetos, incluindo classes, objetos, herança, encapsulamento e polimorfismo, aplicados ao desenvolvimento de software moderno.",
    teacherId: 8, 
    day: 'Quarta-feira',
    time: '14:00 - 16:00',
    tag: 'Tecnologia',
    image: "https://dojo.bylearn.com.br/wp-content/uploads/2020/09/dojo-7.png"
  },
  {
    id: 'c19',
    title: 'Desenvolvimento Open Source e Colaboração (GIT)',
    duration: '15 horas',
    desc: 'Melhores práticas para contribuição em projetos abertos e domínio da ferramenta Git.',
    descDetail: "Introdução às práticas de desenvolvimento colaborativo em projetos open source. O curso ensina versionamento com Git, fluxo de trabalho colaborativo e boas práticas de contribuição em comunidades de software.",
    teacherId: 7, 
    day: 'Quinta-feira',
    time: '19:00 - 21:00',
    tag: 'Tecnologia',
    image: "https://assets.dio.me/FYH0KJ-d0s5-t-uF2eE2JWMZqBVCD0rARZWOJGP1bC0/f:webp/q:80/L2FydGljbGVzL2NvdmVyLzFhYzJlZTkyLTk2ZTEtNGNhYi1hYjdlLTIxMmM0NzY3ZWRhMy5wbmc",
  },
  {
    id: 'c20',
    title: 'Navegação Aeroespacial e Geometria',
    duration: '70 horas',
    desc: 'Fundamentos de geometria analítica e sistemas de coordenadas aplicados à navegação em missões espaciais.',
    descDetail: "O curso aborda fundamentos de geometria analítica e sistemas de coordenadas aplicados à navegação aeroespacial. Enfatiza aplicações matemáticas em missões espaciais e engenharia de voo.",
    teacherId: 5, 
    day: 'Sexta-feira',
    time: '08:00 - 10:00',
    tag: 'Matemática',
    image: "https://profissoes.viacarreira.com/wp-content/uploads/2025/10/engenharia-aeroespacial-1024x576-1.webp"
  },
  {
    id: 'c21',
    title: 'Desenho Urbano Sustentável',
    duration: '50 horas',
    desc: 'Planejamento de cidades com foco em sustentabilidade, fluxo e estética moderna.',
    descDetail: "Estudo do planejamento urbano com foco em sustentabilidade, mobilidade e qualidade de vida. O curso analisa soluções arquitetônicas e urbanísticas para cidades modernas e resilientes.",
    teacherId: 12, 
    day: 'Sábado',
    time: '10:00 - 13:00',
    tag: 'Arquitetura',
    image: "https://img.freepik.com/vetores-gratis/mao-desenhada-fundo-do-conceito-de-ecologia_23-2148200288.jpg?semt=ais_hybrid&w=740&q=80"
  },
];