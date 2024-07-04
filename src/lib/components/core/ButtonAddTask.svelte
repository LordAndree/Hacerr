<script lang="ts">
	// export let href: string | undefined = '';
	export let alias: string;
	export let width = '5vw';
	export let backgroundColor: string | undefined = '#D7DFF4';
	export let id: string = '';
	let onclick = () => {};
</script>

<style>
	.icon{
		display: flex;
		justify-self: start;
		height: auto;
		width: 10px;
	}
</style>

<button style="border: none; background-color: transparent;" on:click={onclick}>
	<div id={id} style="display: flex; justify-content: center; border: solid; border-radius: 15px; margin: 3%;  background-color: {backgroundColor};">
		<div class="icon">
			<slot></slot>
		</div>
		<div style="display: flex; min-width: 5vw; min-height: 2vw; margin: 0.2vw; justify-content: center; align-items: center; width: {width};">
			<!-- <a href="{href}">{alias}</a> -->
		</div>
	</div>
</button>
