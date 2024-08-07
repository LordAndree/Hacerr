<script lang="ts">
	import Box from './core/Box.svelte';
	import { checklistStore } from '$lib/stores/checklistStore';
	import { get } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let id: string;
	export let subject: string;
	export let date: Date;
	export let description: string;
	export let importance_id: number;
	import option from '$lib/images/icons8-list-48.png';
	import edit from '$lib/images/icons8-edit-48.png';
	import remove from '$lib/images/icons8-garbage-48.png';
	import doneIcon from '$lib/images/icons8-tick-48.png';

	let smallButtonsContainer: HTMLElement;

	function showSmallButtons(): void {
		if (!smallButtonsContainer) return;

		if (smallButtonsContainer.style.display === "none" || smallButtonsContainer.style.display === "") {
			smallButtonsContainer.style.display = "flex";
		} else {
			smallButtonsContainer.style.display = "none";
		}
	}

	const newDate = new Date(date);

	const removeTask = async () => {
		const key = localStorage.getItem('key');
		if (!key) {
			console.error('Authorization key is missing');
			return;
		}

		try {
			const response = await fetch('http://127.0.0.1:8888/checklist/remove', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${key}`
				},
				body: JSON.stringify({ id })
			});

			if (!response.ok) {
				const error = await response.json();
				console.error('Failed to remove task', error);
				return;
			}

			const result = await response.json();
			console.log('Task removed successfully', result);

			const updatedData = get(checklistStore).filter(task => task.id !== id);
			checklistStore.set(updatedData);

			window.location.reload();
		} catch (error) {
			console.error('Error removing task', error);
		}
	};

	function getDayName(date: Date): string {
		const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return days[date.getDay()];
	}
</script>

<Box minWidth="49vw" backgroundColor="#E2E7FA">
	<div style="position: relative; display: flex; flex-direction: column; min-width: 100%;">
		<button class="top-right-button" on:click={showSmallButtons}>
			<img class="iconimg" src={option} alt="option">
		</button>
		<div class="small-buttons-container" bind:this={smallButtonsContainer}>
			<button class="small-button" on:click={() => goto(`/edittasknew?id=${id}&subject=${subject}&desc=${description}&cat=${importance_id}`)}>
				<img class="iconimg" src={edit} alt="edit">
			</button>
			<button class="small-button" on:click={removeTask}>
				<img class="iconimg" src={remove} alt="removetask">
			</button>
		</div>

		<div style="display: flex; flex-direction: row; justify-content: space-between; width: 90%;">
			<h4>{subject}</h4>
			<h6>{getDayName(newDate)}, {newDate.toLocaleDateString()} {newDate.toLocaleTimeString()}</h6>
		</div>
		<hr style="width: 100%; height: 2px; background-color: black;" />
		<p>{description}</p>
		<br>
		<div style="display: flex; justify-content: start;">
			<div class="taskcategory">
				{#if importance_id === 0}
					Urgent
				{:else if importance_id === 1}
					General
				{/if}
			</div>
		</div>
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
		top: 35px;
		right: 5px;
		flex-direction: column;
	}
	.small-button {
		margin-top: 5px;
		padding-left: -0;
	}
	.taskcategory {
		margin: 1%;
		padding: 2px;
		text-align: center;
		width: 100px;
		border-radius: 12vw;
		background-color: whitesmoke;
		/* border: solid; */
		border-width: 2px;
	}
</style>
