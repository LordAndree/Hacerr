<script>
	import Box from "./core/Box.svelte";
    export let task;

</script>

<div style="display: flex; flex-direction: column ;margin: 2%; border: solid; border-radius: 15px;">
    <h1>{task.judulTask}</h1>
    <hr>
    <p>{task.descTask}</p>
    <p>Status: {task.statusTask}</p>
    <p>Done ? : {task.doneTask}</p>
</div>