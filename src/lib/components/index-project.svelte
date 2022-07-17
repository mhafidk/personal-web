<script>
	import ExternalLink from '$lib/icons/link.svelte';
	import Git from '$lib/icons/git.svelte';
</script>

<div class="py-32">
	<div class="">
		<p class="text-5xl font-semibold text-lime-500">What I've built</p>
	</div>
	<div class="h-px w-full bg-neutral-900 mt-10" />
	<div class="mt-10 flex flex-col gap-y-14">
		<div class="flex flex-col md:flex-row gap-x-8 h-max lg:h-[32rem]">
			<div class="w-full md:w-1/2 h-full">
				<img src="/personal-web.webp" alt="" class="drop-shadow-lg object-contain h-full mx-auto" />
			</div>
			<div class="w-full md:w-1/2 mt-8 md:mt-0 flex items-center">
				<div class="">
					<p class="text-3xl font-semibold text-center md:text-left">Personal Site</p>
					<div class="flex gap-x-4 mt-4 justify-center md:justify-start">
						<p class="text-blue-500 font-semibold text-center">Svelte</p>
						<p class="text-blue-500 font-semibold text-center">Tailwind CSS</p>
						<p class="text-blue-500 font-semibold text-center">Graph CMS</p>
					</div>
					<p class="text-lg mt-4 md:mt-6 text-justify">
						My very own website and blog! NuxtJS site built with Tailwind CSS and Nuxt Content.
						Frontend is not my strong suit, but this site isn't that bad, right? I learnt a lot
						about frontend while making this site. A lot of new features will come out!
					</p>
					<div class="flex mt-8 gap-x-6 items-center justify-center md:justify-end">
						<a
							href="/projects"
							target="_blank"
							class="bg-lime-500 text-neutral-50 px-5 py-1 rounded-md hover:bg-lime-600"
						>
							Read more
						</a>
						<a href="https://mhafidk.com" target="_blank" class="">
							<ExternalLink />
						</a>
						<a href="https://mhafidk.com" target="_blank" class="">
							<Git />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-24 text-lg text-center">
		<a href="/projects" class="bg-lime-500 text-neutral-50 px-6 py-2 rounded-md hover:bg-lime-600"
			>See more projects</a
		>
	</div>
</div>
