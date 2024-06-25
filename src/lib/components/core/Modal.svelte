<!-- Modal.svelte -->
<script lang="ts">
	export let showModal: boolean;
	export let title: string;
	export let message: string;
	export let onConfirm: () => void;
	export let onCancel: () => void;
</script>

{#if showModal}
	<div class="modal-overlay">
		<div class="modal">
			<h2>{title}</h2>
			<p>{message}</p>
			<div class="modal-buttons">
				<button on:click={onCancel}>Cancel</button>
				<button class="confirm-button" on:click={onConfirm}>Confirm</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: white;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.modal-buttons {
		display: flex;
		justify-content: space-around;
		margin-top: 20px;
	}

	.confirm-button {
		background-color: red;
		color: white;
	}
</style>
