<script lang="ts">
	import type { TaskObj } from "$lib";
    import Nav from "$lib/components/Nav.svelte";
	import SideBar from "$lib/components/SideBar.svelte";
	import Task from "$lib/components/Task.svelte";
	import TaskList from "$lib/components/TaskList.svelte";
	import Container from "$lib/components/core/Container.svelte";

    const data: TaskObj[] = [{
        date: new Date(),
        subject: 'anu',
        description: 'anu'
    }, {
        date: new Date(),
        subject: 'anu1',
        description: 'anu1'
    }, {
        date: new Date(),
        subject: 'anu1',
        description: 'anu1'
    }, {
        date: new Date(),
        subject: 'anu1',
        description: 'anu1'
    }, {
        date: new Date(),
        subject: 'anu1',
        description: 'anu1'
    }]
</script>


<Container>
    <div style="display: flex; flex-direction: column;">
        <Nav></Nav>
        <span style="padding: 1vh;"></span>
        <div style="display: flex; flex-direction: row; justify-content: center;">
            <SideBar></SideBar>
            <span style="padding: 0.5vw;"></span>
            <!-- <Task date={new Date()} description='anu' subject='makan bang'></Task> -->
            <TaskList data={data}></TaskList>
        </div>
    </div>
</Container>

