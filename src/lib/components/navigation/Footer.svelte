<script>
	import { siteConstants } from '$lib/site-constants';
	import FindUs from '../shared/FindUs.svelte';
	import FollowUs from '../shared/FollowUs.svelte';
</script>

<footer class="footer">
	<div class="footer-section">
		<FindUs />
	</div>
	<div class="map-section">
		<!-- You can embed a Google map here -->
	</div>
	<div class="footer-section">
		<FollowUs />
	</div>
</footer>

<style lang="scss">
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #333;
		color: white;
		gap: 20px;
	}

	.footer-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.map-section {
		width: 100%;
	}

	/* Larger screens */
	@media (min-width: 768px) {
		.footer {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}

		.footer-section {
			align-items: flex-start;
			text-align: left;
		}

		.map-section {
			flex-grow: 1;
			max-width: 600px;
		}
	}
</style>
