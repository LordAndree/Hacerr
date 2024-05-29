<script lang="ts">
	import type { TaskObj } from "$lib";
	import Task from "./Task.svelte";
	import Box from "./core/Box.svelte";

    export let data: TaskObj[];
</script>
<Box>
    <div style="display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: flex-start;">
            <h1>You have todo...</h1>
        </div>
        <div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
            {#each data as d}
                <div style="padding: 10px 0 10px 0;">
                    <Task date={d.date} description={d.description} subject={d.subject}></Task>
                </div>
            {/each}
        </div>
    </div>
</Box>