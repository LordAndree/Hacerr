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
	import SideBarTest from "$lib/components/SideBarTest.svelte"
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
	let step: number = 1;
	let user = { name: 'a', uname: '', passwd: '' };

	const endPointUser = "http://127.0.0.1:8888/user/profile";
	const nextStep = () => {
		step++;
	};

	const prevStep = () => {
		step--;
	};

	onMount(async () => {
		try {
			const key = localStorage.getItem('key');
			const response = await fetch(endPointUser, {
				headers: {
					'Authorization': `Basic ${key}`
				}
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch user data: ${response.status}`);
			}

			const result = await response.json();
			user = result.data; // Akses data user dari respons

		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	})

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

    const defaultContent = `<span style="padding: 0.5vw;">
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
                <Button alias="Date" href="/addtasknew" width="10vw" onclick={() => {step = 1}}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={dateicon} alt="date icon">
                    </div>
                </Button>
                <Button alias="Title" href="/addtasknew#title" width="10vw" onclick={() => step = 2}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={titleicon} alt="descicon">
                    </div>
                </Button>
                <Button alias="Description" href="/addtasknew#desc" width="10vw" onclick={() => step = 3}>
                    <div style="display: flex; align-items: center;">
                        <img class="iconimg" src={descicon} alt="descicon">
                    </div>
                </Button>
                <Button alias="Category" href="/addtasknew#category" width="10vw" onclick={() => step = 4}>
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
                            <h1>Create Your New Task</h1>
                        </div>
                        <div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
                                <BoxAdd>
                                    <h2>Add Date</h2>
                                    <div style="display: flex;">
                                        <hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
                                        <input type="datetime-local" bind:value={dateTime}>
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
                            <h1>Create Your New Task</h1>
                        </div>
                        <div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
                                <BoxAdd>
                                    <h2>Add Title</h2>
                                    <div style="justify-content: start;">
                                        <hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
                                        <input type="text" bind:value={title} placeholder="Task Title">
                                        <!-- <br>
                                        <br>
                                        <button on:click={prevStep}>Back</button>
                                        <button on:click={nextStep}>Next</button> -->
                                    </div>
                                </BoxAdd>
                                <!-- <ButtonAdd></ButtonAdd> -->
                        </div>        
                    </div>
                </Box>
            </span>
            {:else if step === 3}
            <span style="padding-left: 0.5vw;">
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
                                        <!-- <br>
                                        <br>
                                        <button on:click={prevStep}>Back</button>
                                        <button on:click={nextStep}>Next</button> -->
                                    </div>
                                </BoxAdd>
                                <!-- <ButtonAdd></ButtonAdd> -->
                        </div>        
                    </div>
                </Box>
            </span>
            {:else if step === 4}
            <span style="padding-left: 0.5vw;">
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
                                        <!-- <br>
                                        <br>
                                        <button on:click={prevStep}>Back</button>
                                        <button on:click={submitTask}>Submit</button> -->
                                    </div>
                                    <div style="display: flex; justify-content: center; padding-top: 2vh;">
                                        <Button backgroundColor="#ffffff" alias="Submit" onclick={submitTask}></Button>
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