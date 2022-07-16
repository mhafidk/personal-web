<script context="module">
	import ProjectCard from '$lib/components/project-card.svelte';
	import IndexHero from '$lib/components/index-hero.svelte';
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
	export let projects;
	export let posts;
</script>

<svelte:head>
	<title>Muhammad Hafid K — That's me!</title>
</svelte:head>

<IndexHero />

<h1>Recent projects</h1>

<div class="">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>

<h1>Recent posts</h1>
<div class="">
	{#each posts as { title, slug, description }}
		<p>{title}, {slug}, {description}</p>
	{/each}
</div>
