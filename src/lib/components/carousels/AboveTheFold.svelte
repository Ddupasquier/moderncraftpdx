<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import Bath from '$lib/images/bathroom-stock.jpg'; // Make sure these paths are correct
	import Sanding from '$lib/images/sanding-stock.jpg';

	let currentSlide = 0;
	let slideInterval: ReturnType<typeof setTimeout>; // Correct typing for the timeout ID

	const slides = [
		{
			id: 0,
			image: Bath,
			slogan: 'Crafting Your Space, Building Your Dreams.'
		},
		{
			id: 1,
			image: Sanding,
			slogan: 'Turning Visions into Reality, One Home at a Time.'
		}
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function switchSlide() {
		nextSlide();
		setSlideInterval();
	}

	function setSlideInterval() {
		const interval = currentSlide === 0 ? 5000 : 15000;
		clearTimeout(slideInterval);
		slideInterval = setTimeout(switchSlide, interval);
	}

	onMount(() => {
		setSlideInterval();
	});

	onDestroy(() => {
		clearTimeout(slideInterval);
	});
</script>

<div class="carousel">
	{#each slides as slide (slide.id)}
		<div
			class="slide"
			class:active={slide.id === currentSlide}
			style="background-image: url({slide.image});"
		>
			<div class="slogan-bg">
				<div class="slogan">
					{slide.slogan}
				</div>
			</div>
		</div>
	{/each}
	<div class="dots">
		{#each slides as slide, index (slide.id)}
			<button
				class="dot {index === currentSlide ? 'active' : ''}"
				on:click={() => {
					currentSlide = index;
					setSlideInterval();
				}}
				aria-label={`Go to slide ${index + 1}`}
			></button>
		{/each}
	</div>
</div>

<style>
	.carousel {
		position: relative;
		height: 100vh;
		overflow: hidden;
	}

	.slide {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		transition: opacity 0.5s ease;
		opacity: 0;
	}

	.slide.active {
		opacity: 1;
	}

	.slogan-bg {
		position: relative;
		height: 100%;
		background: linear-gradient(to top left, var(--off-black-plum), transparent);
		padding: 1rem;
	}

	.slogan {
		position: absolute;
		bottom: 8rem;
		right: 3rem;
		max-width: 50%;
		color: white;
		font-size: 2rem;
		font-family: var(--font-heading);
	}

	.dots {
		position: absolute;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
	}

	.dot {
		height: 15px;
		width: 15px;
		margin: 0 5px;
		background-color: #bbb;
		border-radius: 50%;
		border: rgb(255, 255, 255) solid 1px;
		display: inline-block;
		transition: background-color 0.3s ease;
	}

	.dot.active {
		background-color: #ffffff;
	}
</style>
