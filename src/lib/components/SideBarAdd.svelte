<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
	import titleicon from '$lib/images/ICON TITLE.png';
	import dateicon from '$lib/images/ICON DATE.png';
    import descicon from '$lib/images/ICON DESCRIPTION.png';
    import categoryicon from '$lib/images/ICON CATEGORY.png';

	import '../css/style.css';
</script>

<Box minWidth="10%">
	<div style="display: flex; justify-content: space-between; flex-direction: column;">
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; justify-content: center;">
				<h1>Hello sir</h1>
			</div>
			<Button alias="Date" href="/addtask" width="10vw">
				<img class="iconimg" src={dateicon} alt="date icon">
			</Button>
			<Button alias="Title" href="/addtitle" width="10vw">
				<img class="iconimg" src={titleicon} alt="title icon">
			</Button>
            <Button alias="Description" href="/adddesc" width="10vw">
				<img class="iconimg" src={descicon} alt="descicon">
			</Button>
			<Button alias="Category" href="/addcategory" width="10vw">
				<img class="iconimg" src={categoryicon} alt="categoryicon">
			</Button>
		</div>
		<Button alias="sign out" href="/"></Button>
	</div>
</Box>
