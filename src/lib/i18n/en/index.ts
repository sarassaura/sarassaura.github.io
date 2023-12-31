import type { BaseTranslation } from '../i18n-types';

const en = {
	// Menu
	tabs: {
		about: 'About',
		skills: 'Skills',
		projects: 'Projects',
		'contact-me': 'Contact me'
	},
	// Config
	dark: 'Dark Mode',
	theme: 'Theme',
	color: 'Color',
	lang: 'Lang',
	reset: 'Reset',
	// About
	hi: 'Hi,',
	link: '{0}',
	presentation: "I'm Sarah,",
	subheading:
		"I am passionate about coding, I have a technical diploma in computing for the internet and I'm currently studying computer science.",
	resume: 'Resume',
	cta: 'Email me',
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
	name: {
		min: 'Name is required',
		max: 'Name must have less than 100 characters'
	},
	email: {
		valid: 'Email must be valid',
		min: 'Email must have more than 5 characters',
		max: 'Email must have less than 100 characters'
	},
	message: {
		min: 'Message is required',
		max: 'Message must have less than 1500 characters'
	},
	// info
	thanks: 'Thanks for contacting me!',
	messageSuccess: 'Message sent successfully',
	sorry: 'Sorry, something went wrong',
	messageError: 'Try sending me an email at sarahyukinonakada@gmail.com',
	sendMe: 'Send me a message',
	name2: 'Name',
	email2: 'Email',
	message2: 'Message',
	send: 'Send',
	info: 'Contact Info',
	brazil: 'Brazil',
	// Footer
	testimonials:
		'Sarah is a person committed to solving problems and I admire this ability in her, besides having high technical prowess, she possesses a lot of capability and professionalism.',
	cookie: 'Cookie Policy',
	copyright: '©sarassaura, 2023. All rights reserved.',
	privacy: 'Privacy Policy',
	// Go back
	back: 'Go back',
	download: 'Download',
	previous: 'Previous',
	next: 'Next',
	top: 'Back to Top',
	loading: 'Loading',
	github: 'Code on Github'
} satisfies BaseTranslation;

export default en;
