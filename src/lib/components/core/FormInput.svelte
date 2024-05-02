<script>
	export let label;
	export let id;
	/**
	 * @type {any}
	 */
	export let bind;
</script>

<div style="display: flex; justify-content: end; flex-direction: column; padding-bottom: 1vw;">
	<label style="font-size: 1vw;" for={id}>{label}</label>
	<input
		style="max-width: 20vw; width: 20vw; height: 1.5vw;"
		type="text"
		name={id}
		{id}
		bind:value={bind}
	/>
</div>
