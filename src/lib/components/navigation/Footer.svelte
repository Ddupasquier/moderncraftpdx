<script>
	// You can add script content here if needed
</script>

<footer class="footer">
	<div class="footer-section">
		<h2>FIND US</h2>
		<p>
			123 S Example St. Portland, OR 97239<br />
			503-555-1234<br />
			License #123456
		</p>
		<!-- <a href="/privacy-policy">Privacy Policy</a> | <a href="/resources">Resources</a> -->
	</div>
	<div class="map-section">
		<!-- You can embed a Google map here -->
	</div>
	<div class="footer-section">
		<h2>FOLLOW US:</h2>
		<div class="social-icons">
			<a href="https://facebook.com" class="social-icon">F</a>
			<!-- <a href="https://pinterest.com" class="social-icon">P</a> -->
			<a href="https://instagram.com" class="social-icon">I</a>
			<!-- <a href="https://twitter.com" class="social-icon">T</a> -->
            <a href="https://linkedin.com" class="social-icon">L</a>
		</div>
		<!-- <h2>HEAR FROM US</h2>
        <input type="email" placeholder="Enter your email to sign up for our newsletter..." /> -->
	</div>
</footer>

<style>
	.footer {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		padding: 20px;
		background-color: #333;
		color: white;
	}

	.footer-section {
		display: flex;
		flex-direction: column;
	}

	.footer-section h2 {
		margin: 0 0 10px 0;
	}

	.social-icons {
		display: flex;
		margin-bottom: 20px;
	}

	.social-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		margin-right: 10px;
		background-color: #555;
		text-decoration: none;
		color: white;
	}

	.footer-section p,
	.footer-section a {
		color: white;
		text-decoration: none;
	}

	.footer-section input[type='email'] {
		padding: 10px;
		margin-bottom: 20px;
	}

	.map-section {
		flex-grow: 1;
		/* Add styles for your map embed here */
	}
</style>
