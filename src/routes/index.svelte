<script context="module">
	import ProjectCard from '$lib/components/project-card.svelte';
	import IndexHero from '$lib/components/index-hero.svelte';
	import IndexWork from '$lib/components/index-work.svelte';
	import IndexSkill from '$lib/components/index-skill.svelte';
	import { client } from '$lib/graphql-client';
	import { postsQuery, projectsQuery } from '$lib/graphql-queries';

	export const load = async () => {
		const [postsReq, projectsReq] = await Promise.all([
			client.request(postsQuery),
			client.request(projectsQuery)
		]);

		const { posts } = postsReq;
		const { projects } = projectsReq;

		return {
			props: {
				posts,
				projects
			}
		};
	};
</script>

<script>
</script>

<svelte:head>
	<title>Muhammad Hafid K — That's me!</title>
</svelte:head>

<IndexHero />
<IndexWork />
<IndexSkill />
