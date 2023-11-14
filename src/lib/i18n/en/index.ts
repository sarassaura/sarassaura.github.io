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
	projects: 'Projects'
} satisfies BaseTranslation;

export default en;
