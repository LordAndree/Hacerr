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
        text-align: center;
        justify-content: center;
    }
</style>

<!-- <div style="width: 20%; border: solid; border-radius: 15px;"> -->
    <div style="flex-direction: row; width: 20%; border: solid; border-radius: 12px; margin: 1%;">
        <h2 style="margin-left: 10%;">Halo User</h2>
        <div style="display: flex; justify-content: center; flex-direction: column;  padding-left: 20%; padding-right: 20%;">
            <a href="/" style="border: solid; border-radius: 15px;">Home</a>
            <a href="">Profile</a>
        </div>
    </div>    
    
<!-- </div> -->