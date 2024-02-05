<script lang-="ts">
	import EmailUs from '$lib/components/shared/EmailUs.svelte';
	import FindUs from '$lib/components/shared/FindUs.svelte';
	import { siteConstants } from '$lib/site-constants';
</script>

<svelte:head>
	<title>{siteConstants.businessName} - Contact</title>
	<meta name="" content="" />
</svelte:head>

<div class="container">
	<div class="contact-info">
		<FindUs />
	</div>

	<div class="email-section">
		<EmailUs />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.contact-info,
	.email-section {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 50rem;
	}

	// Responsive adjustments
	@media (max-width: 768px) {
		// Adjust breakpoint as needed
		.contact-info {
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
