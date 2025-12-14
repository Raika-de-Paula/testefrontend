//arquivo de dados dos professores e cursos
export const teachers = [
  { 
    id: 1, 
    name: 'Dr. Alan Turing', 
    role: 'Coordenador de Tecnologia', 
    topics: ['Algoritmos', 'IA', 'Segurança'],
    bio: "Pioneiro na ciência da computação, apaixonado por algoritmos e inteligência artificial.",
    avatar: "src/assets/garoto.png"
  },
  { 
    id: 2, 
    name: 'Profa. Ada Lovelace', 
    role: 'Diretora de Design', 
    topics: ['Design System', 'Tipografia'],
    bio: "Visionária que combina matemática e arte para criar experiências visuais únicas.",
    avatar: "src/assets/mulher.png"
  },
  { 
    id: 3, 
    name: 'Prof. Philip Kotler', 
    role: 'Head de Negócios', 
    topics: ['Marketing', 'Branding'],
    bio: "Especialista em estratégias de mercado e comportamento do consumidor.",
    avatar: "src/assets/homem1.png"
  },
];


export const courses = [
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
    title: 'Design Gráfico Fundamental',
    desc: 'Domine princípios do design visual, teoria das cores e tipografia.',
    teacherId: 2,
    day: 'Terça-feira',
    time: '14:00 - 16:00',
    tag: 'Design'
  },
  {
    id: 'c3',
    title: 'Marketing Digital',
    desc: 'Estratégias modernas para crescer marcas e negócios no ambiente online.',
    teacherId: 3,
    day: 'Quarta-feira',
    time: '19:00 - 21:00',
    tag: 'Negócios'
  },
];