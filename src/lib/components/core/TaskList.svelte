<script>
    import TaskCard from '$lib/components/core/TaskCard.svelte';
    let tasks = [
        { title: 'Makan Siang', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni odio nesciunt pariatur doloribus rerum, ad sapiente eveniet, voluptatibus assumenda beatae asperiores eligendi quo tempora quas eum? Minima, quis ratione.' },
        { title: 'Makan Malam', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni odio nesciunt pariatur doloribus rerum, ad sapiente eveniet, voluptatibus assumenda beatae asperiores eligendi quo tempora quas eum? Minima, quis ratione.' },
        { title: 'Tidur', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni odio nesciunt pariatur doloribus rerum, ad sapiente eveniet, voluptatibus assumenda beatae asperiores eligendi quo tempora quas eum? Minima, quis ratione.' }
    ];
</script>


<style>
    .container3{
        width: 75%;
        height: fit-content;
        background-color: white;
        border-radius: 2%;
        padding: 1%;
        margin: 1%;
        /* border: solid; */
        /* margin: 1%; */
    }
    
</style>

<div class="container3">
    <h3>Today's Schedule</h3>
    {#each tasks as task}
        <TaskCard {task} />
    {/each}
</div>

