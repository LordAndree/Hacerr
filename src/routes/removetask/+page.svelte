<script lang="ts">
    import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import BoxAdd from "$lib/components/BoxAdd.svelte";
	import Box from "$lib/components/core/Box.svelte";
    
	let taskId: string = '';
    // Mengambil task ID dari URL
    onMount(() => {
        taskId = get(page).params.id;
        console.log('Loaded taskId:', taskId); // Debugging line
    });
    
	// Fungsi untuk navigasi ke halaman lain
	function navigateTo(path: string): void {
		goto(path);
	}

	// Fungsi untuk menghapus task
	const removeTask = async () => {
		const key = localStorage.getItem('key');
		if (!key) {
			console.error('Authorization key is missing');
			return;
		}

		if (!taskId) {
			console.error('Task ID is missing');
			return;
		}

		try {
			const response = await fetch('http://127.0.0.1:8888/checklist/remove', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Basic ${key}`
				},
				body: JSON.stringify({ id: taskId })
			});

			if (!response.ok) {
				const error = await response.json();
				console.error('Failed to remove task', error);
				return;
			}

			const result = await response.json();
			console.log('Task removed successfully', result);
			goto('/dashboard'); // Redirect to dashboard after successful removal
		} catch (error) {
			console.error('Error removing task', error);
		}
	};

</script>

<style>
	button {
		border: solid;
		border-width: 3px;
		width: 200px;
		height: 50px;
		border-radius: 12px;
	}
	.button-danger {
		background-color: red;
	}
</style>

<BoxAdd>
	<h1>Are you sure want to remove the task?</h1>
	<div style="display: flex; justify-content: space-between;">
		<div style="justify-content: end; align-content: end; margin-top: 2%;">
			<button class="button" on:click={() => navigateTo("/dashboard")}>Cancel</button>
			<button class="button-danger" on:click={removeTask}>Remove</button>
		</div>
	</div>
</BoxAdd>
