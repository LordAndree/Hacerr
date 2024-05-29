<script lang="ts">
	import Box from './core/Box.svelte';

	export let subject: string;
	export let date: Date;
	export let description: string;
</script>

<Box minWidth="49vw">
	<div style="display: flex; flex-direction: column; min-width: 100%;">
		<div style="display: flex; flex-direction: row; justify-content: space-between;">
			<h4>{subject}</h4>
			<h4>{date.toISOString()}</h4>
		</div>
		<hr style="width: 100%; height: 2px; background-color: black;" />
		<p>{description}</p>
	</div>
</Box>
