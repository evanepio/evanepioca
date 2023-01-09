<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main class="p-4">
		<slot />
	</main>

	<footer class="p-2 bg-blue-500 text-white font-bold rounded-lg m-2">
		<p class="text-center">&copy; 2023 Evan Porter</p>
	</footer>
</div>
