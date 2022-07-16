<script context="module">
	import { client } from '$lib/graphql-client';
	import { postQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { post } = await client.request(postQuery, variables);

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;

	const { title, date, tags, content, coverImage } = post;
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<h1>{title}</h1>
