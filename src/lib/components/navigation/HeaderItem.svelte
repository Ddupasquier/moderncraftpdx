<script lang="ts">
	import { slide } from 'svelte/transition';

	interface NavItemProps {
		href?: string;
		classList?: string;
		style?: string;
		text?: string;
		target?: string;
		rel?: string;
		title?: string;
		id?: string;
		dropdown?: boolean;
		dropdownItems?: Array<{ text: string; href: string }>;
	}

	export let navItem: NavItemProps;

	let dropdownVisible = false;
	let dropdownRef: HTMLButtonElement;

	const closeDropdown = () => {
		dropdownVisible = false;
	};

	const openDropdown = () => {
		dropdownVisible = true;
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			closeDropdown();
		}
	};
</script>

<svelte:window on:click={handleClickOutside} />

<div class="header-item">
	{#if navItem.dropdown}
		<button
			class="{navItem.classList} header-link {dropdownVisible ? 'active' : ''}"
			style={navItem.style}
			title={navItem.title}
			id={navItem.id}
			on:mouseenter={openDropdown}
			bind:this={dropdownRef}
		>
			{navItem.text}
			<span class="chevron">{dropdownVisible ? '▲' : '▼'}</span>
			{#if dropdownVisible && navItem.dropdownItems}
				<div class="dropdown" in:slide>
					<div class="dropdown-content">
						{#each navItem.dropdownItems as item}
							<a href={item.href}>{item.text}</a>
						{/each}
					</div>
				</div>
			{/if}
		</button>
	{:else}
		<a
			href={navItem.href}
			class="{navItem.classList} header-link"
			style={navItem.style}
			target={navItem.target}
			rel={navItem.rel}
			title={navItem.title}
			id={navItem.id}
		>
			{navItem.text}
		</a>
	{/if}
</div>

<style>
	.header-item {
		position: relative;
		display: inline-flex;
		align-items: center;
		text-align: center;
		cursor: pointer;
	}

	.header-link,
	.header-item button {
		background-color: transparent;
		border: none;
		color: white;
		padding: 0.3rem 1.25rem;
		font-size: 1.1rem;
		transition: background-color 0.3s ease;
		text-decoration: none;
		display: flex;
		align-items: center;
	}

	.chevron {
		margin-top: 0.5rem;
		margin-left: 0.3125rem;
		font-size: 0.5rem;
	}

	.dropdown {
		display: none;
		position: absolute;
		background-color: white;
		width: max-content;
		box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
		z-index: 1;
		top: var(--header-height);
		left: 0;
	}

	.header-item button.active .dropdown {
		display: block;
	}

	.dropdown-content {
		text-align: left;
	}

	.dropdown-content a {
		color: black;
		padding: 0.75rem 1rem;
		text-decoration: none;
		display: block;
		transition: background-color 0.3s ease;
	}

	.dropdown-content a:hover {
		background-color: #ddd;
	}
</style>
