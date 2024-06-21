<script lang="ts">
	import type { CheckLists } from '$lib';
	import Task from './Task.svelte';
	import Box from './core/Box.svelte';
	import ButtonAdd from '$lib/components/core/ButtonAdd.svelte';


	export let data: CheckLists[];
</script>

<Box>
	<div style="display: flex; flex-direction: column;">
		<div style="display: flex; justify-content: space-between;">
			<h1>You have todo...</h1>
			<ButtonAdd href="/addtask" alias=""></ButtonAdd>
		</div>
		<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
			{#each data as d}
				<div style="padding: 10px 0 10px 0;">
					<Task date={d.date} description={d.description} subject={d.subject}></Task>
				</div>
				{/each}
				<slot></slot>
			</div>
		</div>
</Box>
