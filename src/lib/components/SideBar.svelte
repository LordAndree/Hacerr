<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
	import homeicon from '$lib/images/icons8-home-48.png';
	import profileicon from '$lib/images/icons8-user-48.png';

	import '../css/style.css';

	export let active = 'homeButton';
	
</script>

<Box minWidth="10%">
	<div style="display: flex; justify-content: space-between; flex-direction: column;">
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; justify-content: center;">
				<h1>Hello sir</h1>
			</div>
			<Button alias="home" href="/dashboard" width="10vw" backgroundColor={active === 'homeButton' ? '#FEE2BB' : '#D7DFF4'}>
				<div style="display: flex; align-items: center;">
					<img class="iconimg" src={homeicon} alt="homeicon">
				</div>
			</Button>
			<Button alias="profile" href="/profile" width="10vw" backgroundColor={active === 'profileButton' ? '#FEE2BB' : '#D7DFF4'}>
				<div style="display: flex; align-items: center;">
					<img class="iconimg" src={profileicon} alt="profileicon">
				</div>
			</Button>
		</div>
		<Button alias="sign out" href="/"></Button>
	</div>
</Box>
