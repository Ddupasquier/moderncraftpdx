<h2>EMAIL US:</h2>
<form action="#" method="POST">
	<input type="email" placeholder="Your email" required />
	<textarea placeholder="Your message" required></textarea>
	<button type="submit">Send Message</button>
</form>

<style lang="scss">
    h2 {
        font-weight: bold;
    }

	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		input,
		textarea {
			padding: 1rem;
			border: 1px solid #ccc;
			border-radius: 5px;
		}

		button {
			padding: 1rem;
			border: none;
			border-radius: 5px;
			background-color: var(--primary-button-color);
			color: #fff;
			width: 100%;
			cursor: pointer;
		}
	}
</style>
