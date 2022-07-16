<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<main class="max-w-screen-xl mx-auto p-4">
	<Navbar />
	<slot />
	<Footer />
</main>
