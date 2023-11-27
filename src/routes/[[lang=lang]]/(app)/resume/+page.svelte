<script lang="ts">
	import Back from '$lib/components/back.svelte';
	import { Ripple } from '$lib/functions/ripple';
	import { LL, locale } from '$lib/i18n/i18n-svelte';
	import { throttle } from '$lib';
	import { CldImage } from 'svelte-cloudinary';
	import { Cloudinary } from '@cloudinary/url-gen';

	const cld = new Cloudinary({
		cloud: { cloudName: import.meta.env.VITE_PUBLIC_CLOUDINARY_CLOUD_NAME }
	});

	let wrapper: HTMLDivElement;
	let zoomer: HTMLImageElement;
	let eye: HTMLDivElement;
	let rect: DOMRect;

	const change = throttle((e: PointerEvent) => {
		zoomer = wrapper.firstElementChild as HTMLImageElement;
		eye = wrapper.lastElementChild as HTMLDivElement;
		rect = zoomer.getBoundingClientRect();

		let y = e.pageY - rect.y - window.scrollY - 125;
		let x = e.pageX - rect.x - window.scrollX - 125;
		let width = (wrapper.clientWidth - window.scrollX) * 2;
		let height = (wrapper.clientHeight - window.scrollY) * 2;
		let magic_x = rect.x - wrapper.clientWidth / 2 - (x + 125 - wrapper.clientWidth / 2);
		let magic_y = rect.y - wrapper.clientHeight / 2 - (y + 125 - wrapper.clientHeight / 2);

		eye.style.setProperty('--_top', y.toString() + 'px');
		eye.style.setProperty('--_left', x.toString() + 'px');
		eye.style.setProperty('--_x', magic_x.toString() + 'px');
		eye.style.setProperty('--_y', magic_y.toString() + 'px');
		eye.style.setProperty('--_width', width.toString() + 'px');
		eye.style.setProperty('--_height', height.toString() + 'px');
	}, 10);

	function resize() {
		let width = (wrapper.clientWidth - window.scrollX) * 2;
		let height = (wrapper.clientHeight - window.scrollY) * 2;

		eye.style.setProperty('--_width', width.toString() + 'px');
		eye.style.setProperty('--_height', height.toString() + 'px');
	}

	function out() {
		eye.style.setProperty('--_top', (10000).toString() + 'px');
		eye.style.setProperty('--_left', (10000).toString() + 'px');
	}
</script>

<div class="flex w-full justify-around py-4">
	<Back icon="mdi:arrow-left" link="/" />
	<a
		class="btn variant-filled but px-3 py-3"
		href={cld.image(`portfolio/resume-${$locale}`).quality('auto').addFlag('attachment').toURL()}
		download="sarah_nakada"
		on:click={Ripple}
	>
		<span class="break !ml-0 pl-1">{$LL.download()}&nbsp</span>PDF
		<iconify-icon icon="material-symbols:download-sharp" height="28" />
	</a>
</div>
<div
	class="wrapper"
	bind:this={wrapper}
	on:pointermove={change}
	on:resize={resize}
	on:pointerout={out}
>
	<CldImage
		src={`portfolio/resume-${$locale}`}
		alt="resume"
		class="imagine"
		height="100%"
		layout="fullWidth"
		priority={true}
	/>
	<div
		class="zooming"
		style={`background-image: url("${cld
			.image(`portfolio/resume-${$locale}`)
			.format('auto')
			.quality('auto')
			.toURL()}");`}
	/>
</div>
