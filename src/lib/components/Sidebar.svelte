<script>
	import Box from "./core/Box.svelte";
	import Button from "./core/Button.svelte";


</script>


<style>
    a{
        border: solid; 
        border-radius: 15px;
        /* width: 80%; */
        margin: 2%;
        display: flex;
        align-items: center;
        justify-content: center;
        /* text-align: center; */
        /* align-items: center; */
        /* justify-items: center; */
        height: 50px;
        width: auto;
        color: black;
        /* display: flex; */
    }
    .tombolsidebar{
        /* text-align: center; */
        display: flex;
        align-items: center;
        justify-content: center;
        /* justify-content: center; */
        /* justify-self: center; */
    }
</style>

<!-- <div style="width: 20%; border: solid; border-radius: 15px;"> -->
    <div style="flex-direction: row; width: 20%; border: solid; border-radius: 12px; margin: 1%;">
        <h2 style="margin-left: 10%;">Halo User</h2>
        <div style="display: flex; justify-content: center; flex-direction: column;  padding-left: 5%; padding-right: 5%;">
            <a href="/" style="border: solid; border-radius: 15px;">
                <h5 class="">Home</h5>
            </a>
            <a href="">
                <h5>Profile</h5>
            </a>
        </div>
    </div>    
    
<!-- </div> -->