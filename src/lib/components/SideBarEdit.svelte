<script lang="ts">
	import Box from './core/Box.svelte';
	import Button from './core/Button.svelte';
	import titleicon from '$lib/images/icons8-title-48.png';
	import dateicon from '$lib/images/icons8-date-48.png';
    import descicon from '$lib/images/icons8-bullet-list-48.png';
    import categoryicon from '$lib/images/icons8-category-48.png';

	import '../css/style.css';
</script>

<Box minWidth="10%">
	<div style="display: flex; justify-content: space-between; flex-direction: column;">
		<div style="display: flex; flex-direction: column;">
			<div style="display: flex; justify-content: center;">
				<h1>Hello sir</h1>
			</div>
			<Button alias="Date" href="/edittask" width="10vw">
				<div style="display: flex; align-items: center;">
					<img class="iconimg" src={dateicon} alt="date icon">
				</div>
			</Button>
			<Button alias="Title" href="/edittitle" width="10vw">
				<div style="display: flex; align-items: center;">
					<img class="iconimg" src={titleicon} alt="title icon">
				</div>
			</Button>
            <Button alias="Description" href="/editdesc" width="10vw">
				<div style="display: flex; align-items: center;">
					<img class="iconimg" src={descicon} alt="descicon">
				</div>
			</Button>
			<Button alias="Category" href="/editcategory" width="10vw">
				<div style="display: flex; align-items: center;">
					<img class="iconimg" src={categoryicon} alt="categoryicon">
				</div>
			</Button>
		</div>
		<Button alias="sign out" href="/"></Button>
	</div>
</Box>
