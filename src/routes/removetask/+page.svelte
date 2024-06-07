<script lang="ts">
	import BoxAdd from "$lib/components/BoxAdd.svelte";
    import Box from "$lib/components/core/Box.svelte";
    import { goto } from '$app/navigation';


	function navigateTo(path: string): void {
		goto(path);
	}
</script>
<style>
    button{
        border: solid;
        border-width: 3px;
        width: 200px;
        height: 50px;
        border-radius: 12px;
    }
    .button-danger{
        background-color: red;
    }
</style>

<BoxAdd>
    <h1>Are you sure want to remove the task?</h1>
        <div style="display: flex; justify-content: space-between;">
            <div style="justify-content: end; align-content: end; margin-top: 2%;">
                <button class="button" on:click={() => navigateTo("/dashboard")}>Cancel</button>
                <button class="button-danger" on:click={() => navigateTo("/dashboard")}>Remove</button>
            </div>
            
        </div>
</BoxAdd>