<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main class="p-4">
		<slot />
	</main>

	<footer class="bg-blue-500 text-white font-bold">
		<p class="text-center">&copy; 2023 Evan Porter</p>
	</footer>
</div>

<style>

</style>
