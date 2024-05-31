<script lang="ts">
	export let minWidth: string | undefined = '80%';
    export let justifyContent: string | undefined = 'center';

</script>

<div style="display: flex; justify-content: center;">
	<div style="display: flex; flex-direction: column ;border: solid; justify-content: space-between; padding: 0.7vw; border-radius: 15px; min-width: {minWidth}; justify-content: {justifyContent};">
		<slot></slot>
	</div>
</div>
