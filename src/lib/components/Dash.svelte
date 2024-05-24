<script>
	import Box from "./core/Box.svelte";

    

</script>

<Box>
    <!-- Box kiri (home & profile) -->
    <Box>
        <slot></slot>
    </Box>
    <!-- Box kanan (Isi todo list) -->
    <Box>
        <slot></slot>
    </Box>
    <slot></slot>
</Box>