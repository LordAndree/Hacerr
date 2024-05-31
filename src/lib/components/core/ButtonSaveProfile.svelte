<script lang="ts">
    import '../../css/style.css';
    import saveicon from '$lib/images/icons8-tick-48.png';
    export let href: string;
	export let alias: string;
    export let onclick = () => {};
    export let minHeight: string | undefined = '80%';

</script>


<div style="display: flex; justify-content: end; align-items: end; min-height: {minHeight};">
    <div style="background-color: #E2E7FA;border: solid; border-radius: 80%; padding: 1%; margin: 1%;">
        <a style="display: flex; justify-content: center; padding-right: 3px;" {href} on:click={onclick}>{alias}
            <img class="iconimg" src={saveicon} alt="saveicon">
        </a>
    </div>
</div>