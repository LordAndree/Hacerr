<script>
    /**
     * @type{string}
     */
	export let href;
    /**
     * @type{string}
     */
	export let alias;
    /**
     * @type{string | undefined}
     */
    export let width = "5vw";
    /**
     * @type{any | undefined}
     */
	export let onclick = ()  => {};
</script>

<div style="display: flex; justify-content: center;">
	<a
		style="display: flex; border: solid; border-radius: 15px; min-width: 5vw; min-height: 2vw; margin: 0.2vw; justify-content: center; align-items: center; width: {width};"
		{href} on:click={onclick}>{alias}</a
	>
</div>