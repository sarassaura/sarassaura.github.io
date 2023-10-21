import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindcss_nesting from '@tailwindcss/nesting';

const config = {
	plugins: [
		tailwindcss_nesting(),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer()
	]
};

export default config;
