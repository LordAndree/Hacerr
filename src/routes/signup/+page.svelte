<script>
	import Nav from '$lib/components/Nav.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import FormInput from '$lib/components/FormInput.svelte';
	import img from '$lib/images/form.jpg';
	import Container from '$lib/components/core/Container.svelte';

	let uname = '';
	let passwd = '';
	let name = '';

	let body = {
		uname: '',
		passwd: '',
		name: ''
	}

	let endpoint = "http://127.0.0.1:8888/user/signup";

	// todo data post to api
	async function gass() {
		const res = await fetch(endpoint, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
		console.log(await res.json());

		if (res.status === 201) {
			// localStorage.setItem('key', await res.json());
			window.location.href = '/signin';
		} else {
			window.location.href = '/signup';
		}
	}
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
        <Nav></Nav>
		<span style="padding: 1vh;"></span>
        <Box minWidth='81%'>
            <div style="display: flex; margin: 5vw;">
                <img style="max-width: 20vw; max-height: 20vw; height: auto; width: auto;" alt="do" src={img} />
                <div style="margin-left: 3vw;"></div>
                <Box>
                    <div style="display: flex; flex-direction: column;">
                        <h1 style="margin-top: 0;">sign up...</h1>
                        <FormInput bind:bind={body.name} id="name" label="name"></FormInput>
                        <FormInput bind:bind={body.uname} id="uname" label="username"></FormInput>
                        <FormInput bind:bind={body.passwd} id="passwd" label="password"></FormInput>
                        <div style="display: flex; justify-content: end;">
                            <button
                                style="display: flex; border: solid; border-radius: 15px; min-width: 4vw; min-height: 2vw; margin: 0; justify-content: center; align-items: center;"
                                on:click={gass}>sign up</button
                            >
                        </div>
                    </div>
                </Box>
            </div>
        </Box>
    </div>
    
</Container>
