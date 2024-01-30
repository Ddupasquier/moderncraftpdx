<script lang="ts">
	type PaletteColors = {
		[key: string]: string;
	};

	const paletteColors: PaletteColors = {
		offWhitePlum: '#EDE0ED',
		lightPlum: '#9C739C',
		darkPlum: '#5A345A',
		offWhiteOrange: '#FFF3E6',
		lightOrange: '#FFAA64',
		darkOrange: '#C75B12',
		lightSteel: '#d3dfe6',
		contrastMetal: '#24292c'
	};
</script>

<div class="palette">
	{#each Object.keys(paletteColors) as color}
		<div class="paletteItem" style="background-color: {paletteColors[color]}">
			<div class="paletteItemText">{color}</div>
			<div class="paletteItemText">{paletteColors[color]}</div>
		</div>
	{/each}
</div>

<style>
	.palette {
		display: flex;
		position: absolute;
		bottom: 0;
		right: 0;
		border-top: 5px double black;
		border-left: 5px double black;
		z-index: 1000;
	}

	.paletteItem {
		width: 115px;
		height: 75px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
