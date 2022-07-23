<script>
	import ExternalLink from '$lib/icons/link.svelte';
	import Git from '$lib/icons/git.svelte';

	export let name = '';
	export let description = '';
	export let tags = [];
	export let demo = '';
	export let sourceCode = [];
	export let image = [];
</script>

<div class="flex flex-col md:flex-row gap-x-8 h-max lg:h-[32rem] justify-between">
	<div class="w-full md:w-fit h-full">
		<img src={image[0].url} alt={name} class="drop-shadow-lg object-contain h-full mx-auto" />
	</div>
	<div class="w-full md:w-1/2 mt-8 md:mt-0 flex items-center">
		<div class="">
			<div class="text-center md:text-left">
				<p class="text-3xl font-semibold text-center md:text-left hover:text-lime-500">{name}</p>
			</div>
			<div class="flex gap-x-4 mt-4 justify-center md:justify-start">
				{#each tags as tag}
					<p class="text-blue-500 font-semibold text-center text-sm">{tag}</p>
				{/each}
			</div>
			<p class="text-lg mt-4 text-justify">
				{description}
			</p>
			<div class="flex mt-8 gap-x-6 items-center justify-center md:justify-end">
				<a href={demo} target="_blank" class="">
					<ExternalLink />
				</a>
				<a href={sourceCode} target="_blank" class="">
					<Git />
				</a>
			</div>
		</div>
	</div>
</div>
