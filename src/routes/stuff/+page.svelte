<script lang="ts">
	import { auth, db, provider } from '$lib/firebase';
	import FirebaseApp from 'sveltefire/FirebaseApp.svelte';
	import User from 'sveltefire/User.svelte';
	import Collection from 'sveltefire/Collection.svelte'
	import { signInWithPopup, signOut } from 'firebase/auth';
</script>

<svelte:head>
	<title>Stuff</title>
	<meta name="description" content="Stuff" />
</svelte:head>

<div class="text-column">
	<h1>Stuff</h1>

	<FirebaseApp {auth} firestore={db}>
		<User let:user>
			<p>
				Hello, {user.displayName}!
			</p>

			<Collection ref="stuff" let:data let:count>
				<p class="italic m-2">Fetched {count} documents</p>
				
				<dl class="border-solid border-yellow-500 bg-yellow-500 border-4 rounded m-4 p-5">
				{#each data as post}
				  <dt class="font-bold">{post.suggested_date.toDate().toISOString()} - {post.title}</dt>
				  <dd class="ml-4">{post.summary}</dd>
				{/each}
			    </dl>
			</Collection>

			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={() => signOut(auth)}>Sign Out</button
			>

			<div slot="signedOut">
				<p>You are signed out.</p>

				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					on:click={() => signInWithPopup(auth, provider)}>Sign In</button
				>
			</div>
		</User>
	</FirebaseApp>
</div>
