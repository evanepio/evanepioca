<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; 2023 Evan Porter</p>
	</footer>
</div>

<style>

</style>
