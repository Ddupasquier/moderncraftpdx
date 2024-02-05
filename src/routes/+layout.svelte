<script>
	import { page } from '$app/stores';
	import AboveTheFold from '$lib/components/carousels/AboveTheFold.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import Palette from '$lib/components/palette/Palette.svelte';
	import Header from '../lib/components/navigation/Header.svelte';
	import MobileHeader from '../lib/components/navigation/MobileHeader.svelte';
	import './styles.css';

	let windowWidth = 0;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="app">
	<!-- <Palette /> -->
	{#if windowWidth > 768}
		<Header />
	{:else}
		<MobileHeader />
	{/if}

	{#if $page.url.pathname === '/'}
		<section class="above-the-fold">
			<AboveTheFold />
		</section>
	{/if}

	<main>
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

	.above-the-fold {
		background: transparent;
		border-bottom: 0.25rem solid var(--dark-plum);
		width: 100%;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 70rem;
		margin: 0 auto;
		padding: 2rem 5rem;
		box-sizing: border-box;

		@media (max-width: 768px) {
			padding: 2rem 3rem;
		}
	}
</style>
