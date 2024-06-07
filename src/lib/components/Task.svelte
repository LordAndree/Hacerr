<script lang="ts">
	import Box from './core/Box.svelte';
	import { goto } from '$app/navigation';
	import Modal from './core/Modal.svelte';

	export let subject: string;
	export let date: Date;
	export let description: string;
	import option from '$lib/images/icons8-list-48.png';
	import edit from '$lib/images/icons8-edit-48.png';
	import remove from '$lib/images/icons8-garbage-48.png';
	import done from '$lib/images/icons8-tick-48.png';

	let smallButtonsContainer: HTMLElement;

	function showSmallButtons(): void {
		if (!smallButtonsContainer) return;

		if (smallButtonsContainer.style.display === "none" || smallButtonsContainer.style.display === "") {
			smallButtonsContainer.style.display = "flex";
		} else {
			smallButtonsContainer.style.display = "none";
		}
	}

	function navigateTo(path: string): void {
		goto(path);
	}


	// import Modal from './Modal.svelte';
  	// import remove from 'path/to/remove/icon';  // Update path sesuai dengan lokasi file icon Anda

  	let showModal: boolean = false;

	function toggleModal(): void {
		showModal = !showModal;
	}
</script>

<Box minWidth="49vw" backgroundColor="#E2E7FA">
	<div style="position: relative; display: flex; flex-direction: column; min-width: 100%;">
		<button class="top-right-button" on:click={showSmallButtons}>
			<img class="iconimg" src={option} alt="option">
		</button>
		<div class="small-buttons-container" bind:this={smallButtonsContainer}>
			<button class="small-button" on:click={() => navigateTo('/edittask')}>
				<img class="iconimg" src={edit} alt="edit">
			</button>
			<button class="small-button" on:click={() => navigateTo('/removetask')}>
				<img class="iconimg" src={remove} alt="removetask">
			</button>
			{#if showModal}
				<Modal on:close={() => showModal = false} />
			{/if}
			<button class="small-button" on:click={() => navigateTo('/donetask')}>
				<img class="iconimg" src={done} alt="donetask">
			</button>
		</div>

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
		top: 5px; 
		right: 5px; 
		justify-content: center;
		padding-left: -0; 
	}
	.small-buttons-container {
		display: none;
		position: absolute;
		top: 35px; /* Adjusted to place below the main button */
		right: 5px;
		flex-direction: column;
	}

	.small-button {
		margin-top: 5px;
		padding-left: -0; 
	}
</style>