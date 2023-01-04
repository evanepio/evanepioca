<script>
	import { page } from '$app/stores';
</script>

<header class="bg-blue-500 text-white font-extrabold uppercase relative flex flex-wrap items-center justify-between">
	<div class="text-xl">
		evanepio.ca
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="hover:opacity-75">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="hover:opacity-75">About</a>
			</li>
		</ul>
	</nav>

</header>

<style>

</style>
