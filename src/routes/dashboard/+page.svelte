<script>
	import Task from '$lib/components/Task.svelte';
	import Box from '$lib/components/core/Box.svelte';
	import Button from '$lib/components/core/Button.svelte';

    let tgl = new Date().toDateString();

    // delete key to api
    function signout() {
        // console.log("signout")
        localStorage.removeItem('key');
        window.location.href = "/";
    }
</script>

<Box>
    <div style="margin: 0vw 20vw 0vw 20vw;">
        <div style="padding: 1.15vw 0 1.15vw 0;">
            <a style="font-size: 1vw;" href="/dashboard">HACER!</a>
        </div>
    </div>
</Box>
<Box>
    <div style="display: flex; flex-direction: row;">
        <Box>
            <div style="display: flex; flex-direction: column; justify-content: space-between;">
                <div style="display: flex; flex-direction: column;">
                    <Button width="10vw" href='/dashboard' alias='Home'></Button>
                    <Button width="10vw" href='/#' alias='Profile'></Button>
                </div>
                <div style="display: flex; align-self: flex-end;">
                    <Button alias="sign out" href="/" width="10vw" onclick={signout}></Button>
                </div>
            </div>
        </Box>
        <Box>
            <div style="display: flex; flex-direction: column;">
                <Box>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <p style="margin: 0; font-size: 1vw;">Today schedules</p>
                        <div style="padding-right: 34vw;"></div>
                        <Button alias="filter" href="#"></Button>
                    </div>
                </Box>
                <div style="display: flex; padding-top: 1vw;">
                    <Box>
                        <div style="overflow-y: auto; height: 30vw; overflow-x: hidden;">
                            <div style="display: flex; align-items: start; flex-direction: column;">
                                <Task tgl={tgl}></Task>
                                <Task tgl={tgl}></Task>
                                <Task tgl={tgl}></Task>
                                <Task tgl={tgl}></Task>
                                <Task tgl={tgl}></Task>
                                <Task tgl={tgl}></Task>
                            </div>
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    </div>
</Box>


