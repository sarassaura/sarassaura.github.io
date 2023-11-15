import type { BaseTranslation } from '../i18n-types';

const br = {
	// Menu
	tabs: {
		about: 'Sobre',
		skills: 'Habilidade',
		projects: 'Projetos',
		'contact-me': 'Contato'
	},
	// About
	hi: 'Oi,',
	link: '/br{0}',
	presentation: 'sou Sarah,',
	subheading:
		'Sou apaixonada por programação, tenho diploma técnico em informática para internet e atualmente estou cursando ciência da computação',
	resume: 'Currículo',
	cta: 'Fale Comigo',
	// Skills
	frontendOne: 'Sou uma desenvolvedora ',
	frontendTwo:
		' profissional com experiência em vários frameworks, bibliotecas e serviços, especialmente React. Eu faço sites rápidos, acessíveis e com SEO otimizado.',
	design:
		'Design é a chave para converter usuários em clientes. Usar hierarquia e espaços em branco é a diferença entre pesado e atraente.',
	backend:
		'A lógica de negócios não é apenas a conexão com o banco de dados, mas de garantir o processamento, segurança dos dados, solicitações e comunicar-se com diversos serviços.',
	// Projects
	projects: 'Projetos',
	// Contact
	name: {
		min: 'Nome é obrigatório',
		max: 'Nome deve ter menos que 100 letras'
	},
	email: {
		valid: 'Email deve ser válido',
		min: 'Email deve ter menos que 5 letras',
		max: 'Email deve ter menos que 100 letras'
	},
	message: {
		min: 'Mensagem é obrigatória',
		max: 'Mensagem deve ter menos que 1500 letras'
	},
	// info
	thanks: 'Obrigada, retornarei o quanto antes!',
	messageSuccess: 'Mensagem enviada com sucesso!',
	sorry: 'Oops, algo deu errado',
	messageError: 'Tente me mandar um email em sarahyukinonakada@gmail.com',
	sendMe: 'Mande uma mensagem',
	name2: 'Nome',
	email2: 'Email',
	message2: 'Mensagem',
	send: 'Enviar',
	info: 'Contatos',
	brazil: 'Brasil'
} satisfies BaseTranslation;

export default br;
