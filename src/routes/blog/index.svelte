<script context="module">
	import { client } from '$lib/graphql-client';
	import { postsQuery } from '$lib/graphql-queries';

	import BlogCard from '$lib/components/blog-card.svelte';

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
	export let screenHeight = posts.length == 1 ? 'h-screen' : '';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="my-24 w-full {screenHeight}">
	<h1 class="text-4xl font-semibold text-lime-500">Blog.</h1>
	<div class="flex my-16 gap-x-8">
		<div class="w-full xl:w-3/4">
			<div class="flex flex-col gap-y-8">
				{#each posts as { title, slug, tags, description, coverImage, createdAt }}
					<BlogCard {title} {slug} {tags} {description} {coverImage} {createdAt} />
				{/each}
			</div>
		</div>
		<div class="hidden xl:block w-1/3 pl-6">
			<div class="text-right">
				<p class="text-2xl text-lime-500 font-semibold">Recent posts</p>
				<div class="mt-6 flex flex-col gap-y-2">
					{#each posts as { title, slug }}
						<a
							href={`/blog/${slug}`}
							class="text-lg font-semibold hover:text-lime-500 pr-4 border-r-4 border-lime-500"
							>{title}</a
						>
					{/each}
				</div>
			</div>
			<!-- TAGS NEXT -->
			<!-- <div class="text-right mt-16">
				<p class="text-2xl text-lime-500 font-semibold">Tags</p>
				<div class="mt-6 flex gap-x-2 justify-end">
					{#each posts as { title, slug }}
						<a
							href={`/blog/${slug}`}
							class="px-4 py-1.5 text-sm bg-lime-500 text-neutral-50 rounded-md">{title}</a
						>
					{/each}
				</div>
			</div> -->
		</div>
	</div>
</div>
