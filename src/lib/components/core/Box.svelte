<script lang="ts">
    export let minWidth: string | undefined = '0'; 
</script>

<div style="display: flex; justify-content: center;">
	<div
		style="display: flex; border: solid; justify-content: space-between; padding: 0.7vw; border-radius: 15px; min-width: {minWidth}; justify-content: center;"
	>
		<slot></slot>
	</div>
</div>