<script>
	import Box from "./core/Box.svelte";



</script>


<Box>
    <div  style="display: flex; flex-direction: column;">
        <h1>HACERR</h1>
        <div style="flex-direction: row;">
            <slot></slot>
        </div>
    </div>
</Box>