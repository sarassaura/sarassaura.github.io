// place files you want to import through the `$lib` alias in this folder.
import Hero from './components/hero.svelte';
import Navbar from './components/navbar.svelte';
import Footer from './components/footer.svelte';
import Tabs from './components/tabs.svelte';
import Logo from './components/logo.svelte';
import Burguer from './components/burguer.svelte';
import Menu from './components/menu.svelte';
import HamburguerIcon from './components/hamburguer_icon.svelte';
import ShowOff from './components/showoff.svelte';
import Utilities from './components/utilities.svelte';
import { throttle } from './functions/throttle';
import { change_id, section } from './store/section';
import { change, unchange } from './functions/tabs';

export {
	Hero,
	Navbar,
	Footer,
	Tabs,
	Logo,
	Burguer,
	Menu,
	HamburguerIcon,
	ShowOff,
	Utilities,
	throttle,
	change_id,
	section,
	change,
	unchange
};
