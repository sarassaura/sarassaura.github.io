import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readme = fs.readFileSync(`${__dirname}/../markdown/tattoo.md`, { encoding: 'utf-8' });

const videos = [...readme.matchAll(/^(https:\/\/github\.com.+$)/gm)];

videos.forEach((video) => {
	console.log(path.basename(video[1]));
});

https://github.com/sarassaura/tattoo/assets/141577271/e63f8c83-db41-4c5a-8633-b127344e4295 a.svelte:21:9
https://github.com/sarassaura/tattoo/assets/141577271/3ffb287c-77b6-47c0-9b9e-0f27e76350ab a.svelte:21:9
https://github.com/sarassaura/tattoo/assets/141577271/a6f2aad6-6090-410a-a1b6-506491dcf645 a.svelte:21:9


e81af3c7-7ba3-4e00-b03b-ea8c8bb2311c
6ef11f01-4600-4d0c-b2d2-36e251a2b7a1
ab0e73c5-0e4b-4bc5-9084-375503aaedd5