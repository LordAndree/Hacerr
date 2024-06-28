<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
</script>

<Box minWidth="81%">
	<div style="display: flex; justify-content: space-between; width: 90%;">
		<a href="/dashboard"><h2>Hacer!</h2></a>
		<div style="display: flex; justify-content: center; align-items: center;">
			<Button href="/about" alias="about"></Button>
			<Button href="/signin" alias="sign in"></Button>
			<Button href="/" alias="sign up"></Button>
		</div>
	</div>
</Box>
