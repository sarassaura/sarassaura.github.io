<script lang="ts">
	import About from './about.svelte';
	import Contact from './contact.svelte';
	import Projects from './projects.svelte';
	import Qualifications from './qualifications.svelte';
	import Skills from './skills.svelte';

	/** @type {import('./$types').PageData} */
	export let data: {
		data: {
			viewer: {
				pinnedItems: {
					totalCount: number;
					edges: Array<{
						node: {
							name: string;
							description: string;
							openGraphImageUrl: string;
							createdAt: string;
							homepageUrl: string;
							repositoryTopics: { totalCount: number; nodes: Array<{ topic: { name: string } }> };
						};
					}>;
				};
			};
		};
	};
</script>

<div class="content flex items-center flex-col">
	<About />
	<Skills />
	<Projects {data} />
	<Qualifications />
	<Contact />
</div>
