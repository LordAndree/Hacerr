<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
</script>

<Box minWidth="10%">
	<div style="display: flex; justify-content: space-between; flex-direction: column;">
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; justify-content: center;">
				<h1>Hello sir</h1>
			</div>
			<Button alias="home" href="/dashboard" width="10vw"></Button>
			<Button alias="profile" href="/profile" width="10vw"></Button>
		</div>
		<Button alias="sign out" href="/"></Button>
	</div>
</Box>
