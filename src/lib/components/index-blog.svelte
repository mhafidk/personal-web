<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let posts;
	export let hideSeeMoreButton = posts.length < 4 ? 'hidden' : '';
</script>

<div class="py-32">
	<div class="">
		<p class="text-5xl font-semibold text-lime-500">What I've written</p>
	</div>
	<div class="h-px w-full bg-neutral-900 mt-10" />
	<div class="mt-10">
		<div class="grid grid-cols-1 gap-8">
			{#each posts as { title, slug, tags, description, coverImage, createdAt }}
				<BlogCard {title} {slug} {tags} {description} {coverImage} {createdAt} />
			{/each}
		</div>
	</div>
	<div class="mt-24 text-lg text-center {hideSeeMoreButton}">
		<a href="/blog" class="bg-lime-500 text-neutral-50 px-6 py-2 rounded-md hover:bg-lime-600"
			>See more posts</a
		>
	</div>
</div>
