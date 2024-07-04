<script lang="ts">
	import BoxAdd from '$lib/components/BoxAdd.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import ButtonAdd from '$lib/components/core/ButtonAdd.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import edit from '$lib/images/icons8-edit-48.png';
	import ButtonSaveProfile from '$lib/components/core/ButtonSaveProfile.svelte';
	import { onMount } from 'svelte';
	import SideBarTest from '$lib/components/SideBarTest.svelte';
	import homeicon from '$lib/images/icons8-home-48.png';
	import profileicon from '$lib/images/icons8-user-48.png';
	import Button from '$lib/components/core/Button.svelte';


	import '../../lib/css/style.css';

	export let active = 'profileButton';

	let user = { name: '', uname: '', passwd: '' };
	let isEditing = { name: false, passwd: false };
	const endPoint = "http://127.0.0.1:8888/user/profile";

	onMount(async () => {
		try {
			const key = localStorage.getItem('key');
			const response = await fetch(endPoint, {
				headers: {
					'Authorization': `Basic ${key}`
				}
			});

			if (!response.ok) {
				throw new Error(`Failed to fetch user data: ${response.status}`);
			}

			const result = await response.json();
			user = result.data; // Akses data user dari respons

		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	});

	const updateProfile = async () => {
		try {
			const key = localStorage.getItem('key');
			const response = await fetch(endPoint, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Basic ${key}`
				},
				body: JSON.stringify(user)
			});

			if (!response.ok) {
				throw new Error(`Failed to update profile: ${response.status}`);
			}

			const result = await response.json();
			console.log('Profile updated successfully', result);

			// Disable editing after save
			isEditing.name = false;
			isEditing.passwd = false;

		} catch (error) {
			console.error('Error updating profile:', error);
		}
	};
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<!-- <SideBar active='profileButton' name={user.name}></SideBar> -->
			 <SideBarTest name={user.name} active='profileButton'>
				<div style="display: flex; align-content: center; flex-direction: column;">
					<Button alias="Home" href="/dashboard" width="10vw" backgroundColor={active === 'homeButton' ? '#FEE2BB' : '#D7DFF4'}>
						<div style="display: flex; align-items: center;">
							<img class="iconimg" src={homeicon} alt="homeicon">
						</div>
					</Button>
					<Button alias="Profile" href="/profile" width="10vw" backgroundColor={active === 'profileButton' ? '#FEE2BB' : '#D7DFF4'}>
						<div style="display: flex; align-items: center;">
							<img class="iconimg" src={profileicon} alt="profileicon">
						</div>
					</Button>
				</div>
			 </SideBarTest>
			<span style="padding: 0.5vw;"></span>
			<Box>
				<div style="display: flex; flex-direction: column; width: 1000px;">
					<div style="display: flex; justify-content: flex-start;">
						<h1>Profile</h1>
					</div>
					<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
						<BoxAdd>
							<div style="display: flex; justify-content: space-between;">
								<h2>Name</h2>
								<div style="display: flex; align-items: center; margin-right: 1%;">
									<img class="iconimg" src={edit} alt="edit" on:click={() => isEditing.name = !isEditing.name}>
								</div>
							</div>
							<div style="justify-content: start;">
								<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
								{#if isEditing.name}
									<input type="text" bind:value={user.name} style="height: 30px;">
								{:else}
									<p>{user.name}</p>
								{/if}
							</div>
						</BoxAdd>
						<BoxAdd>
							<div style="display: flex; justify-content: space-between;">
								<h2>Password</h2>
								<div style="display: flex; align-items: center; margin-right: 1%;">
									<img class="iconimg" src={edit} alt="edit" on:click={() => isEditing.passwd = !isEditing.passwd}>
								</div>
							</div>
							<div style="justify-content: start;">
								<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
								{#if isEditing.passwd}
									<input type="password" bind:value={user.passwd}>
								{:else}
									<p>****</p>
								{/if}
							</div>
						</BoxAdd>
						<ButtonSaveProfile onclick={updateProfile} alias="" href="/profile"></ButtonSaveProfile>
					</div>        
				</div>
			</Box>
		</div>
	</div>
</Container>

<style>
	.iconimg {
		cursor: pointer;
		width: 20px;
		height: 20px;
	}
</style>
