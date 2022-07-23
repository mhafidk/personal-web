<script>
	import { fly } from 'svelte/transition';

	let openNav = false;

	function toggleMenu() {
		openNav = !openNav;
	}
</script>

<nav class="flex justify-between pb-4 pt-8 items-center bg-white max-w-screen-xl mx-auto px-8">
	<a href="/" on:click={() => (openNav = false)}>
		<img src="/logo.webp" alt="MHK Logo" class="h-5" />
	</a>
	<div class="flex md:hidden flex-col gap-y-1 cursor-pointer" on:click={toggleMenu}>
		<span class="h-[0.2rem] w-8 bg-neutral-900" />
		<span class="h-[0.2rem] w-8 bg-neutral-900" />
		<span class="h-[0.2rem] w-8 bg-neutral-900" />
	</div>
	<div class="hidden md:flex gap-x-16 font-medium">
		<a href="/about" class="hover:text-lime-500">About</a>
		<a href="/blog" class="hover:text-lime-500">Blog</a>
		<a href="/projects" class="hover:text-lime-500">Projects</a>
		<a href="/#contact" class="hover:text-lime-500">Contact me!</a>
	</div>
</nav>

{#if openNav}
	<div
		class="py-4 text-center font-medium absolute bg-white w-full"
		transition:fly={{ y: -10, duration: 500 }}
	>
		<ul class="flex flex-col gap-y-6">
			<li>
				<a href="/about" class="hover:text-lime-500" on:click={toggleMenu}>About</a>
			</li>
			<li>
				<a href="/blog" class="hover:text-lime-500" on:click={toggleMenu}>Blog</a>
			</li>
			<li>
				<a href="/projects" class="hover:text-lime-500" on:click={toggleMenu}>Projects</a>
			</li>
			<li>
				<a href="/#contact" class="hover:text-lime-500" on:click={toggleMenu}>Contact me!</a>
			</li>
		</ul>
	</div>
{/if}
