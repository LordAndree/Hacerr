<script lang="ts">
	import type { CheckLists } from '$lib';
	import Nav from '$lib/components/Nav.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import ButtonAdd from '$lib/components/core/ButtonAdd.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import { onMount } from 'svelte';
	import Box from '$lib/components/core/Box.svelte';
	import Task from '$lib/components/Task.svelte';
	import { checklistStore } from '$lib/stores/checklistStore';
	import { get } from 'svelte/store';
	import SideBarTest from '$lib/components/SideBarTest.svelte';
	import Button from '$lib/components/core/Button.svelte';
	import homeicon from '$lib/images/icons8-home-48.png';
	import profileicon from '$lib/images/icons8-user-48.png';

	import '../../lib/css/style.css';

	export let active = 'homeButton';

	type RetCheckList = {
		data: CheckLists[],
		httpCode: number,
		result: string
	}

	let data: CheckLists[] = [];
	let filteredData: CheckLists[] = [];
	let user = { name: 'a', uname: '', passwd: '' };
	let activeFilter = 'all'; // Menyimpan status filter aktif

	const endPoint = "http://127.0.0.1:8888/checklist";
	const endPointUser = "http://127.0.0.1:8888/user/profile";

	onMount(async () => {
		try {
			const key = localStorage.getItem('key');
			const response = await fetch(endPoint, {
				headers: {
					'Authorization': `Basic ${key}`
				}
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch: ${response.status}`);
			}

			const result = await response.json() as unknown as RetCheckList;
			data = result.data;

			// Set the data to the store
			checklistStore.set(data);

			// Initially, show all tasks sorted by date (latest first)
			sortAll();

		} catch (error) {
			console.error('Error fetching checklist:', error);
		}

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
			user = result.data; // Access user data from response

		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	});

	const checklistStoreData = get(checklistStore);

	$: {
		data = checklistStoreData;
	}

	function sortAll() {
		filteredData = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		activeFilter = 'all';
	}

	function sortGeneral() {
		filteredData = [...data]
			.filter(task => task.importanceId.id === 1)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		activeFilter = 'general';
	}

	function sortUrgent() {
		filteredData = [...data]
			.filter(task => task.importanceId.id === 0)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
		activeFilter = 'urgent';
	}
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBarTest name={user.name}>
				<div style="display: flex; flex-direction: column; align-items: center;">
					<Button alias="Home" href="/dashboard" width="10vw" backgroundColor={active === 'homeButton' ? '#FEE2BB' : '#D7DFF4'}>
						<div style="display: flex; align-items: center;">
							<img class="iconimg" src={homeicon} alt="homeicon">
						</div>
					</Button>
					<Button alias="Profile" href="/profile" width="10vw" backgroundColor={active === 'profileButton' ? '#FEE2BB' : '#D7DFF4'}>
						<div style="display: flex; align-items: center;">
							<img class="iconimg" src={profileicon} alt="profileicon">
						</div>
					</Button>
				</div>
			 </SideBarTest>
			<span style="padding: 0.5vw;"></span>
			<Box>
				<div style="display: flex; flex-direction: column;">
					<div style="display: flex; justify-content: space-between;">
						<h1>You have todo...</h1>
						<ButtonAdd href="/addtasknew" alias=""></ButtonAdd>
					</div>
					<div style="display: flex; justify-content: start;">
						<button class="buttonfilter" class:active={activeFilter === 'all'} on:click={sortAll}>All</button>
						<button class="buttonfilter" class:active={activeFilter === 'general'} on:click={sortGeneral}>General</button>
						<button class="buttonfilter" class:active={activeFilter === 'urgent'} on:click={sortUrgent}>Urgent</button>
					</div>
					<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
						{#each filteredData as d}
							<div style="padding: 10px 0 10px 0;">
								<Task id={d.id} date={d.date} description={d.description} subject={d.subject} importance_id={d.importanceId.id}></Task>
							</div>
						{/each}
					</div>
				</div>
			</Box>
		</div>
	</div>
</Container>

<style>
    :global(body) {
        background-color: #515173;
    }
	.buttonfilter {
		margin: 1%;
		padding: 3px;
		border-radius: 12vw;
		background-color: #E2E7FA;
		width: 100px;
	}
	.buttonfilter.active {
		background-color: #FEE2BB;
	}
</style>
