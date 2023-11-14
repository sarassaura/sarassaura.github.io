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
	email: 'Hablemos',
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
	nameMin: 'El nombre es obligatorio',
	nameMax: 'El nombre debe tener menos de 100 letras',
	emailValid: 'El email debe ser válido',
	emailMin: 'El email debe tener menos de 5 letras',
	emailMax: 'El email debe tener menos de 100 letras',
	messageMin: 'El mensaje es obligatorio',
	messageMax: 'El mensaje debe tener menos de 1500 letras',
	thanks: '¡Gracias, me comunicaré contigo lo antes posible!',
	messageSuccess: 'Mensaje enviado correctamente!',
	sorry: 'Huy! Algo salió mal',
	messageError: 'Intenta enviarme un email at sarahyukinonakada@gmail.com',
	sendMe: 'Envíeme un mensaje',
	name: 'Nombre',
	email2: 'Email',
	message: 'Mensaje',
	send: 'Enviar',
	info: 'Contactos',
	brazil: 'Brasil'
} satisfies BaseTranslation;

export default es;
