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

	let data: CheckLists[] = [];
	// export let user = "";
	let user = { name: 'a', uname: '', passwd: '' };


	const endPoint = "http://127.0.0.1:8888/checklist";
	const endPointUser = "http://127.0.0.1:8888/user/profile";


	onMount(async () => {
		try {
			const key = localStorage.getItem('key');
			const response = await fetch(endPoint, {
				headers: {
					'Authorization': `Bearer ${key}`
				}
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch: ${response.status}`);
			}

			const result = await response.json();
			data = result.data.map((item: any) => ({
				...item,
				date: new Date(item.date), // Konversi string tanggal ke objek Date
				done: item.done || false // Tambahkan properti done
			}));

			// Set the data to the store
			checklistStore.set(data);

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
			user = result.data; // Akses data user dari respons

		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	});

	const checklistStoreData = get(checklistStore);

	$: {
		data = checklistStoreData;
	}
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<Nav></Nav>
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBar name={user.name}></SideBar>
			<span style="padding: 0.5vw;"></span>
			<Box>
				<div style="display: flex; flex-direction: column;">
					<div style="display: flex; justify-content: space-between;">
						<h1>You have todo...</h1>
						<ButtonAdd href="/addtask" alias=""></ButtonAdd>
					</div>
					<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
						{#each data as d}
							<div style="padding: 10px 0 10px 0;">
								<Task id={d.id} date={d.date} description={d.description} subject={d.subject} done={d.done}></Task>
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
</style>