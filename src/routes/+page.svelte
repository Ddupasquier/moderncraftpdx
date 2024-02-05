<script>
	import AboveTheFold from '$lib/components/carousels/AboveTheFold.svelte';
	import TeamSection from '$lib/components/shared/team/TeamSection.svelte';
	import { siteConstants } from '$lib/site-constants';
</script>

<svelte:head>
	<title>{siteConstants.businessName}</title>
	<meta name="" content="" />
</svelte:head>

<section class="below-the-fold">
	<h1>{siteConstants.businessName}</h1>

	<TeamSection />
</section>

<style>
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
