<script lang="ts">
	import TeamMember from './TeamMember.svelte';
	import { teamMembers } from './team-members';

	export const fullWidth = true;

	const fullWidthStyle = fullWidth ? 'width: 100%' : null;
</script>

<!-- <h2>OUR TEAM:</h2> -->
<div class="team-section" style={fullWidthStyle}>
	{#each teamMembers as member}
		<TeamMember {member} />
	{/each}
</div>

<style>
	h2 {
		font-weight: bold;
	}

	.team-section {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		padding: 2rem;
	}
</style>
