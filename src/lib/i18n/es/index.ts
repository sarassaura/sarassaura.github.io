import type { BaseTranslation } from '../i18n-types';

const es = {
	// Menu
	tabs: {
		about: 'Sobre',
		skills: 'Habilidad',
		projects: 'Proyectos',
		'contact-me': 'Contáctame'
	},
	// About
	hi: 'Hola',
	link: '/es{0}',
	presentation: 'soy Sarah,',
	subheading:
		'Me apasiona la codificación, tengo un diplomado técnico en informática para internet y estoy estudiando ciencias de la computación.',
	resume: 'Currículo',
	cta: 'Hablemos',
	// Skills
	frontendOne: 'Soy una programadora ',
	frontendTwo:
		' profesional con experiencia en varios frameworks, bibliotecas y servicios, especialmente React. Construyo sitios eficaces, accesibles y con SEO optimizado.',
	design:
		'El design es la clave para convertir usuarios en clientes. Usar espacios en blanco y jerarquía es la diferencia entre abrumador y atractivo.',
	backend:
		'El backend no es solo conectarse con la database, sino de garantizar el procesamiento y la seguridad de la data, gestionar requests y comunicarse con diferentes servicios.',
	// Projects
	projects: 'Proyectos',
	// Contact
	name: {
		min: 'El nombre es obligatorio',
		max: 'El nombre debe tener menos de 100 letras'
	},
	email: {
		valid: 'El email debe ser válido',
		min: 'El email debe tener menos de 5 letras',
		max: 'El email debe tener menos de 100 letras'
	},
	message: {
		min: 'El mensaje es obligatorio',
		max: 'El mensaje debe tener menos de 1500 letras'
	},
	// info
	thanks: '¡Gracias, me comunicaré contigo lo antes posible!',
	messageSuccess: 'Mensaje enviado correctamente!',
	sorry: 'Huy! Algo salió mal',
	messageError: 'Intenta enviarme un email at sarahyukinonakada@gmail.com',
	sendMe: 'Envíeme un mensaje',
	name2: 'Nombre',
	email2: 'Email',
	message2: 'Mensaje',
	send: 'Enviar',
	info: 'Contactos',
	brazil: 'Brasil'
} satisfies BaseTranslation;

export default es;
