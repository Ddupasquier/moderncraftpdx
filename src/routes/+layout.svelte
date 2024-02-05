<script>
	import Footer from '$lib/components/navigation/Footer.svelte';
	import Palette from '$lib/components/palette/Palette.svelte';
	import Header from '../lib/components/navigation/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Palette /> -->

	<main>
		<Header />
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
