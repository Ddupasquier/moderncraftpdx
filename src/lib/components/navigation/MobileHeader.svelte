<script>
	import { page } from '$app/stores';
	import { siteConstants } from '$lib/site-constants';
	import { slide } from 'svelte/transition';
	import { navItems } from './nav-items';
	import MobileHeaderItem from './MobileHeaderItem.svelte';

	let menuOpen = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="mobile-header">
	<div class="branding">
		{#if $page.url.pathname !== '/'}
			<a href="/" class="business-name">{siteConstants.businessName}</a>
		{/if}
	</div>
	<button class="menu-button" on:click={toggleMenu}>
		<span class="hamburger-icon">{menuOpen ? '✕' : '☰'}</span>
	</button>
	{#if menuOpen}
		<nav class="mobile-nav" in:slide>
			<ul>
				{#each navItems as item}
					<li aria-current={$page.url.pathname === item.href ? 'page' : undefined}>
						<MobileHeaderItem navItem={item} />
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<style>
	.mobile-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		background-color: var(--contrast-metal);
		height: var(--header-height);
		z-index: 1000;
	}

	.branding {
		display: flex;
		align-items: center;
	}

	.business-name {
		text-decoration: none;
		color: var(--light-steel);
		font-size: 1.5rem;
	}

	.menu-button {
		background: none;
		border: none;
		font-size: 2rem;
		color: var(--light-steel);
		margin-left: 1rem;
		cursor: pointer;
	}

	.hamburger-icon {
		display: block;
	}

	.mobile-nav {
		position: absolute;
		top: var(--header-height);
		left: 0;
		width: 100%;
		background-color: var(--contrast-metal);
	}

	.mobile-nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	.mobile-nav li {
		padding: .5rem 0;
	}
</style>
