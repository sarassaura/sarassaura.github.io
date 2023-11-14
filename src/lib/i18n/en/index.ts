import type { BaseTranslation } from '../i18n-types';

const en = {
	// Menu
	tabs: {
		about: 'About',
		skills: 'Skills',
		projects: 'Projects',
		'contact-me': 'Contact me'
	},
	// About
	hi: 'Hi,',
	link: '{0}',
	presentation: "I'm Sarah,",
	subheading:
		"I am passionate about coding, I have a technical diploma in computing for the internet and I'm currently studying computer science.",
	resume: 'Resume',
	email: 'Email me',
	// Skills
	frontendOne: "I'm a professional ",
	frontendTwo:
		' developer with expertise across various frameworks, libraries, and services, especially React. I build performing, accessible and seo friendly websites.',
	design:
		'Design is the key to converting users into clients. Using white space and hierarchy is the difference between overwhelming and appealing.',
	backend:
		"Business logic isn't just about connecting with the database, but about ensuring processing and data security, manage requests, and comunicate with different services.",
	// Projects
	projects: 'Projects',
	// Contact
	nameMin: 'Name is required',
	nameMax: 'Name must have less than 100 characters',
	emailValid: 'Email must be valid',
	emailMin: 'Email must have more than 5 characters',
	emailMax: 'Email must have less than 100 characters',
	messageMin: 'Message is required',
	messageMax: 'Message must have less than 1500 characters',
	thanks: 'Thanks for contacting me!',
	messageSuccess: 'Message sent successfully',
	sorry: 'Sorry, something went wrong',
	messageError: 'Try sending me an email at sarahyukinonakada@gmail.com',
	sendMe: 'Send me a message',
	name: 'Name',
	email2: 'Email',
	message: 'Message',
	send: 'Send',
	info: 'Contact Info',
	brazil: 'Brazil'
} satisfies BaseTranslation;

export default en;
