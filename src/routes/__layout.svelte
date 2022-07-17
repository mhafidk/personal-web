<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Navbar />
<main class="max-w-screen-xl mx-auto px-4 pt-4 text-neutral-900">
	<slot />
</main>
<Footer />
