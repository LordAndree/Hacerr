<script>
    import Taskcard from "./Taskcard.svelte";
    export let tasks = [];
</script>

<div>
    {#each tasks as task (task.id)}
        <Task {task} />
    {/each}
</div>