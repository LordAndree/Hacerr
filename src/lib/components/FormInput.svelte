<script lang="ts">
	export let label: string;
	export let id: string;
	export let bind: any;
</script>

<div style="display: flex; justify-content: end; flex-direction: column; padding-bottom: 1vw;">
	<label style="font-size: 1vw;" for={id}>{label}</label>
	<input
		style="max-width: 20vw; width: 20vw; height: 1.5vw; border-radius: 12px;"
		type="text"
		name={id}
		{id}
		bind:value={bind}
	/>
</div>
