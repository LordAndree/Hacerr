<script>
	import Container from "$lib/components/core/Container.svelte";
    import SideBar from '$lib/components/SideBar.svelte';
    import TaskList from '$lib/components/TaskList.svelte';
    import Box from '$lib/components/core/Box.svelte';
	import SideBarAdd from "$lib/components/SideBarAdd.svelte";
	import BoxAdd from "$lib/components/BoxAdd.svelte";
	import ButtonAdd from "$lib/components/core/ButtonAdd.svelte";
	import SideBarEdit from "$lib/components/SideBarEdit.svelte";
</script>

<Container>
	<div style="display: flex; flex-direction: column;">
		<span style="padding: 1vh;"></span>
		<div style="display: flex; flex-direction: row; justify-content: center;">
			<SideBarEdit></SideBarEdit>
			<span style="padding: 0.5vw;">
                <Box>
                    <div style="display: flex; flex-direction: column; width: 1000px;">
                        <div style="display: flex; justify-content: flex-start;">
                            <h1>Edit Your Task</h1>
                        </div>
                        <div style="display: flex; flex-direction: column; overflow-y: scroll; height: 70vh;">
                                <BoxAdd>
                                    <h2>Edit Date</h2>
                                    <div style="justify-content: start;">
                                        <hr style="background-color: black; color: black; height: 2px; border-width: 2px;">
                                        <input type="datetime-local" id="taskdate">
                                    </div>
                                </BoxAdd>
                                <!-- <ButtonAdd></ButtonAdd> -->
                        </div>        
                    </div>
                </Box>
            </span>
		</div>
	</div>
</Container>
