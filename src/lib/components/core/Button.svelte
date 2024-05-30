<script lang="ts">
	export let href: string;
	export let alias: string;
	export let width = '5vw';
	export let onclick = () => {};
</script>

<style>
	.icon{
		display: flex;
		justify-self: start;
		height: auto;
		width: 10px;
	}
</style>

<div style="display: flex; justify-content: center; border: solid; border-radius: 15px; margin: 3%;">
	<div class="icon">
		<slot></slot>
	</div>
	<div style="display: flex; min-width: 5vw; min-height: 2vw; margin: 0.2vw; justify-content: center; align-items: center; width: {width};">
		<a {href} on:click={onclick}>{alias}</a>
	</div>
</div>
