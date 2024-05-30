<script lang="ts">
    import '../../css/style.css';
    // import addicon from '$lib/images/ADD ICON.png';
    export let href: string;
	export let alias: string;
    export let onclick = () => {};

</script>


<div style="display: flex; justify-content: end;">
    <div style="background-color: #E2E7FA;border: solid; border-radius: 80%; padding: 2%; margin: 1%;">
        <a {href} on:click={onclick}>{alias}
            <!-- <img src={addicon} alt="addicon"> -->
        </a>
    </div>
</div>