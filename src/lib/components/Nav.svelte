<script>
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
</script>

<!-- <div style="display: flex; justify-content: center;"> -->
    <Box minWidth='81%'>
        <div style="display: flex; justify-content: space-between; width: 90%;">
            <a href="/"><h2>Hacer!</h2></a>
            <div style="display: flex; justify-content: center; align-items: center;">
                <Button href="/about" alias="about"></Button>
                <Button href="/signin" alias="sign in"></Button>
                <Button href="/signup" alias="sign up"></Button>
            </div>
        </div>
        <!-- <div style="display: flex; padding-left: 0%; align-items: center;">
        </div> -->
        <!-- <div style="padding-left: 34vw;"></div> -->
    </Box>
<!-- </div> -->