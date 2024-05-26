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
.dummyTask{
	border: solid;
	border-radius: 12px;
	margin: 2%;
	width: 90%;
	padding: 2%;
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
<body>
	
	<div style="display: flex; justify-content: center; align-items: center; padding: 2%; margin: 2%;">
		<div style="display: flex; justify-content: center;  width: 80%;">
			<Sidebar></Sidebar>
			<List>
				<TaskList {tasks} />
				<!-- DUMMY TASKLIST UNTUK TESTING UI -->
				<div class="dummyTask">
					<h3>Metting dengan Client Google</h3>
					<hr>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nihil, odit modi nisi rerum laborum ducimus natus beatae officia qui maiores fugit illum eius pariatur nesciunt voluptas? Libero, optio recusandae.</p>
				</div>
				<div class="dummyTask">
					<h3>Makan Siang</h3>
					<hr>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nihil, odit modi nisi rerum laborum ducimus natus beatae officia qui maiores fugit illum eius pariatur nesciunt voluptas? Libero, optio recusandae.</p>
				</div>
				<div class="dummyTask">
					<h3>Mencuci Mobil</h3>
					<hr>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nihil, odit modi nisi rerum laborum ducimus natus beatae officia qui maiores fugit illum eius pariatur nesciunt voluptas? Libero, optio recusandae.</p>
				</div>
			</List>
		</div>
	</div>
</body>
<NavTest></NavTest>


