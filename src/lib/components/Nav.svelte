<script>
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
</script>

<Box>
	<div style="display: flex; padding-left: 2vw; align-items: center;">
		<a href="/"><h2>Hacer!</h2></a>
	</div>
	<div style="padding-left: 34vw;"></div>
	<div style="display: flex; justify-content: center;">
		<Button href="/about" alias="about"></Button>
		<Button href="/signin" alias="sign in"></Button>
		<Button href="/signup" alias="sign up"></Button>
	</div>
</Box>
