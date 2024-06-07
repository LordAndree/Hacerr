<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();
  
    function closeModal(): void {
      dispatch('close');
    }
</script>

<div class="modal">
    <div class="modal-content">
      <span class="close-button" on:click={closeModal}>&times;</span>
      <!-- Konten modal Anda di sini -->
    </div>
  </div>