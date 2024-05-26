<script>
	import Box from "./core/Box.svelte";



</script>

<div style="flex-direction: row; width: 80%; border: solid; border-radius: 12px; margin: 1%;">
    <div  style="display: flex; flex-direction: column; align-items: center;">
        <h1>HACERR</h1>
        <div style="flex-direction: row;">
            <slot></slot>
        </div>
    </div>
</div>
