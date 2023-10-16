import { writable } from 'svelte/store';

export const section = writable('bla');

export function change_id(id: string) {
	section.set(id);
}
