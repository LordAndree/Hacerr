<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
    import Container from "$lib/components/core/Container.svelte";
    import SideBarAdd from "$lib/components/SideBarAdd.svelte";
    import Box from "$lib/components/core/Box.svelte";
	import BoxAdd from "$lib/components/BoxAdd.svelte";
    // import Box from '$lib/components/core/Box.svelte';
	// import SideBarAdd from "$lib/components/SideBarAdd.svelte";
	// import BoxAdd from "$lib/components/BoxAdd.svelte";
	import ButtonAdd from "$lib/components/core/ButtonAdd.svelte";
	import SideBarTest from "$lib/components/SideBarTest.svelte";
	import titleicon from '$lib/images/icons8-title-48.png';
	import dateicon from '$lib/images/icons8-date-48.png';
    import descicon from '$lib/images/icons8-bullet-list-48.png';
    import categoryicon from '$lib/images/icons8-category-48.png';
	import Button from '$lib/components/core/Button.svelte';
	import ButtonAddTask from '$lib/components/core/ButtonAddTask.svelte';

	let dateTime: string = '';
	let title: string = '';
	let description: string = '';
	let importance_id: number | null = null; // null means no importance selected
	let taskId: string = '';
    let user = { name: 'a', uname: '', passwd: '' };


	let step: number = 1;

	const nextStep = () => {
		step++;
	};

	const prevStep = () => {
		step--;
	};

	// const loadTask = async () => {
	// 	const key = localStorage.getItem('key');
	// 	if (!key) {
	// 		console.error('Authorization key is missing');
	// 		return;
	// 	}

	// 	taskId = get(page).params.id;
	// 	console.log('Loaded taskId:', taskId); // Debugging line

	// 	if (!taskId) {
	// 		console.error('Task ID is missing');
	// 		return;
	// 	}

	// 	try {
	// 		const response = await fetch(`http://127.0.0.1:8888/checklist/${taskId}`, {
	// 			headers: {
	// 				'Authorization': `Bearer ${key}`
	// 			}
	// 		});

	// 		if (!response.ok) {
	// 			const error = await response.json();
	// 			console.error('Failed to fetch task', error);
	// 			return;
	// 		}

	// 		const task = await response.json();
	// 		dateTime = new Date(task.date).toISOString().substring(0, 16); // For datetime-local input
	// 		title = task.subject;
	// 		description = task.description;
	// 		importance_id = task.importance_id;
	// 	} catch (error) {
	// 		console.error('Error fetching task:', error);
	// 	}
	// };

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
        taskId = urlParams.get("id")!!
		title = urlParams.get("subject")!!
		description = urlParams.get("desc")!!
		importance_id = Number(urlParams.get("cat")!!)
	});

	const submitTask = async () => {
        if(dateTime === '' || title === '' || description === '' || importance_id === null){
            window.alert("Masih ada field yang kosong");
            return
        }

		const key = localStorage.getItem('key');
		if (!key) {
			console.error('Authorization key is missing');
			return;
		}

		const urlParams = new URLSearchParams(window.location.search);
		const myParam = urlParams.get('id');

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
					'Authorization': `Basic ${key}`
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
			goto('/dashboard'); // Redirect to a success page or another page
		} catch (error) {
			console.error('Error submitting task', error);
		}
	};

	const defaultContent = `<span style="padding: 0.5vw;">
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
				</span>`

        const callback = () => {
            const id = document.getElementById("content");
            id?.insertAdjacentHTML('beforeend', defaultContent);
        }
</script>

<style>
    .icon{
    display: flex;
    justify-self: start;
    height: auto;
    width: 10px;
}
</style>

<Container>
    <div style="display: flex; flex-direction: column;">
        <span style="padding: .5vh;"></span>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <!-- <SideBarAdd></SideBarAdd> -->
             <SideBarTest name={user.name}>
                <div style="display: flex; align-items: center; flex-direction: column;">
                <Button alias="Date" href="/edittasknew" width="10vw" onclick={() => {step = 1}}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={dateicon} alt="date icon">
                    </div>
                </Button>
                <Button alias="Title" href="/edittasknew#title" width="10vw" onclick={() => step = 2}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={titleicon} alt="descicon">
                    </div>
                </Button>
                <Button alias="Description" href="/edittasknew#desc" width="10vw" onclick={() => step = 3}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={descicon} alt="descicon">
                    </div>
                </Button>
                <Button alias="Category" href="/edittasknew#category" width="10vw" onclick={() => step = 4}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={categoryicon} alt="categoryicon">
                    </div>
                </Button>
            </div>
             </SideBarTest>
             {#if step === 1}
             <span style="padding-left: .5vw;">
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
                                    <!-- <button on:click={nextStep}>Next</button> -->
                                </div>
                            </BoxAdd>
                        </div>        
                    </div>
                </Box>
            </span>
            {:else if step === 2}
            <span style="padding-left: 0.5vw;">
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
            {:else if step === 3}
            <span style="padding-left: 0.5vw;">
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
            {:else if step === 4}
            <span style="padding-left: 0.5vw;">
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
                                    <!-- <br>
                                    <br>
                                    <button on:click={prevStep}>Back</button>
                                    <button on:click={submitTask}>Submit</button> -->
                                    <div style="display: flex; justify-content: center; padding-top: 2vh;">
                                        <Button backgroundColor="#ffffff" alias="Submit" onclick={submitTask}></Button>
                                    </div>
                                </div>
                            </BoxAdd>
                        </div>        
                    </div>
                </Box>
            </span>

             {/if}
        </div>
    </div>
</Container>