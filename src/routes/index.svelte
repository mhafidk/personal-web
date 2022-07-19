<script context="module">
	import IndexHero from '$lib/components/index-hero.svelte';
	import IndexWork from '$lib/components/index-work.svelte';
	import IndexSkill from '$lib/components/index-skill.svelte';
	import IndexProject from '$lib/components/index-project.svelte';
	import IndexBlog from '$lib/components/index-blog.svelte';

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
<IndexWork />
<IndexSkill />
<IndexProject {projects} />
<IndexBlog {posts} />
