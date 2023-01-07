<script lang="ts">
	import { page } from '$app/stores';

	const links: {name: string, url: string}[] = [
		{name: "Home", url: "/"},
		{name: "About", url: "/about"}
	];
</script>

<header class="bg-blue-500 text-white font-extrabold uppercase relative flex flex-wrap items-center justify-between rounded-lg m-2">
	<div class="px-3 py-2 text-xl w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
		evanepio.ca
	</div>
	<nav class="lg:flex flex-grow items-center">
		<ul class="flex flex-col lg:flex-row list-none ml-auto p-1">
			{#each links as link}
			<li aria-current={$page.url.pathname === link.url ? 'page' : undefined}>
				<a href="{link.url}" class="px-3 py-2 hover:opacity-75 flex items-center border-solid border-white border-2 m-1 rounded-lg lg:border-blue-500 lg:hover:border-white">{link.name}</a>
			</li>
			{/each}
		</ul>
	</nav>

</header>
