<script>
	import Container from "$lib/components/core/Container.svelte";
    import SideBar from '$lib/components/SideBar.svelte';
    import TaskList from '$lib/components/TaskList.svelte';
    import Box from '$lib/components/core/Box.svelte';
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBar></SideBar>
			<span style="padding: 0.5vw;">
                <Box>
                    <div style="display: flex; flex-direction: column;">
                        <div style="display: flex; justify-content: flex-start;">
                            <h1>You have todo...</h1>
                        </div>
                        <div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
                                <h1>lwjkhdrlas</h1>
                                <h1>jashdfgasjhdg</h1>
                        </div>        
                    </div>
                </Box>
            </span>
		</div>
	</div>
</Container>
