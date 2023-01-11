<script lang="ts">
	import {auth, db, provider } from "$lib/firebase";
	import FirebaseApp from "sveltefire/FirebaseApp.svelte";
	import User from "sveltefire/User.svelte";
	import { signInWithPopup, signOut } from "firebase/auth";
	
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
				Hello {user.displayName} ({user.uid}).
			</p>

			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => signOut(auth)}>Sign Out</button>

			<div slot="signedOut">
				<p>You are signed out.</p>

				<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => signInWithPopup(auth, provider)}>Sign In</button>
			</div>
		</User>
	</FirebaseApp>
</div>
