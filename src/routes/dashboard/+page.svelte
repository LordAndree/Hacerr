<script lang="ts">
	import type { CheckLists } from '$lib';
	import Nav from '$lib/components/Nav.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import ButtonAdd from '$lib/components/core/ButtonAdd.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import img from '$lib/images/HOME ICON.png';
	import { onMount } from 'svelte';

	// let data: TaskObj[] = [
	// 	{
	// 		date: new Date(),
	// 		subject: 'anu',
	// 		description: 'anu'
	// 	},
	// 	{
	// 		date: new Date(),
	// 		subject: 'anu1',
	// 		description: 'anu1'
	// 	},
	// 	{
	// 		date: new Date(),
	// 		subject: 'anu1',
	// 		description: 'anu1'
	// 	},
	// 	{
	// 		date: new Date(),
	// 		subject: 'anu1',
	// 		description: 'anu1'
	// 	},
	// 	{
	// 		date: new Date(),
	// 		subject: 'anu1',
	// 		description: 'anu1'
	// 	}
	// ];

	let data: any = [];

	const endPoint = "http://127.0.0.1:8888/checklist"

	onMount(async () => {
		const key = localStorage.getItem('key');
		const dataReq = await fetch('http://127.0.0.1:8888/checklist', {
    		headers: {
        	'Authorization': `Basic ${key}`
    	}});

		data = (await dataReq.json()).data;
		const date = data.date as Date;

		data.date = date;
		
		// console.log(data)
	})
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<Nav></Nav>
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBar></SideBar>
			<span style="padding: 0.5vw;"></span>
			<TaskList {data}>
				<ButtonAdd href="/addtask" alias=""></ButtonAdd>
			</TaskList>
		</div>
	</div>
</Container>
