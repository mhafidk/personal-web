<script context="module">
	import { client } from '$lib/graphql-client';
	import { postQuery } from '$lib/graphql-queries';
	import { formatDate } from '$lib/helper';
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
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="mt-12 mb-36">
	<div class="h-fit md:h-[30rem] w-fit md:w-full">
		<img
			src={post.coverImage.url}
			alt={post.title}
			class="h-full w-full object-contain md:object-cover"
		/>
	</div>
	<div class="mt-8 text-center">
		<h1 class="text-4xl md:text-5xl font-semibold">{post.title}</h1>
		<div class="h-0.5 w-12 mx-auto bg-neutral-900 my-5" />
		<p class="text-sm md:text-base">{formatDate(Date.parse(post.createdAt))}</p>
	</div>
	<article div class="prose prose-lg md:prose-xl mt-8">
		{@html marked(post.content)}
	</article>
</div>
