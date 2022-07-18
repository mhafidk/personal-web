<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status
			}
		};
	}
</script>

<script>
	export let status;
</script>

<svelte:head>
	<title>MHK — There's something wrong :(</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center items-center text-center p-8">
	<p class="text-lime-500 text-6xl md:text-9xl font-semibold mb-10 md:mb-16">{status}</p>
	{#if status == 404}
		<p class="text-neutral-900 text-4xl md:text-6xl font-semibold">Page not found :(</p>
	{:else if status == 500}
		<p class="text-neutral-900 text-4xl md:text-6xl font-semibold">Oops...</p>
		<p class="text-neutral-900 text-4xl md:text-6xl font-semibold mt-4">I made a mistake.</p>
	{:else}
		<p class="text-neutral-900 text-4xl md:text-6xl font-semibold">
			There's something wrong here...
		</p>
	{/if}
	<div class="mt-10 md:mt-16">
		<a
			href="/"
			class="bg-lime-500 hover:bg-lime-600 text-neutral-50 font-semibold text-lg md:text-2xl px-8 md:px-10 py-2 md:py-3 rounded-md"
			>Back home</a
		>
	</div>
</div>
