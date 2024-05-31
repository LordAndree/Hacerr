<script lang="ts">
	import Box from './core/Box.svelte';

	export let subject: string;
	export let date: Date;
	export let description: string;
	import edit from '$lib/images/icons8-list-48.png';
</script>

<Box minWidth="49vw" backgroundColor="#E2E7FA">
	<div style="position: relative; display: flex; flex-direction: column; min-width: 100%;">
		<button class="top-right-button">
			<img class="iconimg" src={edit} alt="edit">
		</button>
		<div style="display: flex; flex-direction: row; justify-content: space-between; width: 90%;">
			<h4>{subject}</h4>
			<h4>{date.toISOString()}</h4>
		</div>
		<hr style="width: 100%; height: 2px; background-color: black;" />
		<p>{description}</p>
	</div>
</Box>

<style>
	.top-right-button {
		position: absolute;
		top: 5px; /* Adjust as needed */
		right: 5px; /* Adjust as needed */
		justify-content: center;
		/* align-items: center; */
		/* background-color: #E2E7FA; Button background color */
		/* border: solid 1px #000; Button border */
		/* border-radius: 5px; Button border radius */
		padding-left: -0; /* Button padding */
		/* cursor: pointer; Change cursor to pointer */
		/* z-index: 1000; Ensure button is above other elements */
	}
</style>
