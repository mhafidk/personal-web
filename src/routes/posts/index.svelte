<script context="module">
	import { client } from '$lib/graphql-client';
	import { postsQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async () => {
		const { posts } = await client.request(postsQuery);

		return {
			props: {
				posts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Portfolio | Blog</title>
</svelte:head>

<div class="">
	{#each posts as { title, slug, coverImage, content }}
		<h1>{title}</h1>
		<img src={coverImage.url} alt="" />
		<a href={`/posts/${slug}`}>read more</a>
		<p>{content}</p>
	{/each}
</div>
