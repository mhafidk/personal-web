<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<main class="max-w-screen-2xl mx-auto p-4">
	<Navbar />
	<slot />
</main>
