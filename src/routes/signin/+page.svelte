<script>
	import Nav from '$lib/components/Nav.svelte';
	import NavTest from '$lib/components/NavTest.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import FormInput from '$lib/components/core/FormInput.svelte';
	import img from '$lib/images/form.jpg';

	let uname = '';
	let passwd = '';

	// todo data post to api
	function gass() {
		console.log(uname);
	}
</script>

<Nav></Nav>
<Box>
	<div style="display: flex; margin: 5vw;">
		<img style="max-width: 20vw; max-height: 20vw; height: auto; width: auto;" alt="do" src={img} />
		<div style="margin-left: 3vw;"></div>
		<Box>
			<div style="display: flex; flex-direction: column;">
				<h1 style="margin-top: 0;">sign in...</h1>
				<FormInput bind:bind={uname} id="uname" label="username"></FormInput>
				<FormInput bind:bind={passwd} id="passwd" label="password"></FormInput>
				<div style="display: flex; justify-content: end;">
					<button
						style="display: flex; border: solid; border-radius: 15px; min-width: 4vw; min-height: 2vw; margin: 0; justify-content: center; align-items: center;"
						on:click={gass}>sign in</button
					>
				</div>
			</div>
		</Box>
	</div>
</Box>
<NavTest></NavTest>
