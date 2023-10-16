import { writable } from 'svelte/store';

export const scroll_dir = writable(false);

export function change_dir(dir: boolean) {
	scroll_dir.set(dir);
}
