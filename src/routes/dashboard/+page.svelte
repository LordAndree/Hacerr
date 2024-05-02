<script>
	import Nav from '$lib/components/Nav.svelte';
	import NavTest from '$lib/components/NavTest.svelte';
	import Sidebar from '$lib/components/core/Sidebar.svelte';
	import TaskCard from '$lib/components/core/TaskCard.svelte';
	import TaskList from '$lib/components/core/TaskList.svelte';

</script>
<style>
		.container1{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			/* border: solid; */
			border-radius: 1%;
			justify-self: center;
			margin: auto;
			width: 90%;
			background-color: #515173;
			padding: 1%;
		}
</style>

<h1 style="text-align: center; margin: 2%;">HACER</h1>

<div class="container1">
	<Sidebar></Sidebar>
	<TaskList>
	</TaskList>
</div>


