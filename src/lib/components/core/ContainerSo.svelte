<script>
    export let name = "Container 1";
</script>

<style>
    .custom-container {
        width: 1085px;
        height: 630px;
        background-color: #ffffff;
        border: 1px solid #ccc;
        border-radius: 10px;
        display: flex;
        justify-content: flex-end; /* Untuk mengatur posisi box di sebelah kanan */
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    }
</style>

<div class="custom-container">
    <slot></slot>
</div>
