<script lang="ts">
    export let height : string | undefined = '525px';
</script>

<style>
    .box {
        width: 660px;
        background-color: #E2E7FA; /* Ubah sesuai kebutuhan */
        border-radius: 10px;
        box-sizing: border-box;
        padding: 20px; /* Tambahkan padding agar konten tidak menempel ke tepi */
    }
</style>

<div class="box" style="height: {height};">
    <slot></slot>
</div>
