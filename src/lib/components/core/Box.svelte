<script lang="ts">
	export let minWidth: string | undefined = '0';
	export let maxWidth: string | undefined = 'auto';
	export let backgroundColor: string | undefined = 'white';
</script>

<div style="display: flex; justify-content: center;">
	<div style="display: flex; border: solid; justify-content: space-between; padding: 0.7vw; border-radius: 15px; min-width: {minWidth}; max-width: {maxWidth}; justify-content: center; background-color: {backgroundColor}; border-width: 2.5px;">
		<slot></slot>
	</div>
</div>
