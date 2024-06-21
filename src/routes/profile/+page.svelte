<script lang="ts">
	import BoxAdd from '$lib/components/BoxAdd.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
	import ButtonAdd from '$lib/components/core/ButtonAdd.svelte';
	import Container from '$lib/components/core/Container.svelte';
	import edit from '$lib/images/icons8-edit-48.png';
	import Button from '$lib/components/core/Button.svelte';
	import '../../lib/css/style.css';
	import ButtonSaveProfile from '$lib/components/core/ButtonSaveProfile.svelte';


</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBar active='profileButton'></SideBar>
			<span style="padding: 0.5vw;"></span>
			<Box>
				<div style="display: flex; flex-direction: column; width: 1000px;">
					<div style="display: flex; justify-content: flex-start;">
						<h1>Create Your New Task</h1>
					</div>
					<div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
							<BoxAdd>
								<div style="display: flex; justify-content: space-between;">
									<h2>Name</h2>
									<div style="display: flex; align-items: center; margin-right: 1%;">
										<img class="iconimg" src={edit} alt="edit">
									</div>
								</div>
								<div style="justify-content: start;">
									<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
									<input type="text" id="name" style="height: 30px;" placeholder="Sir">
								</div>
							</BoxAdd>
							<BoxAdd>
								<div style="display: flex; justify-content: space-between;">
									<h2>Password</h2>
									<div style="display: flex; align-items: center; margin-right: 1%;">
										<img class="iconimg" src={edit} alt="edit">
									</div>
								</div>
								<div style="justify-content: start;">
									<hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
									<input type="password" id="password" placeholder="****">
								</div>
							</BoxAdd>
							<ButtonSaveProfile alias="" href="/dashboard"></ButtonSaveProfile>
						</div>        
				</div>
			</Box>
		</div>
	</div>
</Container>
