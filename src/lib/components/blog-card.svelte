<script>
	export let title = '';
	export let slug = '';
	export let tags = [];
	export let description = '';
	export let coverImage = [];
</script>

<div class="h-96 bg-gray-50 drop-shadow-md rounded-md overflow-hidden">
	<div class="h-1/2 bg-lime-300">
		<a href={`/blog/${slug}`}>
			<img src={coverImage.url} alt={title} class="h-full w-full object-cover" />
		</a>
	</div>
	<div class="py-4 px-5">
		<a href={`/blog/${slug}`} class="text-2xl font-semibold hover:text-lime-500">{title}</a>
		<div class="flex gap-x-4 mt-1 text-sm">
			{#each tags as tag}
				<p class="text-blue-500">{tag}</p>
			{/each}
		</div>
		<p class="mt-1 text-justify line-clamp-4">
			{description}
		</p>
	</div>
</div>
