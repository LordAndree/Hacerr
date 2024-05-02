<script>
	export let href;
	export let alias;
    export let width = "5vw";
</script>

<div style="display: flex; justify-content: center;">
	<a
		style="display: flex; border: solid; border-radius: 15px; min-width: 5vw; min-height: 2vw; margin: 0.2vw; justify-content: center; align-items: center; width: {width};"
		{href}>{alias}</a
	>
</div>
