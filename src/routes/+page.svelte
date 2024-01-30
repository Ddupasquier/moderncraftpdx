<script>
	import AboveTheFold from '$lib/components/carousels/AboveTheFold.svelte';
	import { siteConstants } from '$lib/site-constants';
</script>

<svelte:head>
	<title>{siteConstants.businessName}</title>
	<meta name="" content="" />
</svelte:head>

<section class="above-the-fold">
	<AboveTheFold />
</section>

<section class="below-the-fold">
	<h1>{siteConstants.businessName}</h1>
</section>

<style>
	.above-the-fold {
		background: transparent;
		border-bottom: .25rem solid var(--dark-plum);
		width: 100%;
	}

	.below-the-fold {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
