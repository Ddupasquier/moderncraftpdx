<script>
	import { page } from '$app/stores';
	import HeaderItem from './HeaderItem.svelte';
	import { navItems } from './nav-items';

    export let index = null;

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header>
	<div class="brand">
		{#if $page.url.pathname !== '/'}
			<a class="home-link" href="/">ModernCraftPDX</a>
		{/if}
	</div>

	<button class="menu-toggle" on:click={toggleMenu}>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>

	<nav class={isMenuOpen ? 'active' : ''}>
		<ul>
			{#each navItems as item}
				<li aria-current={$page.url.pathname === item.href ? 'page' : undefined}>
					<HeaderItem navItem={item} />
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--contrast-metal);
		z-index: 1000;
	}

	.brand a {
		text-decoration: none;
		color: white;
		font-weight: bold;
		padding: 0 2rem;
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 0.25rem;
		background: none;
		border: none;
		cursor: pointer;
	}

	.bar {
		display: block;
		width: 25px;
		height: 3px;
		background-color: white;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		transition: transform 0.3s ease;
	}

	nav ul li {
		position: relative;
		padding: 1rem 0.5rem;
	}

	nav ul li[aria-current='page']::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 2px;
		width: 100%;
		background: var(--light-orange);
	}

	/* Mobile styles */
	@media (max-width: 850px) {
		.menu-toggle {
			display: flex;
		}

		header {
			padding: 1rem;
		}

		nav {
			position: fixed;
			top: -100%;
			right: 0;
			background: var(--contrast-metal);
			width: 100%;
			transform: translateY(45rem);
			transition: transform 0.3s ease;
			z-index: 999;
		}

		nav.active {
			transform: translateY(0);
		}

		nav ul {
			flex-direction: column;
			width: 100%;
		}

		nav ul li {
			text-align: center;
			width: 100%;
		}
	}
</style>
