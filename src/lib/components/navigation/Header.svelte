<script>
	import { page } from '$app/stores';
	import HeaderItem from './HeaderItem.svelte';
	import { navItems } from './nav-items';
</script>

<header>
	<div>
		{#if $page.url.pathname !== '/'}
			<HeaderItem navItem={{ href: '/', text: 'Home' }} />
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
		background-color: var(--contrast-metal);
		padding: 0 20px;
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
		bottom: 0;
		left: 0;
		height: 2px;
		width: 100%;
		background: var(--light-orange);
	}
</style>
