<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
    import Container from "$lib/components/core/Container.svelte";
    import SideBarAdd from "$lib/components/SideBarAdd.svelte";
    import Box from "$lib/components/core/Box.svelte";
	import BoxAdd from "$lib/components/BoxAdd.svelte";

	let dateTime: string = '';
	let title: string = '';
	let description: string = '';
	let importance_id: number | null = null; // null means no importance selected
	let taskId: string = '';

	let step: number = 1;

	const nextStep = () => {
		step++;
	};

	const prevStep = () => {
		step--;
	};

	const loadTask = async () => {
		const key = localStorage.getItem('key');
		if (!key) {
			console.error('Authorization key is missing');
			return;
		}

		taskId = get(page).params.id;
		console.log('Loaded taskId:', taskId); // Debugging line

		if (!taskId) {
			console.error('Task ID is missing');
			return;
		}

		try {
			const response = await fetch(`http://127.0.0.1:8888/checklist/${taskId}`, {
				headers: {
					'Authorization': `Bearer ${key}`
				}
			});

			if (!response.ok) {
				const error = await response.json();
				console.error('Failed to fetch task', error);
				return;
			}

			const task = await response.json();
			dateTime = new Date(task.date).toISOString().substring(0, 16); // For datetime-local input
			title = task.subject;
			description = task.description;
			importance_id = task.importance_id;
		} catch (error) {
			console.error('Error fetching task:', error);
		}
	};

	onMount(loadTask);

	const submitTask = async () => {
		const key = localStorage.getItem('key');
		if (!key) {
			console.error('Authorization key is missing');
			return;
		}

		const taskData = {
			id: taskId,
			date: new Date(dateTime).toISOString(),
			subject: title,
			description,
			importance_id: importance_id,
		};

		console.log('Submitting task with data:', taskData);

		try {
			const response = await fetch('http://127.0.0.1:8888/checklist/edit', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${key}`
				},
				body: JSON.stringify(taskData)
			});

			if (!response.ok) {
				const error = await response.json();
				console.error('Failed to edit task', error);
				return;
			}

			const result = await response.json();
			console.log('Task edited successfully', result);
			goto('/success'); // Redirect to a success page or another page
		} catch (error) {
			console.error('Error submitting task', error);
		}
	};
</script>

{#if step === 1}
	<!-- Page 1: Input Date and Time -->
	<Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Edit Your Task</h1>
							</div>
							<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
								<BoxAdd>
									<h2>Edit Date</h2>
									<div style="display: flex;">
										<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
										<input type="datetime-local" bind:value={dateTime} placeholder={dateTime}>
										<button on:click={nextStep}>Next</button>
									</div>
								</BoxAdd>
							</div>        
						</div>
					</Box>
				</span>
			</div>
		</div>
	</Container>
{/if}

{#if step === 2}
	<!-- Page 2: Input Title -->
    <Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Edit Your Task</h1>
							</div>
							<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
								<BoxAdd>
									<h2>Edit Title</h2>
									<div style="justify-content: start;">
										<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
										<input type="text" bind:value={title} placeholder={title}>
										<br>
										<br>
										<button on:click={prevStep}>Back</button>
										<button on:click={nextStep}>Next</button>
									</div>
								</BoxAdd>
							</div>        
						</div>
					</Box>
				</span>
			</div>
		</div>
	</Container>
{/if}

{#if step === 3}
	<!-- Page 3: Input Description -->
    <Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Edit Your Task</h1>
							</div>
							<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
								<BoxAdd>
									<h2>Edit Description</h2>
									<div style="justify-content: start;">
										<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
										<input type="text" bind:value={description} placeholder={description}>
										<br>
										<br>
										<button on:click={prevStep}>Back</button>
										<button on:click={nextStep}>Next</button>
									</div>
								</BoxAdd>
							</div>        
						</div>
					</Box>
				</span>
			</div>
		</div>
	</Container>
{/if}

{#if step === 4}
	<!-- Page 4: Input Importance -->
    <Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Edit Your Task</h1>
							</div>
							<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
								<BoxAdd justifyContent="start">
									<h2>Choose Category</h2>
									<div style="justify-content: start;">
										<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
										<input type="radio" id="1" name="taskcategory" bind:group={importance_id} value={1}>
										<label for="1">General</label>
										<br>
										<input type="radio" id="0" name="taskcategory" bind:group={importance_id} value={0}>
										<label for="0">Urgent</label>
										<br>
										<br>
										<button on:click={prevStep}>Back</button>
										<button on:click={submitTask}>Submit</button>
									</div>
								</BoxAdd>
							</div>        
						</div>
					</Box>
				</span>
			</div>
		</div>
	</Container>
{/if}
