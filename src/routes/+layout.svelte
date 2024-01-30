<script>
	import Palette from '$lib/components/palette/Palette.svelte';
	import Header from '../lib/components/navigation/Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Palette />
	
	<main>
		<Header />
		<slot />
	</main>

	<footer></footer>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
