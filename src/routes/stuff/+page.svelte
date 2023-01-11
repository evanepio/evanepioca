<script lang="ts">
	import {auth, db} from "$lib/firebase";
	import FirebaseApp from "sveltefire/FirebaseApp.svelte";
	import User from "sveltefire/User.svelte";
	import {  signInAnonymously } from "firebase/auth";
	
</script>

<svelte:head>
	<title>Stuff</title>
	<meta name="description" content="Stuff" />
</svelte:head>

<div class="text-column">
	<h1>Stuff</h1>

	<FirebaseApp {auth} firestore={db}>
		<User let:user>
			Hello {user.uid}

			<div slot="signedOut">
				<p>You are signed out.</p>

				<button on:click={() => signInAnonymously(auth)}>Sign In </button>
			</div>
		</User>
	</FirebaseApp>
</div>
