<script>
	import Dash from '$lib/components/Dash.svelte';
	import List from '$lib/components/List.svelte';
import Nav from '$lib/components/Nav.svelte';
	import NavTest from '$lib/components/NavTest.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import Taskcard from '$lib/components/Taskcard.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import { onMount } from 'svelte';

	let tasks = [];

	// fungsi ambil data dari api
	async function fetchTasks(){
		try{
			const response = await fetch('https://api.com/tasks');
			const data = await response.json();

			// isi data dari api ke variable
			tasks = data;
		} catch (error) {
			console.error('Error fetchingg task data: ', error);
		}
	}

	onMount(() => {
		fetchTasks();
	});
</script>

<style>
	hr{
    width: 97%;
    background-color: black;
    height: 2px;
}
</style>

<Nav></Nav>
<!-- <div style="display: flex; align-items: end; border: solid;">
	<h1 style="justify-items: center;">Hacer</h1>
</div> -->
<!-- <div style="border: solid; justify-content: center; align-items: center; padding: 2%; margin: 2%;">
	<div style="display: flex; justify-content: center; width: 80%; border: solid;">
		<Sidebar></Sidebar>
		<List>
			<TaskList {tasks} />
		</List>
		
	</div>
</div> -->

<div style="display: flex; justify-content: center; align-items: center; padding: 2%; margin: 2%;">
	<div style="display: flex; justify-content: center; border: solid; width: 80%;">
		<Sidebar></Sidebar>
		<List>
			<TaskList {tasks} />
		</List>
	</div>
</div>


<NavTest></NavTest>
