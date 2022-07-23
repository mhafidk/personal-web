<script>
	import { page } from '$app/stores';
	import { formatDate } from '$lib/helper';

	export let title = '';
	export let slug = '';
	export let tags = [];
	export let description = '';
	export let coverImage = [];
	export let createdAt = '';

	let currentPath = $page.url.pathname;
	export let cardHeight = currentPath == '/' ? 'md:h-64' : 'md:h-72';
</script>

<div
	class="flex flex-col md:flex-row bg-gray-50 drop-shadow-md rounded-md overflow-hidden h-96 {cardHeight}"
>
	<div class="h-1/2 md:h-full w-full md:w-1/3 bg-lime-300">
		<a href={`/blog/${slug}`}>
			<img src={coverImage.url} alt={title} class="h-full w-full object-cover" />
		</a>
	</div>
	<div class="w-full md:w-2/3 py-3 px-5 md:px-6 flex flex-col justify-center">
		<a href={`/blog/${slug}`} class="text-2xl md:text-3xl font-semibold hover:text-lime-500"
			>{title}</a
		>
		<p class="hidden md:block text-sm font-semibold mt-2">{formatDate(Date.parse(createdAt))}</p>
		<p class="mt-1 md:mt-3 text-justify line-clamp-4">
			{description}
		</p>
		<div class="flex gap-x-4 mt-2 md:mt-3 text-sm">
			{#each tags as tag}
				<p class="text-blue-500">{tag}</p>
			{/each}
		</div>
	</div>
</div>
