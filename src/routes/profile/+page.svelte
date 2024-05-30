<script lang="ts">
	import type { TaskObj } from '$lib';
	export let data: TaskObj[];
	export let name: string;
	export let password: string;
    import Box from '$lib/components/core/Box.svelte';
    import Nav from '$lib/components/Nav.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import ButtonAdd from '$lib/components/core/ButtonAdd.svelte';
	import Container from '$lib/components/core/Container.svelte';

</script>

<style>
	.container {
		display: flex;
		justify-content: space-between;
	}

	.tasks {
		display: flex;
		flex-direction: column;
		width: 70%;
	}

	.profile {
		display: flex;
		flex-direction: column;
		width: 30%;
		padding: 20px;
		border-left: 1px solid #ddd;
	}
</style>


<Container>
    <div style="display: flex; flex-direction: column;">
		<Nav></Nav>
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBar></SideBar>
			<span style="padding: 0.5vw;"></span>
			<TaskList {data}>
				<ButtonAdd href="/addtask" alias="+"></ButtonAdd>
			</TaskList>
		</div>
	</div>
</Container>
