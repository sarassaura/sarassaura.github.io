import { writable } from 'svelte/store';

export const scroll_dir = writable(false);

export function change(dir: boolean) {
    scroll_dir.set(dir);
}