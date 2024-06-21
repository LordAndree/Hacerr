<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Container from "$lib/components/core/Container.svelte";
    import SideBar from '$lib/components/SideBar.svelte';
    import TaskList from '$lib/components/TaskList.svelte';
    import Box from '$lib/components/core/Box.svelte';
	import SideBarAdd from "$lib/components/SideBarAdd.svelte";
	import BoxAdd from "$lib/components/BoxAdd.svelte";
	import ButtonAdd from "$lib/components/core/ButtonAdd.svelte";

	let dateTime: string = '';
	let title: string = '';
	let description: string = '';
	let importance_id: number | null = null; // null means no importance selected

	let step: number = 1;

	const nextStep = () => {
		step++;
	};

	const prevStep = () => {
		step--;
	};

	const submitTask = async () => {
		const key = localStorage.getItem('key');
		if (!key) {
			console.error('Authorization key is missing');
			return;
		}

		const taskData = {
			date: new Date(dateTime).toISOString(),
			subject: title,
			description,
			importance_id,
		};

		console.log('Submitting task with data:', taskData);

		try {
			const response = await fetch('http://127.0.0.1:8888/checklist/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Basic ${key}`
				},
				body: JSON.stringify(taskData)
			});

			if (!response.ok) {
				const error = await response.json();
				console.error('Failed to add task', error);
				return;
			}

			const result = await response.json();
			console.log('Task added successfully', result);
			goto('/dashboard'); // Redirect to a success page or another page
		} catch (error) {
			console.error('Error submitting task', error);
		}
	};
</script>

{#if step === 1}
	<!-- Page 1: Input Date and Time -->
	<div>
		<!-- <h2>Enter Date and Time</h2>
		<input type="datetime-local" bind:value={dateTime} />
		<button on:click={nextStep}>Next</button> -->

		<Container>
			<div style="display: flex; flex-direction: column;">
				<span style="padding: 1vh;"></span>
				<div style="display: flex; flex-direction: row; justify-content: center;">
					<SideBarAdd></SideBarAdd>
					<span style="padding: 0.5vw;">
						<Box>
							<div style="display: flex; flex-direction: column; width: 1000px;">
								<div style="display: flex; justify-content: flex-start;">
									<h1>Create Your New Task</h1>
								</div>
								<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
										<BoxAdd>
											<h2>Add Date</h2>
											<div style="display: flex;">
												<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
												<input type="datetime-local" bind:value={dateTime}>
												<button on:click={nextStep}>Next</button>
											</div>
										</BoxAdd>
										<!-- <ButtonAdd></ButtonAdd> -->
								</div>        
							</div>
						</Box>
					</span>
				</div>
			</div>
		</Container>
	</div>
{/if}

{#if step === 2}
	<!-- Page 2: Input Title -->
	<!-- <div>
		<h2>Enter Title</h2>
		<input type="text" bind:value={title} />
		<button on:click={prevStep}>Back</button>
		<button on:click={nextStep}>Next</button>
	</div> -->

	<Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Create Your New Task</h1>
							</div>
							<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
									<BoxAdd>
										<h2>Add Title</h2>
										<div style="justify-content: start;">
											<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
											<input type="text" bind:value={title} placeholder="Task Title">
											<br>
											<br>
											<button on:click={prevStep}>Back</button>
											<button on:click={nextStep}>Next</button>
										</div>
									</BoxAdd>
									<!-- <ButtonAdd></ButtonAdd> -->
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
	<!-- <div>
		<h2>Enter Description</h2>
		<textarea bind:value={description}></textarea>
		<button on:click={prevStep}>Back</button>
		<button on:click={nextStep}>Next</button>
	</div> -->

	<Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Create Your New Task</h1>
							</div>
							<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
									<BoxAdd>
										<h2>Add Description</h2>
										<div style="justify-content: start;">
											<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
											<input type="text" placeholder="Your Task Description..." bind:value={description}>
											<br>
											<br>
											<button on:click={prevStep}>Back</button>
											<button on:click={nextStep}>Next</button>
										</div>
									</BoxAdd>
									<!-- <ButtonAdd></ButtonAdd> -->
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
	<!-- <div>
		<h2>Enter Importance</h2>
		<label>
			<input type="radio" bind:group={importance_id} value={1} />
			High Importance
		</label>
		<label>
			<input type="radio" bind:group={importance_id} value={0} />
			Low Importance
		</label>
		<button on:click={prevStep}>Back</button>
		<button on:click={submitTask}>Submit</button>
	</div> -->

	<Container>
		<div style="display: flex; flex-direction: column;">
			<span style="padding: 1vh;"></span>
			<div style="display: flex; flex-direction: row; justify-content: center;">
				<SideBarAdd></SideBarAdd>
				<span style="padding: 0.5vw;">
					<Box>
						<div style="display: flex; flex-direction: column; width: 1000px;">
							<div style="display: flex; justify-content: flex-start;">
								<h1>Create Your New Task</h1>
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
