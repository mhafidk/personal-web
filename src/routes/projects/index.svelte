<script context="module">
	import { client } from '$lib/graphql-client';
	import { projectsQuery } from '$lib/graphql-queries';

	import ProjectCard from '$lib/components/project-card.svelte';

	export const load = async () => {
		const { projects } = await client.request(projectsQuery);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
	export let screenHeight = projects.length == 1 ? 'h-screen' : '';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="my-24 w-full {screenHeight}">
	<h1 class="text-4xl font-semibold text-lime-500">Projects.</h1>
	<div class="flex my-16 gap-x-8">
		<div class="w-full">
			<div class="flex flex-col gap-y-12">
				{#each projects as { name, slug, description, tags, demo, sourceCode, image }}
					<ProjectCard {name} {slug} {description} {tags} {demo} {sourceCode} {image} />
				{/each}
			</div>
		</div>
	</div>
</div>
