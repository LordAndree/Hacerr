<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
	import homeicon from '$lib/images/icons8-home-48.png';
	import profileicon from '$lib/images/icons8-user-48.png';
    // import Box from './core/Box.svelte';
	// import Button from './core/Button.svelte';
	import titleicon from '$lib/images/icons8-title-48.png';
	import dateicon from '$lib/images/icons8-date-48.png';
    import descicon from '$lib/images/icons8-bullet-list-48.png';
    import categoryicon from '$lib/images/icons8-category-48.png';

	// import '../css/style.css';

	import '../css/style.css';

	export let active = 'homeButton';


	export let name = "";

	
</script>

<Box minWidth="10%">
	<div style="display: flex; justify-content: space-between; flex-direction: column;">
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; justify-content: center;">
				<h2><b>Hello {name}</b></h2>
			</div>
            <slot></slot>
		</div>
		<div style="display: flex; justify-content: center;">

			<Button width="10vw" alias="Sign Out" href="/signin"></Button>
		</div>
	</div>
</Box>
