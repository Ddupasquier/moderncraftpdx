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
		background-color: #333;
		padding: 0 20px;
	}

	nav ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}

	nav li[aria-current='page']::after {
		content: '';
		display: block;
		height: 2px;
		width: 100%;
		background: #04aa6d;
	}
</style>
