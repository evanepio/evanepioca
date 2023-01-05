<script>
	import { page } from '$app/stores';
</script>

<header class="bg-blue-500 text-white font-extrabold uppercase relative flex flex-wrap items-center justify-between rounded-lg m-2">
	<div class="px-3 py-2 text-xl w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
		evanepio.ca
	</div>
	<nav class="lg:flex flex-grow items-center">
		<ul class="flex flex-col lg:flex-row list-none ml-auto">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="px-3 py-2 hover:opacity-75 flex items-center">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="px-3 py-2 hover:opacity-75 flex items-center">About</a>
			</li>
		</ul>
	</nav>

</header>
