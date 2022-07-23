<script>
	import ProjectCard from '$lib/components/project-card.svelte';

	export let projects = [];
	export let hideSeeMoreButton = projects.length < 4 ? 'hidden' : '';
</script>

<div class="py-32">
	<div class="">
		<p class="text-5xl font-semibold text-lime-500">What I've built</p>
	</div>
	<div class="h-px w-full bg-neutral-900 mt-10" />
	<div class="mt-10 flex flex-col gap-y-14" />
	{#each projects as { name, slug, description, tags, demo, sourceCode, image }}
		<ProjectCard {name} {slug} {description} {tags} {demo} {sourceCode} {image} />
	{/each}
	<div class="mt-24 text-lg text-center {hideSeeMoreButton}">
		<a href="/projects" class="bg-lime-500 text-neutral-50 px-6 py-2 rounded-md hover:bg-lime-600"
			>See more projects</a
		>
	</div>
</div>
