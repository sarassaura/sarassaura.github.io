// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			projects: {
				viewer: {
					pinnedItems: {
						totalCount: number;
						edges: Array<{
							node: {
								en: {
									text: string;
								};
								es: {
									text: string;
								};
								br: {
									text: string;
								};
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
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
