<script>
	import { page } from '$app/stores';
	import { siteConstants } from '$lib/site-constants';
	import HeaderItem from './HeaderItem.svelte';
	import { navItems } from './nav-items';
</script>

<header>
	<div>
		{#if $page.url.pathname !== '/'}
			<HeaderItem navItem={{ href: '/', text: siteConstants.businessName }} />
		{/if}
	</div>

	<nav>
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
		height: var(--header-height);
		z-index: 1000;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}

	nav li {
		position: relative;
		padding-bottom: 2px;
	}

	nav li[aria-current='page']::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 0;
		height: 2px;
		width: 100%;
		background: var(--light-orange);
	}
</style>
