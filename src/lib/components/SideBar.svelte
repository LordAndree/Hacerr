<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
	import homeicon from '$lib/images/HOME ICON.png';
	// import profileicon from '$lib/images/PROFILE ICON.png';

	import '../css/style.css';
</script>

<Box minWidth="10%">
	<div style="display: flex; justify-content: space-between; flex-direction: column;">
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; justify-content: center;">
				<h1>Hello sir</h1>
			</div>
			<Button alias="home" href="/dashboard" width="10vw">
				<img class="iconimg" src={homeicon} alt="homeicon">
			</Button>
			<Button alias="profile" href="/profile" width="10vw">
				<!-- <img class="iconimg" src={profileicon} alt="profileicon"> -->
			</Button>
		</div>
		<Button alias="sign out" href="/"></Button>
	</div>
</Box>
