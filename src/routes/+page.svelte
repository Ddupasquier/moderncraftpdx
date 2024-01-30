<script>
	import { siteConstants } from '$lib/site-constants';
</script>

<svelte:head>
	<title>{siteConstants.businessName}</title>
	<meta name="" content="" />
</svelte:head>

<section>
	<h1>{siteConstants.businessName}</h1>
</section>

<style>
	section {
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
